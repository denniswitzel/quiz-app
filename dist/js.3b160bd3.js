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
})({"lib/js/index.js":[function(require,module,exports) {
"use strict"; // Main Content

var mainQuestion = get('.question');
var mainBookmark = get('.bookmark');
var mainCreate = get('.create');
var mainProfile = get('.profile'); // Navigation

var navFirst = get('.nav__link-1');
var navSecond = get('.nav__link-2');
var navThird = get('.nav__link-3');
var navFourth = get('.nav__link-4'); // SVG Navigation

var svgQuestions = get('.svg-questions');
var svgBookmark = get('.svg-bookmark');
var svgCreate = get('.svg-create');
var svgProfile = get('.svg-profile'); // Headline

var headline = get('h1'); // Bookmark

var bookmark1 = get('.question-box__bookmark--unmarked1');
var bookmark2 = get('.question-box__bookmark--unmarked2');
var bookmark3 = get('.question-box__bookmark--unmarked3');
var bookmark4 = get('.question-box__bookmark--unmarked4');
var bookmark5 = get('.question-box__bookmark--marked5');
var bookmark6 = get('.question-box__bookmark--marked6'); // Show Answer

var answerQuestion1 = get('.answer');
var answerQuestion2 = get('.answer2');
var answerQuestion3 = get('.answer3');
var answerQuestion4 = get('.answer4');
var answerQuestion5 = get('.answer5');
var answerQuestion6 = get('.answer6');
var buttonAnswer1 = get('.button-answer1');
var buttonAnswer2 = get('.button-answer2');
var buttonAnswer3 = get('.button-answer3');
var buttonAnswer4 = get('.button-answer4');
var buttonAnswer5 = get('.button-answer5');
var buttonAnswer6 = get('.button-answer6'); // Form

var buttonSubmit = get('.button-submit');
var input1 = get('[name=question]');
var input2 = get('[name=answer]');
var input3 = get('[name=tags]'); // Dark Mode

var body = get('body');
var header = get('header');
var footer = get('footer');
var darkMode = get('.dark-mode');
darkMode.addEventListener('click', function () {
  body.classList.toggle('body-light');
  header.classList.toggle('background-blue');
  footer.classList.toggle('background-blue');
  mainProfile.classList.toggle('profile-light');
}); // Show Answer Function

buttonAnswer1.addEventListener('click', answerToggle(buttonAnswer1, answerQuestion1));
buttonAnswer2.addEventListener('click', answerToggle(buttonAnswer2, answerQuestion2));
buttonAnswer3.addEventListener('click', answerToggle(buttonAnswer3, answerQuestion3));
buttonAnswer4.addEventListener('click', answerToggle(buttonAnswer4, answerQuestion4));
buttonAnswer5.addEventListener('click', answerToggle(buttonAnswer5, answerQuestion5));
buttonAnswer6.addEventListener('click', answerToggle(buttonAnswer6, answerQuestion6));

function answerToggle(button, answer) {
  return function () {
    answer.classList.toggle('question-box__answer');

    if (button.textContent === 'Show answer') {
      button.textContent = 'Hide answer';
    } else {
      button.textContent = 'Show answer';
    }

    return button, answer;
  };
} // Navigation Arrow Functions


navFirst.addEventListener('click', function () {
  mainQuestion.classList.remove('hidden');
  mainBookmark.classList.add('hidden');
  mainCreate.classList.add('hidden');
  mainProfile.classList.add('hidden');
  headline.innerHTML = '<span class="header__headline--gradient">CSS:</span> { Quiz }';
  svgQuestions.classList.add('svg-fill');
  svgBookmark.classList.remove('svg-fill');
  svgCreate.classList.remove('svg-fill');
  svgProfile.classList.remove('svg-fill');
});
navSecond.addEventListener('click', function () {
  mainQuestion.classList.add('hidden');
  mainBookmark.classList.remove('hidden');
  mainCreate.classList.add('hidden');
  mainProfile.classList.add('hidden');
  headline.textContent = 'Bookmarks';
  svgQuestions.classList.remove('svg-fill');
  svgBookmark.classList.add('svg-fill');
  svgCreate.classList.remove('svg-fill');
  svgProfile.classList.remove('svg-fill');
});
navThird.addEventListener('click', function () {
  mainQuestion.classList.add('hidden');
  mainBookmark.classList.add('hidden');
  mainCreate.classList.remove('hidden');
  mainProfile.classList.add('hidden');
  headline.textContent = 'Create';
  svgQuestions.classList.remove('svg-fill');
  svgBookmark.classList.remove('svg-fill');
  svgCreate.classList.add('svg-fill');
  svgProfile.classList.remove('svg-fill');
});
navFourth.addEventListener('click', function () {
  mainQuestion.classList.add('hidden');
  mainBookmark.classList.add('hidden');
  mainCreate.classList.add('hidden');
  mainProfile.classList.remove('hidden');
  headline.textContent = 'Profile';
  svgQuestions.classList.remove('svg-fill');
  svgBookmark.classList.remove('svg-fill');
  svgCreate.classList.remove('svg-fill');
  svgProfile.classList.add('svg-fill');
}); // Bookmark Functions

bookmark1.addEventListener('click', bookmarkToggle(bookmark1, 'question-box__bookmark--unmarked1', 'question-box__bookmark--marked1'));
bookmark2.addEventListener('click', bookmarkToggle(bookmark2, 'question-box__bookmark--unmarked2', 'question-box__bookmark--marked2'));
bookmark3.addEventListener('click', bookmarkToggle(bookmark3, 'question-box__bookmark--unmarked3', 'question-box__bookmark--marked3'));
bookmark4.addEventListener('click', bookmarkToggle(bookmark4, 'question-box__bookmark--unmarked4', 'question-box__bookmark--marked4'));
bookmark5.addEventListener('click', bookmarkToggle(bookmark5, 'question-box__bookmark--unmarked5', 'question-box__bookmark--marked5'));
bookmark6.addEventListener('click', bookmarkToggle(bookmark6, 'question-box__bookmark--unmarked6', 'question-box__bookmark--marked6'));

function bookmarkToggle(bookmark, classname1, classname2) {
  return function () {
    bookmark.classList.toggle(classname1);
    bookmark.classList.toggle(classname2);
  };
} // Form Reset & PreventDefault


buttonSubmit.addEventListener('click', function (event) {
  event.preventDefault();
  input1.value = '';
  input2.value = '';
  input3.value = '';
}); // Query Selector

function get(selector) {
  return document.querySelector(selector);
}
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50502" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","lib/js/index.js"], null)
//# sourceMappingURL=/js.3b160bd3.js.map