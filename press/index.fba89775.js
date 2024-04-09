// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"IK0PR":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "f0222fadfba89775";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"j0hgD":[function(require,module,exports) {
var _proseplay = require("proseplay");
const poem = `Press( |ure|ing juice|ume)[1]


( |Absently|Anxiously|Patiently)[1] waiting for ( |cracks to show through|you to come through.|me to come to)[1]

( |Pressure creates the environment for the rarest jewels|Pressing distances me from you|Presume that we each had a story that was true)[1]
( |but I was long checked out of our hotel room|but fuck it I set the table for two|that sometimes it takes years for softness to bloom)[1]

( |Pl| Oranges fall to the ground as I rel| Back then, I folded flower after flower, found myself in each cr)[1]ease ( |Do Not Disturb| | e)[1]`;
(0, _proseplay.ProsePlay).parse(poem);

},{"proseplay":"aYzgs"}],"aYzgs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProsePlay", ()=>$79098f0a1478fa01$export$bb601a587602e2b4);
var _proseplayCss = require("./proseplay.css");
const $97aedba7ab332eed$var$windowTemplate = document.createElement("div");
$97aedba7ab332eed$var$windowTemplate.classList.add("proseplay-window");
const $97aedba7ab332eed$var$listTemplate = document.createElement("div");
$97aedba7ab332eed$var$listTemplate.classList.add("proseplay-list");
$97aedba7ab332eed$var$windowTemplate.append($97aedba7ab332eed$var$listTemplate);
const $97aedba7ab332eed$var$linkRefTemplate = document.createElement("sup");
$97aedba7ab332eed$var$linkRefTemplate.classList.add("proseplay-link-ref");
const $97aedba7ab332eed$var$BUFFER_TIME = 15;
let $97aedba7ab332eed$var$PADDING;
const $97aedba7ab332eed$var$mouse = {
    x: 0,
    y: 0
};
class $97aedba7ab332eed$export$cec157cbbbaf65c9 {
    links = [];
    horizontal = false;
    constructor(parent){
        this.el = $97aedba7ab332eed$var$windowTemplate.cloneNode(true);
        parent.appendChild(this.el);
        this.el.addEventListener("pointerover", this.handlePointerOver);
        this.el.addEventListener("pointerdown", this.handlePointerDown);
        this.el.addEventListener("pointermove", this.handlePointerMove);
        this.el.addEventListener("pointerup", this.handlePointerUp);
        this.el.addEventListener("pointerout", this.handlePointerOut);
        this.listEl = this.el.querySelector(".proseplay-list");
        this.choices = [];
        this.currentIndex = 0;
        this.isHoverable = true;
        this.isDragged = false;
        this.linkIndex = null;
        this.functionNames = [];
        this.functions = {};
        $97aedba7ab332eed$var$PADDING = parseInt(getComputedStyle(parent).fontSize) * 0.3;
    }
    /**
   * Change the direction of the window to horizontal, i.e. east–west.
   */ setHorizontal() {
        this.horizontal = true;
        this.el.classList.add("proseplay-horizontal");
    }
    /**
   * Add a choice to the window.
   * @param choice The choice object to be added.
   */ addChoice(choice) {
        this.choices.push(choice);
        this.listEl.appendChild(choice.el);
    }
    /**
   * Activate the specified choice and adjusts position and sizing accordingly.
   * @param choice The choice to be activated. If none is given, it readjusts to the current choice — this can be useful for resizing.
   */ activateChoice(choice) {
        if (!choice) {
            choice = this.choices[this.currentIndex];
            if (!this.horizontal) this.listEl.style.top = `-${choice.offsetTop}px`;
            else this.listEl.style.left = `${-Math.abs(choice.offsetLeft) + $97aedba7ab332eed$var$PADDING}px`;
        }
        this.currentIndex = this.choices.indexOf(choice);
        this.choices.forEach((otherChoice)=>otherChoice.deactivate());
        choice.activate();
        this.el.style.width = `${choice.offsetWidth}px`;
    }
    /**
   * Get a random choice index.
   * @returns The random chocie index.
   */ random() {
        return Math.floor(Math.random() * this.choices.length);
    }
    slideToPos(pos) {
        if (!this.horizontal) this.listEl.style.top = `${pos}px`;
        else this.listEl.style.left = `${pos}px`;
        const targetChoice = this.getNearestChoice(pos);
        if (!targetChoice) return;
        this.activateChoice(targetChoice);
    }
    /**
   * Slide to a specified index in the window's array of choices.
   * @param choiceIndex Index of choice to slide to.
   */ slideToChoice(choiceIndex, duration) {
        if (choiceIndex > this.choices.length - 1) return;
        const choice = this.choices[choiceIndex];
        this.pointerOver();
        this.pointerDown();
        this.listEl.classList.add("proseplay-has-transition");
        this.listEl.addEventListener("transitionend", (e)=>{
            if (e.target !== this.listEl) return;
            this.listEl.classList.remove("proseplay-has-transition");
        });
        if (duration) {
            this.listEl.style.transitionDuration = `${duration}ms`;
            this.listEl.addEventListener("transitionend", ()=>{
                this.listEl.style.removeProperty("transition-duration");
            });
            this.choices.forEach((choice)=>{
                choice.el.style.transitionDuration = `${duration}ms`;
                choice.el.addEventListener("transitionend", ()=>{
                    choice.el.style.removeProperty("transition-duration");
                });
            });
            this.el.style.transitionDuration = `${duration}ms`;
            this.el.addEventListener("transitionend", ()=>{
                this.el.style.removeProperty("transition-duration");
            });
        }
        setTimeout(()=>{
            if (!this.horizontal) this.listEl.style.top = `-${choice.offsetTop}px`;
            else this.listEl.style.left = `${-Math.abs(choice.offsetLeft) + $97aedba7ab332eed$var$PADDING}px`;
        }, $97aedba7ab332eed$var$BUFFER_TIME);
        this.pointerUp();
        this.pointerOut();
        this.activateChoice(choice);
    }
    getNearestChoice(pos) {
        let minDist = Infinity;
        let targetChoice = null;
        this.choices.forEach((choice)=>{
            let dist = !this.horizontal ? Math.abs(pos + choice.offsetTop) : Math.abs(pos + choice.offsetLeft - $97aedba7ab332eed$var$PADDING);
            if (dist < minDist) {
                minDist = dist;
                targetChoice = choice;
            }
        });
        return targetChoice;
    }
    snapToNearestChoice() {
        const choice = this.getNearestChoice(this.pos);
        if (!choice) return;
        if (!this.horizontal) this.listEl.style.top = `-${choice.offsetTop}px`;
        else this.listEl.style.left = `${-Math.abs(choice.offsetLeft) + $97aedba7ab332eed$var$PADDING}px`;
    }
    /**
   * Return either the `left` or `top` of the window's list element, depending on the direction of the window.
   */ get pos() {
        const property = this.horizontal ? "left" : "top";
        return parseInt(getComputedStyle(this.listEl).getPropertyValue(property).replace("px", ""));
    }
    handlePointerOver = (e)=>{
        e.preventDefault();
        if (!this.isHoverable) return;
        const target = e.target;
        if (!target.classList.contains("proseplay-current")) return;
        this.el.closest(".proseplay").querySelectorAll(".proseplay-line").forEach((line)=>{
            line.classList.add("proseplay-has-hover");
        });
        this.pointerOver();
    };
    pointerOver() {
        this.el.classList.add("proseplay-hover");
    }
    handlePointerDown = (e)=>{
        e.preventDefault();
        if (!this.isHoverable) return;
        const target = e.target;
        if (!target.classList.contains("proseplay-current")) return;
        this.el.setPointerCapture(e.pointerId);
        this.links.forEach((window1)=>window1.pointerDown());
        this.isDragged = true;
        $97aedba7ab332eed$var$mouse.x = e.clientX;
        $97aedba7ab332eed$var$mouse.y = e.clientY;
    };
    pointerDown() {
        this.el.classList.add("proseplay-hover");
    }
    handlePointerMove = (e)=>{
        e.preventDefault();
        if (!this.isDragged) return;
        const dist = !this.horizontal ? $97aedba7ab332eed$var$mouse.y - e.clientY : $97aedba7ab332eed$var$mouse.x - e.clientX;
        this.slideToPos(this.pos - dist);
        this.links.forEach((window1)=>{
            window1.slideToPos(this.pos - dist);
        });
        $97aedba7ab332eed$var$mouse.x = e.clientX;
        $97aedba7ab332eed$var$mouse.y = e.clientY;
    };
    handlePointerOut = ()=>{
        if (this.isDragged) return;
        this.el.closest(".proseplay").querySelectorAll(".proseplay-line").forEach((line)=>{
            line.classList.remove("proseplay-has-hover");
        });
        this.pointerOut();
        this.links.forEach((window1)=>window1.pointerOut());
    };
    pointerOut() {
        this.isDragged = false;
        this.el.classList.remove("proseplay-hover");
    }
    handlePointerUp = (e)=>{
        e.preventDefault();
        this.pointerUp();
        this.links.forEach((window1)=>window1.pointerUp());
    };
    pointerUp() {
        this.snapToNearestChoice();
        this.isDragged = false;
        this.el.classList.remove("proseplay-hover");
        let functionName = this.functionNames[this.currentIndex];
        if (functionName) {
            if (this.functions[functionName]) this.functions[functionName]();
        }
        this.el.closest(".proseplay").querySelectorAll(".proseplay-line").forEach((line)=>{
            line.classList.remove("proseplay-has-hover");
        });
    }
    /**
   * Set link between this window and other windows.
   * @param linkIndex Index number of link, as indicated in square brackets.
   * @param otherWindows Array of other windows in the same link.
   */ setLink(linkIndex, otherWindows) {
        this.linkIndex = linkIndex;
        if (linkIndex) {
            const sup = $97aedba7ab332eed$var$linkRefTemplate.cloneNode(true);
            this.el.insertAdjacentElement("afterend", sup);
            sup.innerText = `${linkIndex}`;
        }
        this.links = otherWindows;
    }
    /**
   * Set function names.
   * @param functionNames Array of function names.
   */ setFunctionNames(functionNames) {
        this.functionNames = functionNames;
    }
    /**
   * Assign functions to function names.
   * @param name Name of function.
   * @param fnc Function to be called.
   */ setFunction(name, fnc) {
        this.functions[name] = fnc;
    }
}
const $fb2114d596aef9c8$var$choiceTemplate = document.createElement("div");
$fb2114d596aef9c8$var$choiceTemplate.classList.add("proseplay-choice");
class $fb2114d596aef9c8$export$32a7462f6a06cbd5 {
    text = "";
    isCurrent = false;
    constructor(text){
        this.text = text;
        this.el = $fb2114d596aef9c8$var$choiceTemplate.cloneNode(true);
        if (text !== " ") this.el.innerText = text;
        else this.el.innerHTML = "&thinsp;";
    }
    /**
   * Activate this choice.
   */ activate() {
        this.isCurrent = true;
        this.el.classList.add("proseplay-current");
    }
    /**
   * Deactivate this choice.
   */ deactivate() {
        this.isCurrent = false;
        this.el.classList.remove("proseplay-current");
    }
    /**
   * Get the `offsetTop` of this element.
   */ get offsetTop() {
        return this.el.offsetTop;
    }
    /**
   * Get the `offsetLeft` of this element.
   */ get offsetLeft() {
        return this.el.offsetLeft;
    }
    /**
   * Get the `offsetWidth` of this element.
   */ get offsetWidth() {
        return this.el.offsetWidth;
    }
}
const $79098f0a1478fa01$var$lineTemplate = document.createElement("div");
$79098f0a1478fa01$var$lineTemplate.classList.add("proseplay-line");
const $79098f0a1478fa01$var$samples = {
    dickinson: `We talked with each other about each other
Though neither of us spoke \u{2014}
We were (too engrossed with|listening to) the Second\u{2019}s Races
And the Hoofs of the Clock \u{2014}
Pausing in Front of our (Sentenced Faces|Foundering Faces)
(Time\u{2019}s Decision shook \u{2014}|Time compassion Took)
Arks of Reprieve he offered to us \u{2014}
Ararats \u{2014} we took \u{2014}`,
    homophones: `in the (mist|missed) (see|sea)
(prey|pray) in the (morning|mourning)
for (words|worlds) that (exit|exist)
as (seep|sleep)`,
    hypothetically: `(hypothetically|hello)[1-]
(what if|i said)[1-]
(we fell|and held)[1-]
(in love|till death)[1-]`
};
let $79098f0a1478fa01$var$EM;
class $79098f0a1478fa01$export$bb601a587602e2b4 {
    lines = [];
    windows = [];
    links = [];
    _isExpanded = false;
    functions = {};
    /**
   * Create a new ProsePlay object, which will be contained in the given HTML element.
   * @param el The HTML element in which the ProsePlay instance will be contained.
   */ constructor(el){
        this.el = el;
        this.el.classList.add("proseplay");
        window.addEventListener("resize", this.handleResize);
        document.addEventListener("DOMContentLoaded", this.handleResize);
        $79098f0a1478fa01$var$EM = parseInt(getComputedStyle(el).fontSize);
    }
    static createInstance() {
        const container = document.createElement("div");
        container.classList.add("proseplay");
        document.body.appendChild(container);
        const pp = new $79098f0a1478fa01$export$bb601a587602e2b4(container);
        return pp;
    }
    /**
   * Load a sample.
   * @param name The name of the sample to load.
   * @returns The ProsePlay instance with the parsed text.
   */ load(name) {
        this.lines = [];
        this.windows = [];
        this.links = [];
        return this.parse($79098f0a1478fa01$var$samples[name]);
    }
    /**
   * Create a ProsePlay instance and load a sample.
   * @param name The name of the sample to load.
   * @returns A ProsePlay instance with the parsed text.
   */ static load(name) {
        const pp = $79098f0a1478fa01$export$bb601a587602e2b4.createInstance();
        return pp.load(name);
    }
    /**
   * Parse the given string.
   * @param str The formatted string to parse.
   * @returns The ProsePlay instance with the parsed text.
   */ parse(str) {
        this.lines = [];
        this.windows = [];
        this.links = [];
        str = str.trim();
        let textTokens = [];
        let lines = str.split("\n");
        lines.forEach((line)=>{
            const lineTokens = [];
            let m = line.matchAll(new RegExp("\\(([^(|)]+\\|([^(|)]+\\|?)+)\\)(\\[(\\d)*(-)?\\])?" // link index
            , "g"));
            const stringsIndex = 1, linkIndex = 4, orientationIndex = 5;
            let currIndex = 0;
            for (const match of m){
                const index = match.index;
                let isEscaped = line[index - 2] === "\\";
                let prevToken = {
                    strings: []
                }, currentToken = {
                    strings: []
                };
                if (isEscaped) {
                    prevToken.strings = [
                        line.slice(currIndex, index - 1)
                    ];
                    currentToken.strings = [
                        line.slice(index, index + match[0].length)
                    ];
                } else {
                    prevToken.strings = [
                        line.slice(currIndex, index)
                    ];
                    currentToken.strings = match[stringsIndex].split("|");
                    currentToken.strings.forEach((str, i)=>{
                        let [s, fnc] = str.split("->");
                        if (fnc) {
                            if (!currentToken.functionNames) currentToken.functionNames = [];
                            currentToken.functionNames[i] = fnc;
                            currentToken.strings[i] = s;
                        }
                    });
                    if (match[linkIndex]) currentToken.linkIndex = parseInt(match[linkIndex]);
                    if (match[orientationIndex] && (match[orientationIndex] === "|" || match[orientationIndex] === "-")) currentToken.horizontal = match[orientationIndex] === "-";
                }
                lineTokens.push(prevToken);
                lineTokens.push(currentToken);
                currIndex = index + match[0].length;
            }
            if (currIndex < line.length) lineTokens.push({
                strings: [
                    line.slice(currIndex)
                ]
            });
            textTokens.push(lineTokens);
        });
        this.constructText(textTokens);
        return this;
    }
    /**
   * Create a new ProsePlay instance and parse the given string.
   * @param str The formatted string to parse.
   * @returns A ProsePlay instance with the parsed text.
   */ static parse(str) {
        const pp = $79098f0a1478fa01$export$bb601a587602e2b4.createInstance();
        pp.parse(str);
        return pp;
    }
    constructText(text) {
        this.el.innerHTML = "";
        text.forEach((line)=>{
            const lineEl = $79098f0a1478fa01$var$lineTemplate.cloneNode(true);
            this.el.appendChild(lineEl);
            this.lines.push({
                el: lineEl,
                tokens: [],
                windows: []
            });
            line.forEach((token)=>{
                if (token.strings.length === 1) {
                    const span = document.createElement("span");
                    span.classList.add("proseplay-plaintext");
                    span.innerText = token.strings[0];
                    lineEl.append(span);
                    this.lines[this.lines.length - 1].tokens.push(token.strings[0]);
                } else {
                    const window1 = new $97aedba7ab332eed$export$cec157cbbbaf65c9(lineEl);
                    if (token.linkIndex) {
                        if (!this.links[token.linkIndex]) this.links[token.linkIndex] = [];
                        this.links[token.linkIndex].push(window1);
                    }
                    if (token.functionNames) window1.setFunctionNames(token.functionNames);
                    for(const name in this.functions)window1.setFunction(name, this.functions[name]);
                    if (token.horizontal) window1.setHorizontal();
                    this.lines[this.lines.length - 1].tokens.push(window1);
                    this.lines[this.lines.length - 1].windows.push(window1);
                    this.windows.push(window1);
                    token.strings.forEach((str)=>window1.addChoice(new $fb2114d596aef9c8$export$32a7462f6a06cbd5(str)));
                    window1.activateChoice(window1.choices[0]);
                }
            });
            if (line.length === 0) lineEl.innerHTML = "&nbsp;";
        });
        this.links.forEach((windows, i)=>{
            windows.forEach((window1)=>{
                const otherWindows = windows.filter((otherWindow)=>otherWindow !== window1);
                window1.setLink(i, otherWindows);
            });
        });
    }
    /**
   * Slide each window to a random choice. If windows are linked, they will move to the same choice index together. If no `windowIndexes` is specified, all windows will be randomised.
   */ randomise(options) {
        if (this._isExpanded) return;
        const windowIndexes = options?.windowIndexes || this.windows.map((_, i)=>i);
        let windowsDragged = [];
        windowIndexes.forEach((i)=>{
            const window1 = this.windows[i];
            if (!window1) return;
            if (windowsDragged.includes(window1)) return;
            let choiceIndex = window1.random();
            window1.slideToChoice(choiceIndex, options?.millis);
            windowsDragged.push(window1);
            if (window1.linkIndex) this.links[window1.linkIndex].forEach((otherWindow)=>{
                if (windowsDragged.includes(otherWindow)) return;
                otherWindow.slideToChoice(choiceIndex, options?.millis);
                windowsDragged.push(otherWindow);
            });
        });
    }
    /**
   * Alias for `randomise()`.
   * @param windowIndexes An optional list of window indexes to randomise.
   */ randomize(options) {
        this.randomise(options);
    }
    /**
   * Expand all windows to show all choices at once. When this is enabled, all other interactions are disabled until `collapse()` is called.
   */ expand() {
        this._isExpanded = true;
        this.el.classList.toggle("proseplay-is-expanded", this._isExpanded);
        const em = parseFloat(getComputedStyle(this.el).fontSize);
        this.lines.forEach((line)=>{
            let marginBottom = 0;
            line.windows.forEach((window1)=>{
                let height = window1.el.scrollHeight - window1.listEl.offsetTop;
                window1.el.style.height = `${height}px`;
                let y = window1.el.scrollHeight - (window1.currentIndex + 1) * 1.25 * em - 0.06 * em;
                window1.el.style.top = `${y}px`;
                window1.el.style.marginTop = `${-y}px`;
                marginBottom = Math.max(marginBottom, y);
                window1.listEl.style.top = "0px";
                let maxWidth = 0;
                window1.choices.forEach((choice, i)=>{
                    choice.el.style.opacity = "1";
                    if (!window1.horizontal) maxWidth = Math.max(maxWidth, choice.el.offsetWidth);
                    else {
                        if (i > 0) maxWidth += $79098f0a1478fa01$var$EM;
                        maxWidth += choice.el.offsetWidth;
                    }
                });
                window1.el.style.width = `${maxWidth}px`;
                window1.isHoverable = false;
            });
            line.el.style.marginBottom = `${marginBottom}px`;
        });
    }
    /**
   * Collapse all windows.
   */ collapse() {
        this._isExpanded = false;
        this.el.classList.toggle("proseplay-is-expanded", this._isExpanded);
        this.lines.forEach((line)=>{
            line.el.style.removeProperty("margin-bottom");
            line.windows.forEach((window1)=>{
                window1.el.style.removeProperty("height");
                window1.el.style.removeProperty("top");
                window1.el.style.removeProperty("margin-top");
                window1.listEl.style.removeProperty("top");
                window1.choices.forEach((choice)=>{
                    choice.el.style.removeProperty("opacity");
                });
                window1.listEl.style.removeProperty("width");
                window1.isHoverable = true;
                window1.activateChoice();
            });
        });
    }
    /**
   * Check if windows are expanded or collapsed.
   * @returns A boolean representing whether windows are expanded (true) or collapsed (false).
   */ get isExpanded() {
        return this._isExpanded;
    }
    /**
   * Return the current text.
   * @returns A string of the current text.
   */ snapshot() {
        let text = "";
        this.lines.forEach((line)=>{
            line.tokens.forEach((token)=>{
                if (token instanceof $97aedba7ab332eed$export$cec157cbbbaf65c9) text += token.choices[token.currentIndex].text;
                else text += token;
            });
            text += "\n";
        });
        return text;
    }
    /**
   * Set function to be called when certain choices are selected.
   * @param name Name of function.
   * @param fnc Function to be called.
   */ setFunction(name, fnc) {
        this.functions[name] = fnc;
        this.windows.forEach((window1)=>window1.setFunction(name, fnc));
    }
    handleResize = ()=>{
        this.windows.forEach((window1)=>window1.activateChoice());
    };
    /**
   * Return a nested list of choices in each window.
   */ get choices() {
        return this.windows.map((window1)=>{
            return window1.choices.map((choice)=>choice.text);
        });
    }
    /**
   * Return a list of indexes to which each window is currently set.
   */ get currentIndexes() {
        return this.windows.map((window1)=>window1.currentIndex);
    }
    /**
   * Slide a specified window to a specified choice.
   * @param windowIndex The index of the window to slide.
   * @param choiceIndex The index of the choice to slide to.
   */ slideWindow(windowIndex, choiceIndex, options) {
        if (windowIndex > this.windows.length - 1) return;
        const window1 = this.windows[windowIndex];
        if (choiceIndex > window1.choices.length - 1) return;
        window1.slideToChoice(choiceIndex, options?.millis);
    }
}

},{"./proseplay.css":"f9YGx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f9YGx":[function() {},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["IK0PR","j0hgD"], "j0hgD", "parcelRequire0f87")

//# sourceMappingURL=index.fba89775.js.map
