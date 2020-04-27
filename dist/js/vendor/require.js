/**
 * RequireJS
 *
 * RequireJS is a JavaScript file and module loader. It is optimized for in-browser use,
 * but it can be used in other JavaScript environments, like Rhino and Node. Using a modular script
 * loader like RequireJS will improve the speed and quality of your code.
 */

/* jshint ignore:start */
/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.3.6 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, https://github.com/requirejs/requirejs/blob/master/LICENSE
 */
//Not using strict: uneven strict support in browsers, #392, and causes
//problems with requirejs.exec()/transpiler plugins that may not be strict.
/*jslint regexp: true, nomen: true, sloppy: true */
/*global window, navigator, document, importScripts, setTimeout, opera */

var requirejs, require, define;
(function (global, setTimeout) {
    var req, s, head, baseElement, dataMain, src,
        interactiveScript, currentlyAddingScript, mainScript, subPath,
        version = '2.3.6',
        commentRegExp = /\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/mg,
        cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        jsSuffixRegExp = /\.js$/,
        currDirRegExp = /^\.\//,
        op = Object.prototype,
        ostring = op.toString,
        hasOwn = op.hasOwnProperty,
        isBrowser = !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document),
        isWebWorker = !isBrowser && typeof importScripts !== 'undefined',
        //PS3 indicates loaded and complete, but need to wait for complete
        //specifically. Sequence is 'loading', 'loaded', execution,
        // then 'complete'. The UA check is unfortunate, but not sure how
        //to feature test w/o causing perf issues.
        readyRegExp = isBrowser && navigator.platform === 'PLAYSTATION 3' ?
                      /^complete$/ : /^(complete|loaded)$/,
        defContextName = '_',
        //Oh the tragedy, detecting opera. See the usage of isOpera for reason.
        isOpera = typeof opera !== 'undefined' && opera.toString() === '[object Opera]',
        contexts = {},
        cfg = {},
        globalDefQueue = [],
        useInteractive = false;

    //Could match something like ')//comment', do not lose the prefix to comment.
    function commentReplace(match, singlePrefix) {
        return singlePrefix || '';
    }

    function isFunction(it) {
        return ostring.call(it) === '[object Function]';
    }

    function isArray(it) {
        return ostring.call(it) === '[object Array]';
    }

    /**
     * Helper function for iterating over an array. If the func returns
     * a true value, it will break out of the loop.
     */
    function each(ary, func) {
        if (ary) {
            var i;
            for (i = 0; i < ary.length; i += 1) {
                if (ary[i] && func(ary[i], i, ary)) {
                    break;
                }
            }
        }
    }

    /**
     * Helper function for iterating over an array backwards. If the func
     * returns a true value, it will break out of the loop.
     */
    function eachReverse(ary, func) {
        if (ary) {
            var i;
            for (i = ary.length - 1; i > -1; i -= 1) {
                if (ary[i] && func(ary[i], i, ary)) {
                    break;
                }
            }
        }
    }

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    function getOwn(obj, prop) {
        return hasProp(obj, prop) && obj[prop];
    }

    /**
     * Cycles over properties in an object and calls a function for each
     * property value. If the function returns a truthy value, then the
     * iteration is stopped.
     */
    function eachProp(obj, func) {
        var prop;
        for (prop in obj) {
            if (hasProp(obj, prop)) {
                if (func(obj[prop], prop)) {
                    break;
                }
            }
        }
    }

    /**
     * Simple function to mix in properties from source into target,
     * but only if target does not already have a property of the same name.
     */
    function mixin(target, source, force, deepStringMixin) {
        if (source) {
            eachProp(source, function (value, prop) {
                if (force || !hasProp(target, prop)) {
                    if (deepStringMixin && typeof value === 'object' && value &&
                        !isArray(value) && !isFunction(value) &&
                        !(value instanceof RegExp)) {

                        if (!target[prop]) {
                            target[prop] = {};
                        }
                        mixin(target[prop], value, force, deepStringMixin);
                    } else {
                        target[prop] = value;
                    }
                }
            });
        }
        return target;
    }

    //Similar to Function.prototype.bind, but the 'this' object is specified
    //first, since it is easier to read/figure out what 'this' will be.
    function bind(obj, fn) {
        return function () {
            return fn.apply(obj, arguments);
        };
    }

    function scripts() {
        return document.getElementsByTagName('script');
    }

    function defaultOnError(err) {
        throw err;
    }

    //Allow getting a global that is expressed in
    //dot notation, like 'a.b.c'.
    function getGlobal(value) {
        if (!value) {
            return value;
        }
        var g = global;
        each(value.split('.'), function (part) {
            g = g[part];
        });
        return g;
    }

    /**
     * Constructs an error with a pointer to an URL with more information.
     * @param {String} id the error ID that maps to an ID on a web page.
     * @param {String} message human readable error.
     * @param {Error} [err] the original error, if there is one.
     *
     * @returns {Error}
     */
    function makeError(id, msg, err, requireModules) {
        var e = new Error(msg + '\nhttps://requirejs.org/docs/errors.html#' + id);
        e.requireType = id;
        e.requireModules = requireModules;
        if (err) {
            e.originalError = err;
        }
        return e;
    }

    if (typeof define !== 'undefined') {
        //If a define is already in play via another AMD loader,
        //do not overwrite.
        return;
    }

    if (typeof requirejs !== 'undefined') {
        if (isFunction(requirejs)) {
            //Do not overwrite an existing requirejs instance.
            return;
        }
        cfg = requirejs;
        requirejs = undefined;
    }

    //Allow for a require config object
    if (typeof require !== 'undefined' && !isFunction(require)) {
        //assume it is a config object.
        cfg = require;
        require = undefined;
    }

    function newContext(contextName) {
        var inCheckLoaded, Module, context, handlers,
            checkLoadedTimeoutId,
            config = {
                //Defaults. Do not set a default for map
                //config to speed up normalize(), which
                //will run faster if there is no default.
                waitSeconds: 7,
                baseUrl: './',
                paths: {},
                bundles: {},
                pkgs: {},
                shim: {},
                config: {}
            },
            registry = {},
            //registry of just enabled modules, to speed
            //cycle breaking code when lots of modules
            //are registered, but not activated.
            enabledRegistry = {},
            undefEvents = {},
            defQueue = [],
            defined = {},
            urlFetched = {},
            bundlesMap = {},
            requireCounter = 1,
            unnormalizedCounter = 1;

        /**
         * Trims the . and .. from an array of path segments.
         * It will keep a leading path segment if a .. will become
         * the first path segment, to help with module name lookups,
         * which act like paths, but can be remapped. But the end result,
         * all paths that use this function should look normalized.
         * NOTE: this method MODIFIES the input array.
         * @param {Array} ary the array of path segments.
         */
        function trimDots(ary) {
            var i, part;
            for (i = 0; i < ary.length; i++) {
                part = ary[i];
                if (part === '.') {
                    ary.splice(i, 1);
                    i -= 1;
                } else if (part === '..') {
                    // If at the start, or previous value is still ..,
                    // keep them so that when converted to a path it may
                    // still work when converted to a path, even though
                    // as an ID it is less than ideal. In larger point
                    // releases, may be better to just kick out an error.
                    if (i === 0 || (i === 1 && ary[2] === '..') || ary[i - 1] === '..') {
                        continue;
                    } else if (i > 0) {
                        ary.splice(i - 1, 2);
                        i -= 2;
                    }
                }
            }
        }

        /**
         * Given a relative module name, like ./something, normalize it to
         * a real name that can be mapped to a path.
         * @param {String} name the relative name
         * @param {String} baseName a real name that the name arg is relative
         * to.
         * @param {Boolean} applyMap apply the map config to the value. Should
         * only be done if this normalization is for a dependency ID.
         * @returns {String} normalized name
         */
        function normalize(name, baseName, applyMap) {
            var pkgMain, mapValue, nameParts, i, j, nameSegment, lastIndex,
                foundMap, foundI, foundStarMap, starI, normalizedBaseParts,
                baseParts = (baseName && baseName.split('/')),
                map = config.map,
                starMap = map && map['*'];

            //Adjust any relative paths.
            if (name) {
                name = name.split('/');
                lastIndex = name.length - 1;

                // If wanting node ID compatibility, strip .js from end
                // of IDs. Have to do this here, and not in nameToUrl
                // because node allows either .js or non .js to map
                // to same file.
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                }

                // Starts with a '.' so need the baseName
                if (name[0].charAt(0) === '.' && baseParts) {
                    //Convert baseName to array, and lop off the last part,
                    //so that . matches that 'directory' and not name of the baseName's
                    //module. For instance, baseName of 'one/two/three', maps to
                    //'one/two/three.js', but we want the directory, 'one/two' for
                    //this normalization.
                    normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                    name = normalizedBaseParts.concat(name);
                }

                trimDots(name);
                name = name.join('/');
            }

            //Apply map config if available.
            if (applyMap && map && (baseParts || starMap)) {
                nameParts = name.split('/');

                outerLoop: for (i = nameParts.length; i > 0; i -= 1) {
                    nameSegment = nameParts.slice(0, i).join('/');

                    if (baseParts) {
                        //Find the longest baseName segment match in the config.
                        //So, do joins on the biggest to smallest lengths of baseParts.
                        for (j = baseParts.length; j > 0; j -= 1) {
                            mapValue = getOwn(map, baseParts.slice(0, j).join('/'));

                            //baseName segment has config, find if it has one for
                            //this name.
                            if (mapValue) {
                                mapValue = getOwn(mapValue, nameSegment);
                                if (mapValue) {
                                    //Match, update name to the new value.
                                    foundMap = mapValue;
                                    foundI = i;
                                    break outerLoop;
                                }
                            }
                        }
                    }

                    //Check for a star map match, but just hold on to it,
                    //if there is a shorter segment match later in a matching
                    //config, then favor over this star map.
                    if (!foundStarMap && starMap && getOwn(starMap, nameSegment)) {
                        foundStarMap = getOwn(starMap, nameSegment);
                        starI = i;
                    }
                }

                if (!foundMap && foundStarMap) {
                    foundMap = foundStarMap;
                    foundI = starI;
                }

                if (foundMap) {
                    nameParts.splice(0, foundI, foundMap);
                    name = nameParts.join('/');
                }
            }

            // If the name points to a package's name, use
            // the package main instead.
            pkgMain = getOwn(config.pkgs, name);

            return pkgMain ? pkgMain : name;
        }

        function removeScript(name) {
            if (isBrowser) {
                each(scripts(), function (scriptNode) {
                    if (scriptNode.getAttribute('data-requiremodule') === name &&
                            scriptNode.getAttribute('data-requirecontext') === context.contextName) {
                        scriptNode.parentNode.removeChild(scriptNode);
                        return true;
                    }
                });
            }
        }

        function hasPathFallback(id) {
            var pathConfig = getOwn(config.paths, id);
            if (pathConfig && isArray(pathConfig) && pathConfig.length > 1) {
                //Pop off the first array value, since it failed, and
                //retry
                pathConfig.shift();
                context.require.undef(id);

                //Custom require that does not do map translation, since
                //ID is "absolute", already mapped/resolved.
                context.makeRequire(null, {
                    skipMap: true
                })([id]);

                return true;
            }
        }

        //Turns a plugin!resource to [plugin, resource]
        //with the plugin being undefined if the name
        //did not have a plugin prefix.
        function splitPrefix(name) {
            var prefix,
                index = name ? name.indexOf('!') : -1;
            if (index > -1) {
                prefix = name.substring(0, index);
                name = name.substring(index + 1, name.length);
            }
            return [prefix, name];
        }

        /**
         * Creates a module mapping that includes plugin prefix, module
         * name, and path. If parentModuleMap is provided it will
         * also normalize the name via require.normalize()
         *
         * @param {String} name the module name
         * @param {String} [parentModuleMap] parent module map
         * for the module name, used to resolve relative names.
         * @param {Boolean} isNormalized: is the ID already normalized.
         * This is true if this call is done for a define() module ID.
         * @param {Boolean} applyMap: apply the map config to the ID.
         * Should only be true if this map is for a dependency.
         *
         * @returns {Object}
         */
        function makeModuleMap(name, parentModuleMap, isNormalized, applyMap) {
            var url, pluginModule, suffix, nameParts,
                prefix = null,
                parentName = parentModuleMap ? parentModuleMap.name : null,
                originalName = name,
                isDefine = true,
                normalizedName = '';

            //If no name, then it means it is a require call, generate an
            //internal name.
            if (!name) {
                isDefine = false;
                name = '_@r' + (requireCounter += 1);
            }

            nameParts = splitPrefix(name);
            prefix = nameParts[0];
            name = nameParts[1];

            if (prefix) {
                prefix = normalize(prefix, parentName, applyMap);
                pluginModule = getOwn(defined, prefix);
            }

            //Account for relative paths if there is a base name.
            if (name) {
                if (prefix) {
                    if (isNormalized) {
                        normalizedName = name;
                    } else if (pluginModule && pluginModule.normalize) {
                        //Plugin is loaded, use its normalize method.
                        normalizedName = pluginModule.normalize(name, function (name) {
                            return normalize(name, parentName, applyMap);
                        });
                    } else {
                        // If nested plugin references, then do not try to
                        // normalize, as it will not normalize correctly. This
                        // places a restriction on resourceIds, and the longer
                        // term solution is not to normalize until plugins are
                        // loaded and all normalizations to allow for async
                        // loading of a loader plugin. But for now, fixes the
                        // common uses. Details in #1131
                        normalizedName = name.indexOf('!') === -1 ?
                                         normalize(name, parentName, applyMap) :
                                         name;
                    }
                } else {
                    //A regular module.
                    normalizedName = normalize(name, parentName, applyMap);

                    //Normalized name may be a plugin ID due to map config
                    //application in normalize. The map config values must
                    //already be normalized, so do not need to redo that part.
                    nameParts = splitPrefix(normalizedName);
                    prefix = nameParts[0];
                    normalizedName = nameParts[1];
                    isNormalized = true;

                    url = context.nameToUrl(normalizedName);
                }
            }

            //If the id is a plugin id that cannot be determined if it needs
            //normalization, stamp it with a unique ID so two matching relative
            //ids that may conflict can be separate.
            suffix = prefix && !pluginModule && !isNormalized ?
                     '_unnormalized' + (unnormalizedCounter += 1) :
                     '';

            return {
                prefix: prefix,
                name: normalizedName,
                parentMap: parentModuleMap,
                unnormalized: !!suffix,
                url: url,
                originalName: originalName,
                isDefine: isDefine,
                id: (prefix ?
                        prefix + '!' + normalizedName :
                        normalizedName) + suffix
            };
        }

        function getModule(depMap) {
            var id = depMap.id,
                mod = getOwn(registry, id);

            if (!mod) {
                mod = registry[id] = new context.Module(depMap);
            }

            return mod;
        }

        function on(depMap, name, fn) {
            var id = depMap.id,
                mod = getOwn(registry, id);

            if (hasProp(defined, id) &&
                    (!mod || mod.defineEmitComplete)) {
                if (name === 'defined') {
                    fn(defined[id]);
                }
            } else {
                mod = getModule(depMap);
                if (mod.error && name === 'error') {
                    fn(mod.error);
                } else {
                    mod.on(name, fn);
                }
            }
        }

        function onError(err, errback) {
            var ids = err.requireModules,
                notified = false;

            if (errback) {
                errback(err);
            } else {
                each(ids, function (id) {
                    var mod = getOwn(registry, id);
                    if (mod) {
                        //Set error on module, so it skips timeout checks.
                        mod.error = err;
                        if (mod.events.error) {
                            notified = true;
                            mod.emit('error', err);
                        }
                    }
                });

                if (!notified) {
                    req.onError(err);
                }
            }
        }

        /**
         * Internal method to transfer globalQueue items to this context's
         * defQueue.
         */
        function takeGlobalQueue() {
            //Push all the globalDefQueue items into the context's defQueue
            if (globalDefQueue.length) {
                each(globalDefQueue, function(queueItem) {
                    var id = queueItem[0];
                    if (typeof id === 'string') {
                        context.defQueueMap[id] = true;
                    }
                    defQueue.push(queueItem);
                });
                globalDefQueue = [];
            }
        }

        handlers = {
            'require': function (mod) {
                if (mod.require) {
                    return mod.require;
                } else {
                    return (mod.require = context.makeRequire(mod.map));
                }
            },
            'exports': function (mod) {
                mod.usingExports = true;
                if (mod.map.isDefine) {
                    if (mod.exports) {
                        return (defined[mod.map.id] = mod.exports);
                    } else {
                        return (mod.exports = defined[mod.map.id] = {});
                    }
                }
            },
            'module': function (mod) {
                if (mod.module) {
                    return mod.module;
                } else {
                    return (mod.module = {
                        id: mod.map.id,
                        uri: mod.map.url,
                        config: function () {
                            return getOwn(config.config, mod.map.id) || {};
                        },
                        exports: mod.exports || (mod.exports = {})
                    });
                }
            }
        };

        function cleanRegistry(id) {
            //Clean up machinery used for waiting modules.
            delete registry[id];
            delete enabledRegistry[id];
        }

        function breakCycle(mod, traced, processed) {
            var id = mod.map.id;

            if (mod.error) {
                mod.emit('error', mod.error);
            } else {
                traced[id] = true;
                each(mod.depMaps, function (depMap, i) {
                    var depId = depMap.id,
                        dep = getOwn(registry, depId);

                    //Only force things that have not completed
                    //being defined, so still in the registry,
                    //and only if it has not been matched up
                    //in the module already.
                    if (dep && !mod.depMatched[i] && !processed[depId]) {
                        if (getOwn(traced, depId)) {
                            mod.defineDep(i, defined[depId]);
                            mod.check(); //pass false?
                        } else {
                            breakCycle(dep, traced, processed);
                        }
                    }
                });
                processed[id] = true;
            }
        }

        function checkLoaded() {
            var err, usingPathFallback,
                waitInterval = config.waitSeconds * 1000,
                //It is possible to disable the wait interval by using waitSeconds of 0.
                expired = waitInterval && (context.startTime + waitInterval) < new Date().getTime(),
                noLoads = [],
                reqCalls = [],
                stillLoading = false,
                needCycleCheck = true;

            //Do not bother if this call was a result of a cycle break.
            if (inCheckLoaded) {
                return;
            }

            inCheckLoaded = true;

            //Figure out the state of all the modules.
            eachProp(enabledRegistry, function (mod) {
                var map = mod.map,
                    modId = map.id;

                //Skip things that are not enabled or in error state.
                if (!mod.enabled) {
                    return;
                }

                if (!map.isDefine) {
                    reqCalls.push(mod);
                }

                if (!mod.error) {
                    //If the module should be executed, and it has not
                    //been inited and time is up, remember it.
                    if (!mod.inited && expired) {
                        if (hasPathFallback(modId)) {
                            usingPathFallback = true;
                            stillLoading = true;
                        } else {
                            noLoads.push(modId);
                            removeScript(modId);
                        }
                    } else if (!mod.inited && mod.fetched && map.isDefine) {
                        stillLoading = true;
                        if (!map.prefix) {
                            //No reason to keep looking for unfinished
                            //loading. If the only stillLoading is a
                            //plugin resource though, keep going,
                            //because it may be that a plugin resource
                            //is waiting on a non-plugin cycle.
                            return (needCycleCheck = false);
                        }
                    }
                }
            });

            if (expired && noLoads.length) {
                //If wait time expired, throw error of unloaded modules.
                err = makeError('timeout', 'Load timeout for modules: ' + noLoads, null, noLoads);
                err.contextName = context.contextName;
                return onError(err);
            }

            //Not expired, check for a cycle.
            if (needCycleCheck) {
                each(reqCalls, function (mod) {
                    breakCycle(mod, {}, {});
                });
            }

            //If still waiting on loads, and the waiting load is something
            //other than a plugin resource, or there are still outstanding
            //scripts, then just try back later.
            if ((!expired || usingPathFallback) && stillLoading) {
                //Something is still waiting to load. Wait for it, but only
                //if a timeout is not already in effect.
                if ((isBrowser || isWebWorker) && !checkLoadedTimeoutId) {
                    checkLoadedTimeoutId = setTimeout(function () {
                        checkLoadedTimeoutId = 0;
                        checkLoaded();
                    }, 50);
                }
            }

            inCheckLoaded = false;
        }

        Module = function (map) {
            this.events = getOwn(undefEvents, map.id) || {};
            this.map = map;
            this.shim = getOwn(config.shim, map.id);
            this.depExports = [];
            this.depMaps = [];
            this.depMatched = [];
            this.pluginMaps = {};
            this.depCount = 0;

            /* this.exports this.factory
               this.depMaps = [],
               this.enabled, this.fetched
            */
        };

        Module.prototype = {
            init: function (depMaps, factory, errback, options) {
                options = options || {};

                //Do not do more inits if already done. Can happen if there
                //are multiple define calls for the same module. That is not
                //a normal, common case, but it is also not unexpected.
                if (this.inited) {
                    return;
                }

                this.factory = factory;

                if (errback) {
                    //Register for errors on this module.
                    this.on('error', errback);
                } else if (this.events.error) {
                    //If no errback already, but there are error listeners
                    //on this module, set up an errback to pass to the deps.
                    errback = bind(this, function (err) {
                        this.emit('error', err);
                    });
                }

                //Do a copy of the dependency array, so that
                //source inputs are not modified. For example
                //"shim" deps are passed in here directly, and
                //doing a direct modification of the depMaps array
                //would affect that config.
                this.depMaps = depMaps && depMaps.slice(0);

                this.errback = errback;

                //Indicate this module has be initialized
                this.inited = true;

                this.ignore = options.ignore;

                //Could have option to init this module in enabled mode,
                //or could have been previously marked as enabled. However,
                //the dependencies are not known until init is called. So
                //if enabled previously, now trigger dependencies as enabled.
                if (options.enabled || this.enabled) {
                    //Enable this module and dependencies.
                    //Will call this.check()
                    this.enable();
                } else {
                    this.check();
                }
            },

            defineDep: function (i, depExports) {
                //Because of cycles, defined callback for a given
                //export can be called more than once.
                if (!this.depMatched[i]) {
                    this.depMatched[i] = true;
                    this.depCount -= 1;
                    this.depExports[i] = depExports;
                }
            },

            fetch: function () {
                if (this.fetched) {
                    return;
                }
                this.fetched = true;

                context.startTime = (new Date()).getTime();

                var map = this.map;

                //If the manager is for a plugin managed resource,
                //ask the plugin to load it now.
                if (this.shim) {
                    context.makeRequire(this.map, {
                        enableBuildCallback: true
                    })(this.shim.deps || [], bind(this, function () {
                        return map.prefix ? this.callPlugin() : this.load();
                    }));
                } else {
                    //Regular dependency.
                    return map.prefix ? this.callPlugin() : this.load();
                }
            },

            load: function () {
                var url = this.map.url;

                //Regular dependency.
                if (!urlFetched[url]) {
                    urlFetched[url] = true;
                    context.load(this.map.id, url);
                }
            },

            /**
             * Checks if the module is ready to define itself, and if so,
             * define it.
             */
            check: function () {
                if (!this.enabled || this.enabling) {
                    return;
                }

                var err, cjsModule,
                    id = this.map.id,
                    depExports = this.depExports,
                    exports = this.exports,
                    factory = this.factory;

                if (!this.inited) {
                    // Only fetch if not already in the defQueue.
                    if (!hasProp(context.defQueueMap, id)) {
                        this.fetch();
                    }
                } else if (this.error) {
                    this.emit('error', this.error);
                } else if (!this.defining) {
                    //The factory could trigger another require call
                    //that would result in checking this module to
                    //define itself again. If already in the process
                    //of doing that, skip this work.
                    this.defining = true;

                    if (this.depCount < 1 && !this.defined) {
                        if (isFunction(factory)) {
                            //If there is an error listener, favor passing
                            //to that instead of throwing an error. However,
                            //only do it for define()'d  modules. require
                            //errbacks should not be called for failures in
                            //their callbacks (#699). However if a global
                            //onError is set, use that.
                            if ((this.events.error && this.map.isDefine) ||
                                req.onError !== defaultOnError) {
                                try {
                                    exports = context.execCb(id, factory, depExports, exports);
                                } catch (e) {
                                    err = e;
                                }
                            } else {
                                exports = context.execCb(id, factory, depExports, exports);
                            }

                            // Favor return value over exports. If node/cjs in play,
                            // then will not have a return value anyway. Favor
                            // module.exports assignment over exports object.
                            if (this.map.isDefine && exports === undefined) {
                                cjsModule = this.module;
                                if (cjsModule) {
                                    exports = cjsModule.exports;
                                } else if (this.usingExports) {
                                    //exports already set the defined value.
                                    exports = this.exports;
                                }
                            }

                            if (err) {
                                err.requireMap = this.map;
                                err.requireModules = this.map.isDefine ? [this.map.id] : null;
                                err.requireType = this.map.isDefine ? 'define' : 'require';
                                return onError((this.error = err));
                            }

                        } else {
                            //Just a literal value
                            exports = factory;
                        }

                        this.exports = exports;

                        if (this.map.isDefine && !this.ignore) {
                            defined[id] = exports;

                            if (req.onResourceLoad) {
                                var resLoadMaps = [];
                                each(this.depMaps, function (depMap) {
                                    resLoadMaps.push(depMap.normalizedMap || depMap);
                                });
                                req.onResourceLoad(context, this.map, resLoadMaps);
                            }
                        }

                        //Clean up
                        cleanRegistry(id);

                        this.defined = true;
                    }

                    //Finished the define stage. Allow calling check again
                    //to allow define notifications below in the case of a
                    //cycle.
                    this.defining = false;

                    if (this.defined && !this.defineEmitted) {
                        this.defineEmitted = true;
                        this.emit('defined', this.exports);
                        this.defineEmitComplete = true;
                    }

                }
            },

            callPlugin: function () {
                var map = this.map,
                    id = map.id,
                    //Map already normalized the prefix.
                    pluginMap = makeModuleMap(map.prefix);

                //Mark this as a dependency for this plugin, so it
                //can be traced for cycles.
                this.depMaps.push(pluginMap);

                on(pluginMap, 'defined', bind(this, function (plugin) {
                    var load, normalizedMap, normalizedMod,
                        bundleId = getOwn(bundlesMap, this.map.id),
                        name = this.map.name,
                        parentName = this.map.parentMap ? this.map.parentMap.name : null,
                        localRequire = context.makeRequire(map.parentMap, {
                            enableBuildCallback: true
                        });

                    //If current map is not normalized, wait for that
                    //normalized name to load instead of continuing.
                    if (this.map.unnormalized) {
                        //Normalize the ID if the plugin allows it.
                        if (plugin.normalize) {
                            name = plugin.normalize(name, function (name) {
                                return normalize(name, parentName, true);
                            }) || '';
                        }

                        //prefix and name should already be normalized, no need
                        //for applying map config again either.
                        normalizedMap = makeModuleMap(map.prefix + '!' + name,
                                                      this.map.parentMap,
                                                      true);
                        on(normalizedMap,
                            'defined', bind(this, function (value) {
                                this.map.normalizedMap = normalizedMap;
                                this.init([], function () { return value; }, null, {
                                    enabled: true,
                                    ignore: true
                                });
                            }));

                        normalizedMod = getOwn(registry, normalizedMap.id);
                        if (normalizedMod) {
                            //Mark this as a dependency for this plugin, so it
                            //can be traced for cycles.
                            this.depMaps.push(normalizedMap);

                            if (this.events.error) {
                                normalizedMod.on('error', bind(this, function (err) {
                                    this.emit('error', err);
                                }));
                            }
                            normalizedMod.enable();
                        }

                        return;
                    }

                    //If a paths config, then just load that file instead to
                    //resolve the plugin, as it is built into that paths layer.
                    if (bundleId) {
                        this.map.url = context.nameToUrl(bundleId);
                        this.load();
                        return;
                    }

                    load = bind(this, function (value) {
                        this.init([], function () { return value; }, null, {
                            enabled: true
                        });
                    });

                    load.error = bind(this, function (err) {
                        this.inited = true;
                        this.error = err;
                        err.requireModules = [id];

                        //Remove temp unnormalized modules for this module,
                        //since they will never be resolved otherwise now.
                        eachProp(registry, function (mod) {
                            if (mod.map.id.indexOf(id + '_unnormalized') === 0) {
                                cleanRegistry(mod.map.id);
                            }
                        });

                        onError(err);
                    });

                    //Allow plugins to load other code without having to know the
                    //context or how to 'complete' the load.
                    load.fromText = bind(this, function (text, textAlt) {
                        /*jslint evil: true */
                        var moduleName = map.name,
                            moduleMap = makeModuleMap(moduleName),
                            hasInteractive = useInteractive;

                        //As of 2.1.0, support just passing the text, to reinforce
                        //fromText only being called once per resource. Still
                        //support old style of passing moduleName but discard
                        //that moduleName in favor of the internal ref.
                        if (textAlt) {
                            text = textAlt;
                        }

                        //Turn off interactive script matching for IE for any define
                        //calls in the text, then turn it back on at the end.
                        if (hasInteractive) {
                            useInteractive = false;
                        }

                        //Prime the system by creating a module instance for
                        //it.
                        getModule(moduleMap);

                        //Transfer any config to this other module.
                        if (hasProp(config.config, id)) {
                            config.config[moduleName] = config.config[id];
                        }

                        try {
                            req.exec(text);
                        } catch (e) {
                            return onError(makeError('fromtexteval',
                                             'fromText eval for ' + id +
                                            ' failed: ' + e,
                                             e,
                                             [id]));
                        }

                        if (hasInteractive) {
                            useInteractive = true;
                        }

                        //Mark this as a dependency for the plugin
                        //resource
                        this.depMaps.push(moduleMap);

                        //Support anonymous modules.
                        context.completeLoad(moduleName);

                        //Bind the value of that module to the value for this
                        //resource ID.
                        localRequire([moduleName], load);
                    });

                    //Use parentName here since the plugin's name is not reliable,
                    //could be some weird string with no path that actually wants to
                    //reference the parentName's path.
                    plugin.load(map.name, localRequire, load, config);
                }));

                context.enable(pluginMap, this);
                this.pluginMaps[pluginMap.id] = pluginMap;
            },

            enable: function () {
                enabledRegistry[this.map.id] = this;
                this.enabled = true;

                //Set flag mentioning that the module is enabling,
                //so that immediate calls to the defined callbacks
                //for dependencies do not trigger inadvertent load
                //with the depCount still being zero.
                this.enabling = true;

                //Enable each dependency
                each(this.depMaps, bind(this, function (depMap, i) {
                    var id, mod, handler;

                    if (typeof depMap === 'string') {
                        //Dependency needs to be converted to a depMap
                        //and wired up to this module.
                        depMap = makeModuleMap(depMap,
                                               (this.map.isDefine ? this.map : this.map.parentMap),
                                               false,
                                               !this.skipMap);
                        this.depMaps[i] = depMap;

                        handler = getOwn(handlers, depMap.id);

                        if (handler) {
                            this.depExports[i] = handler(this);
                            return;
                        }

                        this.depCount += 1;

                        on(depMap, 'defined', bind(this, function (depExports) {
                            if (this.undefed) {
                                return;
                            }
                            this.defineDep(i, depExports);
                            this.check();
                        }));

                        if (this.errback) {
                            on(depMap, 'error', bind(this, this.errback));
                        } else if (this.events.error) {
                            // No direct errback on this module, but something
                            // else is listening for errors, so be sure to
                            // propagate the error correctly.
                            on(depMap, 'error', bind(this, function(err) {
                                this.emit('error', err);
                            }));
                        }
                    }

                    id = depMap.id;
                    mod = registry[id];

                    //Skip special modules like 'require', 'exports', 'module'
                    //Also, don't call enable if it is already enabled,
                    //important in circular dependency cases.
                    if (!hasProp(handlers, id) && mod && !mod.enabled) {
                        context.enable(depMap, this);
                    }
                }));

                //Enable each plugin that is used in
                //a dependency
                eachProp(this.pluginMaps, bind(this, function (pluginMap) {
                    var mod = getOwn(registry, pluginMap.id);
                    if (mod && !mod.enabled) {
                        context.enable(pluginMap, this);
                    }
                }));

                this.enabling = false;

                this.check();
            },

            on: function (name, cb) {
                var cbs = this.events[name];
                if (!cbs) {
                    cbs = this.events[name] = [];
                }
                cbs.push(cb);
            },

            emit: function (name, evt) {
                each(this.events[name], function (cb) {
                    cb(evt);
                });
                if (name === 'error') {
                    //Now that the error handler was triggered, remove
                    //the listeners, since this broken Module instance
                    //can stay around for a while in the registry.
                    delete this.events[name];
                }
            }
        };

        function callGetModule(args) {
            //Skip modules already defined.
            if (!hasProp(defined, args[0])) {
                getModule(makeModuleMap(args[0], null, true)).init(args[1], args[2]);
            }
        }

        function removeListener(node, func, name, ieName) {
            //Favor detachEvent because of IE9
            //issue, see attachEvent/addEventListener comment elsewhere
            //in this file.
            if (node.detachEvent && !isOpera) {
                //Probably IE. If not it will throw an error, which will be
                //useful to know.
                if (ieName) {
                    node.detachEvent(ieName, func);
                }
            } else {
                node.removeEventListener(name, func, false);
            }
        }

        /**
         * Given an event from a script node, get the requirejs info from it,
         * and then removes the event listeners on the node.
         * @param {Event} evt
         * @returns {Object}
         */
        function getScriptData(evt) {
            //Using currentTarget instead of target for Firefox 2.0's sake. Not
            //all old browsers will be supported, but this one was easy enough
            //to support and still makes sense.
            var node = evt.currentTarget || evt.srcElement;

            //Remove the listeners once here.
            removeListener(node, context.onScriptLoad, 'load', 'onreadystatechange');
            removeListener(node, context.onScriptError, 'error');

            return {
                node: node,
                id: node && node.getAttribute('data-requiremodule')
            };
        }

        function intakeDefines() {
            var args;

            //Any defined modules in the global queue, intake them now.
            takeGlobalQueue();

            //Make sure any remaining defQueue items get properly processed.
            while (defQueue.length) {
                args = defQueue.shift();
                if (args[0] === null) {
                    return onError(makeError('mismatch', 'Mismatched anonymous define() module: ' +
                        args[args.length - 1]));
                } else {
                    //args are id, deps, factory. Should be normalized by the
                    //define() function.
                    callGetModule(args);
                }
            }
            context.defQueueMap = {};
        }

        context = {
            config: config,
            contextName: contextName,
            registry: registry,
            defined: defined,
            urlFetched: urlFetched,
            defQueue: defQueue,
            defQueueMap: {},
            Module: Module,
            makeModuleMap: makeModuleMap,
            nextTick: req.nextTick,
            onError: onError,

            /**
             * Set a configuration for the context.
             * @param {Object} cfg config object to integrate.
             */
            configure: function (cfg) {
                //Make sure the baseUrl ends in a slash.
                if (cfg.baseUrl) {
                    if (cfg.baseUrl.charAt(cfg.baseUrl.length - 1) !== '/') {
                        cfg.baseUrl += '/';
                    }
                }

                // Convert old style urlArgs string to a function.
                if (typeof cfg.urlArgs === 'string') {
                    var urlArgs = cfg.urlArgs;
                    cfg.urlArgs = function(id, url) {
                        return (url.indexOf('?') === -1 ? '?' : '&') + urlArgs;
                    };
                }

                //Save off the paths since they require special processing,
                //they are additive.
                var shim = config.shim,
                    objs = {
                        paths: true,
                        bundles: true,
                        config: true,
                        map: true
                    };

                eachProp(cfg, function (value, prop) {
                    if (objs[prop]) {
                        if (!config[prop]) {
                            config[prop] = {};
                        }
                        mixin(config[prop], value, true, true);
                    } else {
                        config[prop] = value;
                    }
                });

                //Reverse map the bundles
                if (cfg.bundles) {
                    eachProp(cfg.bundles, function (value, prop) {
                        each(value, function (v) {
                            if (v !== prop) {
                                bundlesMap[v] = prop;
                            }
                        });
                    });
                }

                //Merge shim
                if (cfg.shim) {
                    eachProp(cfg.shim, function (value, id) {
                        //Normalize the structure
                        if (isArray(value)) {
                            value = {
                                deps: value
                            };
                        }
                        if ((value.exports || value.init) && !value.exportsFn) {
                            value.exportsFn = context.makeShimExports(value);
                        }
                        shim[id] = value;
                    });
                    config.shim = shim;
                }

                //Adjust packages if necessary.
                if (cfg.packages) {
                    each(cfg.packages, function (pkgObj) {
                        var location, name;

                        pkgObj = typeof pkgObj === 'string' ? {name: pkgObj} : pkgObj;

                        name = pkgObj.name;
                        location = pkgObj.location;
                        if (location) {
                            config.paths[name] = pkgObj.location;
                        }

                        //Save pointer to main module ID for pkg name.
                        //Remove leading dot in main, so main paths are normalized,
                        //and remove any trailing .js, since different package
                        //envs have different conventions: some use a module name,
                        //some use a file name.
                        config.pkgs[name] = pkgObj.name + '/' + (pkgObj.main || 'main')
                                     .replace(currDirRegExp, '')
                                     .replace(jsSuffixRegExp, '');
                    });
                }

                //If there are any "waiting to execute" modules in the registry,
                //update the maps for them, since their info, like URLs to load,
                //may have changed.
                eachProp(registry, function (mod, id) {
                    //If module already has init called, since it is too
                    //late to modify them, and ignore unnormalized ones
                    //since they are transient.
                    if (!mod.inited && !mod.map.unnormalized) {
                        mod.map = makeModuleMap(id, null, true);
                    }
                });

                //If a deps array or a config callback is specified, then call
                //require with those args. This is useful when require is defined as a
                //config object before require.js is loaded.
                if (cfg.deps || cfg.callback) {
                    context.require(cfg.deps || [], cfg.callback);
                }
            },

            makeShimExports: function (value) {
                function fn() {
                    var ret;
                    if (value.init) {
                        ret = value.init.apply(global, arguments);
                    }
                    return ret || (value.exports && getGlobal(value.exports));
                }
                return fn;
            },

            makeRequire: function (relMap, options) {
                options = options || {};

                function localRequire(deps, callback, errback) {
                    var id, map, requireMod;

                    if (options.enableBuildCallback && callback && isFunction(callback)) {
                        callback.__requireJsBuild = true;
                    }

                    if (typeof deps === 'string') {
                        if (isFunction(callback)) {
                            //Invalid call
                            return onError(makeError('requireargs', 'Invalid require call'), errback);
                        }

                        //If require|exports|module are requested, get the
                        //value for them from the special handlers. Caveat:
                        //this only works while module is being defined.
                        if (relMap && hasProp(handlers, deps)) {
                            return handlers[deps](registry[relMap.id]);
                        }

                        //Synchronous access to one module. If require.get is
                        //available (as in the Node adapter), prefer that.
                        if (req.get) {
                            return req.get(context, deps, relMap, localRequire);
                        }

                        //Normalize module name, if it contains . or ..
                        map = makeModuleMap(deps, relMap, false, true);
                        id = map.id;

                        if (!hasProp(defined, id)) {
                            return onError(makeError('notloaded', 'Module name "' +
                                        id +
                                        '" has not been loaded yet for context: ' +
                                        contextName +
                                        (relMap ? '' : '. Use require([])')));
                        }
                        return defined[id];
                    }

                    //Grab defines waiting in the global queue.
                    intakeDefines();

                    //Mark all the dependencies as needing to be loaded.
                    context.nextTick(function () {
                        //Some defines could have been added since the
                        //require call, collect them.
                        intakeDefines();

                        requireMod = getModule(makeModuleMap(null, relMap));

                        //Store if map config should be applied to this require
                        //call for dependencies.
                        requireMod.skipMap = options.skipMap;

                        requireMod.init(deps, callback, errback, {
                            enabled: true
                        });

                        checkLoaded();
                    });

                    return localRequire;
                }

                mixin(localRequire, {
                    isBrowser: isBrowser,

                    /**
                     * Converts a module name + .extension into an URL path.
                     * *Requires* the use of a module name. It does not support using
                     * plain URLs like nameToUrl.
                     */
                    toUrl: function (moduleNamePlusExt) {
                        var ext,
                            index = moduleNamePlusExt.lastIndexOf('.'),
                            segment = moduleNamePlusExt.split('/')[0],
                            isRelative = segment === '.' || segment === '..';

                        //Have a file extension alias, and it is not the
                        //dots from a relative path.
                        if (index !== -1 && (!isRelative || index > 1)) {
                            ext = moduleNamePlusExt.substring(index, moduleNamePlusExt.length);
                            moduleNamePlusExt = moduleNamePlusExt.substring(0, index);
                        }

                        return context.nameToUrl(normalize(moduleNamePlusExt,
                                                relMap && relMap.id, true), ext,  true);
                    },

                    defined: function (id) {
                        return hasProp(defined, makeModuleMap(id, relMap, false, true).id);
                    },

                    specified: function (id) {
                        id = makeModuleMap(id, relMap, false, true).id;
                        return hasProp(defined, id) || hasProp(registry, id);
                    }
                });

                //Only allow undef on top level require calls
                if (!relMap) {
                    localRequire.undef = function (id) {
                        //Bind any waiting define() calls to this context,
                        //fix for #408
                        takeGlobalQueue();

                        var map = makeModuleMap(id, relMap, true),
                            mod = getOwn(registry, id);

                        mod.undefed = true;
                        removeScript(id);

                        delete defined[id];
                        delete urlFetched[map.url];
                        delete undefEvents[id];

                        //Clean queued defines too. Go backwards
                        //in array so that the splices do not
                        //mess up the iteration.
                        eachReverse(defQueue, function(args, i) {
                            if (args[0] === id) {
                                defQueue.splice(i, 1);
                            }
                        });
                        delete context.defQueueMap[id];

                        if (mod) {
                            //Hold on to listeners in case the
                            //module will be attempted to be reloaded
                            //using a different config.
                            if (mod.events.defined) {
                                undefEvents[id] = mod.events;
                            }

                            cleanRegistry(id);
                        }
                    };
                }

                return localRequire;
            },

            /**
             * Called to enable a module if it is still in the registry
             * awaiting enablement. A second arg, parent, the parent module,
             * is passed in for context, when this method is overridden by
             * the optimizer. Not shown here to keep code compact.
             */
            enable: function (depMap) {
                var mod = getOwn(registry, depMap.id);
                if (mod) {
                    getModule(depMap).enable();
                }
            },

            /**
             * Internal method used by environment adapters to complete a load event.
             * A load event could be a script load or just a load pass from a synchronous
             * load call.
             * @param {String} moduleName the name of the module to potentially complete.
             */
            completeLoad: function (moduleName) {
                var found, args, mod,
                    shim = getOwn(config.shim, moduleName) || {},
                    shExports = shim.exports;

                takeGlobalQueue();

                while (defQueue.length) {
                    args = defQueue.shift();
                    if (args[0] === null) {
                        args[0] = moduleName;
                        //If already found an anonymous module and bound it
                        //to this name, then this is some other anon module
                        //waiting for its completeLoad to fire.
                        if (found) {
                            break;
                        }
                        found = true;
                    } else if (args[0] === moduleName) {
                        //Found matching define call for this script!
                        found = true;
                    }

                    callGetModule(args);
                }
                context.defQueueMap = {};

                //Do this after the cycle of callGetModule in case the result
                //of those calls/init calls changes the registry.
                mod = getOwn(registry, moduleName);

                if (!found && !hasProp(defined, moduleName) && mod && !mod.inited) {
                    if (config.enforceDefine && (!shExports || !getGlobal(shExports))) {
                        if (hasPathFallback(moduleName)) {
                            return;
                        } else {
                            return onError(makeError('nodefine',
                                             'No define call for ' + moduleName,
                                             null,
                                             [moduleName]));
                        }
                    } else {
                        //A script that does not call define(), so just simulate
                        //the call for it.
                        callGetModule([moduleName, (shim.deps || []), shim.exportsFn]);
                    }
                }

                checkLoaded();
            },

            /**
             * Converts a module name to a file path. Supports cases where
             * moduleName may actually be just an URL.
             * Note that it **does not** call normalize on the moduleName,
             * it is assumed to have already been normalized. This is an
             * internal API, not a public one. Use toUrl for the public API.
             */
            nameToUrl: function (moduleName, ext, skipExt) {
                var paths, syms, i, parentModule, url,
                    parentPath, bundleId,
                    pkgMain = getOwn(config.pkgs, moduleName);

                if (pkgMain) {
                    moduleName = pkgMain;
                }

                bundleId = getOwn(bundlesMap, moduleName);

                if (bundleId) {
                    return context.nameToUrl(bundleId, ext, skipExt);
                }

                //If a colon is in the URL, it indicates a protocol is used and it is just
                //an URL to a file, or if it starts with a slash, contains a query arg (i.e. ?)
                //or ends with .js, then assume the user meant to use an url and not a module id.
                //The slash is important for protocol-less URLs as well as full paths.
                if (req.jsExtRegExp.test(moduleName)) {
                    //Just a plain path, not module name lookup, so just return it.
                    //Add extension if it is included. This is a bit wonky, only non-.js things pass
                    //an extension, this method probably needs to be reworked.
                    url = moduleName + (ext || '');
                } else {
                    //A module that needs to be converted to a path.
                    paths = config.paths;

                    syms = moduleName.split('/');
                    //For each module name segment, see if there is a path
                    //registered for it. Start with most specific name
                    //and work up from it.
                    for (i = syms.length; i > 0; i -= 1) {
                        parentModule = syms.slice(0, i).join('/');

                        parentPath = getOwn(paths, parentModule);
                        if (parentPath) {
                            //If an array, it means there are a few choices,
                            //Choose the one that is desired
                            if (isArray(parentPath)) {
                                parentPath = parentPath[0];
                            }
                            syms.splice(0, i, parentPath);
                            break;
                        }
                    }

                    //Join the path parts together, then figure out if baseUrl is needed.
                    url = syms.join('/');
                    url += (ext || (/^data\:|^blob\:|\?/.test(url) || skipExt ? '' : '.js'));
                    url = (url.charAt(0) === '/' || url.match(/^[\w\+\.\-]+:/) ? '' : config.baseUrl) + url;
                }

                return config.urlArgs && !/^blob\:/.test(url) ?
                       url + config.urlArgs(moduleName, url) : url;
            },

            //Delegates to req.load. Broken out as a separate function to
            //allow overriding in the optimizer.
            load: function (id, url) {
                req.load(context, id, url);
            },

            /**
             * Executes a module callback function. Broken out as a separate function
             * solely to allow the build system to sequence the files in the built
             * layer in the right sequence.
             *
             * @private
             */
            execCb: function (name, callback, args, exports) {
                return callback.apply(exports, args);
            },

            /**
             * callback for script loads, used to check status of loading.
             *
             * @param {Event} evt the event from the browser for the script
             * that was loaded.
             */
            onScriptLoad: function (evt) {
                //Using currentTarget instead of target for Firefox 2.0's sake. Not
                //all old browsers will be supported, but this one was easy enough
                //to support and still makes sense.
                if (evt.type === 'load' ||
                        (readyRegExp.test((evt.currentTarget || evt.srcElement).readyState))) {
                    //Reset interactive script so a script node is not held onto for
                    //to long.
                    interactiveScript = null;

                    //Pull out the name of the module and the context.
                    var data = getScriptData(evt);
                    context.completeLoad(data.id);
                }
            },

            /**
             * Callback for script errors.
             */
            onScriptError: function (evt) {
                var data = getScriptData(evt);
                if (!hasPathFallback(data.id)) {
                    var parents = [];
                    eachProp(registry, function(value, key) {
                        if (key.indexOf('_@r') !== 0) {
                            each(value.depMaps, function(depMap) {
                                if (depMap.id === data.id) {
                                    parents.push(key);
                                    return true;
                                }
                            });
                        }
                    });
                    return onError(makeError('scripterror', 'Script error for "' + data.id +
                                             (parents.length ?
                                             '", needed by: ' + parents.join(', ') :
                                             '"'), evt, [data.id]));
                }
            }
        };

        context.require = context.makeRequire();
        return context;
    }

    /**
     * Main entry point.
     *
     * If the only argument to require is a string, then the module that
     * is represented by that string is fetched for the appropriate context.
     *
     * If the first argument is an array, then it will be treated as an array
     * of dependency string names to fetch. An optional function callback can
     * be specified to execute when all of those dependencies are available.
     *
     * Make a local req variable to help Caja compliance (it assumes things
     * on a require that are not standardized), and to give a short
     * name for minification/local scope use.
     */
    req = requirejs = function (deps, callback, errback, optional) {

        //Find the right context, use default
        var context, config,
            contextName = defContextName;

        // Determine if have config object in the call.
        if (!isArray(deps) && typeof deps !== 'string') {
            // deps is a config object
            config = deps;
            if (isArray(callback)) {
                // Adjust args if there are dependencies
                deps = callback;
                callback = errback;
                errback = optional;
            } else {
                deps = [];
            }
        }

        if (config && config.context) {
            contextName = config.context;
        }

        context = getOwn(contexts, contextName);
        if (!context) {
            context = contexts[contextName] = req.s.newContext(contextName);
        }

        if (config) {
            context.configure(config);
        }

        return context.require(deps, callback, errback);
    };

    /**
     * Support require.config() to make it easier to cooperate with other
     * AMD loaders on globally agreed names.
     */
    req.config = function (config) {
        return req(config);
    };

    /**
     * Execute something after the current tick
     * of the event loop. Override for other envs
     * that have a better solution than setTimeout.
     * @param  {Function} fn function to execute later.
     */
    req.nextTick = typeof setTimeout !== 'undefined' ? function (fn) {
        setTimeout(fn, 4);
    } : function (fn) { fn(); };

    /**
     * Export require as a global, but only if it does not already exist.
     */
    if (!require) {
        require = req;
    }

    req.version = version;

    //Used to filter out dependencies that are already paths.
    req.jsExtRegExp = /^\/|:|\?|\.js$/;
    req.isBrowser = isBrowser;
    s = req.s = {
        contexts: contexts,
        newContext: newContext
    };

    //Create default context.
    req({});

    //Exports some context-sensitive methods on global require.
    each([
        'toUrl',
        'undef',
        'defined',
        'specified'
    ], function (prop) {
        //Reference from contexts instead of early binding to default context,
        //so that during builds, the latest instance of the default context
        //with its config gets used.
        req[prop] = function () {
            var ctx = contexts[defContextName];
            return ctx.require[prop].apply(ctx, arguments);
        };
    });

    if (isBrowser) {
        head = s.head = document.getElementsByTagName('head')[0];
        //If BASE tag is in play, using appendChild is a problem for IE6.
        //When that browser dies, this can be removed. Details in this jQuery bug:
        //http://dev.jquery.com/ticket/2709
        baseElement = document.getElementsByTagName('base')[0];
        if (baseElement) {
            head = s.head = baseElement.parentNode;
        }
    }

    /**
     * Any errors that require explicitly generates will be passed to this
     * function. Intercept/override it if you want custom error handling.
     * @param {Error} err the error object.
     */
    req.onError = defaultOnError;

    /**
     * Creates the node for the load command. Only used in browser envs.
     */
    req.createNode = function (config, moduleName, url) {
        var node = config.xhtml ?
                document.createElementNS('http://www.w3.org/1999/xhtml', 'html:script') :
                document.createElement('script');
        node.type = config.scriptType || 'text/javascript';
        node.charset = 'utf-8';
        node.async = true;
        return node;
    };

    /**
     * Does the request to load a module for the browser case.
     * Make this a separate function to allow other environments
     * to override it.
     *
     * @param {Object} context the require context to find state.
     * @param {String} moduleName the name of the module.
     * @param {Object} url the URL to the module.
     */
    req.load = function (context, moduleName, url) {
        var config = (context && context.config) || {},
            node;
        if (isBrowser) {
            //In the browser so use a script tag
            node = req.createNode(config, moduleName, url);

            node.setAttribute('data-requirecontext', context.contextName);
            node.setAttribute('data-requiremodule', moduleName);

            //Set up load listener. Test attachEvent first because IE9 has
            //a subtle issue in its addEventListener and script onload firings
            //that do not match the behavior of all other browsers with
            //addEventListener support, which fire the onload event for a
            //script right after the script execution. See:
            //https://connect.microsoft.com/IE/feedback/details/648057/script-onload-event-is-not-fired-immediately-after-script-execution
            //UNFORTUNATELY Opera implements attachEvent but does not follow the script
            //script execution mode.
            if (node.attachEvent &&
                    //Check if node.attachEvent is artificially added by custom script or
                    //natively supported by browser
                    //read https://github.com/requirejs/requirejs/issues/187
                    //if we can NOT find [native code] then it must NOT natively supported.
                    //in IE8, node.attachEvent does not have toString()
                    //Note the test for "[native code" with no closing brace, see:
                    //https://github.com/requirejs/requirejs/issues/273
                    !(node.attachEvent.toString && node.attachEvent.toString().indexOf('[native code') < 0) &&
                    !isOpera) {
                //Probably IE. IE (at least 6-8) do not fire
                //script onload right after executing the script, so
                //we cannot tie the anonymous define call to a name.
                //However, IE reports the script as being in 'interactive'
                //readyState at the time of the define call.
                useInteractive = true;

                node.attachEvent('onreadystatechange', context.onScriptLoad);
                //It would be great to add an error handler here to catch
                //404s in IE9+. However, onreadystatechange will fire before
                //the error handler, so that does not help. If addEventListener
                //is used, then IE will fire error before load, but we cannot
                //use that pathway given the connect.microsoft.com issue
                //mentioned above about not doing the 'script execute,
                //then fire the script load event listener before execute
                //next script' that other browsers do.
                //Best hope: IE10 fixes the issues,
                //and then destroys all installs of IE 6-9.
                //node.attachEvent('onerror', context.onScriptError);
            } else {
                node.addEventListener('load', context.onScriptLoad, false);
                node.addEventListener('error', context.onScriptError, false);
            }
            node.src = url;

            //Calling onNodeCreated after all properties on the node have been
            //set, but before it is placed in the DOM.
            if (config.onNodeCreated) {
                config.onNodeCreated(node, config, moduleName, url);
            }

            //For some cache cases in IE 6-8, the script executes before the end
            //of the appendChild execution, so to tie an anonymous define
            //call to the module name (which is stored on the node), hold on
            //to a reference to this node, but clear after the DOM insertion.
            currentlyAddingScript = node;
            if (baseElement) {
                head.insertBefore(node, baseElement);
            } else {
                head.appendChild(node);
            }
            currentlyAddingScript = null;

            return node;
        } else if (isWebWorker) {
            try {
                //In a web worker, use importScripts. This is not a very
                //efficient use of importScripts, importScripts will block until
                //its script is downloaded and evaluated. However, if web workers
                //are in play, the expectation is that a build has been done so
                //that only one script needs to be loaded anyway. This may need
                //to be reevaluated if other use cases become common.

                // Post a task to the event loop to work around a bug in WebKit
                // where the worker gets garbage-collected after calling
                // importScripts(): https://webkit.org/b/153317
                setTimeout(function() {}, 0);
                importScripts(url);

                //Account for anonymous modules
                context.completeLoad(moduleName);
            } catch (e) {
                context.onError(makeError('importscripts',
                                'importScripts failed for ' +
                                    moduleName + ' at ' + url,
                                e,
                                [moduleName]));
            }
        }
    };

    function getInteractiveScript() {
        if (interactiveScript && interactiveScript.readyState === 'interactive') {
            return interactiveScript;
        }

        eachReverse(scripts(), function (script) {
            if (script.readyState === 'interactive') {
                return (interactiveScript = script);
            }
        });
        return interactiveScript;
    }

    //Look for a data-main script attribute, which could also adjust the baseUrl.
    if (isBrowser && !cfg.skipDataMain) {
        //Figure out baseUrl. Get it from the script tag with require.js in it.
        eachReverse(scripts(), function (script) {
            //Set the 'head' where we can append children by
            //using the script's parent.
            if (!head) {
                head = script.parentNode;
            }

            //Look for a data-main attribute to set main script for the page
            //to load. If it is there, the path to data main becomes the
            //baseUrl, if it is not already set.
            dataMain = script.getAttribute('data-main');
            if (dataMain) {
                //Preserve dataMain in case it is a path (i.e. contains '?')
                mainScript = dataMain;

                //Set final baseUrl if there is not already an explicit one,
                //but only do so if the data-main value is not a loader plugin
                //module ID.
                if (!cfg.baseUrl && mainScript.indexOf('!') === -1) {
                    //Pull off the directory of data-main for use as the
                    //baseUrl.
                    src = mainScript.split('/');
                    mainScript = src.pop();
                    subPath = src.length ? src.join('/')  + '/' : './';

                    cfg.baseUrl = subPath;
                }

                //Strip off any trailing .js since mainScript is now
                //like a module name.
                mainScript = mainScript.replace(jsSuffixRegExp, '');

                //If mainScript is still a path, fall back to dataMain
                if (req.jsExtRegExp.test(mainScript)) {
                    mainScript = dataMain;
                }

                //Put the data-main script in the files to load.
                cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript];

                return true;
            }
        });
    }

    /**
     * The function that handles definitions of modules. Differs from
     * require() in that a string for the module should be the first argument,
     * and the function to execute after dependencies are loaded should
     * return a value to define the module corresponding to the first argument's
     * name.
     */
    define = function (name, deps, callback) {
        var node, context;

        //Allow for anonymous modules
        if (typeof name !== 'string') {
            //Adjust args appropriately
            callback = deps;
            deps = name;
            name = null;
        }

        //This module may not have dependencies
        if (!isArray(deps)) {
            callback = deps;
            deps = null;
        }

        //If no name, and callback is a function, then figure out if it a
        //CommonJS thing with dependencies.
        if (!deps && isFunction(callback)) {
            deps = [];
            //Remove comments from the callback string,
            //look for require calls, and pull them into the dependencies,
            //but only if there are function args.
            if (callback.length) {
                callback
                    .toString()
                    .replace(commentRegExp, commentReplace)
                    .replace(cjsRequireRegExp, function (match, dep) {
                        deps.push(dep);
                    });

                //May be a CommonJS thing even without require calls, but still
                //could use exports, and module. Avoid doing exports and module
                //work though if it just needs require.
                //REQUIRES the function to expect the CommonJS variables in the
                //order listed below.
                deps = (callback.length === 1 ? ['require'] : ['require', 'exports', 'module']).concat(deps);
            }
        }

        //If in IE 6-8 and hit an anonymous define() call, do the interactive
        //work.
        if (useInteractive) {
            node = currentlyAddingScript || getInteractiveScript();
            if (node) {
                if (!name) {
                    name = node.getAttribute('data-requiremodule');
                }
                context = contexts[node.getAttribute('data-requirecontext')];
            }
        }

        //Always save off evaluating the def call until the script onload handler.
        //This allows multiple modules to be in a file without prematurely
        //tracing dependencies, and allows for anonymous module support,
        //where the module name is not known until the script onload event
        //occurs. If no context, use the global queue, and get it processed
        //in the onscript load callback.
        if (context) {
            context.defQueue.push([name, deps, callback]);
            context.defQueueMap[name] = true;
        } else {
            globalDefQueue.push([name, deps, callback]);
        }
    };

    define.amd = {
        jQuery: true
    };

    /**
     * Executes the text. Normally just uses eval, but can be modified
     * to use a better, environment-specific call. Only used for transpiling
     * loader plugins, not for plain JS modules.
     * @param {String} text the text to execute/evaluate.
     */
    req.exec = function (text) {
        /*jslint evil: true */
        return eval(text);
    };

    //Set up with config info.
    req(cfg);
}(this, (typeof setTimeout === 'undefined' ? undefined : setTimeout)));

