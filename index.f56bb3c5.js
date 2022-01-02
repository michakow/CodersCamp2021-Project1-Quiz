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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
})({"8XeeD":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "1558941af56bb3c5";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8Z0aK":[function(require,module,exports) {
var _getDataJs = require("./getData.js");
var _homepageJs = require("./homepage.js");
var _loaderJs = require("./loader.js");
window.onload = async ()=>{
    _loaderJs.loader();
    // Here goes logic:
    const categories = sessionStorage.getItem('categories') ? JSON.parse(sessionStorage.getItem('categories')) : await _getDataJs.getCategories();
    console.log(categories);
    _homepageJs.homepage(categories);
};

},{"./getData.js":"9D6x9","./homepage.js":"aFNXV","./loader.js":"jqHkM"}],"9D6x9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCategories", ()=>getCategories
);
parcelHelpers.export(exports, "getQuestions", ()=>getQuestions
);
parcelHelpers.export(exports, "getQuestionTotalCount", ()=>getQuestionTotalCount
);
const getCategories = async ()=>{
    try {
        const res = await fetch('https://opentdb.com/api_category.php');
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        sessionStorage.setItem('categories', JSON.stringify(data.trivia_categories));
        return data.trivia_categories;
    } catch (error) {
        console.error(error);
    }
};
const getQuestions = async (categoryID)=>{
    try {
        const questionsLevel = window.questionsLevel || 'easy';
        let path;
        if (categoryID === 999) path = 'https://opentdb.com/api.php?amount=10';
        else path = `https://opentdb.com/api.php?amount=10&category=${categoryID}&difficulty=${questionsLevel}`;
        const res = await fetch(path);
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        // sessionStorage.setItem(
        //   'questions',
        //   JSON.stringify(data.results),
        // );
        return data.results;
    } catch (error) {
        console.error(error);
    }
};
const getQuestionTotalCount = async (categoryID)=>{
    try {
        const res = await fetch(`https://opentdb.com/api_count.php?category=${categoryID}`);
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return data.category_question_count;
    } catch (error) {
        console.error(error);
    }
}; // export const getQuiz = (categoryID) => {
 //   fetch(`https://opentdb.com/api_count.php?category=${categoryID}`)
 //   .then(res => res.json())
 //   .then(data => console.log(data))
 // }
 // jak zrobić return z tego ?

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
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

},{}],"aFNXV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "homepage", ()=>homepage
);
var _renderCategoriesJs = require("./renderCategories.js");
var _quizowniaLogoPng = require("/src/images/quizownia-logo.png");
var _quizowniaLogoPngDefault = parcelHelpers.interopDefault(_quizowniaLogoPng);
const homepage = (categories)=>{
    const div = document.querySelector('#app');
    div.innerHTML = `
    <header>
      <nav class="navigation">
        <a href="/" class="navigation__logo">
          <img
            src=${_quizowniaLogoPngDefault.default}
            alt="logo"
            class="navigation__img"
          />
        </a>
        <div class="navigation__menu">
          <svg
            class="navigation__burger"
            viewBox="0 0 100 80"
            width="40"
            height="40"
          >
            <rect width="100" height="20" fill="#4d70ff"></rect>
            <rect y="30" width="100" height="20" fill="#4d70ff"></rect>
            <rect y="60" width="100" height="20" fill="#4d70ff"></rect>
          </svg>
          <div class="navigation__dropdown">
            <p class="navigation__title">Actual difficulty level: <span id="level" class="navigation__level-name">${window.questionsLevel || 'Easy'}</span></p>
            <ul class="navigation__level-list">
              <li class="navigation__list-item" data-level="easy">Easy</li>
              <li class="navigation__list-item" data-level="medium">Medium</li>
              <li class="navigation__list-item" data-level="hard">Hard</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <section class="category">
      <div class="container category__container">
        <div class="category__list">
        </div>
      </div>
    </section>
  `;
    const menuButton = document.querySelector('.navigation__burger');
    const dropdown = document.querySelector('.navigation__dropdown');
    menuButton.addEventListener('click', ()=>{
        dropdown.classList.toggle("active");
    });
    document.querySelectorAll('.navigation__list-item').forEach((item)=>{
        item.addEventListener('click', ()=>{
            window.questionsLevel = item.dataset.level;
            document.querySelector('#level').textContent = window.questionsLevel;
            dropdown.classList.remove("active");
        });
    });
    _renderCategoriesJs.renderCategories(categories, '.category__list');
};

},{"./renderCategories.js":"dNq8y","/src/images/quizownia-logo.png":"gIgyC","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dNq8y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderCategories", ()=>renderCategories
);
var _logoPng = require("/src/images/logo.png");
var _logoPngDefault = parcelHelpers.interopDefault(_logoPng);
var _appJs = require("./app.js");
const SELECTED_CATEGORY_IDS = [
    20,
    14,
    9,
    22,
    10,
    15,
    21,
    30,
    13,
    16
];
const renderCategories = (categories, parentSelector)=>{
    const parent = document.querySelector(parentSelector);
    const tiles = categories.filter((category)=>SELECTED_CATEGORY_IDS.includes(category.id)
    ).map((category)=>`
            <div class="card category__card" data-id="${category.id}" data-name="${category.name}">
                <a href="#" class="card__link">
                <img
                    src="${_logoPngDefault.default}"
                    alt="category"
                    class="card__image"
                />
                <h2 class="card__name">${category.name}</h2>
                </a>
            </div>`
    );
    parent.innerHTML = tiles.join('');
    //temporary solution
    document.querySelectorAll('.category__card').forEach((card)=>{
        card.addEventListener('click', ()=>_appJs.startApp(card.dataset.id, card.dataset.name)
        );
    });
};

},{"/src/images/logo.png":"30UTM","./app.js":"d9j9x","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"30UTM":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1PCHQ') + "logo.502ce92a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"chiK4":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"d9j9x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "startApp", ()=>startApp
);
var _getDataJs = require("./getData.js");
var _homepageJs = require("./homepage.js");
var _leaderboardJs = require("./leaderboard.js");
// import { chooseCategory } from './chooseCategory.js';
var _startQuizJs = require("./startQuiz.js");
var _toolsJs = require("./tools.js");
window.userName = '';
const startApp = async (id, name)=>{
    const categoryID = id;
    const categoryName = name;
    const questionCount = await _getDataJs.getQuestionTotalCount(categoryID);
    let questionCountForLevel;
    switch(window.questionsLevel){
        case 'hard':
            questionCountForLevel = questionCount.total_hard_question_count;
            break;
        case 'medium':
            questionCountForLevel = questionCount.total_medium_question_count;
            break;
        default:
            questionCountForLevel = questionCount.total_easy_question_count;
    }
    const div = document.querySelector('#app');
    div.innerHTML = `
    <section class="game">
      <div class="container game__inner">
        <input class="game__user--name" placeholder="Enter your name..." />

        <button class="button game__button--start-quiz">Start Quiz</button>
        <button class="button game__button--scores">Scores</button>
        <p class="game__questions-quantity">
          <span class="game__category-name">${categoryName}</span>
          <span class="game__total-questions">Total questions: ${questionCount.total_question_count}</span>
          <span class="game__total-questions-for-level">Questions for ${window.questionsLevel || 'easy'} level: ${questionCountForLevel}</span>
        </p>
        <button class="button game__button--back">Back to categories</button>
      </div>
    </section>
  `;
    const startButton = document.getElementsByClassName('game__button--start-quiz')[0];
    // TODO add chooseCategory function here
    // const categoryId = chooseCategory();
    // until chooseCategory is finished use id
    console.log(id);
    const questionList = await _getDataJs.getQuestions(categoryID);
    let errorText;
    startButton.addEventListener('click', ()=>{
        //TODO validate username
        const userInput = document.querySelector('.game__user--name');
        window.userName = userInput.value;
        const isValidUser = _toolsJs.validateUserName(window.userName);
        if (isValidUser) _startQuizJs.startQuiz(questionList, categoryName);
        else {
            if (errorText) return;
            errorText = document.createElement('div');
            errorText.classList.add('game__error');
            errorText.appendChild(document.createTextNode('User Name should consist of min 3 LETTERS, and letters only.'));
            userInput.parentNode.insertBefore(errorText, userInput.nextSibling);
        }
    }, false);
    const scoreButton = document.querySelector('.game__button--scores');
    scoreButton.addEventListener('click', ()=>{
        _leaderboardJs.showLeaderboard(categoryName);
    });
    const backButton = document.querySelector('.game__button--back');
    backButton.addEventListener('click', ()=>{
        _homepageJs.homepage(JSON.parse(sessionStorage.getItem('categories')));
    });
};

},{"./getData.js":"9D6x9","./homepage.js":"aFNXV","./leaderboard.js":"khUYO","./startQuiz.js":"bvVdz","./tools.js":"6HJIh","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"khUYO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showLeaderboard", ()=>showLeaderboard
);
var _homepage = require("./homepage");
const showLeaderboard = (category)=>{
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')).find((element)=>element.categoryName === category
    ) || false;
    //CreateElements - clear section and build new view
    const section = document.querySelector('section');
    section.innerHTML = '';
    section.className = 'score-dashboard';
    const container = document.createElement('div');
    container.className = 'container score-dashboard__container';
    const scoreDashboard = document.createElement('div');
    scoreDashboard.className = '.score-dashboard__group';
    const scoreDashboardTitle = document.createElement('h3');
    scoreDashboardTitle.className = 'score-dashboard__title';
    const categoryNameFormatted = leaderboard.categoryName ? leaderboard.categoryName[0].toUpperCase() + leaderboard.categoryName.slice(1) : category[0].toUpperCase() + category.slice(1);
    scoreDashboardTitle.appendChild(document.createTextNode(`Score dashboard for ${categoryNameFormatted}`));
    const scoreDashboardScoreList = document.createElement('ul');
    scoreDashboardScoreList.className = 'score-dashboard__player-score-list';
    scoreDashboardScoreList.innerHTML = leaderboard.players ? leaderboard.players.map((player)=>`<li class="score-dashboard__player-score">
      <span class="score-dashboard__game-title">${player.name}</span>
      <span class="score-dashboard__game-title">${player.score}/10</span>
    </li>`
    ).join('') : '<p>Leaderboard for this category is empty</p>';
    const categoriesButton = document.createElement('button');
    categoriesButton.className = 'button finish__button--back';
    categoriesButton.appendChild(document.createTextNode('Back to categories'));
    scoreDashboard.appendChild(scoreDashboardTitle);
    scoreDashboard.appendChild(scoreDashboardScoreList);
    scoreDashboard.appendChild(categoriesButton);
    container.appendChild(scoreDashboard);
    section.appendChild(container);
    //EventListener - button action
    categoriesButton.addEventListener('click', ()=>{
        _homepage.homepage(JSON.parse(sessionStorage.getItem('categories')));
    });
};

},{"./homepage":"aFNXV","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bvVdz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "startQuiz", ()=>startQuiz
);
var _renderQuestion = require("./renderQuestion");
var _finishQuiz = require("./finishQuiz");
var _timer = require("./timer");
const startQuiz = async (questionList, categoryName)=>{
    const section = document.querySelector('section');
    section.className = 'questions';
    section.innerHTML = `
    <div class="container">
      <div class="questions__timer"></div>
      <div class="questions__inner"></div>
    </div>
  `;
    const questionLength = questionList.length;
    window.points = 0;
    const timer = _timer.startTimer(window.userName, categoryName);
    for (let [id, question] of questionList.entries()){
        const answer = await _renderQuestion.renderQuestion(id, question, questionLength);
        if (answer) window.points++;
        if (id === questionLength - 1) {
            _timer.stopTimer(timer);
            return _finishQuiz.finishQuiz(window.userName, window.points, categoryName);
        }
    }
};

},{"./renderQuestion":"6nzBw","./finishQuiz":"25Mjy","./timer":"lQaum","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6nzBw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderQuestion", ()=>renderQuestion
);
var _toolsJs = require("./tools.js");
const renderQuestion = (questionId, question, questionLength)=>{
    const questionsInner = document.getElementsByClassName('questions__inner')[0];
    const answers = [
        ...question.incorrect_answers,
        question.correct_answer
    ];
    const shuffledAnswers = _toolsJs.shuffle(answers);
    questionsInner.innerHTML = `
    <h3 class="questions__question">
    ${questionId + 1}/${questionLength}. ${question.question}</h3>
    ${shuffledAnswers.map((answer)=>{
        return `<button class="button questions__answer">${answer}</button>`;
    }).join('')}
    `;
    const answerButtons1 = document.querySelectorAll('.questions__answer');
    const checkAnswer = (answer)=>answer === _toolsJs.decodeHtmlCharCodes(question.correct_answer)
    ;
    const showCorrectAnswer = ()=>{
        const answerButtons = document.querySelectorAll('.questions__answer');
        answerButtons.forEach((button)=>{
            if (button.textContent === question.correct_answer) button.classList.add('questions__answer--correct');
        });
    };
    return new Promise((answer)=>{
        const handleUserAnswer = (event)=>{
            const { target  } = event;
            if (checkAnswer(target.textContent)) {
                target.classList.add('questions__answer--correct');
                setTimeout(()=>{
                    answer(true);
                }, 1000);
                console.log('correct answer');
            } else {
                target.classList.add('questions__answer--wrong');
                showCorrectAnswer();
                console.log('incorrect answer');
                setTimeout(()=>{
                    answer(false);
                }, 1000);
            }
            removeListeners();
        };
        answerButtons1.forEach((button)=>{
            button.addEventListener('click', handleUserAnswer);
        });
        const removeListeners = ()=>{
            answerButtons1.forEach((button)=>{
                button.removeEventListener('click', handleUserAnswer);
            });
        };
    });
};

},{"./tools.js":"6HJIh","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6HJIh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "decodeHtmlCharCodes", ()=>decodeHtmlCharCodes
);
parcelHelpers.export(exports, "saveDataToSessionStorage", ()=>saveDataToSessionStorage
);
parcelHelpers.export(exports, "shuffle", ()=>shuffle
);
parcelHelpers.export(exports, "validateUserName", ()=>validateUserName
);
const decodeHtmlCharCodes = (str)=>str.replace(/(&#(\d+);)/g, (match, capture, charCode)=>String.fromCharCode(charCode)
    )
;
const saveDataToSessionStorage = (key, value)=>{
    sessionStorage.setItem(key, value);
};
const shuffle = ([...arr])=>{
    let m = arr.length;
    while(m){
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [
            arr[i],
            arr[m]
        ];
    }
    return arr;
};
const validateUserName = (user)=>{
    if (user.length < 3) return false;
    const usernameRegex = /^[a-zA-Z]+$/;
    const isValid = user.match(usernameRegex);
    return !!isValid;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"25Mjy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "finishQuiz", ()=>finishQuiz
);
var _homepage = require("./homepage");
var _leaderboard = require("./leaderboard");
const finishQuiz = (player, score = 0, category)=>{
    const playerName = player;
    const playerScore = score;
    const categoryName = category;
    //CreateElements - clear section and build new view
    const div = document.querySelector('#app');
    div.innerHTML = `<section></section>`;
    const section = document.querySelector('section');
    section.innerHTML = '';
    section.className = 'finish';
    const finishContainer = document.createElement('div');
    finishContainer.className = 'container';
    const finishHeading = document.createElement('div');
    finishHeading.className = 'finish__result';
    const firstParagraph = document.createElement('p');
    firstParagraph.appendChild(document.createTextNode(`It's over!`));
    const secondParagraph = document.createElement('p');
    secondParagraph.appendChild(document.createTextNode('Thanks for game :)'));
    finishHeading.appendChild(firstParagraph);
    finishHeading.appendChild(secondParagraph);
    const scoreResult = document.createElement('div');
    scoreResult.className = 'finish__score-group';
    const scoreHeading = document.createElement('h3');
    scoreHeading.appendChild(document.createTextNode('your score'));
    const scoreSpan = document.createElement('span');
    scoreSpan.className = 'finish__score';
    scoreSpan.appendChild(document.createTextNode(`${playerScore}/10`));
    scoreResult.appendChild(scoreHeading);
    scoreResult.appendChild(scoreSpan);
    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'finish__buttons';
    const categoriesButton = document.createElement('button');
    categoriesButton.className = 'button finish__button--back';
    categoriesButton.appendChild(document.createTextNode('Back to categories'));
    const scoreboardButton = document.createElement('button');
    scoreboardButton.className = 'button finish__button--scoreboard';
    scoreboardButton.appendChild(document.createTextNode('Scoreboard'));
    buttonsDiv.appendChild(categoriesButton);
    buttonsDiv.appendChild(scoreboardButton);
    finishContainer.appendChild(finishHeading);
    finishContainer.appendChild(scoreResult);
    finishContainer.appendChild(buttonsDiv);
    section.appendChild(finishContainer);
    //EventListeners - buttons action
    categoriesButton.addEventListener('click', ()=>{
        _homepage.homepage(JSON.parse(sessionStorage.getItem('categories')));
    });
    scoreboardButton.addEventListener('click', ()=>{
        _leaderboard.showLeaderboard(categoryName);
    });
    //LocalStorage - save player score
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    if (leaderboard.length && leaderboard.find((element)=>element.categoryName === categoryName
    )) leaderboard.find((element)=>element.categoryName === categoryName
    ).players.push({
        name: playerName,
        score: playerScore
    });
    else leaderboard.push({
        categoryName,
        players: [
            {
                name: playerName,
                score: playerScore
            }, 
        ]
    });
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
};

},{"./homepage":"aFNXV","./leaderboard":"khUYO","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lQaum":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "startTimer", ()=>startTimer
);
parcelHelpers.export(exports, "stopTimer", ()=>stopTimer
);
var _finishQuizJs = require("./finishQuiz.js");
const startTimer = (userName, categoryName)=>{
    const timer = document.querySelector('.questions__timer');
    const questions = document.querySelector('.questions');
    timer.textContent = '';
    const totalTime = 60;
    let timeleft = totalTime;
    if (timeleft > 0) {
        timer.textContent = `Time left: 1m 00s`;
        const interval = setInterval(()=>{
            timeleft--;
            let minutes = Math.floor(timeleft / 60);
            let seconds = Math.floor(timeleft % 60);
            timer.textContent = `Time left: ${minutes}m ${seconds}s`;
            if (timeleft < 0) {
                clearInterval(interval);
                timer.textContent = `Time left: 0m 0s`;
                timer.style.display = 'none';
                questions.remove();
                _finishQuizJs.finishQuiz(userName, window.points, categoryName);
            }
        }, 1000);
        return interval;
    }
};
const stopTimer = (timer)=>{
    const questions = document.querySelector('.questions');
    const timerElem = document.querySelector('.questions__timer');
    timerElem.style.display = 'none';
    questions.remove();
    clearInterval(timer);
};

},{"./finishQuiz.js":"25Mjy","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gIgyC":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('1PCHQ') + "quizownia-logo.44e2add5.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"jqHkM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loader", ()=>loader1
);
const loader1 = ()=>{
    const parent = document.querySelector('#app');
    const loader = `<div class="lds-dual-ring"></div>`;
    parent.innerHTML = loader;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["8XeeD","8Z0aK"], "8Z0aK", "parcelRequiredcee")

//# sourceMappingURL=index.f56bb3c5.js.map
