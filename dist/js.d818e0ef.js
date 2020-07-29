// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/js/util.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.getAll = getAll;

function get(selector) {
  return document.querySelector(selector);
}

function getAll(selector) {
  return document.querySelectorAll(selector);
}
},{}],"src/js/cards.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initCardsQuestion = initCardsQuestion;
exports.cardList = void 0;

var _util = require("./util");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var cardList = [{
  question: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.',
  answer: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.',
  isBookmarked: false,
  tags: ['HTML', 'CSS']
}, {
  question: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.',
  answer: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.',
  isBookmarked: false,
  tags: ['HTML', 'CSS', 'React']
}, {
  question: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.',
  answer: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.',
  isBookmarked: false,
  tags: ['HTML', 'CSS', 'javaScript', 'React']
}, {
  question: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.',
  answer: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.',
  isBookmarked: false,
  tags: ['HTML', 'CSS', 'javaScript']
}, {
  question: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.',
  answer: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.',
  isBookmarked: false,
  tags: ['HTML', 'javaScript', 'React']
}];
exports.cardList = cardList;

function initCardsQuestion() {
  var target = (0, _util.get)('[data-name=question]');
  target.innerHTML = '';
  cardList.forEach(buildingCard);

  function buildingCard(card) {
    var newCard = document.createElement('section');
    newCard.className = 'question-box';
    newCard.innerHTML =
    /*html*/
    "<svg data-js=\"bookmark\" class=\"question-bookmark\" x=\"0px\" y=\"0px\" width=\"80.8px\" height=\"107.8px\" viewBox=\"0 0 80.8 107.8\" enable-background=\"new 0 0 80.8 107.8\" xml:space=\"preserve\">\n        <polygon points=\"0,26.3 80.8,26.3 80.8,0 14.5,0 \"/>\n        <polygon  points=\"80.8,107.8 47.6,92.2 14.5,107.8 14.5,0 80.8,0 \"/>\n        <polygon points=\"47.7,37.1 53.1,48.2 65.3,49.9 56.5,58.5 58.6,70.6 47.7,64.9 36.8,70.6 38.9,58.5 30.1,49.9 42.2,48.2 \"/></svg>\n        <h2 class=\"question-box__headline mb-10\">Question:</h2>\n        <p class=\"question-box__text ff-roboto\">".concat(card.question, "</p>\n        <button class=\"button-answer\">Show answer</button>\n        <div class=\"question-box__answer question-box__hidden\">\n            <h2 class=\"question-box__headline mb-10\">Answer:</h2>\n            <p class=\"question-box__text ff-roboto\">").concat(card.answer, "</p>\n        </div>");
    target.appendChild(newCard);
    var ulList = document.createElement('ul');
    ulList.classList.add('question-box__tags', 'ff-roboto');
    card.tags.forEach(function (tag) {
      var li = document.createElement('li');
      li.textContent = tag;
      ulList.appendChild(li);
    });
    newCard.appendChild(ulList);
    toggleLogic(newCard);
    activeBookmark(newCard);
  }
}

function activeBookmark(card) {
  var bookmarks = card.querySelector('[data-js=bookmark]');
  bookmarks.addEventListener('click', function () {
    bookmarks.classList.toggle('active');
    var isBookmarked = cardList.map(function (obj) {
      return obj.isBookmarked === false ? _objectSpread(_objectSpread({}, obj), {}, {
        isBookmarked: true
      }) : obj;
    });
    console.log(isBookmarked);
  });
}

function toggleLogic(card) {
  var button = card.querySelector('.button-answer');
  var answerText = card.querySelector('.question-box__answer');
  button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
    answerText.classList.toggle('question-box__hidden');
    button.textContent = button.textContent === 'Show answer' ? 'Hide answer' : 'Show answer';
  });
}
},{"./util":"src/js/util.js"}],"src/js/darkmode.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initDarkmode = initDarkmode;

var _util = require("./util");

function initDarkmode() {
  var body = (0, _util.get)('body');
  var header = (0, _util.get)('header');
  var footer = (0, _util.get)('footer');
  var darkMode = (0, _util.get)('.dark-mode');
  var profilePage = (0, _util.get)('.profile');
  darkMode.addEventListener('click', function () {
    body.classList.toggle('body-light');
    header.classList.toggle('background-blue');
    footer.classList.toggle('background-blue');
    profilePage.classList.toggle('profile-light');
  });
}
},{"./util":"src/js/util.js"}],"src/js/form.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initForm = initForm;

var _util = require("./util");

var _cards = require("./cards");

function initForm() {
  var form = (0, _util.get)('form');
  form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (event) {
    event.preventDefault();
    var question = form.question,
        answer = form.answer,
        tags = form.tags;

    _cards.cardList.push({
      question: question.value,
      answer: answer.value,
      tags: tags.value.split(',').map(function (tag) {
        return tag.trim();
      })
    });

    form.reset();
  });
}
},{"./util":"src/js/util.js","./cards":"src/js/cards.js"}],"src/js/navigation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initNavigation = initNavigation;

var _util = require("./util");

var _cards = require("./cards");

function initNavigation() {
  var headline = (0, _util.get)('[data-js=headline]');
  var page = (0, _util.getAll)('[data-js=page]');
  var navList = (0, _util.getAll)('[data-js=nav-icon]');
  navList.forEach(function (navIcon) {
    navIcon.addEventListener('click', function () {
      var navTarget = navIcon.dataset.name;
      headline.textContent = navIcon.dataset.headline;

      if (navTarget === 'question') {
        (0, _cards.initCardsQuestion)();
      }

      page.forEach(function (page) {
        var pageName = page.dataset.name;
        page.classList.toggle('hidden', pageName !== navTarget);
      });
      navList.forEach(function (oneOfAllIcons) {
        oneOfAllIcons.classList.toggle('fill-orange', oneOfAllIcons === navIcon);
      });
    });
  });
}
},{"./util":"src/js/util.js","./cards":"src/js/cards.js"}],"src/js/index.js":[function(require,module,exports) {
"use strict";

var _cards = require("./cards");

var _darkmode = require("./darkmode");

var _form = require("./form");

var _navigation = require("./navigation");

(0, _navigation.initNavigation)();
(0, _form.initForm)();
(0, _darkmode.initDarkmode)();
(0, _cards.initCardsQuestion)();
},{"./cards":"src/js/cards.js","./darkmode":"src/js/darkmode.js","./form":"src/js/form.js","./navigation":"src/js/navigation.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65232" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/index.js"], null)
//# sourceMappingURL=/js.d818e0ef.js.map