/* jshint ignore:end */

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbmRvci9yZXF1aXJlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlcXVpcmVqcy9yZXF1aXJlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FEdmxFQTtBQUNBIiwiZmlsZSI6InZlbmRvci9yZXF1aXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZXF1aXJlSlNcbiAqXG4gKiBSZXF1aXJlSlMgaXMgYSBKYXZhU2NyaXB0IGZpbGUgYW5kIG1vZHVsZSBsb2FkZXIuIEl0IGlzIG9wdGltaXplZCBmb3IgaW4tYnJvd3NlciB1c2UsXG4gKiBidXQgaXQgY2FuIGJlIHVzZWQgaW4gb3RoZXIgSmF2YVNjcmlwdCBlbnZpcm9ubWVudHMsIGxpa2UgUmhpbm8gYW5kIE5vZGUuIFVzaW5nIGEgbW9kdWxhciBzY3JpcHRcbiAqIGxvYWRlciBsaWtlIFJlcXVpcmVKUyB3aWxsIGltcHJvdmUgdGhlIHNwZWVkIGFuZCBxdWFsaXR5IG9mIHlvdXIgY29kZS5cbiAqL1xuXG4vKiBqc2hpbnQgaWdub3JlOnN0YXJ0ICovXG4vLyA9cmVxdWlyZSAuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVxdWlyZWpzL3JlcXVpcmUuanNcbi8qIGpzaGludCBpZ25vcmU6ZW5kICovXG4iLCIvKiogdmltOiBldDp0cz00OnN3PTQ6c3RzPTRcbiAqIEBsaWNlbnNlIFJlcXVpcmVKUyAyLjMuNiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycy5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlLCBodHRwczovL2dpdGh1Yi5jb20vcmVxdWlyZWpzL3JlcXVpcmVqcy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbi8vTm90IHVzaW5nIHN0cmljdDogdW5ldmVuIHN0cmljdCBzdXBwb3J0IGluIGJyb3dzZXJzLCAjMzkyLCBhbmQgY2F1c2VzXG4vL3Byb2JsZW1zIHdpdGggcmVxdWlyZWpzLmV4ZWMoKS90cmFuc3BpbGVyIHBsdWdpbnMgdGhhdCBtYXkgbm90IGJlIHN0cmljdC5cbi8qanNsaW50IHJlZ2V4cDogdHJ1ZSwgbm9tZW46IHRydWUsIHNsb3BweTogdHJ1ZSAqL1xuLypnbG9iYWwgd2luZG93LCBuYXZpZ2F0b3IsIGRvY3VtZW50LCBpbXBvcnRTY3JpcHRzLCBzZXRUaW1lb3V0LCBvcGVyYSAqL1xuXG52YXIgcmVxdWlyZWpzLCByZXF1aXJlLCBkZWZpbmU7XG4oZnVuY3Rpb24gKGdsb2JhbCwgc2V0VGltZW91dCkge1xuICAgIHZhciByZXEsIHMsIGhlYWQsIGJhc2VFbGVtZW50LCBkYXRhTWFpbiwgc3JjLFxuICAgICAgICBpbnRlcmFjdGl2ZVNjcmlwdCwgY3VycmVudGx5QWRkaW5nU2NyaXB0LCBtYWluU2NyaXB0LCBzdWJQYXRoLFxuICAgICAgICB2ZXJzaW9uID0gJzIuMy42JyxcbiAgICAgICAgY29tbWVudFJlZ0V4cCA9IC9cXC9cXCpbXFxzXFxTXSo/XFwqXFwvfChbXjpcIic9XXxeKVxcL1xcLy4qJC9tZyxcbiAgICAgICAgY2pzUmVxdWlyZVJlZ0V4cCA9IC9bXi5dXFxzKnJlcXVpcmVcXHMqXFwoXFxzKltcIiddKFteJ1wiXFxzXSspW1wiJ11cXHMqXFwpL2csXG4gICAgICAgIGpzU3VmZml4UmVnRXhwID0gL1xcLmpzJC8sXG4gICAgICAgIGN1cnJEaXJSZWdFeHAgPSAvXlxcLlxcLy8sXG4gICAgICAgIG9wID0gT2JqZWN0LnByb3RvdHlwZSxcbiAgICAgICAgb3N0cmluZyA9IG9wLnRvU3RyaW5nLFxuICAgICAgICBoYXNPd24gPSBvcC5oYXNPd25Qcm9wZXJ0eSxcbiAgICAgICAgaXNCcm93c2VyID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSxcbiAgICAgICAgaXNXZWJXb3JrZXIgPSAhaXNCcm93c2VyICYmIHR5cGVvZiBpbXBvcnRTY3JpcHRzICE9PSAndW5kZWZpbmVkJyxcbiAgICAgICAgLy9QUzMgaW5kaWNhdGVzIGxvYWRlZCBhbmQgY29tcGxldGUsIGJ1dCBuZWVkIHRvIHdhaXQgZm9yIGNvbXBsZXRlXG4gICAgICAgIC8vc3BlY2lmaWNhbGx5LiBTZXF1ZW5jZSBpcyAnbG9hZGluZycsICdsb2FkZWQnLCBleGVjdXRpb24sXG4gICAgICAgIC8vIHRoZW4gJ2NvbXBsZXRlJy4gVGhlIFVBIGNoZWNrIGlzIHVuZm9ydHVuYXRlLCBidXQgbm90IHN1cmUgaG93XG4gICAgICAgIC8vdG8gZmVhdHVyZSB0ZXN0IHcvbyBjYXVzaW5nIHBlcmYgaXNzdWVzLlxuICAgICAgICByZWFkeVJlZ0V4cCA9IGlzQnJvd3NlciAmJiBuYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdQTEFZU1RBVElPTiAzJyA/XG4gICAgICAgICAgICAgICAgICAgICAgL15jb21wbGV0ZSQvIDogL14oY29tcGxldGV8bG9hZGVkKSQvLFxuICAgICAgICBkZWZDb250ZXh0TmFtZSA9ICdfJyxcbiAgICAgICAgLy9PaCB0aGUgdHJhZ2VkeSwgZGV0ZWN0aW5nIG9wZXJhLiBTZWUgdGhlIHVzYWdlIG9mIGlzT3BlcmEgZm9yIHJlYXNvbi5cbiAgICAgICAgaXNPcGVyYSA9IHR5cGVvZiBvcGVyYSAhPT0gJ3VuZGVmaW5lZCcgJiYgb3BlcmEudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgT3BlcmFdJyxcbiAgICAgICAgY29udGV4dHMgPSB7fSxcbiAgICAgICAgY2ZnID0ge30sXG4gICAgICAgIGdsb2JhbERlZlF1ZXVlID0gW10sXG4gICAgICAgIHVzZUludGVyYWN0aXZlID0gZmFsc2U7XG5cbiAgICAvL0NvdWxkIG1hdGNoIHNvbWV0aGluZyBsaWtlICcpLy9jb21tZW50JywgZG8gbm90IGxvc2UgdGhlIHByZWZpeCB0byBjb21tZW50LlxuICAgIGZ1bmN0aW9uIGNvbW1lbnRSZXBsYWNlKG1hdGNoLCBzaW5nbGVQcmVmaXgpIHtcbiAgICAgICAgcmV0dXJuIHNpbmdsZVByZWZpeCB8fCAnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0Z1bmN0aW9uKGl0KSB7XG4gICAgICAgIHJldHVybiBvc3RyaW5nLmNhbGwoaXQpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzQXJyYXkoaXQpIHtcbiAgICAgICAgcmV0dXJuIG9zdHJpbmcuY2FsbChpdCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIGZ1bmN0aW9uIGZvciBpdGVyYXRpbmcgb3ZlciBhbiBhcnJheS4gSWYgdGhlIGZ1bmMgcmV0dXJuc1xuICAgICAqIGEgdHJ1ZSB2YWx1ZSwgaXQgd2lsbCBicmVhayBvdXQgb2YgdGhlIGxvb3AuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZWFjaChhcnksIGZ1bmMpIHtcbiAgICAgICAgaWYgKGFyeSkge1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXJ5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyeVtpXSAmJiBmdW5jKGFyeVtpXSwgaSwgYXJ5KSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGl0ZXJhdGluZyBvdmVyIGFuIGFycmF5IGJhY2t3YXJkcy4gSWYgdGhlIGZ1bmNcbiAgICAgKiByZXR1cm5zIGEgdHJ1ZSB2YWx1ZSwgaXQgd2lsbCBicmVhayBvdXQgb2YgdGhlIGxvb3AuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZWFjaFJldmVyc2UoYXJ5LCBmdW5jKSB7XG4gICAgICAgIGlmIChhcnkpIHtcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgZm9yIChpID0gYXJ5Lmxlbmd0aCAtIDE7IGkgPiAtMTsgaSAtPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFyeVtpXSAmJiBmdW5jKGFyeVtpXSwgaSwgYXJ5KSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYXNQcm9wKG9iaiwgcHJvcCkge1xuICAgICAgICByZXR1cm4gaGFzT3duLmNhbGwob2JqLCBwcm9wKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRPd24ob2JqLCBwcm9wKSB7XG4gICAgICAgIHJldHVybiBoYXNQcm9wKG9iaiwgcHJvcCkgJiYgb2JqW3Byb3BdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEN5Y2xlcyBvdmVyIHByb3BlcnRpZXMgaW4gYW4gb2JqZWN0IGFuZCBjYWxscyBhIGZ1bmN0aW9uIGZvciBlYWNoXG4gICAgICogcHJvcGVydHkgdmFsdWUuIElmIHRoZSBmdW5jdGlvbiByZXR1cm5zIGEgdHJ1dGh5IHZhbHVlLCB0aGVuIHRoZVxuICAgICAqIGl0ZXJhdGlvbiBpcyBzdG9wcGVkLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGVhY2hQcm9wKG9iaiwgZnVuYykge1xuICAgICAgICB2YXIgcHJvcDtcbiAgICAgICAgZm9yIChwcm9wIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKGhhc1Byb3Aob2JqLCBwcm9wKSkge1xuICAgICAgICAgICAgICAgIGlmIChmdW5jKG9ialtwcm9wXSwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2ltcGxlIGZ1bmN0aW9uIHRvIG1peCBpbiBwcm9wZXJ0aWVzIGZyb20gc291cmNlIGludG8gdGFyZ2V0LFxuICAgICAqIGJ1dCBvbmx5IGlmIHRhcmdldCBkb2VzIG5vdCBhbHJlYWR5IGhhdmUgYSBwcm9wZXJ0eSBvZiB0aGUgc2FtZSBuYW1lLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG1peGluKHRhcmdldCwgc291cmNlLCBmb3JjZSwgZGVlcFN0cmluZ01peGluKSB7XG4gICAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgICAgIGVhY2hQcm9wKHNvdXJjZSwgZnVuY3Rpb24gKHZhbHVlLCBwcm9wKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZvcmNlIHx8ICFoYXNQcm9wKHRhcmdldCwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlZXBTdHJpbmdNaXhpbiAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhaXNBcnJheSh2YWx1ZSkgJiYgIWlzRnVuY3Rpb24odmFsdWUpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhKHZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRhcmdldFtwcm9wXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWl4aW4odGFyZ2V0W3Byb3BdLCB2YWx1ZSwgZm9yY2UsIGRlZXBTdHJpbmdNaXhpbik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgLy9TaW1pbGFyIHRvIEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLCBidXQgdGhlICd0aGlzJyBvYmplY3QgaXMgc3BlY2lmaWVkXG4gICAgLy9maXJzdCwgc2luY2UgaXQgaXMgZWFzaWVyIHRvIHJlYWQvZmlndXJlIG91dCB3aGF0ICd0aGlzJyB3aWxsIGJlLlxuICAgIGZ1bmN0aW9uIGJpbmQob2JqLCBmbikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KG9iaiwgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JpcHRzKCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlZmF1bHRPbkVycm9yKGVycikge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfVxuXG4gICAgLy9BbGxvdyBnZXR0aW5nIGEgZ2xvYmFsIHRoYXQgaXMgZXhwcmVzc2VkIGluXG4gICAgLy9kb3Qgbm90YXRpb24sIGxpa2UgJ2EuYi5jJy5cbiAgICBmdW5jdGlvbiBnZXRHbG9iYWwodmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBnID0gZ2xvYmFsO1xuICAgICAgICBlYWNoKHZhbHVlLnNwbGl0KCcuJyksIGZ1bmN0aW9uIChwYXJ0KSB7XG4gICAgICAgICAgICBnID0gZ1twYXJ0XTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdHMgYW4gZXJyb3Igd2l0aCBhIHBvaW50ZXIgdG8gYW4gVVJMIHdpdGggbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWQgdGhlIGVycm9yIElEIHRoYXQgbWFwcyB0byBhbiBJRCBvbiBhIHdlYiBwYWdlLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIGh1bWFuIHJlYWRhYmxlIGVycm9yLlxuICAgICAqIEBwYXJhbSB7RXJyb3J9IFtlcnJdIHRoZSBvcmlnaW5hbCBlcnJvciwgaWYgdGhlcmUgaXMgb25lLlxuICAgICAqXG4gICAgICogQHJldHVybnMge0Vycm9yfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG1ha2VFcnJvcihpZCwgbXNnLCBlcnIsIHJlcXVpcmVNb2R1bGVzKSB7XG4gICAgICAgIHZhciBlID0gbmV3IEVycm9yKG1zZyArICdcXG5odHRwczovL3JlcXVpcmVqcy5vcmcvZG9jcy9lcnJvcnMuaHRtbCMnICsgaWQpO1xuICAgICAgICBlLnJlcXVpcmVUeXBlID0gaWQ7XG4gICAgICAgIGUucmVxdWlyZU1vZHVsZXMgPSByZXF1aXJlTW9kdWxlcztcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgZS5vcmlnaW5hbEVycm9yID0gZXJyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZGVmaW5lICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvL0lmIGEgZGVmaW5lIGlzIGFscmVhZHkgaW4gcGxheSB2aWEgYW5vdGhlciBBTUQgbG9hZGVyLFxuICAgICAgICAvL2RvIG5vdCBvdmVyd3JpdGUuXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlcXVpcmVqcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24ocmVxdWlyZWpzKSkge1xuICAgICAgICAgICAgLy9EbyBub3Qgb3ZlcndyaXRlIGFuIGV4aXN0aW5nIHJlcXVpcmVqcyBpbnN0YW5jZS5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjZmcgPSByZXF1aXJlanM7XG4gICAgICAgIHJlcXVpcmVqcyA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvL0FsbG93IGZvciBhIHJlcXVpcmUgY29uZmlnIG9iamVjdFxuICAgIGlmICh0eXBlb2YgcmVxdWlyZSAhPT0gJ3VuZGVmaW5lZCcgJiYgIWlzRnVuY3Rpb24ocmVxdWlyZSkpIHtcbiAgICAgICAgLy9hc3N1bWUgaXQgaXMgYSBjb25maWcgb2JqZWN0LlxuICAgICAgICBjZmcgPSByZXF1aXJlO1xuICAgICAgICByZXF1aXJlID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld0NvbnRleHQoY29udGV4dE5hbWUpIHtcbiAgICAgICAgdmFyIGluQ2hlY2tMb2FkZWQsIE1vZHVsZSwgY29udGV4dCwgaGFuZGxlcnMsXG4gICAgICAgICAgICBjaGVja0xvYWRlZFRpbWVvdXRJZCxcbiAgICAgICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAvL0RlZmF1bHRzLiBEbyBub3Qgc2V0IGEgZGVmYXVsdCBmb3IgbWFwXG4gICAgICAgICAgICAgICAgLy9jb25maWcgdG8gc3BlZWQgdXAgbm9ybWFsaXplKCksIHdoaWNoXG4gICAgICAgICAgICAgICAgLy93aWxsIHJ1biBmYXN0ZXIgaWYgdGhlcmUgaXMgbm8gZGVmYXVsdC5cbiAgICAgICAgICAgICAgICB3YWl0U2Vjb25kczogNyxcbiAgICAgICAgICAgICAgICBiYXNlVXJsOiAnLi8nLFxuICAgICAgICAgICAgICAgIHBhdGhzOiB7fSxcbiAgICAgICAgICAgICAgICBidW5kbGVzOiB7fSxcbiAgICAgICAgICAgICAgICBwa2dzOiB7fSxcbiAgICAgICAgICAgICAgICBzaGltOiB7fSxcbiAgICAgICAgICAgICAgICBjb25maWc6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVnaXN0cnkgPSB7fSxcbiAgICAgICAgICAgIC8vcmVnaXN0cnkgb2YganVzdCBlbmFibGVkIG1vZHVsZXMsIHRvIHNwZWVkXG4gICAgICAgICAgICAvL2N5Y2xlIGJyZWFraW5nIGNvZGUgd2hlbiBsb3RzIG9mIG1vZHVsZXNcbiAgICAgICAgICAgIC8vYXJlIHJlZ2lzdGVyZWQsIGJ1dCBub3QgYWN0aXZhdGVkLlxuICAgICAgICAgICAgZW5hYmxlZFJlZ2lzdHJ5ID0ge30sXG4gICAgICAgICAgICB1bmRlZkV2ZW50cyA9IHt9LFxuICAgICAgICAgICAgZGVmUXVldWUgPSBbXSxcbiAgICAgICAgICAgIGRlZmluZWQgPSB7fSxcbiAgICAgICAgICAgIHVybEZldGNoZWQgPSB7fSxcbiAgICAgICAgICAgIGJ1bmRsZXNNYXAgPSB7fSxcbiAgICAgICAgICAgIHJlcXVpcmVDb3VudGVyID0gMSxcbiAgICAgICAgICAgIHVubm9ybWFsaXplZENvdW50ZXIgPSAxO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcmltcyB0aGUgLiBhbmQgLi4gZnJvbSBhbiBhcnJheSBvZiBwYXRoIHNlZ21lbnRzLlxuICAgICAgICAgKiBJdCB3aWxsIGtlZXAgYSBsZWFkaW5nIHBhdGggc2VnbWVudCBpZiBhIC4uIHdpbGwgYmVjb21lXG4gICAgICAgICAqIHRoZSBmaXJzdCBwYXRoIHNlZ21lbnQsIHRvIGhlbHAgd2l0aCBtb2R1bGUgbmFtZSBsb29rdXBzLFxuICAgICAgICAgKiB3aGljaCBhY3QgbGlrZSBwYXRocywgYnV0IGNhbiBiZSByZW1hcHBlZC4gQnV0IHRoZSBlbmQgcmVzdWx0LFxuICAgICAgICAgKiBhbGwgcGF0aHMgdGhhdCB1c2UgdGhpcyBmdW5jdGlvbiBzaG91bGQgbG9vayBub3JtYWxpemVkLlxuICAgICAgICAgKiBOT1RFOiB0aGlzIG1ldGhvZCBNT0RJRklFUyB0aGUgaW5wdXQgYXJyYXkuXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyeSB0aGUgYXJyYXkgb2YgcGF0aCBzZWdtZW50cy5cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIHRyaW1Eb3RzKGFyeSkge1xuICAgICAgICAgICAgdmFyIGksIHBhcnQ7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcGFydCA9IGFyeVtpXTtcbiAgICAgICAgICAgICAgICBpZiAocGFydCA9PT0gJy4nKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyeS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGkgLT0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnQgPT09ICcuLicpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgYXQgdGhlIHN0YXJ0LCBvciBwcmV2aW91cyB2YWx1ZSBpcyBzdGlsbCAuLixcbiAgICAgICAgICAgICAgICAgICAgLy8ga2VlcCB0aGVtIHNvIHRoYXQgd2hlbiBjb252ZXJ0ZWQgdG8gYSBwYXRoIGl0IG1heVxuICAgICAgICAgICAgICAgICAgICAvLyBzdGlsbCB3b3JrIHdoZW4gY29udmVydGVkIHRvIGEgcGF0aCwgZXZlbiB0aG91Z2hcbiAgICAgICAgICAgICAgICAgICAgLy8gYXMgYW4gSUQgaXQgaXMgbGVzcyB0aGFuIGlkZWFsLiBJbiBsYXJnZXIgcG9pbnRcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVsZWFzZXMsIG1heSBiZSBiZXR0ZXIgdG8ganVzdCBraWNrIG91dCBhbiBlcnJvci5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IDAgfHwgKGkgPT09IDEgJiYgYXJ5WzJdID09PSAnLi4nKSB8fCBhcnlbaSAtIDFdID09PSAnLi4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJ5LnNwbGljZShpIC0gMSwgMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpIC09IDI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogR2l2ZW4gYSByZWxhdGl2ZSBtb2R1bGUgbmFtZSwgbGlrZSAuL3NvbWV0aGluZywgbm9ybWFsaXplIGl0IHRvXG4gICAgICAgICAqIGEgcmVhbCBuYW1lIHRoYXQgY2FuIGJlIG1hcHBlZCB0byBhIHBhdGguXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIHRoZSByZWxhdGl2ZSBuYW1lXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBiYXNlTmFtZSBhIHJlYWwgbmFtZSB0aGF0IHRoZSBuYW1lIGFyZyBpcyByZWxhdGl2ZVxuICAgICAgICAgKiB0by5cbiAgICAgICAgICogQHBhcmFtIHtCb29sZWFufSBhcHBseU1hcCBhcHBseSB0aGUgbWFwIGNvbmZpZyB0byB0aGUgdmFsdWUuIFNob3VsZFxuICAgICAgICAgKiBvbmx5IGJlIGRvbmUgaWYgdGhpcyBub3JtYWxpemF0aW9uIGlzIGZvciBhIGRlcGVuZGVuY3kgSUQuXG4gICAgICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IG5vcm1hbGl6ZWQgbmFtZVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gbm9ybWFsaXplKG5hbWUsIGJhc2VOYW1lLCBhcHBseU1hcCkge1xuICAgICAgICAgICAgdmFyIHBrZ01haW4sIG1hcFZhbHVlLCBuYW1lUGFydHMsIGksIGosIG5hbWVTZWdtZW50LCBsYXN0SW5kZXgsXG4gICAgICAgICAgICAgICAgZm91bmRNYXAsIGZvdW5kSSwgZm91bmRTdGFyTWFwLCBzdGFySSwgbm9ybWFsaXplZEJhc2VQYXJ0cyxcbiAgICAgICAgICAgICAgICBiYXNlUGFydHMgPSAoYmFzZU5hbWUgJiYgYmFzZU5hbWUuc3BsaXQoJy8nKSksXG4gICAgICAgICAgICAgICAgbWFwID0gY29uZmlnLm1hcCxcbiAgICAgICAgICAgICAgICBzdGFyTWFwID0gbWFwICYmIG1hcFsnKiddO1xuXG4gICAgICAgICAgICAvL0FkanVzdCBhbnkgcmVsYXRpdmUgcGF0aHMuXG4gICAgICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgICAgIG5hbWUgPSBuYW1lLnNwbGl0KCcvJyk7XG4gICAgICAgICAgICAgICAgbGFzdEluZGV4ID0gbmFtZS5sZW5ndGggLSAxO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgd2FudGluZyBub2RlIElEIGNvbXBhdGliaWxpdHksIHN0cmlwIC5qcyBmcm9tIGVuZFxuICAgICAgICAgICAgICAgIC8vIG9mIElEcy4gSGF2ZSB0byBkbyB0aGlzIGhlcmUsIGFuZCBub3QgaW4gbmFtZVRvVXJsXG4gICAgICAgICAgICAgICAgLy8gYmVjYXVzZSBub2RlIGFsbG93cyBlaXRoZXIgLmpzIG9yIG5vbiAuanMgdG8gbWFwXG4gICAgICAgICAgICAgICAgLy8gdG8gc2FtZSBmaWxlLlxuICAgICAgICAgICAgICAgIGlmIChjb25maWcubm9kZUlkQ29tcGF0ICYmIGpzU3VmZml4UmVnRXhwLnRlc3QobmFtZVtsYXN0SW5kZXhdKSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lW2xhc3RJbmRleF0gPSBuYW1lW2xhc3RJbmRleF0ucmVwbGFjZShqc1N1ZmZpeFJlZ0V4cCwgJycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFN0YXJ0cyB3aXRoIGEgJy4nIHNvIG5lZWQgdGhlIGJhc2VOYW1lXG4gICAgICAgICAgICAgICAgaWYgKG5hbWVbMF0uY2hhckF0KDApID09PSAnLicgJiYgYmFzZVBhcnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vQ29udmVydCBiYXNlTmFtZSB0byBhcnJheSwgYW5kIGxvcCBvZmYgdGhlIGxhc3QgcGFydCxcbiAgICAgICAgICAgICAgICAgICAgLy9zbyB0aGF0IC4gbWF0Y2hlcyB0aGF0ICdkaXJlY3RvcnknIGFuZCBub3QgbmFtZSBvZiB0aGUgYmFzZU5hbWUnc1xuICAgICAgICAgICAgICAgICAgICAvL21vZHVsZS4gRm9yIGluc3RhbmNlLCBiYXNlTmFtZSBvZiAnb25lL3R3by90aHJlZScsIG1hcHMgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8nb25lL3R3by90aHJlZS5qcycsIGJ1dCB3ZSB3YW50IHRoZSBkaXJlY3RvcnksICdvbmUvdHdvJyBmb3JcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzIG5vcm1hbGl6YXRpb24uXG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRCYXNlUGFydHMgPSBiYXNlUGFydHMuc2xpY2UoMCwgYmFzZVBhcnRzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICBuYW1lID0gbm9ybWFsaXplZEJhc2VQYXJ0cy5jb25jYXQobmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJpbURvdHMobmFtZSk7XG4gICAgICAgICAgICAgICAgbmFtZSA9IG5hbWUuam9pbignLycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0FwcGx5IG1hcCBjb25maWcgaWYgYXZhaWxhYmxlLlxuICAgICAgICAgICAgaWYgKGFwcGx5TWFwICYmIG1hcCAmJiAoYmFzZVBhcnRzIHx8IHN0YXJNYXApKSB7XG4gICAgICAgICAgICAgICAgbmFtZVBhcnRzID0gbmFtZS5zcGxpdCgnLycpO1xuXG4gICAgICAgICAgICAgICAgb3V0ZXJMb29wOiBmb3IgKGkgPSBuYW1lUGFydHMubGVuZ3RoOyBpID4gMDsgaSAtPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWVTZWdtZW50ID0gbmFtZVBhcnRzLnNsaWNlKDAsIGkpLmpvaW4oJy8nKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYmFzZVBhcnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL0ZpbmQgdGhlIGxvbmdlc3QgYmFzZU5hbWUgc2VnbWVudCBtYXRjaCBpbiB0aGUgY29uZmlnLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy9TbywgZG8gam9pbnMgb24gdGhlIGJpZ2dlc3QgdG8gc21hbGxlc3QgbGVuZ3RocyBvZiBiYXNlUGFydHMuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSBiYXNlUGFydHMubGVuZ3RoOyBqID4gMDsgaiAtPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwVmFsdWUgPSBnZXRPd24obWFwLCBiYXNlUGFydHMuc2xpY2UoMCwgaikuam9pbignLycpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYmFzZU5hbWUgc2VnbWVudCBoYXMgY29uZmlnLCBmaW5kIGlmIGl0IGhhcyBvbmUgZm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzIG5hbWUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hcFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFZhbHVlID0gZ2V0T3duKG1hcFZhbHVlLCBuYW1lU2VnbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXBWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9NYXRjaCwgdXBkYXRlIG5hbWUgdG8gdGhlIG5ldyB2YWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kTWFwID0gbWFwVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZEkgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgb3V0ZXJMb29wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy9DaGVjayBmb3IgYSBzdGFyIG1hcCBtYXRjaCwgYnV0IGp1c3QgaG9sZCBvbiB0byBpdCxcbiAgICAgICAgICAgICAgICAgICAgLy9pZiB0aGVyZSBpcyBhIHNob3J0ZXIgc2VnbWVudCBtYXRjaCBsYXRlciBpbiBhIG1hdGNoaW5nXG4gICAgICAgICAgICAgICAgICAgIC8vY29uZmlnLCB0aGVuIGZhdm9yIG92ZXIgdGhpcyBzdGFyIG1hcC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmb3VuZFN0YXJNYXAgJiYgc3Rhck1hcCAmJiBnZXRPd24oc3Rhck1hcCwgbmFtZVNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFN0YXJNYXAgPSBnZXRPd24oc3Rhck1hcCwgbmFtZVNlZ21lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhckkgPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFmb3VuZE1hcCAmJiBmb3VuZFN0YXJNYXApIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmRNYXAgPSBmb3VuZFN0YXJNYXA7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kSSA9IHN0YXJJO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChmb3VuZE1hcCkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lUGFydHMuc3BsaWNlKDAsIGZvdW5kSSwgZm91bmRNYXApO1xuICAgICAgICAgICAgICAgICAgICBuYW1lID0gbmFtZVBhcnRzLmpvaW4oJy8nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBuYW1lIHBvaW50cyB0byBhIHBhY2thZ2UncyBuYW1lLCB1c2VcbiAgICAgICAgICAgIC8vIHRoZSBwYWNrYWdlIG1haW4gaW5zdGVhZC5cbiAgICAgICAgICAgIHBrZ01haW4gPSBnZXRPd24oY29uZmlnLnBrZ3MsIG5hbWUpO1xuXG4gICAgICAgICAgICByZXR1cm4gcGtnTWFpbiA/IHBrZ01haW4gOiBuYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlU2NyaXB0KG5hbWUpIHtcbiAgICAgICAgICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgICAgICBlYWNoKHNjcmlwdHMoKSwgZnVuY3Rpb24gKHNjcmlwdE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjcmlwdE5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXJlcXVpcmVtb2R1bGUnKSA9PT0gbmFtZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmlwdE5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXJlcXVpcmVjb250ZXh0JykgPT09IGNvbnRleHQuY29udGV4dE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcmlwdE5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBoYXNQYXRoRmFsbGJhY2soaWQpIHtcbiAgICAgICAgICAgIHZhciBwYXRoQ29uZmlnID0gZ2V0T3duKGNvbmZpZy5wYXRocywgaWQpO1xuICAgICAgICAgICAgaWYgKHBhdGhDb25maWcgJiYgaXNBcnJheShwYXRoQ29uZmlnKSAmJiBwYXRoQ29uZmlnLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAvL1BvcCBvZmYgdGhlIGZpcnN0IGFycmF5IHZhbHVlLCBzaW5jZSBpdCBmYWlsZWQsIGFuZFxuICAgICAgICAgICAgICAgIC8vcmV0cnlcbiAgICAgICAgICAgICAgICBwYXRoQ29uZmlnLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5yZXF1aXJlLnVuZGVmKGlkKTtcblxuICAgICAgICAgICAgICAgIC8vQ3VzdG9tIHJlcXVpcmUgdGhhdCBkb2VzIG5vdCBkbyBtYXAgdHJhbnNsYXRpb24sIHNpbmNlXG4gICAgICAgICAgICAgICAgLy9JRCBpcyBcImFic29sdXRlXCIsIGFscmVhZHkgbWFwcGVkL3Jlc29sdmVkLlxuICAgICAgICAgICAgICAgIGNvbnRleHQubWFrZVJlcXVpcmUobnVsbCwge1xuICAgICAgICAgICAgICAgICAgICBza2lwTWFwOiB0cnVlXG4gICAgICAgICAgICAgICAgfSkoW2lkXSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vVHVybnMgYSBwbHVnaW4hcmVzb3VyY2UgdG8gW3BsdWdpbiwgcmVzb3VyY2VdXG4gICAgICAgIC8vd2l0aCB0aGUgcGx1Z2luIGJlaW5nIHVuZGVmaW5lZCBpZiB0aGUgbmFtZVxuICAgICAgICAvL2RpZCBub3QgaGF2ZSBhIHBsdWdpbiBwcmVmaXguXG4gICAgICAgIGZ1bmN0aW9uIHNwbGl0UHJlZml4KG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXgsXG4gICAgICAgICAgICAgICAgaW5kZXggPSBuYW1lID8gbmFtZS5pbmRleE9mKCchJykgOiAtMTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gbmFtZS5zdWJzdHJpbmcoMCwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cmluZyhpbmRleCArIDEsIG5hbWUubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbcHJlZml4LCBuYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgbW9kdWxlIG1hcHBpbmcgdGhhdCBpbmNsdWRlcyBwbHVnaW4gcHJlZml4LCBtb2R1bGVcbiAgICAgICAgICogbmFtZSwgYW5kIHBhdGguIElmIHBhcmVudE1vZHVsZU1hcCBpcyBwcm92aWRlZCBpdCB3aWxsXG4gICAgICAgICAqIGFsc28gbm9ybWFsaXplIHRoZSBuYW1lIHZpYSByZXF1aXJlLm5vcm1hbGl6ZSgpXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIHRoZSBtb2R1bGUgbmFtZVxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gW3BhcmVudE1vZHVsZU1hcF0gcGFyZW50IG1vZHVsZSBtYXBcbiAgICAgICAgICogZm9yIHRoZSBtb2R1bGUgbmFtZSwgdXNlZCB0byByZXNvbHZlIHJlbGF0aXZlIG5hbWVzLlxuICAgICAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGlzTm9ybWFsaXplZDogaXMgdGhlIElEIGFscmVhZHkgbm9ybWFsaXplZC5cbiAgICAgICAgICogVGhpcyBpcyB0cnVlIGlmIHRoaXMgY2FsbCBpcyBkb25lIGZvciBhIGRlZmluZSgpIG1vZHVsZSBJRC5cbiAgICAgICAgICogQHBhcmFtIHtCb29sZWFufSBhcHBseU1hcDogYXBwbHkgdGhlIG1hcCBjb25maWcgdG8gdGhlIElELlxuICAgICAgICAgKiBTaG91bGQgb25seSBiZSB0cnVlIGlmIHRoaXMgbWFwIGlzIGZvciBhIGRlcGVuZGVuY3kuXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBtYWtlTW9kdWxlTWFwKG5hbWUsIHBhcmVudE1vZHVsZU1hcCwgaXNOb3JtYWxpemVkLCBhcHBseU1hcCkge1xuICAgICAgICAgICAgdmFyIHVybCwgcGx1Z2luTW9kdWxlLCBzdWZmaXgsIG5hbWVQYXJ0cyxcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBudWxsLFxuICAgICAgICAgICAgICAgIHBhcmVudE5hbWUgPSBwYXJlbnRNb2R1bGVNYXAgPyBwYXJlbnRNb2R1bGVNYXAubmFtZSA6IG51bGwsXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxOYW1lID0gbmFtZSxcbiAgICAgICAgICAgICAgICBpc0RlZmluZSA9IHRydWUsXG4gICAgICAgICAgICAgICAgbm9ybWFsaXplZE5hbWUgPSAnJztcblxuICAgICAgICAgICAgLy9JZiBubyBuYW1lLCB0aGVuIGl0IG1lYW5zIGl0IGlzIGEgcmVxdWlyZSBjYWxsLCBnZW5lcmF0ZSBhblxuICAgICAgICAgICAgLy9pbnRlcm5hbCBuYW1lLlxuICAgICAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICAgICAgaXNEZWZpbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBuYW1lID0gJ19AcicgKyAocmVxdWlyZUNvdW50ZXIgKz0gMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5hbWVQYXJ0cyA9IHNwbGl0UHJlZml4KG5hbWUpO1xuICAgICAgICAgICAgcHJlZml4ID0gbmFtZVBhcnRzWzBdO1xuICAgICAgICAgICAgbmFtZSA9IG5hbWVQYXJ0c1sxXTtcblxuICAgICAgICAgICAgaWYgKHByZWZpeCkge1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IG5vcm1hbGl6ZShwcmVmaXgsIHBhcmVudE5hbWUsIGFwcGx5TWFwKTtcbiAgICAgICAgICAgICAgICBwbHVnaW5Nb2R1bGUgPSBnZXRPd24oZGVmaW5lZCwgcHJlZml4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9BY2NvdW50IGZvciByZWxhdGl2ZSBwYXRocyBpZiB0aGVyZSBpcyBhIGJhc2UgbmFtZS5cbiAgICAgICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOb3JtYWxpemVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVkTmFtZSA9IG5hbWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGx1Z2luTW9kdWxlICYmIHBsdWdpbk1vZHVsZS5ub3JtYWxpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vUGx1Z2luIGlzIGxvYWRlZCwgdXNlIGl0cyBub3JtYWxpemUgbWV0aG9kLlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplZE5hbWUgPSBwbHVnaW5Nb2R1bGUubm9ybWFsaXplKG5hbWUsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZShuYW1lLCBwYXJlbnROYW1lLCBhcHBseU1hcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIG5lc3RlZCBwbHVnaW4gcmVmZXJlbmNlcywgdGhlbiBkbyBub3QgdHJ5IHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBub3JtYWxpemUsIGFzIGl0IHdpbGwgbm90IG5vcm1hbGl6ZSBjb3JyZWN0bHkuIFRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBsYWNlcyBhIHJlc3RyaWN0aW9uIG9uIHJlc291cmNlSWRzLCBhbmQgdGhlIGxvbmdlclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGVybSBzb2x1dGlvbiBpcyBub3QgdG8gbm9ybWFsaXplIHVudGlsIHBsdWdpbnMgYXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsb2FkZWQgYW5kIGFsbCBub3JtYWxpemF0aW9ucyB0byBhbGxvdyBmb3IgYXN5bmNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvYWRpbmcgb2YgYSBsb2FkZXIgcGx1Z2luLiBCdXQgZm9yIG5vdywgZml4ZXMgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb21tb24gdXNlcy4gRGV0YWlscyBpbiAjMTEzMVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplZE5hbWUgPSBuYW1lLmluZGV4T2YoJyEnKSA9PT0gLTEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxpemUobmFtZSwgcGFyZW50TmFtZSwgYXBwbHlNYXApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vQSByZWd1bGFyIG1vZHVsZS5cbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplZE5hbWUgPSBub3JtYWxpemUobmFtZSwgcGFyZW50TmFtZSwgYXBwbHlNYXApO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vTm9ybWFsaXplZCBuYW1lIG1heSBiZSBhIHBsdWdpbiBJRCBkdWUgdG8gbWFwIGNvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAvL2FwcGxpY2F0aW9uIGluIG5vcm1hbGl6ZS4gVGhlIG1hcCBjb25maWcgdmFsdWVzIG11c3RcbiAgICAgICAgICAgICAgICAgICAgLy9hbHJlYWR5IGJlIG5vcm1hbGl6ZWQsIHNvIGRvIG5vdCBuZWVkIHRvIHJlZG8gdGhhdCBwYXJ0LlxuICAgICAgICAgICAgICAgICAgICBuYW1lUGFydHMgPSBzcGxpdFByZWZpeChub3JtYWxpemVkTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHByZWZpeCA9IG5hbWVQYXJ0c1swXTtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplZE5hbWUgPSBuYW1lUGFydHNbMV07XG4gICAgICAgICAgICAgICAgICAgIGlzTm9ybWFsaXplZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgdXJsID0gY29udGV4dC5uYW1lVG9Vcmwobm9ybWFsaXplZE5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9JZiB0aGUgaWQgaXMgYSBwbHVnaW4gaWQgdGhhdCBjYW5ub3QgYmUgZGV0ZXJtaW5lZCBpZiBpdCBuZWVkc1xuICAgICAgICAgICAgLy9ub3JtYWxpemF0aW9uLCBzdGFtcCBpdCB3aXRoIGEgdW5pcXVlIElEIHNvIHR3byBtYXRjaGluZyByZWxhdGl2ZVxuICAgICAgICAgICAgLy9pZHMgdGhhdCBtYXkgY29uZmxpY3QgY2FuIGJlIHNlcGFyYXRlLlxuICAgICAgICAgICAgc3VmZml4ID0gcHJlZml4ICYmICFwbHVnaW5Nb2R1bGUgJiYgIWlzTm9ybWFsaXplZCA/XG4gICAgICAgICAgICAgICAgICAgICAnX3Vubm9ybWFsaXplZCcgKyAodW5ub3JtYWxpemVkQ291bnRlciArPSAxKSA6XG4gICAgICAgICAgICAgICAgICAgICAnJztcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBuYW1lOiBub3JtYWxpemVkTmFtZSxcbiAgICAgICAgICAgICAgICBwYXJlbnRNYXA6IHBhcmVudE1vZHVsZU1hcCxcbiAgICAgICAgICAgICAgICB1bm5vcm1hbGl6ZWQ6ICEhc3VmZml4LFxuICAgICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsTmFtZTogb3JpZ2luYWxOYW1lLFxuICAgICAgICAgICAgICAgIGlzRGVmaW5lOiBpc0RlZmluZSxcbiAgICAgICAgICAgICAgICBpZDogKHByZWZpeCA/XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXggKyAnIScgKyBub3JtYWxpemVkTmFtZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVkTmFtZSkgKyBzdWZmaXhcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRNb2R1bGUoZGVwTWFwKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSBkZXBNYXAuaWQsXG4gICAgICAgICAgICAgICAgbW9kID0gZ2V0T3duKHJlZ2lzdHJ5LCBpZCk7XG5cbiAgICAgICAgICAgIGlmICghbW9kKSB7XG4gICAgICAgICAgICAgICAgbW9kID0gcmVnaXN0cnlbaWRdID0gbmV3IGNvbnRleHQuTW9kdWxlKGRlcE1hcCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtb2Q7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvbihkZXBNYXAsIG5hbWUsIGZuKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSBkZXBNYXAuaWQsXG4gICAgICAgICAgICAgICAgbW9kID0gZ2V0T3duKHJlZ2lzdHJ5LCBpZCk7XG5cbiAgICAgICAgICAgIGlmIChoYXNQcm9wKGRlZmluZWQsIGlkKSAmJlxuICAgICAgICAgICAgICAgICAgICAoIW1vZCB8fCBtb2QuZGVmaW5lRW1pdENvbXBsZXRlKSkge1xuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZm4oZGVmaW5lZFtpZF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbW9kID0gZ2V0TW9kdWxlKGRlcE1hcCk7XG4gICAgICAgICAgICAgICAgaWYgKG1vZC5lcnJvciAmJiBuYW1lID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICAgIGZuKG1vZC5lcnJvcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kLm9uKG5hbWUsIGZuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvbkVycm9yKGVyciwgZXJyYmFjaykge1xuICAgICAgICAgICAgdmFyIGlkcyA9IGVyci5yZXF1aXJlTW9kdWxlcyxcbiAgICAgICAgICAgICAgICBub3RpZmllZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoZXJyYmFjaykge1xuICAgICAgICAgICAgICAgIGVycmJhY2soZXJyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWFjaChpZHMsIGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gZ2V0T3duKHJlZ2lzdHJ5LCBpZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vU2V0IGVycm9yIG9uIG1vZHVsZSwgc28gaXQgc2tpcHMgdGltZW91dCBjaGVja3MuXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2QuZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kLmV2ZW50cy5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2QuZW1pdCgnZXJyb3InLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIW5vdGlmaWVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbkVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludGVybmFsIG1ldGhvZCB0byB0cmFuc2ZlciBnbG9iYWxRdWV1ZSBpdGVtcyB0byB0aGlzIGNvbnRleHQnc1xuICAgICAgICAgKiBkZWZRdWV1ZS5cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIHRha2VHbG9iYWxRdWV1ZSgpIHtcbiAgICAgICAgICAgIC8vUHVzaCBhbGwgdGhlIGdsb2JhbERlZlF1ZXVlIGl0ZW1zIGludG8gdGhlIGNvbnRleHQncyBkZWZRdWV1ZVxuICAgICAgICAgICAgaWYgKGdsb2JhbERlZlF1ZXVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGVhY2goZ2xvYmFsRGVmUXVldWUsIGZ1bmN0aW9uKHF1ZXVlSXRlbSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaWQgPSBxdWV1ZUl0ZW1bMF07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRlZlF1ZXVlTWFwW2lkXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGVmUXVldWUucHVzaChxdWV1ZUl0ZW0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGdsb2JhbERlZlF1ZXVlID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBoYW5kbGVycyA9IHtcbiAgICAgICAgICAgICdyZXF1aXJlJzogZnVuY3Rpb24gKG1vZCkge1xuICAgICAgICAgICAgICAgIGlmIChtb2QucmVxdWlyZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9kLnJlcXVpcmU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChtb2QucmVxdWlyZSA9IGNvbnRleHQubWFrZVJlcXVpcmUobW9kLm1hcCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnZXhwb3J0cyc6IGZ1bmN0aW9uIChtb2QpIHtcbiAgICAgICAgICAgICAgICBtb2QudXNpbmdFeHBvcnRzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAobW9kLm1hcC5pc0RlZmluZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobW9kLmV4cG9ydHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoZGVmaW5lZFttb2QubWFwLmlkXSA9IG1vZC5leHBvcnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAobW9kLmV4cG9ydHMgPSBkZWZpbmVkW21vZC5tYXAuaWRdID0ge30pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdtb2R1bGUnOiBmdW5jdGlvbiAobW9kKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1vZC5tb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZC5tb2R1bGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChtb2QubW9kdWxlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG1vZC5tYXAuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmk6IG1vZC5tYXAudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldE93bihjb25maWcuY29uZmlnLCBtb2QubWFwLmlkKSB8fCB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBtb2QuZXhwb3J0cyB8fCAobW9kLmV4cG9ydHMgPSB7fSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIGNsZWFuUmVnaXN0cnkoaWQpIHtcbiAgICAgICAgICAgIC8vQ2xlYW4gdXAgbWFjaGluZXJ5IHVzZWQgZm9yIHdhaXRpbmcgbW9kdWxlcy5cbiAgICAgICAgICAgIGRlbGV0ZSByZWdpc3RyeVtpZF07XG4gICAgICAgICAgICBkZWxldGUgZW5hYmxlZFJlZ2lzdHJ5W2lkXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGJyZWFrQ3ljbGUobW9kLCB0cmFjZWQsIHByb2Nlc3NlZCkge1xuICAgICAgICAgICAgdmFyIGlkID0gbW9kLm1hcC5pZDtcblxuICAgICAgICAgICAgaWYgKG1vZC5lcnJvcikge1xuICAgICAgICAgICAgICAgIG1vZC5lbWl0KCdlcnJvcicsIG1vZC5lcnJvcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRyYWNlZFtpZF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGVhY2gobW9kLmRlcE1hcHMsIGZ1bmN0aW9uIChkZXBNYXAsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlcElkID0gZGVwTWFwLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwID0gZ2V0T3duKHJlZ2lzdHJ5LCBkZXBJZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9Pbmx5IGZvcmNlIHRoaW5ncyB0aGF0IGhhdmUgbm90IGNvbXBsZXRlZFxuICAgICAgICAgICAgICAgICAgICAvL2JlaW5nIGRlZmluZWQsIHNvIHN0aWxsIGluIHRoZSByZWdpc3RyeSxcbiAgICAgICAgICAgICAgICAgICAgLy9hbmQgb25seSBpZiBpdCBoYXMgbm90IGJlZW4gbWF0Y2hlZCB1cFxuICAgICAgICAgICAgICAgICAgICAvL2luIHRoZSBtb2R1bGUgYWxyZWFkeS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlcCAmJiAhbW9kLmRlcE1hdGNoZWRbaV0gJiYgIXByb2Nlc3NlZFtkZXBJZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZXRPd24odHJhY2VkLCBkZXBJZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2QuZGVmaW5lRGVwKGksIGRlZmluZWRbZGVwSWRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2QuY2hlY2soKTsgLy9wYXNzIGZhbHNlP1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha0N5Y2xlKGRlcCwgdHJhY2VkLCBwcm9jZXNzZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkW2lkXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjaGVja0xvYWRlZCgpIHtcbiAgICAgICAgICAgIHZhciBlcnIsIHVzaW5nUGF0aEZhbGxiYWNrLFxuICAgICAgICAgICAgICAgIHdhaXRJbnRlcnZhbCA9IGNvbmZpZy53YWl0U2Vjb25kcyAqIDEwMDAsXG4gICAgICAgICAgICAgICAgLy9JdCBpcyBwb3NzaWJsZSB0byBkaXNhYmxlIHRoZSB3YWl0IGludGVydmFsIGJ5IHVzaW5nIHdhaXRTZWNvbmRzIG9mIDAuXG4gICAgICAgICAgICAgICAgZXhwaXJlZCA9IHdhaXRJbnRlcnZhbCAmJiAoY29udGV4dC5zdGFydFRpbWUgKyB3YWl0SW50ZXJ2YWwpIDwgbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgICAgICAgbm9Mb2FkcyA9IFtdLFxuICAgICAgICAgICAgICAgIHJlcUNhbGxzID0gW10sXG4gICAgICAgICAgICAgICAgc3RpbGxMb2FkaW5nID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgbmVlZEN5Y2xlQ2hlY2sgPSB0cnVlO1xuXG4gICAgICAgICAgICAvL0RvIG5vdCBib3RoZXIgaWYgdGhpcyBjYWxsIHdhcyBhIHJlc3VsdCBvZiBhIGN5Y2xlIGJyZWFrLlxuICAgICAgICAgICAgaWYgKGluQ2hlY2tMb2FkZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGluQ2hlY2tMb2FkZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAvL0ZpZ3VyZSBvdXQgdGhlIHN0YXRlIG9mIGFsbCB0aGUgbW9kdWxlcy5cbiAgICAgICAgICAgIGVhY2hQcm9wKGVuYWJsZWRSZWdpc3RyeSwgZnVuY3Rpb24gKG1vZCkge1xuICAgICAgICAgICAgICAgIHZhciBtYXAgPSBtb2QubWFwLFxuICAgICAgICAgICAgICAgICAgICBtb2RJZCA9IG1hcC5pZDtcblxuICAgICAgICAgICAgICAgIC8vU2tpcCB0aGluZ3MgdGhhdCBhcmUgbm90IGVuYWJsZWQgb3IgaW4gZXJyb3Igc3RhdGUuXG4gICAgICAgICAgICAgICAgaWYgKCFtb2QuZW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFtYXAuaXNEZWZpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxQ2FsbHMucHVzaChtb2QpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghbW9kLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vSWYgdGhlIG1vZHVsZSBzaG91bGQgYmUgZXhlY3V0ZWQsIGFuZCBpdCBoYXMgbm90XG4gICAgICAgICAgICAgICAgICAgIC8vYmVlbiBpbml0ZWQgYW5kIHRpbWUgaXMgdXAsIHJlbWVtYmVyIGl0LlxuICAgICAgICAgICAgICAgICAgICBpZiAoIW1vZC5pbml0ZWQgJiYgZXhwaXJlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc1BhdGhGYWxsYmFjayhtb2RJZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2luZ1BhdGhGYWxsYmFjayA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RpbGxMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9Mb2Fkcy5wdXNoKG1vZElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVTY3JpcHQobW9kSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFtb2QuaW5pdGVkICYmIG1vZC5mZXRjaGVkICYmIG1hcC5pc0RlZmluZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RpbGxMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWFwLnByZWZpeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vTm8gcmVhc29uIHRvIGtlZXAgbG9va2luZyBmb3IgdW5maW5pc2hlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbG9hZGluZy4gSWYgdGhlIG9ubHkgc3RpbGxMb2FkaW5nIGlzIGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BsdWdpbiByZXNvdXJjZSB0aG91Z2gsIGtlZXAgZ29pbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9iZWNhdXNlIGl0IG1heSBiZSB0aGF0IGEgcGx1Z2luIHJlc291cmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pcyB3YWl0aW5nIG9uIGEgbm9uLXBsdWdpbiBjeWNsZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG5lZWRDeWNsZUNoZWNrID0gZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChleHBpcmVkICYmIG5vTG9hZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy9JZiB3YWl0IHRpbWUgZXhwaXJlZCwgdGhyb3cgZXJyb3Igb2YgdW5sb2FkZWQgbW9kdWxlcy5cbiAgICAgICAgICAgICAgICBlcnIgPSBtYWtlRXJyb3IoJ3RpbWVvdXQnLCAnTG9hZCB0aW1lb3V0IGZvciBtb2R1bGVzOiAnICsgbm9Mb2FkcywgbnVsbCwgbm9Mb2Fkcyk7XG4gICAgICAgICAgICAgICAgZXJyLmNvbnRleHROYW1lID0gY29udGV4dC5jb250ZXh0TmFtZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb25FcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL05vdCBleHBpcmVkLCBjaGVjayBmb3IgYSBjeWNsZS5cbiAgICAgICAgICAgIGlmIChuZWVkQ3ljbGVDaGVjaykge1xuICAgICAgICAgICAgICAgIGVhY2gocmVxQ2FsbHMsIGZ1bmN0aW9uIChtb2QpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtDeWNsZShtb2QsIHt9LCB7fSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vSWYgc3RpbGwgd2FpdGluZyBvbiBsb2FkcywgYW5kIHRoZSB3YWl0aW5nIGxvYWQgaXMgc29tZXRoaW5nXG4gICAgICAgICAgICAvL290aGVyIHRoYW4gYSBwbHVnaW4gcmVzb3VyY2UsIG9yIHRoZXJlIGFyZSBzdGlsbCBvdXRzdGFuZGluZ1xuICAgICAgICAgICAgLy9zY3JpcHRzLCB0aGVuIGp1c3QgdHJ5IGJhY2sgbGF0ZXIuXG4gICAgICAgICAgICBpZiAoKCFleHBpcmVkIHx8IHVzaW5nUGF0aEZhbGxiYWNrKSAmJiBzdGlsbExvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAvL1NvbWV0aGluZyBpcyBzdGlsbCB3YWl0aW5nIHRvIGxvYWQuIFdhaXQgZm9yIGl0LCBidXQgb25seVxuICAgICAgICAgICAgICAgIC8vaWYgYSB0aW1lb3V0IGlzIG5vdCBhbHJlYWR5IGluIGVmZmVjdC5cbiAgICAgICAgICAgICAgICBpZiAoKGlzQnJvd3NlciB8fCBpc1dlYldvcmtlcikgJiYgIWNoZWNrTG9hZGVkVGltZW91dElkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrTG9hZGVkVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja0xvYWRlZFRpbWVvdXRJZCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja0xvYWRlZCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbkNoZWNrTG9hZGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBNb2R1bGUgPSBmdW5jdGlvbiAobWFwKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50cyA9IGdldE93bih1bmRlZkV2ZW50cywgbWFwLmlkKSB8fCB7fTtcbiAgICAgICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgICAgICAgdGhpcy5zaGltID0gZ2V0T3duKGNvbmZpZy5zaGltLCBtYXAuaWQpO1xuICAgICAgICAgICAgdGhpcy5kZXBFeHBvcnRzID0gW107XG4gICAgICAgICAgICB0aGlzLmRlcE1hcHMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuZGVwTWF0Y2hlZCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW5NYXBzID0ge307XG4gICAgICAgICAgICB0aGlzLmRlcENvdW50ID0gMDtcblxuICAgICAgICAgICAgLyogdGhpcy5leHBvcnRzIHRoaXMuZmFjdG9yeVxuICAgICAgICAgICAgICAgdGhpcy5kZXBNYXBzID0gW10sXG4gICAgICAgICAgICAgICB0aGlzLmVuYWJsZWQsIHRoaXMuZmV0Y2hlZFxuICAgICAgICAgICAgKi9cbiAgICAgICAgfTtcblxuICAgICAgICBNb2R1bGUucHJvdG90eXBlID0ge1xuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKGRlcE1hcHMsIGZhY3RvcnksIGVycmJhY2ssIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICAgICAgICAgIC8vRG8gbm90IGRvIG1vcmUgaW5pdHMgaWYgYWxyZWFkeSBkb25lLiBDYW4gaGFwcGVuIGlmIHRoZXJlXG4gICAgICAgICAgICAgICAgLy9hcmUgbXVsdGlwbGUgZGVmaW5lIGNhbGxzIGZvciB0aGUgc2FtZSBtb2R1bGUuIFRoYXQgaXMgbm90XG4gICAgICAgICAgICAgICAgLy9hIG5vcm1hbCwgY29tbW9uIGNhc2UsIGJ1dCBpdCBpcyBhbHNvIG5vdCB1bmV4cGVjdGVkLlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmluaXRlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5mYWN0b3J5ID0gZmFjdG9yeTtcblxuICAgICAgICAgICAgICAgIGlmIChlcnJiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vUmVnaXN0ZXIgZm9yIGVycm9ycyBvbiB0aGlzIG1vZHVsZS5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbignZXJyb3InLCBlcnJiYWNrKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZXZlbnRzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vSWYgbm8gZXJyYmFjayBhbHJlYWR5LCBidXQgdGhlcmUgYXJlIGVycm9yIGxpc3RlbmVyc1xuICAgICAgICAgICAgICAgICAgICAvL29uIHRoaXMgbW9kdWxlLCBzZXQgdXAgYW4gZXJyYmFjayB0byBwYXNzIHRvIHRoZSBkZXBzLlxuICAgICAgICAgICAgICAgICAgICBlcnJiYWNrID0gYmluZCh0aGlzLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9EbyBhIGNvcHkgb2YgdGhlIGRlcGVuZGVuY3kgYXJyYXksIHNvIHRoYXRcbiAgICAgICAgICAgICAgICAvL3NvdXJjZSBpbnB1dHMgYXJlIG5vdCBtb2RpZmllZC4gRm9yIGV4YW1wbGVcbiAgICAgICAgICAgICAgICAvL1wic2hpbVwiIGRlcHMgYXJlIHBhc3NlZCBpbiBoZXJlIGRpcmVjdGx5LCBhbmRcbiAgICAgICAgICAgICAgICAvL2RvaW5nIGEgZGlyZWN0IG1vZGlmaWNhdGlvbiBvZiB0aGUgZGVwTWFwcyBhcnJheVxuICAgICAgICAgICAgICAgIC8vd291bGQgYWZmZWN0IHRoYXQgY29uZmlnLlxuICAgICAgICAgICAgICAgIHRoaXMuZGVwTWFwcyA9IGRlcE1hcHMgJiYgZGVwTWFwcy5zbGljZSgwKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZXJyYmFjayA9IGVycmJhY2s7XG5cbiAgICAgICAgICAgICAgICAvL0luZGljYXRlIHRoaXMgbW9kdWxlIGhhcyBiZSBpbml0aWFsaXplZFxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuaWdub3JlID0gb3B0aW9ucy5pZ25vcmU7XG5cbiAgICAgICAgICAgICAgICAvL0NvdWxkIGhhdmUgb3B0aW9uIHRvIGluaXQgdGhpcyBtb2R1bGUgaW4gZW5hYmxlZCBtb2RlLFxuICAgICAgICAgICAgICAgIC8vb3IgY291bGQgaGF2ZSBiZWVuIHByZXZpb3VzbHkgbWFya2VkIGFzIGVuYWJsZWQuIEhvd2V2ZXIsXG4gICAgICAgICAgICAgICAgLy90aGUgZGVwZW5kZW5jaWVzIGFyZSBub3Qga25vd24gdW50aWwgaW5pdCBpcyBjYWxsZWQuIFNvXG4gICAgICAgICAgICAgICAgLy9pZiBlbmFibGVkIHByZXZpb3VzbHksIG5vdyB0cmlnZ2VyIGRlcGVuZGVuY2llcyBhcyBlbmFibGVkLlxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmVuYWJsZWQgfHwgdGhpcy5lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vRW5hYmxlIHRoaXMgbW9kdWxlIGFuZCBkZXBlbmRlbmNpZXMuXG4gICAgICAgICAgICAgICAgICAgIC8vV2lsbCBjYWxsIHRoaXMuY2hlY2soKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBkZWZpbmVEZXA6IGZ1bmN0aW9uIChpLCBkZXBFeHBvcnRzKSB7XG4gICAgICAgICAgICAgICAgLy9CZWNhdXNlIG9mIGN5Y2xlcywgZGVmaW5lZCBjYWxsYmFjayBmb3IgYSBnaXZlblxuICAgICAgICAgICAgICAgIC8vZXhwb3J0IGNhbiBiZSBjYWxsZWQgbW9yZSB0aGFuIG9uY2UuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRlcE1hdGNoZWRbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXBNYXRjaGVkW2ldID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXBDb3VudCAtPSAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlcEV4cG9ydHNbaV0gPSBkZXBFeHBvcnRzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGZldGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmV0Y2hlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0YXJ0VGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgbWFwID0gdGhpcy5tYXA7XG5cbiAgICAgICAgICAgICAgICAvL0lmIHRoZSBtYW5hZ2VyIGlzIGZvciBhIHBsdWdpbiBtYW5hZ2VkIHJlc291cmNlLFxuICAgICAgICAgICAgICAgIC8vYXNrIHRoZSBwbHVnaW4gdG8gbG9hZCBpdCBub3cuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hpbSkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0Lm1ha2VSZXF1aXJlKHRoaXMubWFwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVCdWlsZENhbGxiYWNrOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pKHRoaXMuc2hpbS5kZXBzIHx8IFtdLCBiaW5kKHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXAucHJlZml4ID8gdGhpcy5jYWxsUGx1Z2luKCkgOiB0aGlzLmxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vUmVndWxhciBkZXBlbmRlbmN5LlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWFwLnByZWZpeCA/IHRoaXMuY2FsbFBsdWdpbigpIDogdGhpcy5sb2FkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgbG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciB1cmwgPSB0aGlzLm1hcC51cmw7XG5cbiAgICAgICAgICAgICAgICAvL1JlZ3VsYXIgZGVwZW5kZW5jeS5cbiAgICAgICAgICAgICAgICBpZiAoIXVybEZldGNoZWRbdXJsXSkge1xuICAgICAgICAgICAgICAgICAgICB1cmxGZXRjaGVkW3VybF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmxvYWQodGhpcy5tYXAuaWQsIHVybCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDaGVja3MgaWYgdGhlIG1vZHVsZSBpcyByZWFkeSB0byBkZWZpbmUgaXRzZWxmLCBhbmQgaWYgc28sXG4gICAgICAgICAgICAgKiBkZWZpbmUgaXQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNoZWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQgfHwgdGhpcy5lbmFibGluZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGVyciwgY2pzTW9kdWxlLFxuICAgICAgICAgICAgICAgICAgICBpZCA9IHRoaXMubWFwLmlkLFxuICAgICAgICAgICAgICAgICAgICBkZXBFeHBvcnRzID0gdGhpcy5kZXBFeHBvcnRzLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRzID0gdGhpcy5leHBvcnRzLFxuICAgICAgICAgICAgICAgICAgICBmYWN0b3J5ID0gdGhpcy5mYWN0b3J5O1xuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmluaXRlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBPbmx5IGZldGNoIGlmIG5vdCBhbHJlYWR5IGluIHRoZSBkZWZRdWV1ZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNQcm9wKGNvbnRleHQuZGVmUXVldWVNYXAsIGlkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCB0aGlzLmVycm9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmRlZmluaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vVGhlIGZhY3RvcnkgY291bGQgdHJpZ2dlciBhbm90aGVyIHJlcXVpcmUgY2FsbFxuICAgICAgICAgICAgICAgICAgICAvL3RoYXQgd291bGQgcmVzdWx0IGluIGNoZWNraW5nIHRoaXMgbW9kdWxlIHRvXG4gICAgICAgICAgICAgICAgICAgIC8vZGVmaW5lIGl0c2VsZiBhZ2Fpbi4gSWYgYWxyZWFkeSBpbiB0aGUgcHJvY2Vzc1xuICAgICAgICAgICAgICAgICAgICAvL29mIGRvaW5nIHRoYXQsIHNraXAgdGhpcyB3b3JrLlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmluaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kZXBDb3VudCA8IDEgJiYgIXRoaXMuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24oZmFjdG9yeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0lmIHRoZXJlIGlzIGFuIGVycm9yIGxpc3RlbmVyLCBmYXZvciBwYXNzaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90byB0aGF0IGluc3RlYWQgb2YgdGhyb3dpbmcgYW4gZXJyb3IuIEhvd2V2ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9vbmx5IGRvIGl0IGZvciBkZWZpbmUoKSdkICBtb2R1bGVzLiByZXF1aXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9lcnJiYWNrcyBzaG91bGQgbm90IGJlIGNhbGxlZCBmb3IgZmFpbHVyZXMgaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoZWlyIGNhbGxiYWNrcyAoIzY5OSkuIEhvd2V2ZXIgaWYgYSBnbG9iYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL29uRXJyb3IgaXMgc2V0LCB1c2UgdGhhdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHRoaXMuZXZlbnRzLmVycm9yICYmIHRoaXMubWFwLmlzRGVmaW5lKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXEub25FcnJvciAhPT0gZGVmYXVsdE9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydHMgPSBjb250ZXh0LmV4ZWNDYihpZCwgZmFjdG9yeSwgZGVwRXhwb3J0cywgZXhwb3J0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyciA9IGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzID0gY29udGV4dC5leGVjQ2IoaWQsIGZhY3RvcnksIGRlcEV4cG9ydHMsIGV4cG9ydHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZhdm9yIHJldHVybiB2YWx1ZSBvdmVyIGV4cG9ydHMuIElmIG5vZGUvY2pzIGluIHBsYXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlbiB3aWxsIG5vdCBoYXZlIGEgcmV0dXJuIHZhbHVlIGFueXdheS4gRmF2b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtb2R1bGUuZXhwb3J0cyBhc3NpZ25tZW50IG92ZXIgZXhwb3J0cyBvYmplY3QuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWFwLmlzRGVmaW5lICYmIGV4cG9ydHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjanNNb2R1bGUgPSB0aGlzLm1vZHVsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNqc01vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0cyA9IGNqc01vZHVsZS5leHBvcnRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudXNpbmdFeHBvcnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2V4cG9ydHMgYWxyZWFkeSBzZXQgdGhlIGRlZmluZWQgdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRzID0gdGhpcy5leHBvcnRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnIucmVxdWlyZU1hcCA9IHRoaXMubWFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnIucmVxdWlyZU1vZHVsZXMgPSB0aGlzLm1hcC5pc0RlZmluZSA/IFt0aGlzLm1hcC5pZF0gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnIucmVxdWlyZVR5cGUgPSB0aGlzLm1hcC5pc0RlZmluZSA/ICdkZWZpbmUnIDogJ3JlcXVpcmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25FcnJvcigodGhpcy5lcnJvciA9IGVycikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0p1c3QgYSBsaXRlcmFsIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0cyA9IGZhY3Rvcnk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwb3J0cyA9IGV4cG9ydHM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hcC5pc0RlZmluZSAmJiAhdGhpcy5pZ25vcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZpbmVkW2lkXSA9IGV4cG9ydHM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVxLm9uUmVzb3VyY2VMb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXNMb2FkTWFwcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlYWNoKHRoaXMuZGVwTWFwcywgZnVuY3Rpb24gKGRlcE1hcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzTG9hZE1hcHMucHVzaChkZXBNYXAubm9ybWFsaXplZE1hcCB8fCBkZXBNYXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxLm9uUmVzb3VyY2VMb2FkKGNvbnRleHQsIHRoaXMubWFwLCByZXNMb2FkTWFwcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0NsZWFuIHVwXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhblJlZ2lzdHJ5KGlkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZpbmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vRmluaXNoZWQgdGhlIGRlZmluZSBzdGFnZS4gQWxsb3cgY2FsbGluZyBjaGVjayBhZ2FpblxuICAgICAgICAgICAgICAgICAgICAvL3RvIGFsbG93IGRlZmluZSBub3RpZmljYXRpb25zIGJlbG93IGluIHRoZSBjYXNlIG9mIGFcbiAgICAgICAgICAgICAgICAgICAgLy9jeWNsZS5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZpbmluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlZmluZWQgJiYgIXRoaXMuZGVmaW5lRW1pdHRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZpbmVFbWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZGVmaW5lZCcsIHRoaXMuZXhwb3J0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmluZUVtaXRDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGNhbGxQbHVnaW46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWFwID0gdGhpcy5tYXAsXG4gICAgICAgICAgICAgICAgICAgIGlkID0gbWFwLmlkLFxuICAgICAgICAgICAgICAgICAgICAvL01hcCBhbHJlYWR5IG5vcm1hbGl6ZWQgdGhlIHByZWZpeC5cbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luTWFwID0gbWFrZU1vZHVsZU1hcChtYXAucHJlZml4KTtcblxuICAgICAgICAgICAgICAgIC8vTWFyayB0aGlzIGFzIGEgZGVwZW5kZW5jeSBmb3IgdGhpcyBwbHVnaW4sIHNvIGl0XG4gICAgICAgICAgICAgICAgLy9jYW4gYmUgdHJhY2VkIGZvciBjeWNsZXMuXG4gICAgICAgICAgICAgICAgdGhpcy5kZXBNYXBzLnB1c2gocGx1Z2luTWFwKTtcblxuICAgICAgICAgICAgICAgIG9uKHBsdWdpbk1hcCwgJ2RlZmluZWQnLCBiaW5kKHRoaXMsIGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxvYWQsIG5vcm1hbGl6ZWRNYXAsIG5vcm1hbGl6ZWRNb2QsXG4gICAgICAgICAgICAgICAgICAgICAgICBidW5kbGVJZCA9IGdldE93bihidW5kbGVzTWFwLCB0aGlzLm1hcC5pZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gdGhpcy5tYXAubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudE5hbWUgPSB0aGlzLm1hcC5wYXJlbnRNYXAgPyB0aGlzLm1hcC5wYXJlbnRNYXAubmFtZSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFJlcXVpcmUgPSBjb250ZXh0Lm1ha2VSZXF1aXJlKG1hcC5wYXJlbnRNYXAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVCdWlsZENhbGxiYWNrOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvL0lmIGN1cnJlbnQgbWFwIGlzIG5vdCBub3JtYWxpemVkLCB3YWl0IGZvciB0aGF0XG4gICAgICAgICAgICAgICAgICAgIC8vbm9ybWFsaXplZCBuYW1lIHRvIGxvYWQgaW5zdGVhZCBvZiBjb250aW51aW5nLlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXAudW5ub3JtYWxpemVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL05vcm1hbGl6ZSB0aGUgSUQgaWYgdGhlIHBsdWdpbiBhbGxvd3MgaXQuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGx1Z2luLm5vcm1hbGl6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBwbHVnaW4ubm9ybWFsaXplKG5hbWUsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBub3JtYWxpemUobmFtZSwgcGFyZW50TmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcHJlZml4IGFuZCBuYW1lIHNob3VsZCBhbHJlYWR5IGJlIG5vcm1hbGl6ZWQsIG5vIG5lZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZm9yIGFwcGx5aW5nIG1hcCBjb25maWcgYWdhaW4gZWl0aGVyLlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplZE1hcCA9IG1ha2VNb2R1bGVNYXAobWFwLnByZWZpeCArICchJyArIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcC5wYXJlbnRNYXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uKG5vcm1hbGl6ZWRNYXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RlZmluZWQnLCBiaW5kKHRoaXMsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcC5ub3JtYWxpemVkTWFwID0gbm9ybWFsaXplZE1hcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0KFtdLCBmdW5jdGlvbiAoKSB7IHJldHVybiB2YWx1ZTsgfSwgbnVsbCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRNb2QgPSBnZXRPd24ocmVnaXN0cnksIG5vcm1hbGl6ZWRNYXAuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vcm1hbGl6ZWRNb2QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL01hcmsgdGhpcyBhcyBhIGRlcGVuZGVuY3kgZm9yIHRoaXMgcGx1Z2luLCBzbyBpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2FuIGJlIHRyYWNlZCBmb3IgY3ljbGVzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVwTWFwcy5wdXNoKG5vcm1hbGl6ZWRNYXApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZXZlbnRzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRNb2Qub24oJ2Vycm9yJywgYmluZCh0aGlzLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVkTW9kLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvL0lmIGEgcGF0aHMgY29uZmlnLCB0aGVuIGp1c3QgbG9hZCB0aGF0IGZpbGUgaW5zdGVhZCB0b1xuICAgICAgICAgICAgICAgICAgICAvL3Jlc29sdmUgdGhlIHBsdWdpbiwgYXMgaXQgaXMgYnVpbHQgaW50byB0aGF0IHBhdGhzIGxheWVyLlxuICAgICAgICAgICAgICAgICAgICBpZiAoYnVuZGxlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFwLnVybCA9IGNvbnRleHQubmFtZVRvVXJsKGJ1bmRsZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbG9hZCA9IGJpbmQodGhpcywgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXQoW10sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZhbHVlOyB9LCBudWxsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGxvYWQuZXJyb3IgPSBiaW5kKHRoaXMsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIucmVxdWlyZU1vZHVsZXMgPSBbaWRdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1JlbW92ZSB0ZW1wIHVubm9ybWFsaXplZCBtb2R1bGVzIGZvciB0aGlzIG1vZHVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc2luY2UgdGhleSB3aWxsIG5ldmVyIGJlIHJlc29sdmVkIG90aGVyd2lzZSBub3cuXG4gICAgICAgICAgICAgICAgICAgICAgICBlYWNoUHJvcChyZWdpc3RyeSwgZnVuY3Rpb24gKG1vZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2QubWFwLmlkLmluZGV4T2YoaWQgKyAnX3Vubm9ybWFsaXplZCcpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFuUmVnaXN0cnkobW9kLm1hcC5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9BbGxvdyBwbHVnaW5zIHRvIGxvYWQgb3RoZXIgY29kZSB3aXRob3V0IGhhdmluZyB0byBrbm93IHRoZVxuICAgICAgICAgICAgICAgICAgICAvL2NvbnRleHQgb3IgaG93IHRvICdjb21wbGV0ZScgdGhlIGxvYWQuXG4gICAgICAgICAgICAgICAgICAgIGxvYWQuZnJvbVRleHQgPSBiaW5kKHRoaXMsIGZ1bmN0aW9uICh0ZXh0LCB0ZXh0QWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKmpzbGludCBldmlsOiB0cnVlICovXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kdWxlTmFtZSA9IG1hcC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZU1hcCA9IG1ha2VNb2R1bGVNYXAobW9kdWxlTmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzSW50ZXJhY3RpdmUgPSB1c2VJbnRlcmFjdGl2ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9BcyBvZiAyLjEuMCwgc3VwcG9ydCBqdXN0IHBhc3NpbmcgdGhlIHRleHQsIHRvIHJlaW5mb3JjZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy9mcm9tVGV4dCBvbmx5IGJlaW5nIGNhbGxlZCBvbmNlIHBlciByZXNvdXJjZS4gU3RpbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc3VwcG9ydCBvbGQgc3R5bGUgb2YgcGFzc2luZyBtb2R1bGVOYW1lIGJ1dCBkaXNjYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoYXQgbW9kdWxlTmFtZSBpbiBmYXZvciBvZiB0aGUgaW50ZXJuYWwgcmVmLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHRBbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dEFsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9UdXJuIG9mZiBpbnRlcmFjdGl2ZSBzY3JpcHQgbWF0Y2hpbmcgZm9yIElFIGZvciBhbnkgZGVmaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NhbGxzIGluIHRoZSB0ZXh0LCB0aGVuIHR1cm4gaXQgYmFjayBvbiBhdCB0aGUgZW5kLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc0ludGVyYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlSW50ZXJhY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9QcmltZSB0aGUgc3lzdGVtIGJ5IGNyZWF0aW5nIGEgbW9kdWxlIGluc3RhbmNlIGZvclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9pdC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGdldE1vZHVsZShtb2R1bGVNYXApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1RyYW5zZmVyIGFueSBjb25maWcgdG8gdGhpcyBvdGhlciBtb2R1bGUuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzUHJvcChjb25maWcuY29uZmlnLCBpZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcuY29uZmlnW21vZHVsZU5hbWVdID0gY29uZmlnLmNvbmZpZ1tpZF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxLmV4ZWModGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uRXJyb3IobWFrZUVycm9yKCdmcm9tdGV4dGV2YWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Zyb21UZXh0IGV2YWwgZm9yICcgKyBpZCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgZmFpbGVkOiAnICsgZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaWRdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNJbnRlcmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZUludGVyYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9NYXJrIHRoaXMgYXMgYSBkZXBlbmRlbmN5IGZvciB0aGUgcGx1Z2luXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3Jlc291cmNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlcE1hcHMucHVzaChtb2R1bGVNYXApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1N1cHBvcnQgYW5vbnltb3VzIG1vZHVsZXMuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmNvbXBsZXRlTG9hZChtb2R1bGVOYW1lKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9CaW5kIHRoZSB2YWx1ZSBvZiB0aGF0IG1vZHVsZSB0byB0aGUgdmFsdWUgZm9yIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcmVzb3VyY2UgSUQuXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFJlcXVpcmUoW21vZHVsZU5hbWVdLCBsb2FkKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9Vc2UgcGFyZW50TmFtZSBoZXJlIHNpbmNlIHRoZSBwbHVnaW4ncyBuYW1lIGlzIG5vdCByZWxpYWJsZSxcbiAgICAgICAgICAgICAgICAgICAgLy9jb3VsZCBiZSBzb21lIHdlaXJkIHN0cmluZyB3aXRoIG5vIHBhdGggdGhhdCBhY3R1YWxseSB3YW50cyB0b1xuICAgICAgICAgICAgICAgICAgICAvL3JlZmVyZW5jZSB0aGUgcGFyZW50TmFtZSdzIHBhdGguXG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbi5sb2FkKG1hcC5uYW1lLCBsb2NhbFJlcXVpcmUsIGxvYWQsIGNvbmZpZyk7XG4gICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgICAgY29udGV4dC5lbmFibGUocGx1Z2luTWFwLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbk1hcHNbcGx1Z2luTWFwLmlkXSA9IHBsdWdpbk1hcDtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGVuYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGVuYWJsZWRSZWdpc3RyeVt0aGlzLm1hcC5pZF0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAvL1NldCBmbGFnIG1lbnRpb25pbmcgdGhhdCB0aGUgbW9kdWxlIGlzIGVuYWJsaW5nLFxuICAgICAgICAgICAgICAgIC8vc28gdGhhdCBpbW1lZGlhdGUgY2FsbHMgdG8gdGhlIGRlZmluZWQgY2FsbGJhY2tzXG4gICAgICAgICAgICAgICAgLy9mb3IgZGVwZW5kZW5jaWVzIGRvIG5vdCB0cmlnZ2VyIGluYWR2ZXJ0ZW50IGxvYWRcbiAgICAgICAgICAgICAgICAvL3dpdGggdGhlIGRlcENvdW50IHN0aWxsIGJlaW5nIHplcm8uXG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAvL0VuYWJsZSBlYWNoIGRlcGVuZGVuY3lcbiAgICAgICAgICAgICAgICBlYWNoKHRoaXMuZGVwTWFwcywgYmluZCh0aGlzLCBmdW5jdGlvbiAoZGVwTWFwLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpZCwgbW9kLCBoYW5kbGVyO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGVwTWFwID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9EZXBlbmRlbmN5IG5lZWRzIHRvIGJlIGNvbnZlcnRlZCB0byBhIGRlcE1hcFxuICAgICAgICAgICAgICAgICAgICAgICAgLy9hbmQgd2lyZWQgdXAgdG8gdGhpcyBtb2R1bGUuXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXBNYXAgPSBtYWtlTW9kdWxlTWFwKGRlcE1hcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMubWFwLmlzRGVmaW5lID8gdGhpcy5tYXAgOiB0aGlzLm1hcC5wYXJlbnRNYXApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuc2tpcE1hcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlcE1hcHNbaV0gPSBkZXBNYXA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIgPSBnZXRPd24oaGFuZGxlcnMsIGRlcE1hcC5pZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXBFeHBvcnRzW2ldID0gaGFuZGxlcih0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVwQ291bnQgKz0gMTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgb24oZGVwTWFwLCAnZGVmaW5lZCcsIGJpbmQodGhpcywgZnVuY3Rpb24gKGRlcEV4cG9ydHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51bmRlZmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZpbmVEZXAoaSwgZGVwRXhwb3J0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lcnJiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb24oZGVwTWFwLCAnZXJyb3InLCBiaW5kKHRoaXMsIHRoaXMuZXJyYmFjaykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmV2ZW50cy5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vIGRpcmVjdCBlcnJiYWNrIG9uIHRoaXMgbW9kdWxlLCBidXQgc29tZXRoaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZWxzZSBpcyBsaXN0ZW5pbmcgZm9yIGVycm9ycywgc28gYmUgc3VyZSB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb3BhZ2F0ZSB0aGUgZXJyb3IgY29ycmVjdGx5LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uKGRlcE1hcCwgJ2Vycm9yJywgYmluZCh0aGlzLCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWQgPSBkZXBNYXAuaWQ7XG4gICAgICAgICAgICAgICAgICAgIG1vZCA9IHJlZ2lzdHJ5W2lkXTtcblxuICAgICAgICAgICAgICAgICAgICAvL1NraXAgc3BlY2lhbCBtb2R1bGVzIGxpa2UgJ3JlcXVpcmUnLCAnZXhwb3J0cycsICdtb2R1bGUnXG4gICAgICAgICAgICAgICAgICAgIC8vQWxzbywgZG9uJ3QgY2FsbCBlbmFibGUgaWYgaXQgaXMgYWxyZWFkeSBlbmFibGVkLFxuICAgICAgICAgICAgICAgICAgICAvL2ltcG9ydGFudCBpbiBjaXJjdWxhciBkZXBlbmRlbmN5IGNhc2VzLlxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc1Byb3AoaGFuZGxlcnMsIGlkKSAmJiBtb2QgJiYgIW1vZC5lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmVuYWJsZShkZXBNYXAsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgICAgLy9FbmFibGUgZWFjaCBwbHVnaW4gdGhhdCBpcyB1c2VkIGluXG4gICAgICAgICAgICAgICAgLy9hIGRlcGVuZGVuY3lcbiAgICAgICAgICAgICAgICBlYWNoUHJvcCh0aGlzLnBsdWdpbk1hcHMsIGJpbmQodGhpcywgZnVuY3Rpb24gKHBsdWdpbk1hcCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gZ2V0T3duKHJlZ2lzdHJ5LCBwbHVnaW5NYXAuaWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobW9kICYmICFtb2QuZW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5lbmFibGUocGx1Z2luTWFwLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2soKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG9uOiBmdW5jdGlvbiAobmFtZSwgY2IpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2JzID0gdGhpcy5ldmVudHNbbmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKCFjYnMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2JzID0gdGhpcy5ldmVudHNbbmFtZV0gPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2JzLnB1c2goY2IpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZW1pdDogZnVuY3Rpb24gKG5hbWUsIGV2dCkge1xuICAgICAgICAgICAgICAgIGVhY2godGhpcy5ldmVudHNbbmFtZV0sIGZ1bmN0aW9uIChjYikge1xuICAgICAgICAgICAgICAgICAgICBjYihldnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vTm93IHRoYXQgdGhlIGVycm9yIGhhbmRsZXIgd2FzIHRyaWdnZXJlZCwgcmVtb3ZlXG4gICAgICAgICAgICAgICAgICAgIC8vdGhlIGxpc3RlbmVycywgc2luY2UgdGhpcyBicm9rZW4gTW9kdWxlIGluc3RhbmNlXG4gICAgICAgICAgICAgICAgICAgIC8vY2FuIHN0YXkgYXJvdW5kIGZvciBhIHdoaWxlIGluIHRoZSByZWdpc3RyeS5cbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuZXZlbnRzW25hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiBjYWxsR2V0TW9kdWxlKGFyZ3MpIHtcbiAgICAgICAgICAgIC8vU2tpcCBtb2R1bGVzIGFscmVhZHkgZGVmaW5lZC5cbiAgICAgICAgICAgIGlmICghaGFzUHJvcChkZWZpbmVkLCBhcmdzWzBdKSkge1xuICAgICAgICAgICAgICAgIGdldE1vZHVsZShtYWtlTW9kdWxlTWFwKGFyZ3NbMF0sIG51bGwsIHRydWUpKS5pbml0KGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIobm9kZSwgZnVuYywgbmFtZSwgaWVOYW1lKSB7XG4gICAgICAgICAgICAvL0Zhdm9yIGRldGFjaEV2ZW50IGJlY2F1c2Ugb2YgSUU5XG4gICAgICAgICAgICAvL2lzc3VlLCBzZWUgYXR0YWNoRXZlbnQvYWRkRXZlbnRMaXN0ZW5lciBjb21tZW50IGVsc2V3aGVyZVxuICAgICAgICAgICAgLy9pbiB0aGlzIGZpbGUuXG4gICAgICAgICAgICBpZiAobm9kZS5kZXRhY2hFdmVudCAmJiAhaXNPcGVyYSkge1xuICAgICAgICAgICAgICAgIC8vUHJvYmFibHkgSUUuIElmIG5vdCBpdCB3aWxsIHRocm93IGFuIGVycm9yLCB3aGljaCB3aWxsIGJlXG4gICAgICAgICAgICAgICAgLy91c2VmdWwgdG8ga25vdy5cbiAgICAgICAgICAgICAgICBpZiAoaWVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZGV0YWNoRXZlbnQoaWVOYW1lLCBmdW5jKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBmdW5jLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogR2l2ZW4gYW4gZXZlbnQgZnJvbSBhIHNjcmlwdCBub2RlLCBnZXQgdGhlIHJlcXVpcmVqcyBpbmZvIGZyb20gaXQsXG4gICAgICAgICAqIGFuZCB0aGVuIHJlbW92ZXMgdGhlIGV2ZW50IGxpc3RlbmVycyBvbiB0aGUgbm9kZS5cbiAgICAgICAgICogQHBhcmFtIHtFdmVudH0gZXZ0XG4gICAgICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBnZXRTY3JpcHREYXRhKGV2dCkge1xuICAgICAgICAgICAgLy9Vc2luZyBjdXJyZW50VGFyZ2V0IGluc3RlYWQgb2YgdGFyZ2V0IGZvciBGaXJlZm94IDIuMCdzIHNha2UuIE5vdFxuICAgICAgICAgICAgLy9hbGwgb2xkIGJyb3dzZXJzIHdpbGwgYmUgc3VwcG9ydGVkLCBidXQgdGhpcyBvbmUgd2FzIGVhc3kgZW5vdWdoXG4gICAgICAgICAgICAvL3RvIHN1cHBvcnQgYW5kIHN0aWxsIG1ha2VzIHNlbnNlLlxuICAgICAgICAgICAgdmFyIG5vZGUgPSBldnQuY3VycmVudFRhcmdldCB8fCBldnQuc3JjRWxlbWVudDtcblxuICAgICAgICAgICAgLy9SZW1vdmUgdGhlIGxpc3RlbmVycyBvbmNlIGhlcmUuXG4gICAgICAgICAgICByZW1vdmVMaXN0ZW5lcihub2RlLCBjb250ZXh0Lm9uU2NyaXB0TG9hZCwgJ2xvYWQnLCAnb25yZWFkeXN0YXRlY2hhbmdlJyk7XG4gICAgICAgICAgICByZW1vdmVMaXN0ZW5lcihub2RlLCBjb250ZXh0Lm9uU2NyaXB0RXJyb3IsICdlcnJvcicpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5vZGU6IG5vZGUsXG4gICAgICAgICAgICAgICAgaWQ6IG5vZGUgJiYgbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVxdWlyZW1vZHVsZScpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaW50YWtlRGVmaW5lcygpIHtcbiAgICAgICAgICAgIHZhciBhcmdzO1xuXG4gICAgICAgICAgICAvL0FueSBkZWZpbmVkIG1vZHVsZXMgaW4gdGhlIGdsb2JhbCBxdWV1ZSwgaW50YWtlIHRoZW0gbm93LlxuICAgICAgICAgICAgdGFrZUdsb2JhbFF1ZXVlKCk7XG5cbiAgICAgICAgICAgIC8vTWFrZSBzdXJlIGFueSByZW1haW5pbmcgZGVmUXVldWUgaXRlbXMgZ2V0IHByb3Blcmx5IHByb2Nlc3NlZC5cbiAgICAgICAgICAgIHdoaWxlIChkZWZRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBhcmdzID0gZGVmUXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICBpZiAoYXJnc1swXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25FcnJvcihtYWtlRXJyb3IoJ21pc21hdGNoJywgJ01pc21hdGNoZWQgYW5vbnltb3VzIGRlZmluZSgpIG1vZHVsZTogJyArXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0pKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL2FyZ3MgYXJlIGlkLCBkZXBzLCBmYWN0b3J5LiBTaG91bGQgYmUgbm9ybWFsaXplZCBieSB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy9kZWZpbmUoKSBmdW5jdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgY2FsbEdldE1vZHVsZShhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250ZXh0LmRlZlF1ZXVlTWFwID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgICAgICBjb250ZXh0TmFtZTogY29udGV4dE5hbWUsXG4gICAgICAgICAgICByZWdpc3RyeTogcmVnaXN0cnksXG4gICAgICAgICAgICBkZWZpbmVkOiBkZWZpbmVkLFxuICAgICAgICAgICAgdXJsRmV0Y2hlZDogdXJsRmV0Y2hlZCxcbiAgICAgICAgICAgIGRlZlF1ZXVlOiBkZWZRdWV1ZSxcbiAgICAgICAgICAgIGRlZlF1ZXVlTWFwOiB7fSxcbiAgICAgICAgICAgIE1vZHVsZTogTW9kdWxlLFxuICAgICAgICAgICAgbWFrZU1vZHVsZU1hcDogbWFrZU1vZHVsZU1hcCxcbiAgICAgICAgICAgIG5leHRUaWNrOiByZXEubmV4dFRpY2ssXG4gICAgICAgICAgICBvbkVycm9yOiBvbkVycm9yLFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFNldCBhIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBjb250ZXh0LlxuICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNmZyBjb25maWcgb2JqZWN0IHRvIGludGVncmF0ZS5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY29uZmlndXJlOiBmdW5jdGlvbiAoY2ZnKSB7XG4gICAgICAgICAgICAgICAgLy9NYWtlIHN1cmUgdGhlIGJhc2VVcmwgZW5kcyBpbiBhIHNsYXNoLlxuICAgICAgICAgICAgICAgIGlmIChjZmcuYmFzZVVybCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2ZnLmJhc2VVcmwuY2hhckF0KGNmZy5iYXNlVXJsLmxlbmd0aCAtIDEpICE9PSAnLycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNmZy5iYXNlVXJsICs9ICcvJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENvbnZlcnQgb2xkIHN0eWxlIHVybEFyZ3Mgc3RyaW5nIHRvIGEgZnVuY3Rpb24uXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjZmcudXJsQXJncyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybEFyZ3MgPSBjZmcudXJsQXJncztcbiAgICAgICAgICAgICAgICAgICAgY2ZnLnVybEFyZ3MgPSBmdW5jdGlvbihpZCwgdXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHVybEFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9TYXZlIG9mZiB0aGUgcGF0aHMgc2luY2UgdGhleSByZXF1aXJlIHNwZWNpYWwgcHJvY2Vzc2luZyxcbiAgICAgICAgICAgICAgICAvL3RoZXkgYXJlIGFkZGl0aXZlLlxuICAgICAgICAgICAgICAgIHZhciBzaGltID0gY29uZmlnLnNoaW0sXG4gICAgICAgICAgICAgICAgICAgIG9ianMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1bmRsZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXA6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGVhY2hQcm9wKGNmZywgZnVuY3Rpb24gKHZhbHVlLCBwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmpzW3Byb3BdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbmZpZ1twcm9wXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ1twcm9wXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWl4aW4oY29uZmlnW3Byb3BdLCB2YWx1ZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWdbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy9SZXZlcnNlIG1hcCB0aGUgYnVuZGxlc1xuICAgICAgICAgICAgICAgIGlmIChjZmcuYnVuZGxlcykge1xuICAgICAgICAgICAgICAgICAgICBlYWNoUHJvcChjZmcuYnVuZGxlcywgZnVuY3Rpb24gKHZhbHVlLCBwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlYWNoKHZhbHVlLCBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ICE9PSBwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1bmRsZXNNYXBbdl0gPSBwcm9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL01lcmdlIHNoaW1cbiAgICAgICAgICAgICAgICBpZiAoY2ZnLnNoaW0pIHtcbiAgICAgICAgICAgICAgICAgICAgZWFjaFByb3AoY2ZnLnNoaW0sIGZ1bmN0aW9uICh2YWx1ZSwgaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vTm9ybWFsaXplIHRoZSBzdHJ1Y3R1cmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXBzOiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHZhbHVlLmV4cG9ydHMgfHwgdmFsdWUuaW5pdCkgJiYgIXZhbHVlLmV4cG9ydHNGbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmV4cG9ydHNGbiA9IGNvbnRleHQubWFrZVNoaW1FeHBvcnRzKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaW1baWRdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBjb25maWcuc2hpbSA9IHNoaW07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9BZGp1c3QgcGFja2FnZXMgaWYgbmVjZXNzYXJ5LlxuICAgICAgICAgICAgICAgIGlmIChjZmcucGFja2FnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgZWFjaChjZmcucGFja2FnZXMsIGZ1bmN0aW9uIChwa2dPYmopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsb2NhdGlvbiwgbmFtZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcGtnT2JqID0gdHlwZW9mIHBrZ09iaiA9PT0gJ3N0cmluZycgPyB7bmFtZTogcGtnT2JqfSA6IHBrZ09iajtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IHBrZ09iai5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24gPSBwa2dPYmoubG9jYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcucGF0aHNbbmFtZV0gPSBwa2dPYmoubG9jYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vU2F2ZSBwb2ludGVyIHRvIG1haW4gbW9kdWxlIElEIGZvciBwa2cgbmFtZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vUmVtb3ZlIGxlYWRpbmcgZG90IGluIG1haW4sIHNvIG1haW4gcGF0aHMgYXJlIG5vcm1hbGl6ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2FuZCByZW1vdmUgYW55IHRyYWlsaW5nIC5qcywgc2luY2UgZGlmZmVyZW50IHBhY2thZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZW52cyBoYXZlIGRpZmZlcmVudCBjb252ZW50aW9uczogc29tZSB1c2UgYSBtb2R1bGUgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc29tZSB1c2UgYSBmaWxlIG5hbWUuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWcucGtnc1tuYW1lXSA9IHBrZ09iai5uYW1lICsgJy8nICsgKHBrZ09iai5tYWluIHx8ICdtYWluJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShjdXJyRGlyUmVnRXhwLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShqc1N1ZmZpeFJlZ0V4cCwgJycpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL0lmIHRoZXJlIGFyZSBhbnkgXCJ3YWl0aW5nIHRvIGV4ZWN1dGVcIiBtb2R1bGVzIGluIHRoZSByZWdpc3RyeSxcbiAgICAgICAgICAgICAgICAvL3VwZGF0ZSB0aGUgbWFwcyBmb3IgdGhlbSwgc2luY2UgdGhlaXIgaW5mbywgbGlrZSBVUkxzIHRvIGxvYWQsXG4gICAgICAgICAgICAgICAgLy9tYXkgaGF2ZSBjaGFuZ2VkLlxuICAgICAgICAgICAgICAgIGVhY2hQcm9wKHJlZ2lzdHJ5LCBmdW5jdGlvbiAobW9kLCBpZCkge1xuICAgICAgICAgICAgICAgICAgICAvL0lmIG1vZHVsZSBhbHJlYWR5IGhhcyBpbml0IGNhbGxlZCwgc2luY2UgaXQgaXMgdG9vXG4gICAgICAgICAgICAgICAgICAgIC8vbGF0ZSB0byBtb2RpZnkgdGhlbSwgYW5kIGlnbm9yZSB1bm5vcm1hbGl6ZWQgb25lc1xuICAgICAgICAgICAgICAgICAgICAvL3NpbmNlIHRoZXkgYXJlIHRyYW5zaWVudC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtb2QuaW5pdGVkICYmICFtb2QubWFwLnVubm9ybWFsaXplZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kLm1hcCA9IG1ha2VNb2R1bGVNYXAoaWQsIG51bGwsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvL0lmIGEgZGVwcyBhcnJheSBvciBhIGNvbmZpZyBjYWxsYmFjayBpcyBzcGVjaWZpZWQsIHRoZW4gY2FsbFxuICAgICAgICAgICAgICAgIC8vcmVxdWlyZSB3aXRoIHRob3NlIGFyZ3MuIFRoaXMgaXMgdXNlZnVsIHdoZW4gcmVxdWlyZSBpcyBkZWZpbmVkIGFzIGFcbiAgICAgICAgICAgICAgICAvL2NvbmZpZyBvYmplY3QgYmVmb3JlIHJlcXVpcmUuanMgaXMgbG9hZGVkLlxuICAgICAgICAgICAgICAgIGlmIChjZmcuZGVwcyB8fCBjZmcuY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5yZXF1aXJlKGNmZy5kZXBzIHx8IFtdLCBjZmcuY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG1ha2VTaGltRXhwb3J0czogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZm4oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXQ7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5pbml0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXQgPSB2YWx1ZS5pbml0LmFwcGx5KGdsb2JhbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0IHx8ICh2YWx1ZS5leHBvcnRzICYmIGdldEdsb2JhbCh2YWx1ZS5leHBvcnRzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmbjtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG1ha2VSZXF1aXJlOiBmdW5jdGlvbiAocmVsTWFwLCBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBsb2NhbFJlcXVpcmUoZGVwcywgY2FsbGJhY2ssIGVycmJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkLCBtYXAsIHJlcXVpcmVNb2Q7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZW5hYmxlQnVpbGRDYWxsYmFjayAmJiBjYWxsYmFjayAmJiBpc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suX19yZXF1aXJlSnNCdWlsZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRlcHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0ludmFsaWQgY2FsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvbkVycm9yKG1ha2VFcnJvcigncmVxdWlyZWFyZ3MnLCAnSW52YWxpZCByZXF1aXJlIGNhbGwnKSwgZXJyYmFjayk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vSWYgcmVxdWlyZXxleHBvcnRzfG1vZHVsZSBhcmUgcmVxdWVzdGVkLCBnZXQgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3ZhbHVlIGZvciB0aGVtIGZyb20gdGhlIHNwZWNpYWwgaGFuZGxlcnMuIENhdmVhdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcyBvbmx5IHdvcmtzIHdoaWxlIG1vZHVsZSBpcyBiZWluZyBkZWZpbmVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlbE1hcCAmJiBoYXNQcm9wKGhhbmRsZXJzLCBkZXBzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGVyc1tkZXBzXShyZWdpc3RyeVtyZWxNYXAuaWRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9TeW5jaHJvbm91cyBhY2Nlc3MgdG8gb25lIG1vZHVsZS4gSWYgcmVxdWlyZS5nZXQgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vYXZhaWxhYmxlIChhcyBpbiB0aGUgTm9kZSBhZGFwdGVyKSwgcHJlZmVyIHRoYXQuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVxLmdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXEuZ2V0KGNvbnRleHQsIGRlcHMsIHJlbE1hcCwgbG9jYWxSZXF1aXJlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9Ob3JtYWxpemUgbW9kdWxlIG5hbWUsIGlmIGl0IGNvbnRhaW5zIC4gb3IgLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcCA9IG1ha2VNb2R1bGVNYXAoZGVwcywgcmVsTWFwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA9IG1hcC5pZDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNQcm9wKGRlZmluZWQsIGlkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvbkVycm9yKG1ha2VFcnJvcignbm90bG9hZGVkJywgJ01vZHVsZSBuYW1lIFwiJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcIiBoYXMgbm90IGJlZW4gbG9hZGVkIHlldCBmb3IgY29udGV4dDogJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dE5hbWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZWxNYXAgPyAnJyA6ICcuIFVzZSByZXF1aXJlKFtdKScpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmaW5lZFtpZF07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvL0dyYWIgZGVmaW5lcyB3YWl0aW5nIGluIHRoZSBnbG9iYWwgcXVldWUuXG4gICAgICAgICAgICAgICAgICAgIGludGFrZURlZmluZXMoKTtcblxuICAgICAgICAgICAgICAgICAgICAvL01hcmsgYWxsIHRoZSBkZXBlbmRlbmNpZXMgYXMgbmVlZGluZyB0byBiZSBsb2FkZWQuXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9Tb21lIGRlZmluZXMgY291bGQgaGF2ZSBiZWVuIGFkZGVkIHNpbmNlIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy9yZXF1aXJlIGNhbGwsIGNvbGxlY3QgdGhlbS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGludGFrZURlZmluZXMoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZU1vZCA9IGdldE1vZHVsZShtYWtlTW9kdWxlTWFwKG51bGwsIHJlbE1hcCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1N0b3JlIGlmIG1hcCBjb25maWcgc2hvdWxkIGJlIGFwcGxpZWQgdG8gdGhpcyByZXF1aXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NhbGwgZm9yIGRlcGVuZGVuY2llcy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVNb2Quc2tpcE1hcCA9IG9wdGlvbnMuc2tpcE1hcDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZU1vZC5pbml0KGRlcHMsIGNhbGxiYWNrLCBlcnJiYWNrLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrTG9hZGVkKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2NhbFJlcXVpcmU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbWl4aW4obG9jYWxSZXF1aXJlLCB7XG4gICAgICAgICAgICAgICAgICAgIGlzQnJvd3NlcjogaXNCcm93c2VyLFxuXG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBDb252ZXJ0cyBhIG1vZHVsZSBuYW1lICsgLmV4dGVuc2lvbiBpbnRvIGFuIFVSTCBwYXRoLlxuICAgICAgICAgICAgICAgICAgICAgKiAqUmVxdWlyZXMqIHRoZSB1c2Ugb2YgYSBtb2R1bGUgbmFtZS4gSXQgZG9lcyBub3Qgc3VwcG9ydCB1c2luZ1xuICAgICAgICAgICAgICAgICAgICAgKiBwbGFpbiBVUkxzIGxpa2UgbmFtZVRvVXJsLlxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgdG9Vcmw6IGZ1bmN0aW9uIChtb2R1bGVOYW1lUGx1c0V4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9IG1vZHVsZU5hbWVQbHVzRXh0Lmxhc3RJbmRleE9mKCcuJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VnbWVudCA9IG1vZHVsZU5hbWVQbHVzRXh0LnNwbGl0KCcvJylbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNSZWxhdGl2ZSA9IHNlZ21lbnQgPT09ICcuJyB8fCBzZWdtZW50ID09PSAnLi4nO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0hhdmUgYSBmaWxlIGV4dGVuc2lvbiBhbGlhcywgYW5kIGl0IGlzIG5vdCB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZG90cyBmcm9tIGEgcmVsYXRpdmUgcGF0aC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEgJiYgKCFpc1JlbGF0aXZlIHx8IGluZGV4ID4gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHQgPSBtb2R1bGVOYW1lUGx1c0V4dC5zdWJzdHJpbmcoaW5kZXgsIG1vZHVsZU5hbWVQbHVzRXh0Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZVBsdXNFeHQgPSBtb2R1bGVOYW1lUGx1c0V4dC5zdWJzdHJpbmcoMCwgaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udGV4dC5uYW1lVG9Vcmwobm9ybWFsaXplKG1vZHVsZU5hbWVQbHVzRXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsTWFwICYmIHJlbE1hcC5pZCwgdHJ1ZSksIGV4dCwgIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIGRlZmluZWQ6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhhc1Byb3AoZGVmaW5lZCwgbWFrZU1vZHVsZU1hcChpZCwgcmVsTWFwLCBmYWxzZSwgdHJ1ZSkuaWQpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIHNwZWNpZmllZDogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA9IG1ha2VNb2R1bGVNYXAoaWQsIHJlbE1hcCwgZmFsc2UsIHRydWUpLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhhc1Byb3AoZGVmaW5lZCwgaWQpIHx8IGhhc1Byb3AocmVnaXN0cnksIGlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy9Pbmx5IGFsbG93IHVuZGVmIG9uIHRvcCBsZXZlbCByZXF1aXJlIGNhbGxzXG4gICAgICAgICAgICAgICAgaWYgKCFyZWxNYXApIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxSZXF1aXJlLnVuZGVmID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL0JpbmQgYW55IHdhaXRpbmcgZGVmaW5lKCkgY2FsbHMgdG8gdGhpcyBjb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy9maXggZm9yICM0MDhcbiAgICAgICAgICAgICAgICAgICAgICAgIHRha2VHbG9iYWxRdWV1ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWFwID0gbWFrZU1vZHVsZU1hcChpZCwgcmVsTWFwLCB0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2QgPSBnZXRPd24ocmVnaXN0cnksIGlkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kLnVuZGVmZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlU2NyaXB0KGlkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRlZmluZWRbaWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHVybEZldGNoZWRbbWFwLnVybF07XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdW5kZWZFdmVudHNbaWRdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0NsZWFuIHF1ZXVlZCBkZWZpbmVzIHRvby4gR28gYmFja3dhcmRzXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2luIGFycmF5IHNvIHRoYXQgdGhlIHNwbGljZXMgZG8gbm90XG4gICAgICAgICAgICAgICAgICAgICAgICAvL21lc3MgdXAgdGhlIGl0ZXJhdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVhY2hSZXZlcnNlKGRlZlF1ZXVlLCBmdW5jdGlvbihhcmdzLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3NbMF0gPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZlF1ZXVlLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjb250ZXh0LmRlZlF1ZXVlTWFwW2lkXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vSG9sZCBvbiB0byBsaXN0ZW5lcnMgaW4gY2FzZSB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL21vZHVsZSB3aWxsIGJlIGF0dGVtcHRlZCB0byBiZSByZWxvYWRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdXNpbmcgYSBkaWZmZXJlbnQgY29uZmlnLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2QuZXZlbnRzLmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZFdmVudHNbaWRdID0gbW9kLmV2ZW50cztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhblJlZ2lzdHJ5KGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbG9jYWxSZXF1aXJlO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDYWxsZWQgdG8gZW5hYmxlIGEgbW9kdWxlIGlmIGl0IGlzIHN0aWxsIGluIHRoZSByZWdpc3RyeVxuICAgICAgICAgICAgICogYXdhaXRpbmcgZW5hYmxlbWVudC4gQSBzZWNvbmQgYXJnLCBwYXJlbnQsIHRoZSBwYXJlbnQgbW9kdWxlLFxuICAgICAgICAgICAgICogaXMgcGFzc2VkIGluIGZvciBjb250ZXh0LCB3aGVuIHRoaXMgbWV0aG9kIGlzIG92ZXJyaWRkZW4gYnlcbiAgICAgICAgICAgICAqIHRoZSBvcHRpbWl6ZXIuIE5vdCBzaG93biBoZXJlIHRvIGtlZXAgY29kZSBjb21wYWN0LlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBlbmFibGU6IGZ1bmN0aW9uIChkZXBNYXApIHtcbiAgICAgICAgICAgICAgICB2YXIgbW9kID0gZ2V0T3duKHJlZ2lzdHJ5LCBkZXBNYXAuaWQpO1xuICAgICAgICAgICAgICAgIGlmIChtb2QpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0TW9kdWxlKGRlcE1hcCkuZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJbnRlcm5hbCBtZXRob2QgdXNlZCBieSBlbnZpcm9ubWVudCBhZGFwdGVycyB0byBjb21wbGV0ZSBhIGxvYWQgZXZlbnQuXG4gICAgICAgICAgICAgKiBBIGxvYWQgZXZlbnQgY291bGQgYmUgYSBzY3JpcHQgbG9hZCBvciBqdXN0IGEgbG9hZCBwYXNzIGZyb20gYSBzeW5jaHJvbm91c1xuICAgICAgICAgICAgICogbG9hZCBjYWxsLlxuICAgICAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IG1vZHVsZU5hbWUgdGhlIG5hbWUgb2YgdGhlIG1vZHVsZSB0byBwb3RlbnRpYWxseSBjb21wbGV0ZS5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgY29tcGxldGVMb2FkOiBmdW5jdGlvbiAobW9kdWxlTmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBmb3VuZCwgYXJncywgbW9kLFxuICAgICAgICAgICAgICAgICAgICBzaGltID0gZ2V0T3duKGNvbmZpZy5zaGltLCBtb2R1bGVOYW1lKSB8fCB7fSxcbiAgICAgICAgICAgICAgICAgICAgc2hFeHBvcnRzID0gc2hpbS5leHBvcnRzO1xuXG4gICAgICAgICAgICAgICAgdGFrZUdsb2JhbFF1ZXVlKCk7XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAoZGVmUXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MgPSBkZWZRdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJnc1swXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJnc1swXSA9IG1vZHVsZU5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL0lmIGFscmVhZHkgZm91bmQgYW4gYW5vbnltb3VzIG1vZHVsZSBhbmQgYm91bmQgaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdG8gdGhpcyBuYW1lLCB0aGVuIHRoaXMgaXMgc29tZSBvdGhlciBhbm9uIG1vZHVsZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy93YWl0aW5nIGZvciBpdHMgY29tcGxldGVMb2FkIHRvIGZpcmUuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzWzBdID09PSBtb2R1bGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL0ZvdW5kIG1hdGNoaW5nIGRlZmluZSBjYWxsIGZvciB0aGlzIHNjcmlwdCFcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNhbGxHZXRNb2R1bGUoYXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRleHQuZGVmUXVldWVNYXAgPSB7fTtcblxuICAgICAgICAgICAgICAgIC8vRG8gdGhpcyBhZnRlciB0aGUgY3ljbGUgb2YgY2FsbEdldE1vZHVsZSBpbiBjYXNlIHRoZSByZXN1bHRcbiAgICAgICAgICAgICAgICAvL29mIHRob3NlIGNhbGxzL2luaXQgY2FsbHMgY2hhbmdlcyB0aGUgcmVnaXN0cnkuXG4gICAgICAgICAgICAgICAgbW9kID0gZ2V0T3duKHJlZ2lzdHJ5LCBtb2R1bGVOYW1lKTtcblxuICAgICAgICAgICAgICAgIGlmICghZm91bmQgJiYgIWhhc1Byb3AoZGVmaW5lZCwgbW9kdWxlTmFtZSkgJiYgbW9kICYmICFtb2QuaW5pdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcuZW5mb3JjZURlZmluZSAmJiAoIXNoRXhwb3J0cyB8fCAhZ2V0R2xvYmFsKHNoRXhwb3J0cykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzUGF0aEZhbGxiYWNrKG1vZHVsZU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25FcnJvcihtYWtlRXJyb3IoJ25vZGVmaW5lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdObyBkZWZpbmUgY2FsbCBmb3IgJyArIG1vZHVsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21vZHVsZU5hbWVdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL0Egc2NyaXB0IHRoYXQgZG9lcyBub3QgY2FsbCBkZWZpbmUoKSwgc28ganVzdCBzaW11bGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGUgY2FsbCBmb3IgaXQuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsR2V0TW9kdWxlKFttb2R1bGVOYW1lLCAoc2hpbS5kZXBzIHx8IFtdKSwgc2hpbS5leHBvcnRzRm5dKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNoZWNrTG9hZGVkKCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIENvbnZlcnRzIGEgbW9kdWxlIG5hbWUgdG8gYSBmaWxlIHBhdGguIFN1cHBvcnRzIGNhc2VzIHdoZXJlXG4gICAgICAgICAgICAgKiBtb2R1bGVOYW1lIG1heSBhY3R1YWxseSBiZSBqdXN0IGFuIFVSTC5cbiAgICAgICAgICAgICAqIE5vdGUgdGhhdCBpdCAqKmRvZXMgbm90KiogY2FsbCBub3JtYWxpemUgb24gdGhlIG1vZHVsZU5hbWUsXG4gICAgICAgICAgICAgKiBpdCBpcyBhc3N1bWVkIHRvIGhhdmUgYWxyZWFkeSBiZWVuIG5vcm1hbGl6ZWQuIFRoaXMgaXMgYW5cbiAgICAgICAgICAgICAqIGludGVybmFsIEFQSSwgbm90IGEgcHVibGljIG9uZS4gVXNlIHRvVXJsIGZvciB0aGUgcHVibGljIEFQSS5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbmFtZVRvVXJsOiBmdW5jdGlvbiAobW9kdWxlTmFtZSwgZXh0LCBza2lwRXh0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhdGhzLCBzeW1zLCBpLCBwYXJlbnRNb2R1bGUsIHVybCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50UGF0aCwgYnVuZGxlSWQsXG4gICAgICAgICAgICAgICAgICAgIHBrZ01haW4gPSBnZXRPd24oY29uZmlnLnBrZ3MsIG1vZHVsZU5hbWUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHBrZ01haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZSA9IHBrZ01haW47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnVuZGxlSWQgPSBnZXRPd24oYnVuZGxlc01hcCwgbW9kdWxlTmFtZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYnVuZGxlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQubmFtZVRvVXJsKGJ1bmRsZUlkLCBleHQsIHNraXBFeHQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vSWYgYSBjb2xvbiBpcyBpbiB0aGUgVVJMLCBpdCBpbmRpY2F0ZXMgYSBwcm90b2NvbCBpcyB1c2VkIGFuZCBpdCBpcyBqdXN0XG4gICAgICAgICAgICAgICAgLy9hbiBVUkwgdG8gYSBmaWxlLCBvciBpZiBpdCBzdGFydHMgd2l0aCBhIHNsYXNoLCBjb250YWlucyBhIHF1ZXJ5IGFyZyAoaS5lLiA/KVxuICAgICAgICAgICAgICAgIC8vb3IgZW5kcyB3aXRoIC5qcywgdGhlbiBhc3N1bWUgdGhlIHVzZXIgbWVhbnQgdG8gdXNlIGFuIHVybCBhbmQgbm90IGEgbW9kdWxlIGlkLlxuICAgICAgICAgICAgICAgIC8vVGhlIHNsYXNoIGlzIGltcG9ydGFudCBmb3IgcHJvdG9jb2wtbGVzcyBVUkxzIGFzIHdlbGwgYXMgZnVsbCBwYXRocy5cbiAgICAgICAgICAgICAgICBpZiAocmVxLmpzRXh0UmVnRXhwLnRlc3QobW9kdWxlTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9KdXN0IGEgcGxhaW4gcGF0aCwgbm90IG1vZHVsZSBuYW1lIGxvb2t1cCwgc28ganVzdCByZXR1cm4gaXQuXG4gICAgICAgICAgICAgICAgICAgIC8vQWRkIGV4dGVuc2lvbiBpZiBpdCBpcyBpbmNsdWRlZC4gVGhpcyBpcyBhIGJpdCB3b25reSwgb25seSBub24tLmpzIHRoaW5ncyBwYXNzXG4gICAgICAgICAgICAgICAgICAgIC8vYW4gZXh0ZW5zaW9uLCB0aGlzIG1ldGhvZCBwcm9iYWJseSBuZWVkcyB0byBiZSByZXdvcmtlZC5cbiAgICAgICAgICAgICAgICAgICAgdXJsID0gbW9kdWxlTmFtZSArIChleHQgfHwgJycpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vQSBtb2R1bGUgdGhhdCBuZWVkcyB0byBiZSBjb252ZXJ0ZWQgdG8gYSBwYXRoLlxuICAgICAgICAgICAgICAgICAgICBwYXRocyA9IGNvbmZpZy5wYXRocztcblxuICAgICAgICAgICAgICAgICAgICBzeW1zID0gbW9kdWxlTmFtZS5zcGxpdCgnLycpO1xuICAgICAgICAgICAgICAgICAgICAvL0ZvciBlYWNoIG1vZHVsZSBuYW1lIHNlZ21lbnQsIHNlZSBpZiB0aGVyZSBpcyBhIHBhdGhcbiAgICAgICAgICAgICAgICAgICAgLy9yZWdpc3RlcmVkIGZvciBpdC4gU3RhcnQgd2l0aCBtb3N0IHNwZWNpZmljIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgLy9hbmQgd29yayB1cCBmcm9tIGl0LlxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSBzeW1zLmxlbmd0aDsgaSA+IDA7IGkgLT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50TW9kdWxlID0gc3ltcy5zbGljZSgwLCBpKS5qb2luKCcvJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFBhdGggPSBnZXRPd24ocGF0aHMsIHBhcmVudE1vZHVsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50UGF0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vSWYgYW4gYXJyYXksIGl0IG1lYW5zIHRoZXJlIGFyZSBhIGZldyBjaG9pY2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQ2hvb3NlIHRoZSBvbmUgdGhhdCBpcyBkZXNpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQXJyYXkocGFyZW50UGF0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50UGF0aCA9IHBhcmVudFBhdGhbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bXMuc3BsaWNlKDAsIGksIHBhcmVudFBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy9Kb2luIHRoZSBwYXRoIHBhcnRzIHRvZ2V0aGVyLCB0aGVuIGZpZ3VyZSBvdXQgaWYgYmFzZVVybCBpcyBuZWVkZWQuXG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHN5bXMuam9pbignLycpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gKGV4dCB8fCAoL15kYXRhXFw6fF5ibG9iXFw6fFxcPy8udGVzdCh1cmwpIHx8IHNraXBFeHQgPyAnJyA6ICcuanMnKSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICh1cmwuY2hhckF0KDApID09PSAnLycgfHwgdXJsLm1hdGNoKC9eW1xcd1xcK1xcLlxcLV0rOi8pID8gJycgOiBjb25maWcuYmFzZVVybCkgKyB1cmw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbmZpZy51cmxBcmdzICYmICEvXmJsb2JcXDovLnRlc3QodXJsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIHVybCArIGNvbmZpZy51cmxBcmdzKG1vZHVsZU5hbWUsIHVybCkgOiB1cmw7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvL0RlbGVnYXRlcyB0byByZXEubG9hZC4gQnJva2VuIG91dCBhcyBhIHNlcGFyYXRlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgICAvL2FsbG93IG92ZXJyaWRpbmcgaW4gdGhlIG9wdGltaXplci5cbiAgICAgICAgICAgIGxvYWQ6IGZ1bmN0aW9uIChpZCwgdXJsKSB7XG4gICAgICAgICAgICAgICAgcmVxLmxvYWQoY29udGV4dCwgaWQsIHVybCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEV4ZWN1dGVzIGEgbW9kdWxlIGNhbGxiYWNrIGZ1bmN0aW9uLiBCcm9rZW4gb3V0IGFzIGEgc2VwYXJhdGUgZnVuY3Rpb25cbiAgICAgICAgICAgICAqIHNvbGVseSB0byBhbGxvdyB0aGUgYnVpbGQgc3lzdGVtIHRvIHNlcXVlbmNlIHRoZSBmaWxlcyBpbiB0aGUgYnVpbHRcbiAgICAgICAgICAgICAqIGxheWVyIGluIHRoZSByaWdodCBzZXF1ZW5jZS5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBleGVjQ2I6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgYXJncywgZXhwb3J0cykge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjay5hcHBseShleHBvcnRzLCBhcmdzKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogY2FsbGJhY2sgZm9yIHNjcmlwdCBsb2FkcywgdXNlZCB0byBjaGVjayBzdGF0dXMgb2YgbG9hZGluZy5cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAcGFyYW0ge0V2ZW50fSBldnQgdGhlIGV2ZW50IGZyb20gdGhlIGJyb3dzZXIgZm9yIHRoZSBzY3JpcHRcbiAgICAgICAgICAgICAqIHRoYXQgd2FzIGxvYWRlZC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgb25TY3JpcHRMb2FkOiBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgLy9Vc2luZyBjdXJyZW50VGFyZ2V0IGluc3RlYWQgb2YgdGFyZ2V0IGZvciBGaXJlZm94IDIuMCdzIHNha2UuIE5vdFxuICAgICAgICAgICAgICAgIC8vYWxsIG9sZCBicm93c2VycyB3aWxsIGJlIHN1cHBvcnRlZCwgYnV0IHRoaXMgb25lIHdhcyBlYXN5IGVub3VnaFxuICAgICAgICAgICAgICAgIC8vdG8gc3VwcG9ydCBhbmQgc3RpbGwgbWFrZXMgc2Vuc2UuXG4gICAgICAgICAgICAgICAgaWYgKGV2dC50eXBlID09PSAnbG9hZCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZWFkeVJlZ0V4cC50ZXN0KChldnQuY3VycmVudFRhcmdldCB8fCBldnQuc3JjRWxlbWVudCkucmVhZHlTdGF0ZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vUmVzZXQgaW50ZXJhY3RpdmUgc2NyaXB0IHNvIGEgc2NyaXB0IG5vZGUgaXMgbm90IGhlbGQgb250byBmb3JcbiAgICAgICAgICAgICAgICAgICAgLy90byBsb25nLlxuICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGl2ZVNjcmlwdCA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9QdWxsIG91dCB0aGUgbmFtZSBvZiB0aGUgbW9kdWxlIGFuZCB0aGUgY29udGV4dC5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBnZXRTY3JpcHREYXRhKGV2dCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuY29tcGxldGVMb2FkKGRhdGEuaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsbGJhY2sgZm9yIHNjcmlwdCBlcnJvcnMuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIG9uU2NyaXB0RXJyb3I6IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IGdldFNjcmlwdERhdGEoZXZ0KTtcbiAgICAgICAgICAgICAgICBpZiAoIWhhc1BhdGhGYWxsYmFjayhkYXRhLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBlYWNoUHJvcChyZWdpc3RyeSwgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKCdfQHInKSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVhY2godmFsdWUuZGVwTWFwcywgZnVuY3Rpb24oZGVwTWFwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZXBNYXAuaWQgPT09IGRhdGEuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbkVycm9yKG1ha2VFcnJvcignc2NyaXB0ZXJyb3InLCAnU2NyaXB0IGVycm9yIGZvciBcIicgKyBkYXRhLmlkICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwYXJlbnRzLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXCIsIG5lZWRlZCBieTogJyArIHBhcmVudHMuam9pbignLCAnKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXCInKSwgZXZ0LCBbZGF0YS5pZF0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29udGV4dC5yZXF1aXJlID0gY29udGV4dC5tYWtlUmVxdWlyZSgpO1xuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYWluIGVudHJ5IHBvaW50LlxuICAgICAqXG4gICAgICogSWYgdGhlIG9ubHkgYXJndW1lbnQgdG8gcmVxdWlyZSBpcyBhIHN0cmluZywgdGhlbiB0aGUgbW9kdWxlIHRoYXRcbiAgICAgKiBpcyByZXByZXNlbnRlZCBieSB0aGF0IHN0cmluZyBpcyBmZXRjaGVkIGZvciB0aGUgYXBwcm9wcmlhdGUgY29udGV4dC5cbiAgICAgKlxuICAgICAqIElmIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBhbiBhcnJheSwgdGhlbiBpdCB3aWxsIGJlIHRyZWF0ZWQgYXMgYW4gYXJyYXlcbiAgICAgKiBvZiBkZXBlbmRlbmN5IHN0cmluZyBuYW1lcyB0byBmZXRjaC4gQW4gb3B0aW9uYWwgZnVuY3Rpb24gY2FsbGJhY2sgY2FuXG4gICAgICogYmUgc3BlY2lmaWVkIHRvIGV4ZWN1dGUgd2hlbiBhbGwgb2YgdGhvc2UgZGVwZW5kZW5jaWVzIGFyZSBhdmFpbGFibGUuXG4gICAgICpcbiAgICAgKiBNYWtlIGEgbG9jYWwgcmVxIHZhcmlhYmxlIHRvIGhlbHAgQ2FqYSBjb21wbGlhbmNlIChpdCBhc3N1bWVzIHRoaW5nc1xuICAgICAqIG9uIGEgcmVxdWlyZSB0aGF0IGFyZSBub3Qgc3RhbmRhcmRpemVkKSwgYW5kIHRvIGdpdmUgYSBzaG9ydFxuICAgICAqIG5hbWUgZm9yIG1pbmlmaWNhdGlvbi9sb2NhbCBzY29wZSB1c2UuXG4gICAgICovXG4gICAgcmVxID0gcmVxdWlyZWpzID0gZnVuY3Rpb24gKGRlcHMsIGNhbGxiYWNrLCBlcnJiYWNrLCBvcHRpb25hbCkge1xuXG4gICAgICAgIC8vRmluZCB0aGUgcmlnaHQgY29udGV4dCwgdXNlIGRlZmF1bHRcbiAgICAgICAgdmFyIGNvbnRleHQsIGNvbmZpZyxcbiAgICAgICAgICAgIGNvbnRleHROYW1lID0gZGVmQ29udGV4dE5hbWU7XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIGlmIGhhdmUgY29uZmlnIG9iamVjdCBpbiB0aGUgY2FsbC5cbiAgICAgICAgaWYgKCFpc0FycmF5KGRlcHMpICYmIHR5cGVvZiBkZXBzICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgLy8gZGVwcyBpcyBhIGNvbmZpZyBvYmplY3RcbiAgICAgICAgICAgIGNvbmZpZyA9IGRlcHM7XG4gICAgICAgICAgICBpZiAoaXNBcnJheShjYWxsYmFjaykpIHtcbiAgICAgICAgICAgICAgICAvLyBBZGp1c3QgYXJncyBpZiB0aGVyZSBhcmUgZGVwZW5kZW5jaWVzXG4gICAgICAgICAgICAgICAgZGVwcyA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gZXJyYmFjaztcbiAgICAgICAgICAgICAgICBlcnJiYWNrID0gb3B0aW9uYWw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlcHMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLmNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnRleHROYW1lID0gY29uZmlnLmNvbnRleHQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0ID0gZ2V0T3duKGNvbnRleHRzLCBjb250ZXh0TmFtZSk7XG4gICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgY29udGV4dCA9IGNvbnRleHRzW2NvbnRleHROYW1lXSA9IHJlcS5zLm5ld0NvbnRleHQoY29udGV4dE5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZykge1xuICAgICAgICAgICAgY29udGV4dC5jb25maWd1cmUoY29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb250ZXh0LnJlcXVpcmUoZGVwcywgY2FsbGJhY2ssIGVycmJhY2spO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdXBwb3J0IHJlcXVpcmUuY29uZmlnKCkgdG8gbWFrZSBpdCBlYXNpZXIgdG8gY29vcGVyYXRlIHdpdGggb3RoZXJcbiAgICAgKiBBTUQgbG9hZGVycyBvbiBnbG9iYWxseSBhZ3JlZWQgbmFtZXMuXG4gICAgICovXG4gICAgcmVxLmNvbmZpZyA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgcmV0dXJuIHJlcShjb25maWcpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFeGVjdXRlIHNvbWV0aGluZyBhZnRlciB0aGUgY3VycmVudCB0aWNrXG4gICAgICogb2YgdGhlIGV2ZW50IGxvb3AuIE92ZXJyaWRlIGZvciBvdGhlciBlbnZzXG4gICAgICogdGhhdCBoYXZlIGEgYmV0dGVyIHNvbHV0aW9uIHRoYW4gc2V0VGltZW91dC5cbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4gZnVuY3Rpb24gdG8gZXhlY3V0ZSBsYXRlci5cbiAgICAgKi9cbiAgICByZXEubmV4dFRpY2sgPSB0eXBlb2Ygc2V0VGltZW91dCAhPT0gJ3VuZGVmaW5lZCcgPyBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgNCk7XG4gICAgfSA6IGZ1bmN0aW9uIChmbikgeyBmbigpOyB9O1xuXG4gICAgLyoqXG4gICAgICogRXhwb3J0IHJlcXVpcmUgYXMgYSBnbG9iYWwsIGJ1dCBvbmx5IGlmIGl0IGRvZXMgbm90IGFscmVhZHkgZXhpc3QuXG4gICAgICovXG4gICAgaWYgKCFyZXF1aXJlKSB7XG4gICAgICAgIHJlcXVpcmUgPSByZXE7XG4gICAgfVxuXG4gICAgcmVxLnZlcnNpb24gPSB2ZXJzaW9uO1xuXG4gICAgLy9Vc2VkIHRvIGZpbHRlciBvdXQgZGVwZW5kZW5jaWVzIHRoYXQgYXJlIGFscmVhZHkgcGF0aHMuXG4gICAgcmVxLmpzRXh0UmVnRXhwID0gL15cXC98OnxcXD98XFwuanMkLztcbiAgICByZXEuaXNCcm93c2VyID0gaXNCcm93c2VyO1xuICAgIHMgPSByZXEucyA9IHtcbiAgICAgICAgY29udGV4dHM6IGNvbnRleHRzLFxuICAgICAgICBuZXdDb250ZXh0OiBuZXdDb250ZXh0XG4gICAgfTtcblxuICAgIC8vQ3JlYXRlIGRlZmF1bHQgY29udGV4dC5cbiAgICByZXEoe30pO1xuXG4gICAgLy9FeHBvcnRzIHNvbWUgY29udGV4dC1zZW5zaXRpdmUgbWV0aG9kcyBvbiBnbG9iYWwgcmVxdWlyZS5cbiAgICBlYWNoKFtcbiAgICAgICAgJ3RvVXJsJyxcbiAgICAgICAgJ3VuZGVmJyxcbiAgICAgICAgJ2RlZmluZWQnLFxuICAgICAgICAnc3BlY2lmaWVkJ1xuICAgIF0sIGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgIC8vUmVmZXJlbmNlIGZyb20gY29udGV4dHMgaW5zdGVhZCBvZiBlYXJseSBiaW5kaW5nIHRvIGRlZmF1bHQgY29udGV4dCxcbiAgICAgICAgLy9zbyB0aGF0IGR1cmluZyBidWlsZHMsIHRoZSBsYXRlc3QgaW5zdGFuY2Ugb2YgdGhlIGRlZmF1bHQgY29udGV4dFxuICAgICAgICAvL3dpdGggaXRzIGNvbmZpZyBnZXRzIHVzZWQuXG4gICAgICAgIHJlcVtwcm9wXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjdHggPSBjb250ZXh0c1tkZWZDb250ZXh0TmFtZV07XG4gICAgICAgICAgICByZXR1cm4gY3R4LnJlcXVpcmVbcHJvcF0uYXBwbHkoY3R4LCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgICBoZWFkID0gcy5oZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICAgICAgLy9JZiBCQVNFIHRhZyBpcyBpbiBwbGF5LCB1c2luZyBhcHBlbmRDaGlsZCBpcyBhIHByb2JsZW0gZm9yIElFNi5cbiAgICAgICAgLy9XaGVuIHRoYXQgYnJvd3NlciBkaWVzLCB0aGlzIGNhbiBiZSByZW1vdmVkLiBEZXRhaWxzIGluIHRoaXMgalF1ZXJ5IGJ1ZzpcbiAgICAgICAgLy9odHRwOi8vZGV2LmpxdWVyeS5jb20vdGlja2V0LzI3MDlcbiAgICAgICAgYmFzZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYmFzZScpWzBdO1xuICAgICAgICBpZiAoYmFzZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGhlYWQgPSBzLmhlYWQgPSBiYXNlRWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW55IGVycm9ycyB0aGF0IHJlcXVpcmUgZXhwbGljaXRseSBnZW5lcmF0ZXMgd2lsbCBiZSBwYXNzZWQgdG8gdGhpc1xuICAgICAqIGZ1bmN0aW9uLiBJbnRlcmNlcHQvb3ZlcnJpZGUgaXQgaWYgeW91IHdhbnQgY3VzdG9tIGVycm9yIGhhbmRsaW5nLlxuICAgICAqIEBwYXJhbSB7RXJyb3J9IGVyciB0aGUgZXJyb3Igb2JqZWN0LlxuICAgICAqL1xuICAgIHJlcS5vbkVycm9yID0gZGVmYXVsdE9uRXJyb3I7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBub2RlIGZvciB0aGUgbG9hZCBjb21tYW5kLiBPbmx5IHVzZWQgaW4gYnJvd3NlciBlbnZzLlxuICAgICAqL1xuICAgIHJlcS5jcmVhdGVOb2RlID0gZnVuY3Rpb24gKGNvbmZpZywgbW9kdWxlTmFtZSwgdXJsKSB7XG4gICAgICAgIHZhciBub2RlID0gY29uZmlnLnhodG1sID9cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnLCAnaHRtbDpzY3JpcHQnKSA6XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIG5vZGUudHlwZSA9IGNvbmZpZy5zY3JpcHRUeXBlIHx8ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICBub2RlLmNoYXJzZXQgPSAndXRmLTgnO1xuICAgICAgICBub2RlLmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERvZXMgdGhlIHJlcXVlc3QgdG8gbG9hZCBhIG1vZHVsZSBmb3IgdGhlIGJyb3dzZXIgY2FzZS5cbiAgICAgKiBNYWtlIHRoaXMgYSBzZXBhcmF0ZSBmdW5jdGlvbiB0byBhbGxvdyBvdGhlciBlbnZpcm9ubWVudHNcbiAgICAgKiB0byBvdmVycmlkZSBpdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0IHRoZSByZXF1aXJlIGNvbnRleHQgdG8gZmluZCBzdGF0ZS5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbW9kdWxlTmFtZSB0aGUgbmFtZSBvZiB0aGUgbW9kdWxlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB1cmwgdGhlIFVSTCB0byB0aGUgbW9kdWxlLlxuICAgICAqL1xuICAgIHJlcS5sb2FkID0gZnVuY3Rpb24gKGNvbnRleHQsIG1vZHVsZU5hbWUsIHVybCkge1xuICAgICAgICB2YXIgY29uZmlnID0gKGNvbnRleHQgJiYgY29udGV4dC5jb25maWcpIHx8IHt9LFxuICAgICAgICAgICAgbm9kZTtcbiAgICAgICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgICAgICAgLy9JbiB0aGUgYnJvd3NlciBzbyB1c2UgYSBzY3JpcHQgdGFnXG4gICAgICAgICAgICBub2RlID0gcmVxLmNyZWF0ZU5vZGUoY29uZmlnLCBtb2R1bGVOYW1lLCB1cmwpO1xuXG4gICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1yZXF1aXJlY29udGV4dCcsIGNvbnRleHQuY29udGV4dE5hbWUpO1xuICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcmVxdWlyZW1vZHVsZScsIG1vZHVsZU5hbWUpO1xuXG4gICAgICAgICAgICAvL1NldCB1cCBsb2FkIGxpc3RlbmVyLiBUZXN0IGF0dGFjaEV2ZW50IGZpcnN0IGJlY2F1c2UgSUU5IGhhc1xuICAgICAgICAgICAgLy9hIHN1YnRsZSBpc3N1ZSBpbiBpdHMgYWRkRXZlbnRMaXN0ZW5lciBhbmQgc2NyaXB0IG9ubG9hZCBmaXJpbmdzXG4gICAgICAgICAgICAvL3RoYXQgZG8gbm90IG1hdGNoIHRoZSBiZWhhdmlvciBvZiBhbGwgb3RoZXIgYnJvd3NlcnMgd2l0aFxuICAgICAgICAgICAgLy9hZGRFdmVudExpc3RlbmVyIHN1cHBvcnQsIHdoaWNoIGZpcmUgdGhlIG9ubG9hZCBldmVudCBmb3IgYVxuICAgICAgICAgICAgLy9zY3JpcHQgcmlnaHQgYWZ0ZXIgdGhlIHNjcmlwdCBleGVjdXRpb24uIFNlZTpcbiAgICAgICAgICAgIC8vaHR0cHM6Ly9jb25uZWN0Lm1pY3Jvc29mdC5jb20vSUUvZmVlZGJhY2svZGV0YWlscy82NDgwNTcvc2NyaXB0LW9ubG9hZC1ldmVudC1pcy1ub3QtZmlyZWQtaW1tZWRpYXRlbHktYWZ0ZXItc2NyaXB0LWV4ZWN1dGlvblxuICAgICAgICAgICAgLy9VTkZPUlRVTkFURUxZIE9wZXJhIGltcGxlbWVudHMgYXR0YWNoRXZlbnQgYnV0IGRvZXMgbm90IGZvbGxvdyB0aGUgc2NyaXB0XG4gICAgICAgICAgICAvL3NjcmlwdCBleGVjdXRpb24gbW9kZS5cbiAgICAgICAgICAgIGlmIChub2RlLmF0dGFjaEV2ZW50ICYmXG4gICAgICAgICAgICAgICAgICAgIC8vQ2hlY2sgaWYgbm9kZS5hdHRhY2hFdmVudCBpcyBhcnRpZmljaWFsbHkgYWRkZWQgYnkgY3VzdG9tIHNjcmlwdCBvclxuICAgICAgICAgICAgICAgICAgICAvL25hdGl2ZWx5IHN1cHBvcnRlZCBieSBicm93c2VyXG4gICAgICAgICAgICAgICAgICAgIC8vcmVhZCBodHRwczovL2dpdGh1Yi5jb20vcmVxdWlyZWpzL3JlcXVpcmVqcy9pc3N1ZXMvMTg3XG4gICAgICAgICAgICAgICAgICAgIC8vaWYgd2UgY2FuIE5PVCBmaW5kIFtuYXRpdmUgY29kZV0gdGhlbiBpdCBtdXN0IE5PVCBuYXRpdmVseSBzdXBwb3J0ZWQuXG4gICAgICAgICAgICAgICAgICAgIC8vaW4gSUU4LCBub2RlLmF0dGFjaEV2ZW50IGRvZXMgbm90IGhhdmUgdG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAvL05vdGUgdGhlIHRlc3QgZm9yIFwiW25hdGl2ZSBjb2RlXCIgd2l0aCBubyBjbG9zaW5nIGJyYWNlLCBzZWU6XG4gICAgICAgICAgICAgICAgICAgIC8vaHR0cHM6Ly9naXRodWIuY29tL3JlcXVpcmVqcy9yZXF1aXJlanMvaXNzdWVzLzI3M1xuICAgICAgICAgICAgICAgICAgICAhKG5vZGUuYXR0YWNoRXZlbnQudG9TdHJpbmcgJiYgbm9kZS5hdHRhY2hFdmVudC50b1N0cmluZygpLmluZGV4T2YoJ1tuYXRpdmUgY29kZScpIDwgMCkgJiZcbiAgICAgICAgICAgICAgICAgICAgIWlzT3BlcmEpIHtcbiAgICAgICAgICAgICAgICAvL1Byb2JhYmx5IElFLiBJRSAoYXQgbGVhc3QgNi04KSBkbyBub3QgZmlyZVxuICAgICAgICAgICAgICAgIC8vc2NyaXB0IG9ubG9hZCByaWdodCBhZnRlciBleGVjdXRpbmcgdGhlIHNjcmlwdCwgc29cbiAgICAgICAgICAgICAgICAvL3dlIGNhbm5vdCB0aWUgdGhlIGFub255bW91cyBkZWZpbmUgY2FsbCB0byBhIG5hbWUuXG4gICAgICAgICAgICAgICAgLy9Ib3dldmVyLCBJRSByZXBvcnRzIHRoZSBzY3JpcHQgYXMgYmVpbmcgaW4gJ2ludGVyYWN0aXZlJ1xuICAgICAgICAgICAgICAgIC8vcmVhZHlTdGF0ZSBhdCB0aGUgdGltZSBvZiB0aGUgZGVmaW5lIGNhbGwuXG4gICAgICAgICAgICAgICAgdXNlSW50ZXJhY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgbm9kZS5hdHRhY2hFdmVudCgnb25yZWFkeXN0YXRlY2hhbmdlJywgY29udGV4dC5vblNjcmlwdExvYWQpO1xuICAgICAgICAgICAgICAgIC8vSXQgd291bGQgYmUgZ3JlYXQgdG8gYWRkIGFuIGVycm9yIGhhbmRsZXIgaGVyZSB0byBjYXRjaFxuICAgICAgICAgICAgICAgIC8vNDA0cyBpbiBJRTkrLiBIb3dldmVyLCBvbnJlYWR5c3RhdGVjaGFuZ2Ugd2lsbCBmaXJlIGJlZm9yZVxuICAgICAgICAgICAgICAgIC8vdGhlIGVycm9yIGhhbmRsZXIsIHNvIHRoYXQgZG9lcyBub3QgaGVscC4gSWYgYWRkRXZlbnRMaXN0ZW5lclxuICAgICAgICAgICAgICAgIC8vaXMgdXNlZCwgdGhlbiBJRSB3aWxsIGZpcmUgZXJyb3IgYmVmb3JlIGxvYWQsIGJ1dCB3ZSBjYW5ub3RcbiAgICAgICAgICAgICAgICAvL3VzZSB0aGF0IHBhdGh3YXkgZ2l2ZW4gdGhlIGNvbm5lY3QubWljcm9zb2Z0LmNvbSBpc3N1ZVxuICAgICAgICAgICAgICAgIC8vbWVudGlvbmVkIGFib3ZlIGFib3V0IG5vdCBkb2luZyB0aGUgJ3NjcmlwdCBleGVjdXRlLFxuICAgICAgICAgICAgICAgIC8vdGhlbiBmaXJlIHRoZSBzY3JpcHQgbG9hZCBldmVudCBsaXN0ZW5lciBiZWZvcmUgZXhlY3V0ZVxuICAgICAgICAgICAgICAgIC8vbmV4dCBzY3JpcHQnIHRoYXQgb3RoZXIgYnJvd3NlcnMgZG8uXG4gICAgICAgICAgICAgICAgLy9CZXN0IGhvcGU6IElFMTAgZml4ZXMgdGhlIGlzc3VlcyxcbiAgICAgICAgICAgICAgICAvL2FuZCB0aGVuIGRlc3Ryb3lzIGFsbCBpbnN0YWxscyBvZiBJRSA2LTkuXG4gICAgICAgICAgICAgICAgLy9ub2RlLmF0dGFjaEV2ZW50KCdvbmVycm9yJywgY29udGV4dC5vblNjcmlwdEVycm9yKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgY29udGV4dC5vblNjcmlwdExvYWQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgY29udGV4dC5vblNjcmlwdEVycm9yLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlLnNyYyA9IHVybDtcblxuICAgICAgICAgICAgLy9DYWxsaW5nIG9uTm9kZUNyZWF0ZWQgYWZ0ZXIgYWxsIHByb3BlcnRpZXMgb24gdGhlIG5vZGUgaGF2ZSBiZWVuXG4gICAgICAgICAgICAvL3NldCwgYnV0IGJlZm9yZSBpdCBpcyBwbGFjZWQgaW4gdGhlIERPTS5cbiAgICAgICAgICAgIGlmIChjb25maWcub25Ob2RlQ3JlYXRlZCkge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5vbk5vZGVDcmVhdGVkKG5vZGUsIGNvbmZpZywgbW9kdWxlTmFtZSwgdXJsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9Gb3Igc29tZSBjYWNoZSBjYXNlcyBpbiBJRSA2LTgsIHRoZSBzY3JpcHQgZXhlY3V0ZXMgYmVmb3JlIHRoZSBlbmRcbiAgICAgICAgICAgIC8vb2YgdGhlIGFwcGVuZENoaWxkIGV4ZWN1dGlvbiwgc28gdG8gdGllIGFuIGFub255bW91cyBkZWZpbmVcbiAgICAgICAgICAgIC8vY2FsbCB0byB0aGUgbW9kdWxlIG5hbWUgKHdoaWNoIGlzIHN0b3JlZCBvbiB0aGUgbm9kZSksIGhvbGQgb25cbiAgICAgICAgICAgIC8vdG8gYSByZWZlcmVuY2UgdG8gdGhpcyBub2RlLCBidXQgY2xlYXIgYWZ0ZXIgdGhlIERPTSBpbnNlcnRpb24uXG4gICAgICAgICAgICBjdXJyZW50bHlBZGRpbmdTY3JpcHQgPSBub2RlO1xuICAgICAgICAgICAgaWYgKGJhc2VFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaGVhZC5pbnNlcnRCZWZvcmUobm9kZSwgYmFzZUVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoZWFkLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudGx5QWRkaW5nU2NyaXB0ID0gbnVsbDtcblxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNXZWJXb3JrZXIpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy9JbiBhIHdlYiB3b3JrZXIsIHVzZSBpbXBvcnRTY3JpcHRzLiBUaGlzIGlzIG5vdCBhIHZlcnlcbiAgICAgICAgICAgICAgICAvL2VmZmljaWVudCB1c2Ugb2YgaW1wb3J0U2NyaXB0cywgaW1wb3J0U2NyaXB0cyB3aWxsIGJsb2NrIHVudGlsXG4gICAgICAgICAgICAgICAgLy9pdHMgc2NyaXB0IGlzIGRvd25sb2FkZWQgYW5kIGV2YWx1YXRlZC4gSG93ZXZlciwgaWYgd2ViIHdvcmtlcnNcbiAgICAgICAgICAgICAgICAvL2FyZSBpbiBwbGF5LCB0aGUgZXhwZWN0YXRpb24gaXMgdGhhdCBhIGJ1aWxkIGhhcyBiZWVuIGRvbmUgc29cbiAgICAgICAgICAgICAgICAvL3RoYXQgb25seSBvbmUgc2NyaXB0IG5lZWRzIHRvIGJlIGxvYWRlZCBhbnl3YXkuIFRoaXMgbWF5IG5lZWRcbiAgICAgICAgICAgICAgICAvL3RvIGJlIHJlZXZhbHVhdGVkIGlmIG90aGVyIHVzZSBjYXNlcyBiZWNvbWUgY29tbW9uLlxuXG4gICAgICAgICAgICAgICAgLy8gUG9zdCBhIHRhc2sgdG8gdGhlIGV2ZW50IGxvb3AgdG8gd29yayBhcm91bmQgYSBidWcgaW4gV2ViS2l0XG4gICAgICAgICAgICAgICAgLy8gd2hlcmUgdGhlIHdvcmtlciBnZXRzIGdhcmJhZ2UtY29sbGVjdGVkIGFmdGVyIGNhbGxpbmdcbiAgICAgICAgICAgICAgICAvLyBpbXBvcnRTY3JpcHRzKCk6IGh0dHBzOi8vd2Via2l0Lm9yZy9iLzE1MzMxN1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7fSwgMCk7XG4gICAgICAgICAgICAgICAgaW1wb3J0U2NyaXB0cyh1cmwpO1xuXG4gICAgICAgICAgICAgICAgLy9BY2NvdW50IGZvciBhbm9ueW1vdXMgbW9kdWxlc1xuICAgICAgICAgICAgICAgIGNvbnRleHQuY29tcGxldGVMb2FkKG1vZHVsZU5hbWUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQub25FcnJvcihtYWtlRXJyb3IoJ2ltcG9ydHNjcmlwdHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaW1wb3J0U2NyaXB0cyBmYWlsZWQgZm9yICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZSArICcgYXQgJyArIHVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21vZHVsZU5hbWVdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2V0SW50ZXJhY3RpdmVTY3JpcHQoKSB7XG4gICAgICAgIGlmIChpbnRlcmFjdGl2ZVNjcmlwdCAmJiBpbnRlcmFjdGl2ZVNjcmlwdC5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnKSB7XG4gICAgICAgICAgICByZXR1cm4gaW50ZXJhY3RpdmVTY3JpcHQ7XG4gICAgICAgIH1cblxuICAgICAgICBlYWNoUmV2ZXJzZShzY3JpcHRzKCksIGZ1bmN0aW9uIChzY3JpcHQpIHtcbiAgICAgICAgICAgIGlmIChzY3JpcHQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAoaW50ZXJhY3RpdmVTY3JpcHQgPSBzY3JpcHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGludGVyYWN0aXZlU2NyaXB0O1xuICAgIH1cblxuICAgIC8vTG9vayBmb3IgYSBkYXRhLW1haW4gc2NyaXB0IGF0dHJpYnV0ZSwgd2hpY2ggY291bGQgYWxzbyBhZGp1c3QgdGhlIGJhc2VVcmwuXG4gICAgaWYgKGlzQnJvd3NlciAmJiAhY2ZnLnNraXBEYXRhTWFpbikge1xuICAgICAgICAvL0ZpZ3VyZSBvdXQgYmFzZVVybC4gR2V0IGl0IGZyb20gdGhlIHNjcmlwdCB0YWcgd2l0aCByZXF1aXJlLmpzIGluIGl0LlxuICAgICAgICBlYWNoUmV2ZXJzZShzY3JpcHRzKCksIGZ1bmN0aW9uIChzY3JpcHQpIHtcbiAgICAgICAgICAgIC8vU2V0IHRoZSAnaGVhZCcgd2hlcmUgd2UgY2FuIGFwcGVuZCBjaGlsZHJlbiBieVxuICAgICAgICAgICAgLy91c2luZyB0aGUgc2NyaXB0J3MgcGFyZW50LlxuICAgICAgICAgICAgaWYgKCFoZWFkKSB7XG4gICAgICAgICAgICAgICAgaGVhZCA9IHNjcmlwdC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0xvb2sgZm9yIGEgZGF0YS1tYWluIGF0dHJpYnV0ZSB0byBzZXQgbWFpbiBzY3JpcHQgZm9yIHRoZSBwYWdlXG4gICAgICAgICAgICAvL3RvIGxvYWQuIElmIGl0IGlzIHRoZXJlLCB0aGUgcGF0aCB0byBkYXRhIG1haW4gYmVjb21lcyB0aGVcbiAgICAgICAgICAgIC8vYmFzZVVybCwgaWYgaXQgaXMgbm90IGFscmVhZHkgc2V0LlxuICAgICAgICAgICAgZGF0YU1haW4gPSBzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLW1haW4nKTtcbiAgICAgICAgICAgIGlmIChkYXRhTWFpbikge1xuICAgICAgICAgICAgICAgIC8vUHJlc2VydmUgZGF0YU1haW4gaW4gY2FzZSBpdCBpcyBhIHBhdGggKGkuZS4gY29udGFpbnMgJz8nKVxuICAgICAgICAgICAgICAgIG1haW5TY3JpcHQgPSBkYXRhTWFpbjtcblxuICAgICAgICAgICAgICAgIC8vU2V0IGZpbmFsIGJhc2VVcmwgaWYgdGhlcmUgaXMgbm90IGFscmVhZHkgYW4gZXhwbGljaXQgb25lLFxuICAgICAgICAgICAgICAgIC8vYnV0IG9ubHkgZG8gc28gaWYgdGhlIGRhdGEtbWFpbiB2YWx1ZSBpcyBub3QgYSBsb2FkZXIgcGx1Z2luXG4gICAgICAgICAgICAgICAgLy9tb2R1bGUgSUQuXG4gICAgICAgICAgICAgICAgaWYgKCFjZmcuYmFzZVVybCAmJiBtYWluU2NyaXB0LmluZGV4T2YoJyEnKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9QdWxsIG9mZiB0aGUgZGlyZWN0b3J5IG9mIGRhdGEtbWFpbiBmb3IgdXNlIGFzIHRoZVxuICAgICAgICAgICAgICAgICAgICAvL2Jhc2VVcmwuXG4gICAgICAgICAgICAgICAgICAgIHNyYyA9IG1haW5TY3JpcHQuc3BsaXQoJy8nKTtcbiAgICAgICAgICAgICAgICAgICAgbWFpblNjcmlwdCA9IHNyYy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgc3ViUGF0aCA9IHNyYy5sZW5ndGggPyBzcmMuam9pbignLycpICArICcvJyA6ICcuLyc7XG5cbiAgICAgICAgICAgICAgICAgICAgY2ZnLmJhc2VVcmwgPSBzdWJQYXRoO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vU3RyaXAgb2ZmIGFueSB0cmFpbGluZyAuanMgc2luY2UgbWFpblNjcmlwdCBpcyBub3dcbiAgICAgICAgICAgICAgICAvL2xpa2UgYSBtb2R1bGUgbmFtZS5cbiAgICAgICAgICAgICAgICBtYWluU2NyaXB0ID0gbWFpblNjcmlwdC5yZXBsYWNlKGpzU3VmZml4UmVnRXhwLCAnJyk7XG5cbiAgICAgICAgICAgICAgICAvL0lmIG1haW5TY3JpcHQgaXMgc3RpbGwgYSBwYXRoLCBmYWxsIGJhY2sgdG8gZGF0YU1haW5cbiAgICAgICAgICAgICAgICBpZiAocmVxLmpzRXh0UmVnRXhwLnRlc3QobWFpblNjcmlwdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFpblNjcmlwdCA9IGRhdGFNYWluO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vUHV0IHRoZSBkYXRhLW1haW4gc2NyaXB0IGluIHRoZSBmaWxlcyB0byBsb2FkLlxuICAgICAgICAgICAgICAgIGNmZy5kZXBzID0gY2ZnLmRlcHMgPyBjZmcuZGVwcy5jb25jYXQobWFpblNjcmlwdCkgOiBbbWFpblNjcmlwdF07XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIGZ1bmN0aW9uIHRoYXQgaGFuZGxlcyBkZWZpbml0aW9ucyBvZiBtb2R1bGVzLiBEaWZmZXJzIGZyb21cbiAgICAgKiByZXF1aXJlKCkgaW4gdGhhdCBhIHN0cmluZyBmb3IgdGhlIG1vZHVsZSBzaG91bGQgYmUgdGhlIGZpcnN0IGFyZ3VtZW50LFxuICAgICAqIGFuZCB0aGUgZnVuY3Rpb24gdG8gZXhlY3V0ZSBhZnRlciBkZXBlbmRlbmNpZXMgYXJlIGxvYWRlZCBzaG91bGRcbiAgICAgKiByZXR1cm4gYSB2YWx1ZSB0byBkZWZpbmUgdGhlIG1vZHVsZSBjb3JyZXNwb25kaW5nIHRvIHRoZSBmaXJzdCBhcmd1bWVudCdzXG4gICAgICogbmFtZS5cbiAgICAgKi9cbiAgICBkZWZpbmUgPSBmdW5jdGlvbiAobmFtZSwgZGVwcywgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIG5vZGUsIGNvbnRleHQ7XG5cbiAgICAgICAgLy9BbGxvdyBmb3IgYW5vbnltb3VzIG1vZHVsZXNcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgLy9BZGp1c3QgYXJncyBhcHByb3ByaWF0ZWx5XG4gICAgICAgICAgICBjYWxsYmFjayA9IGRlcHM7XG4gICAgICAgICAgICBkZXBzID0gbmFtZTtcbiAgICAgICAgICAgIG5hbWUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9UaGlzIG1vZHVsZSBtYXkgbm90IGhhdmUgZGVwZW5kZW5jaWVzXG4gICAgICAgIGlmICghaXNBcnJheShkZXBzKSkge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBkZXBzO1xuICAgICAgICAgICAgZGVwcyA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvL0lmIG5vIG5hbWUsIGFuZCBjYWxsYmFjayBpcyBhIGZ1bmN0aW9uLCB0aGVuIGZpZ3VyZSBvdXQgaWYgaXQgYVxuICAgICAgICAvL0NvbW1vbkpTIHRoaW5nIHdpdGggZGVwZW5kZW5jaWVzLlxuICAgICAgICBpZiAoIWRlcHMgJiYgaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgICAgICAgIGRlcHMgPSBbXTtcbiAgICAgICAgICAgIC8vUmVtb3ZlIGNvbW1lbnRzIGZyb20gdGhlIGNhbGxiYWNrIHN0cmluZyxcbiAgICAgICAgICAgIC8vbG9vayBmb3IgcmVxdWlyZSBjYWxscywgYW5kIHB1bGwgdGhlbSBpbnRvIHRoZSBkZXBlbmRlbmNpZXMsXG4gICAgICAgICAgICAvL2J1dCBvbmx5IGlmIHRoZXJlIGFyZSBmdW5jdGlvbiBhcmdzLlxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKGNvbW1lbnRSZWdFeHAsIGNvbW1lbnRSZXBsYWNlKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShjanNSZXF1aXJlUmVnRXhwLCBmdW5jdGlvbiAobWF0Y2gsIGRlcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVwcy5wdXNoKGRlcCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy9NYXkgYmUgYSBDb21tb25KUyB0aGluZyBldmVuIHdpdGhvdXQgcmVxdWlyZSBjYWxscywgYnV0IHN0aWxsXG4gICAgICAgICAgICAgICAgLy9jb3VsZCB1c2UgZXhwb3J0cywgYW5kIG1vZHVsZS4gQXZvaWQgZG9pbmcgZXhwb3J0cyBhbmQgbW9kdWxlXG4gICAgICAgICAgICAgICAgLy93b3JrIHRob3VnaCBpZiBpdCBqdXN0IG5lZWRzIHJlcXVpcmUuXG4gICAgICAgICAgICAgICAgLy9SRVFVSVJFUyB0aGUgZnVuY3Rpb24gdG8gZXhwZWN0IHRoZSBDb21tb25KUyB2YXJpYWJsZXMgaW4gdGhlXG4gICAgICAgICAgICAgICAgLy9vcmRlciBsaXN0ZWQgYmVsb3cuXG4gICAgICAgICAgICAgICAgZGVwcyA9IChjYWxsYmFjay5sZW5ndGggPT09IDEgPyBbJ3JlcXVpcmUnXSA6IFsncmVxdWlyZScsICdleHBvcnRzJywgJ21vZHVsZSddKS5jb25jYXQoZGVwcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL0lmIGluIElFIDYtOCBhbmQgaGl0IGFuIGFub255bW91cyBkZWZpbmUoKSBjYWxsLCBkbyB0aGUgaW50ZXJhY3RpdmVcbiAgICAgICAgLy93b3JrLlxuICAgICAgICBpZiAodXNlSW50ZXJhY3RpdmUpIHtcbiAgICAgICAgICAgIG5vZGUgPSBjdXJyZW50bHlBZGRpbmdTY3JpcHQgfHwgZ2V0SW50ZXJhY3RpdmVTY3JpcHQoKTtcbiAgICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1yZXF1aXJlbW9kdWxlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRleHQgPSBjb250ZXh0c1tub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1yZXF1aXJlY29udGV4dCcpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vQWx3YXlzIHNhdmUgb2ZmIGV2YWx1YXRpbmcgdGhlIGRlZiBjYWxsIHVudGlsIHRoZSBzY3JpcHQgb25sb2FkIGhhbmRsZXIuXG4gICAgICAgIC8vVGhpcyBhbGxvd3MgbXVsdGlwbGUgbW9kdWxlcyB0byBiZSBpbiBhIGZpbGUgd2l0aG91dCBwcmVtYXR1cmVseVxuICAgICAgICAvL3RyYWNpbmcgZGVwZW5kZW5jaWVzLCBhbmQgYWxsb3dzIGZvciBhbm9ueW1vdXMgbW9kdWxlIHN1cHBvcnQsXG4gICAgICAgIC8vd2hlcmUgdGhlIG1vZHVsZSBuYW1lIGlzIG5vdCBrbm93biB1bnRpbCB0aGUgc2NyaXB0IG9ubG9hZCBldmVudFxuICAgICAgICAvL29jY3Vycy4gSWYgbm8gY29udGV4dCwgdXNlIHRoZSBnbG9iYWwgcXVldWUsIGFuZCBnZXQgaXQgcHJvY2Vzc2VkXG4gICAgICAgIC8vaW4gdGhlIG9uc2NyaXB0IGxvYWQgY2FsbGJhY2suXG4gICAgICAgIGlmIChjb250ZXh0KSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlZlF1ZXVlLnB1c2goW25hbWUsIGRlcHMsIGNhbGxiYWNrXSk7XG4gICAgICAgICAgICBjb250ZXh0LmRlZlF1ZXVlTWFwW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbERlZlF1ZXVlLnB1c2goW25hbWUsIGRlcHMsIGNhbGxiYWNrXSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZGVmaW5lLmFtZCA9IHtcbiAgICAgICAgalF1ZXJ5OiB0cnVlXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSB0ZXh0LiBOb3JtYWxseSBqdXN0IHVzZXMgZXZhbCwgYnV0IGNhbiBiZSBtb2RpZmllZFxuICAgICAqIHRvIHVzZSBhIGJldHRlciwgZW52aXJvbm1lbnQtc3BlY2lmaWMgY2FsbC4gT25seSB1c2VkIGZvciB0cmFuc3BpbGluZ1xuICAgICAqIGxvYWRlciBwbHVnaW5zLCBub3QgZm9yIHBsYWluIEpTIG1vZHVsZXMuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHRleHQgdGhlIHRleHQgdG8gZXhlY3V0ZS9ldmFsdWF0ZS5cbiAgICAgKi9cbiAgICByZXEuZXhlYyA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgIC8qanNsaW50IGV2aWw6IHRydWUgKi9cbiAgICAgICAgcmV0dXJuIGV2YWwodGV4dCk7XG4gICAgfTtcblxuICAgIC8vU2V0IHVwIHdpdGggY29uZmlnIGluZm8uXG4gICAgcmVxKGNmZyk7XG59KHRoaXMsICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBzZXRUaW1lb3V0KSkpO1xuIl19
