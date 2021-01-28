/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/changeColorOfTheSidepanel.js":
/*!*****************************************************!*\
  !*** ./src/js/modules/changeColorOfTheSidepanel.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function changeColorOfTheSidepanel() {
    const hamburger = document.querySelector('.hamburger'),
        hamburgerSpans = document.querySelectorAll('.hamburger span'),
        sidepanelLink = document.querySelectorAll('.sidepanel__link'),
        divider = document.querySelector('.sidepanel__divider'),
        sidepanelText = document.querySelector('.sidepanel__text');

    window.addEventListener('scroll', () => {
        (pageYOffset > document.documentElement.clientHeight * .2) ? sidepanelText.style.color = '#000': sidepanelText.style.color = '#fff';

        (pageYOffset > document.documentElement.clientHeight * .5) ? divider.classList.add('blackBG'): divider.classList.remove('blackBG');

        if (pageYOffset > document.documentElement.clientHeight * .6) {
            sidepanelLink.forEach(element => {
                element.classList.add('blackColor');
            });
        } else {
            sidepanelLink.forEach(element => {
                element.classList.remove('blackColor');
            });
        }

        if (pageYOffset > document.documentElement.clientHeight) {
            hamburgerSpans.forEach(element => {
                element.classList.add('black');
            });

            hamburger.classList.add('hamburger_blackBG');
        } else {
            hamburgerSpans.forEach(element => {
                element.classList.remove('black');
            });

            hamburger.classList.remove('hamburger_blackBG');
        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeColorOfTheSidepanel);

/***/ }),

/***/ "./src/js/modules/delayMainAnimation.js":
/*!**********************************************!*\
  !*** ./src/js/modules/delayMainAnimation.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function delayMainAnimation() {
    const sidepanel = document.querySelector('.sidepanel'),
        mainBTNS = document.querySelector('.main__btns'),
        hamburger = document.querySelector('.hamburger');

    setInterval(() => {
        hamburger.classList.add('hamburger--active');
        sidepanel.classList.add('sidepanel--active');
        mainBTNS.classList.add('main__btns--active')
    }, 3000);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (delayMainAnimation);

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function form() {
    const form = document.querySelector('.contacts__form'),
        loading = document.querySelector('.contacts'),
        modalDone = document.querySelector('.modalDone'),
        modalErr = document.querySelector('.modalErr');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if (error === 0) {
            loading.classList.add('sending');
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                form.reset();
                loading.classList.remove('sending');
                modalDone.style.display = 'block';
            } else {
                loading.classList.remove('sending');
                modalErr.style.display = 'block';
            }
        }
    });

    function formValidate(form) {
        const formReq = document.querySelectorAll('._required');
        let error = 0;

        for (let i = 0; i < formReq.length; i++) {
            const input = formReq[i];
            formRemoveError(input);

            if (input.classList.contains('email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            }

            if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
                formAddError(input);
                error++;
            }

            if (input.value === '') {
                formAddError(input);
                error++;
            }
        }

        return error;
    }

    function formAddError(input) {
        input.classList.add('error');
    }

    function formRemoveError(input) {
        input.classList.remove('error');
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function menu() {
    const hamburgerWrapper = document.querySelector('.hamburger__wrapper'),
        menu = document.querySelector('.menu'),
        close = document.querySelector('.close'),
        overlay = document.querySelector('.menu__overlay'),
        links = document.querySelectorAll('.menu__link'),
        social = document.querySelector('.menu__social');

    hamburgerWrapper.addEventListener('click', () => {
        menu.classList.add('menu--active');
    });

    close.addEventListener('click', () => {
        menu.classList.remove('menu--active');
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('menu--active');
    });

    links.forEach(e => {
        e.addEventListener('click', () => {
            menu.classList.remove('menu--active');
        });
    });

    social.addEventListener('click', () => {
        menu.classList.remove('menu--active');
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/js/modules/skillsAutoPercents.js":
/*!**********************************************!*\
  !*** ./src/js/modules/skillsAutoPercents.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function skillsAutoPercents() {
    const counters = document.querySelectorAll('.skills__percent-box-value'),
        lines = document.querySelectorAll('.skills__percent-progress-value');

    counters.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    });

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (skillsAutoPercents);

/***/ }),

/***/ "./src/js/modules/smoothScrolling.js":
/*!*******************************************!*\
  !*** ./src/js/modules/smoothScrolling.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function smoothScrolling() {
    const anchors = document.querySelectorAll('a[href^="#"]');

    SmoothScrolling(anchors);

    function SmoothScrolling(element) {
        for (let anchor of element) {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();

                const blockID = anchor.getAttribute('href')

                document.querySelector(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            })
        }
    };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScrolling);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ "./src/js/modules/menu.js");
/* harmony import */ var _modules_smoothScrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/smoothScrolling */ "./src/js/modules/smoothScrolling.js");
/* harmony import */ var _modules_changeColorOfTheSidepanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/changeColorOfTheSidepanel */ "./src/js/modules/changeColorOfTheSidepanel.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");
/* harmony import */ var _modules_skillsAutoPercents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/skillsAutoPercents */ "./src/js/modules/skillsAutoPercents.js");
/* harmony import */ var _modules_delayMainAnimation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/delayMainAnimation */ "./src/js/modules/delayMainAnimation.js");










(0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_modules_smoothScrolling__WEBPACK_IMPORTED_MODULE_1__.default)();
(0,_modules_changeColorOfTheSidepanel__WEBPACK_IMPORTED_MODULE_2__.default)();
(0,_modules_form__WEBPACK_IMPORTED_MODULE_3__.default)();
(0,_modules_skillsAutoPercents__WEBPACK_IMPORTED_MODULE_4__.default)();
(0,_modules_delayMainAnimation__WEBPACK_IMPORTED_MODULE_5__.default)();

// ----------TipingText----------
const typed = new Typed('.typed', {
    strings: ['^1000 My name is Oleksandr ^300 <br> <span class="subtitle main__subtitle">I am Junior Front-End Developer</span>'],
    typeSpeed: 15,
    showCursor: false,
});

// ----------WOW-JS----------
new WOW().init();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map