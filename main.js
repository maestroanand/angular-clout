(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\my projects\cloutinno\clout\src\main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos/dist/aos.css */ "6Cl6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class HomeComponent {
    constructor() { }
    scroll() {
        window.scrollTo({ top: 50, behavior: 'smooth' });
    }
    ngOnInit() {
        document.getElementById("lay").style.display = "none";
        aos__WEBPACK_IMPORTED_MODULE_0___default.a.init();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 88, vars: 0, consts: [["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["rel", "stylesheet", "href", ""], ["id", "ban-txt", 1, "banner-section"], [1, "banner-header-div"], ["data-aos", "fade-up", "data-aos-easing", "linear", "data-aos-duration", "1400", 1, "banner-txt"], ["data-aos", "fade-up", "data-aos-easing", "linear", "data-aos-duration", "1400", 1, "banner-content"], ["id", "back-img", 1, "banner-video-div"], ["muted", "", "loop", "", "autoplay", "", "src", "../../assets/images/h.webm", "id", "cv", 1, "banner-videoo"], ["href", ""], ["id", "scrol", 1, "scrollto", 2, "width", "50px", "height", "50px", "background-color", "black", "border-radius", "50%", "text-align", "center", "position", "fixed", "top", "80%", "right", "5%", "z-index", "9999999", "scroll-behavior", "smooth", 3, "click"], [1, "fa", "fa-angle-up", "fa-2x", 2, "color", "white", "padding-top", "7px"], ["id", "section2", 1, "about-section"], [1, "about-header-div"], ["data-aos", "fade-left", 1, "about-header"], [1, "about-text-div"], ["data-aos", "zoom-in", 1, "about-text"], [1, "about-video-div"], ["autoplay", "", "loop", "", "muted", "", "src", "../../assets/images/img-2.webm", "loop", "", 1, "about-video"], ["id", "prodsect", 1, "product-section"], [1, "product-header-div"], ["data-aos", "fade-left", 1, "product-header", 2, "font-family", "cursive"], [1, "product-header2-div"], [1, "product-header2"], [1, "ing"], [1, "ing-x"], ["src", "../../assets/images/sand.png", "alt", "", 1, "ing1"], [1, "overlay-1"], [2, "color", "black", "font-size", "larger", "letter-spacing", "1px", "font-weight", "900"], [1, "ing-y"], ["src", "../../assets/images/lavender.jpg", "alt", "", 1, "ing2"], [1, "overlay-2"], [1, "ing-z"], ["src", "../../assets/images/lemon.jpg", "alt", "", 1, "ing3"], [1, "overlay-3"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide", "product-slider-div"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "pris"], ["src", "../../assets/images/pr3231.png", "alt", "First slide", 1, "img"], [1, "carousel-item"], ["src", "../../assets/images/pc11.png", "alt", "Second slide", 1, "img"], ["src", "../../assets/images/pr1111.png", "alt", "Third slide", 1, "img"], ["src", "../../assets/images/pr222.png", "alt", "Third slide", 1, "img"], ["src", "../../assets/images/pr411.png", "alt", "Third slide", 1, "img"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["src", "../../assets/images/arrow1.png", "alt", "", "id", "arrowimg"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["src", "../../assets/images/arrow1.png", "alt", "", "id", "arrowimg2"], ["id", "sect4", 1, "contact-section"], [1, "contact-header-div"], ["data-aos", "fade-left", "data-aos-duration", "500", "data-aos-easing", "ease-in", 1, "contact-head", 2, "font-family", "cursive"], [1, "contact-box-div"], ["src", "../../assets/images/post2.png", "alt", "", 1, "img-fluid", 2, "float", "right"], ["action", "https://formcarry.com/s/3Sa4lm8x8nU", "method", "post", "accept-charset", "UTF-8", "id", "Login"], ["type", "text", "id", "fname", "name", "fname", "placeholder", "Your Name.."], ["type", "email", "id", "mail", "name", "mail", "placeholder", "Your Email..."], ["type", "number", "name", "phone", "id", "phonenum", "placeholder", "Your  Phonenum"], ["id", "subject", "name", "subject", "placeholder", "Write Something..", 2, "height", "100px"], ["name", "button", "type", "submit", "value", "Send", 1, "btn", "btn-lg", "btn-primary"], ["autoplay", "", "loop", "", "src", "../../assets/images/K.webm", 1, "vd"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "CLOUT BIO INNOVATORS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "we explore execute and expand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "video", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_14_listener() { return ctx.scroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "WHO WE ARE?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "We are basically a consortium of academicians, technologists and enterpreneurs who are destined to develop ecologically and environmentally sustainable product based on natural compounds.We have a well-established research facility to decipher bio active potential of APIs, crude formulations and raw materials. We train and nurture young minds to design and develop economically viable products from basic research making your research bench to bedside");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "video", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "h1", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "PRODUCTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Our Pristine Sanitiser is formlated with foodgrade ingriedients and are available in 3 flavours");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Sandal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Lavender");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Lime");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "h3", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Pristine - 100 millilitre mist spray");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "h3", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Pristine - 250 millilitre wide spray");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "h3", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Medicorub - 5 Litre can ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "h3", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, " Pristine - 1 Litre multispray ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "h3", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Pristine - 50 millilitre Flipcap");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "h1", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "CONTACT US");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "form", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "video", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, styles: [".wrapper[_ngcontent-%COMP%]{\r\n  overflow-x: hidden;\r\n}\r\n\r\n*[_ngcontent-%COMP%]\r\n{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    \r\n}\r\n\r\nhtml[_ngcontent-%COMP%] {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n.header-overlay[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0%;\r\n  left: 0%;\r\n  background-color: #17e9e0;\r\n  width: 100%;\r\n  height: 18%;\r\n  z-index: 999999;\r\n\r\n}\r\n\r\n.banner-section[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 70vh;\r\n  background-image: linear-gradient(to right, rgba(0, 0, 255, 0.5), transparent 80%);\r\n  position: relative;\r\n  \r\n}\r\n\r\n.banner-header-div[_ngcontent-%COMP%]{\r\n \r\n position: absolute;\r\n  top: 30%;\r\n  left: 10%;\r\n  \r\n  height: auto;\r\n  width: 70%;\r\n  \r\n  \r\n  \r\n  \r\n  \r\n}\r\n\r\n.banner-txt[_ngcontent-%COMP%] {\r\n  \r\n \r\n  font-family: cursive;\r\n  \r\n  font-weight: 900;\r\n \r\n  \r\n  \r\n}\r\n\r\n.banner-content[_ngcontent-%COMP%]{\r\n  font-family: cursive;\r\n  font-weight: 600;\r\n  font-size: 40px;\r\n  \r\n  \r\n  \r\n}\r\n\r\n.banner-video-div[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n  transform: translate(125%,0);\r\n  \r\n}\r\n\r\n.banner-videoo[_ngcontent-%COMP%]{\r\n width: 65%;\r\n height: 65%;\r\n}\r\n\r\n.about-section[_ngcontent-%COMP%]{\r\n  background-image: linear-gradient(to right, rgba(255, 0, 0, 0.5), transparent 80%);\r\n  \r\n  position: relative;\r\n}\r\n\r\n.about-header-div[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  text-align: center;\r\n  padding-top: 130px;\r\n}\r\n\r\n.about-header[_ngcontent-%COMP%]{\r\n  display: block;\r\n  margin: auto;\r\n}\r\n\r\n.about-text-div[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n  height: 100%;\r\n  margin-left: 10%;\r\n  transform: translateY(50%);\r\n}\r\n\r\n.about-text[_ngcontent-%COMP%]{\r\n  font-family: cursive;\r\n  font-size: 20px;\r\n  letter-spacing: 1px;\r\n  word-spacing: 2px;\r\n}\r\n\r\n.about-video-div[_ngcontent-%COMP%]{\r\n  transform: translate(65%,-45%);\r\n}\r\n\r\n.about-video[_ngcontent-%COMP%]{\r\n  width: 30%;\r\n  height: 30%;\r\n}\r\n\r\n.product-header-div[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 90px;\r\n}\r\n\r\n.product-header2-div[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  text-align: center;\r\n  justify-content: center;\r\n  align-content: center;\r\n  padding-top: 40px;\r\n}\r\n\r\n.product-header2[_ngcontent-%COMP%]{\r\n  font-family: cursive;\r\n  font-weight: 600;\r\n  font-size: 20px;\r\n  display: block;\r\n  margin: auto;\r\n  \r\n}\r\n\r\n.ing[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 60px;\r\n}\r\n\r\n.ing1[_ngcontent-%COMP%]{\r\n  -webkit-clip-path: circle(35%);\r\n          clip-path: circle(35%);\r\n  \r\n}\r\n\r\n.ing-x[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  text-align: center;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.overlay-1[_ngcontent-%COMP%]{\r\n \r\n  display: block;\r\n  margin: auto;\r\n  position: absolute;\r\n  \r\n  opacity: 0;\r\n\r\n  \r\n  \r\n  \r\n  \r\n}\r\n\r\n.ing-x[_ngcontent-%COMP%]:hover   .overlay-1[_ngcontent-%COMP%]{\r\n  opacity: 1;\r\n}\r\n\r\n.ing2[_ngcontent-%COMP%]{\r\n  -webkit-clip-path: circle(35%);\r\n          clip-path: circle(35%);\r\n}\r\n\r\n.ing-y[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: flex;\r\n  text-align: center;\r\n  align-items: center;\r\n  justify-content: center;\r\n  \r\n}\r\n\r\n.overlay-2[_ngcontent-%COMP%]{\r\n  opacity: 0;\r\n  position: absolute;\r\n  display: block;\r\n  margin: auto;\r\n\r\n\r\n}\r\n\r\n.ing-y[_ngcontent-%COMP%]:hover   .overlay-2[_ngcontent-%COMP%]{\r\n  opacity: 1;\r\n}\r\n\r\n.ing3[_ngcontent-%COMP%]{\r\n  -webkit-clip-path: circle(35%);\r\n          clip-path: circle(35%);\r\n}\r\n\r\n.ing-z[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: flex;\r\n  text-align: center;\r\n  justify-content: center;\r\n  align-items: center;\r\n  \r\n}\r\n\r\n.overlay-3[_ngcontent-%COMP%]{\r\n  opacity: 0;\r\n  position: absolute;\r\n  display: block;\r\n  margin: auto;\r\n}\r\n\r\n.ing-z[_ngcontent-%COMP%]:hover   .overlay-3[_ngcontent-%COMP%]{\r\n  opacity: 1;\r\n}\r\n\r\n.img[_ngcontent-%COMP%]{\r\n  object-fit: scale-down;\r\n  transform: translateX();\r\n  \r\n\r\n}\r\n\r\n.product-slider-div[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 70vh;\r\n}\r\n\r\n\r\n\r\n#arrowimg[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  height: 100px;\r\n  transform: rotate(180deg);\r\n}\r\n\r\n#arrowimg2[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  height: 100px;\r\n}\r\n\r\n.carousel-inner[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 100%;\r\n\r\n  \r\n  \r\n}\r\n\r\n.carousel-item[_ngcontent-%COMP%]{\r\n\r\n\r\n  \r\n   padding-top: 50px;\r\n   \r\n   height: 100%;\r\n   width: 100%;\r\n   text-align: center;\r\n   \r\n   \r\n   \r\n   \r\n}\r\n\r\n.pris[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  transform: translateY(360px)\r\n  \r\n}\r\n\r\n.img[_ngcontent-%COMP%]{\r\n  display: block;\r\n  margin: auto;\r\n}\r\n\r\n.carousel-item[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n  animation-name: shake;\r\n  animation-duration: 0.5s;\r\n  animation-iteration-count: infinite;\r\n\r\n}\r\n\r\n@keyframes shake {\r\n  0% {\r\n    transform: translate(1px, 1px) rotate(0deg);\r\n  }\r\n\r\n  10% {\r\n    transform: translate(-1px, -2px) rotate(-1deg);\r\n  }\r\n\r\n  20% {\r\n    transform: translate(-3px, 0px) rotate(1deg);\r\n  }\r\n\r\n  30% {\r\n    transform: translate(3px, 2px) rotate(0deg);\r\n  }\r\n\r\n  40% {\r\n    transform: translate(1px, -1px) rotate(1deg);\r\n  }\r\n\r\n  50% {\r\n    transform: translate(-1px, 2px) rotate(-1deg);\r\n  }\r\n\r\n  60% {\r\n    transform: translate(-3px, 1px) rotate(0deg);\r\n  }\r\n\r\n  70% {\r\n    transform: translate(3px, 1px) rotate(-1deg);\r\n  }\r\n\r\n  80% {\r\n    transform: translate(-1px, -1px) rotate(1deg);\r\n  }\r\n\r\n  90% {\r\n    transform: translate(1px, 2px) rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    transform: translate(1px, -2px) rotate(-1deg);\r\n  }\r\n}\r\n\r\n.contact-section[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  \r\n\r\n  background-image: linear-gradient(to right, rgba(247, 0, 255, 0.5), transparent 50%);\r\n  \r\n}\r\n\r\n.contact-header-div[_ngcontent-%COMP%] {\r\n   display: flex;\r\n   justify-content: center;\r\n   transform: translatey(150%);\r\n  \r\n}\r\n\r\n.contact-header[_ngcontent-%COMP%]::after {\r\n  content: '';\r\n  position: absolute;\r\n  width: 100%;\r\n  transform: scaleX(0);\r\n  height: 2px;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: black;\r\n  transform-origin: bottom right;\r\n  transition: transform 0.25s ease-out;\r\n}\r\n\r\n.contact-header[_ngcontent-%COMP%]:hover:after {\r\n  transform: scaleX(1);\r\n  transform-origin: bottom left;\r\n}\r\n\r\n.contact-box-div[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  \r\n  \r\n  background-color: burlywood;\r\n  \r\n  padding: 10px;\r\n  transform: translate(15%,60%);\r\n  \r\n\r\n}\r\n\r\n#fname[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 3px;\r\n  float: right;\r\n  margin-bottom: 10px;\r\n  margin-top: 10px;\r\n  border-radius: 4px;\r\n  border: 1px solid;\r\n}\r\n\r\n#mail[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 3px;\r\n  float: right;\r\n  margin-bottom: 10px;\r\n  margin-top: 10px;\r\n  border-radius: 4px;\r\n  border: 1px solid;\r\n\r\n\r\n}\r\n\r\n#phonenum[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n\r\n  right: 1%;\r\n  border-radius: 4px;\r\n  border: 1px solid;\r\n  padding: 3px;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#subject[_ngcontent-%COMP%] {\r\n\r\n  width: 100%;\r\n  border: 1px solid;\r\n  border-radius: 4px;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#sub[_ngcontent-%COMP%] {\r\n\r\n  color: white;\r\n  background-color: black;\r\n  padding: 8px 20px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.vd[_ngcontent-%COMP%]{\r\n  width: 40%;\r\n  height: 40%;\r\n  transform: translate(150%,-30%);\r\n}\r\n\r\n@media only screen and (max-width: 448px){\r\n \r\n\r\n  .banner-video-div[_ngcontent-%COMP%]{\r\n   padding-top: 50px;\r\n    \r\n  }\r\n\r\n  .banner-videoo[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .banner-header-div[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n  }\r\n\r\n\r\n\r\n \r\n\r\n \r\n}\r\n\r\n@media only screen and (max-width: 600px){\r\n  \r\n\r\n  .banner-header-div[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  }\r\n\r\n  .product-header2[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n  }\r\n\r\n  #arrowimg[_ngcontent-%COMP%]{\r\n    width: 60px;\r\n    height: 60px;\r\n    padding-right: 5px;\r\n  }\r\n   \r\n  #arrowimg2[_ngcontent-%COMP%]{\r\n    width: 60px;\r\n    height: 60px;\r\n    padding-right: 5px;\r\n  }\r\n\r\n  .banner-txt[_ngcontent-%COMP%]{\r\n    font-size: 22px;\r\n  }\r\n\r\n  .banner-content[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n  }\r\n  \r\n \r\n}\r\n\r\n@media only screen and (max-width: 748px) {\r\n \r\n\r\n  .banner-section[_ngcontent-%COMP%]{\r\n    position: relative;\r\n  }\r\n\r\n  .banner-video-div[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    left: -50%;\r\n    top: 50%;\r\n    width: 60%;\r\n    height: 60%;\r\n  \r\n    \r\n  }\r\n\r\n  .banner-txt[_ngcontent-%COMP%]{\r\n    font-size: 22px;\r\n  }\r\n\r\n  .banner-content[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n  }\r\n  \r\n\r\n  .banner-videoo[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    height: 80%;\r\n  }\r\n  \r\n\r\n  .about-header-div[_ngcontent-%COMP%]{\r\n    padding-bottom: 100px;\r\n  }\r\n\r\n  .about-header[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n  }\r\n\r\n  \r\n\r\n  .about-text-div[_ngcontent-%COMP%]{\r\n    min-width: 80%;\r\n    transform: translateY(4%);\r\n    padding-bottom: 80px;\r\n  }\r\n\r\n  .about-text[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    font-family: cursive;\r\n  }\r\n\r\n  .about-video-div[_ngcontent-%COMP%]{\r\n    transform: translateX(35%);\r\n  }\r\n\r\n\r\n  \r\n\r\n  .product-header[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n  }\r\n\r\n  .ing[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n   width: 100%;\r\n  }\r\n\r\n  .pris[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n  }\r\n\r\n \r\n.contact-head[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n}\r\n\r\n.contact-box-div[_ngcontent-%COMP%]{\r\n  transform: translate(45%,20%);\r\n  \r\n}\r\n\r\n.contact-video-div[_ngcontent-%COMP%]{\r\n  transform: translate(-40%,80%);\r\n}\r\n\r\n\r\n.contact-section[_ngcontent-%COMP%]{\r\n  height: 100vh\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n}\r\n\r\n@media only screen and (min-width: 770px){\r\n  .banner-txt[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n  }\r\n\r\n  .banner-content[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n  }\r\n\r\n  \r\n\r\n\r\n\r\n  \r\n\r\n}\r\n\r\n@media only screen and (min-width: 992px){\r\n  .banner-txt[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n  }\r\n\r\n  .banner-content[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n  }\r\n  \r\n  \r\n}\r\n\r\n@media only screen and (max-width: 1024px){\r\n \r\n\r\n\r\n  .pris-desc1[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n  }\r\n\r\n  .vd[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n\r\n  \r\n}\r\n\r\n@media only screen and (max-width: 1028px)  and (orientation: landscape){\r\n  .product-slider-div[_ngcontent-%COMP%]{\r\n    height: 120vh;\r\n  }\r\n\r\n  .banner-section[_ngcontent-%COMP%]{\r\n    height: 90vh;\r\n  }\r\n\r\n  \r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width:1024px)   and (orientation: landscape){\r\n   .contact-section[_ngcontent-%COMP%]{\r\n     height: 200vh;\r\n   }\r\n}\n/*# sourceMappingURL=data:application/json;base64,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SUFDekIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7Ozs7RUFLQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxxQkFBcUI7R0FDdEIsV0FBVztFQUNaOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7O0FBR0Y7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCOztBQUUvQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7O0FBR0E7RUFDRTtBQUNGOzs7Ozs7O0FBT0E7O0FBR0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOzs7Ozs7OztBQVFGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7O0FBR0Y7O0FBUUE7Ozs7RUFJRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7OztBQUdGOztBQUlBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7OztBQUdGOztBQUlBOzs7Ozs7Ozs7OztDQVdDOztBQUdEO0dBQ0c7S0FDRSxhQUFhO0dBQ2Y7QUFDSCIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbipcclxue1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuaHRtbCB7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLmhlYWRlci1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwJTtcclxuICBsZWZ0OiAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdlOWUwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTglO1xyXG4gIHotaW5kZXg6IDk5OTk5OTtcclxuXHJcbn1cclxuXHJcblxyXG4uYmFubmVyLXNlY3Rpb257XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA3MHZoO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAyNTUsIDAuNSksIHRyYW5zcGFyZW50IDgwJSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIFxyXG59XHJcblxyXG5cclxuLmJhbm5lci1oZWFkZXItZGl2e1xyXG4gXHJcbiBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzMCU7XHJcbiAgbGVmdDogMTAlO1xyXG4gIFxyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogNzAlO1xyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG59XHJcblxyXG4uYmFubmVyLXR4dCB7XHJcbiAgXHJcbiBcclxuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICBcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gXHJcbiAgXHJcbiAgXHJcbn1cclxuXHJcblxyXG4uYmFubmVyLWNvbnRlbnR7XHJcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgXHJcbiAgXHJcbiAgXHJcbn1cclxuXHJcblxyXG4uYmFubmVyLXZpZGVvLWRpdntcclxuICB3aWR0aDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEyNSUsMCk7XHJcbiAgXHJcbn1cclxuXHJcbi5iYW5uZXItdmlkZW9ve1xyXG4gd2lkdGg6IDY1JTtcclxuIGhlaWdodDogNjUlO1xyXG59XHJcblxyXG5cclxuLmFib3V0LXNlY3Rpb257XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwgMCwgMCwgMC41KSwgdHJhbnNwYXJlbnQgODAlKTtcclxuICBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG5cclxuLmFib3V0LWhlYWRlci1kaXZ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDEzMHB4O1xyXG59XHJcblxyXG4uYWJvdXQtaGVhZGVye1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuXHJcblxyXG4uYWJvdXQtdGV4dC1kaXZ7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcclxufVxyXG5cclxuLmFib3V0LXRleHR7XHJcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgd29yZC1zcGFjaW5nOiAycHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4uYWJvdXQtdmlkZW8tZGl2e1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDY1JSwtNDUlKTtcclxufVxyXG5cclxuXHJcbi5hYm91dC12aWRlb3tcclxuICB3aWR0aDogMzAlO1xyXG4gIGhlaWdodDogMzAlO1xyXG59XHJcblxyXG5cclxuXHJcbi5wcm9kdWN0LWhlYWRlci1kaXZ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogOTBweDtcclxufVxyXG5cclxuLnByb2R1Y3QtaGVhZGVyMi1kaXZ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1oZWFkZXIye1xyXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmluZ3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xyXG59XHJcblxyXG5cclxuLmluZzF7XHJcbiAgY2xpcC1wYXRoOiBjaXJjbGUoMzUlKTtcclxuICBcclxufVxyXG5cclxuLmluZy14e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ub3ZlcmxheS0xe1xyXG4gXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBcclxuICBvcGFjaXR5OiAwO1xyXG5cclxuICBcclxuICBcclxuICBcclxuICBcclxufVxyXG5cclxuLmluZy14OmhvdmVyIC5vdmVybGF5LTF7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmluZzJ7XHJcbiAgY2xpcC1wYXRoOiBjaXJjbGUoMzUlKTtcclxufVxyXG5cclxuLmluZy15e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIFxyXG59XHJcblxyXG5cclxuLm92ZXJsYXktMntcclxuICBvcGFjaXR5OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IGF1dG87XHJcblxyXG5cclxufVxyXG5cclxuLmluZy15OmhvdmVyIC5vdmVybGF5LTJ7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmluZzN7XHJcbiAgY2xpcC1wYXRoOiBjaXJjbGUoMzUlKTtcclxufVxyXG5cclxuLmluZy16e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIFxyXG59XHJcblxyXG4ub3ZlcmxheS0ze1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmluZy16OmhvdmVyIC5vdmVybGF5LTN7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuXHJcbi5pbWd7XHJcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoKTtcclxuICBcclxuXHJcbn1cclxuXHJcblxyXG4ucHJvZHVjdC1zbGlkZXItZGl2e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNzB2aDtcclxufVxyXG4vKlxyXG4uY2Fyb3VzZWwtaW5uZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIFxyXG59XHJcbiovXHJcblxyXG5cclxuXHJcblxyXG4jYXJyb3dpbWcge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuXHJcblxyXG4jYXJyb3dpbWcyIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmNhcm91c2VsLWlubmVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgXHJcbiAgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLmNhcm91c2VsLWl0ZW17XHJcblxyXG5cclxuICBcclxuICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgIFxyXG4gICBoZWlnaHQ6IDEwMCU7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIFxyXG4gICBcclxuICAgXHJcbiAgIFxyXG59XHJcblxyXG4ucHJpc3tcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDM2MHB4KVxyXG4gIFxyXG59XHJcblxyXG4uaW1ne1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmNhcm91c2VsLWl0ZW0gOmhvdmVyIHtcclxuICBhbmltYXRpb24tbmFtZTogc2hha2U7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbkBrZXlmcmFtZXMgc2hha2Uge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgMXB4KSByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG5cclxuICAxMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgLTJweCkgcm90YXRlKC0xZGVnKTtcclxuICB9XHJcblxyXG4gIDIwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAwcHgpIHJvdGF0ZSgxZGVnKTtcclxuICB9XHJcblxyXG4gIDMwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsIDJweCkgcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgNDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgLTFweCkgcm90YXRlKDFkZWcpO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDJweCkgcm90YXRlKC0xZGVnKTtcclxuICB9XHJcblxyXG4gIDYwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtM3B4LCAxcHgpIHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcblxyXG4gIDcwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsIDFweCkgcm90YXRlKC0xZGVnKTtcclxuICB9XHJcblxyXG4gIDgwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMXB4KSByb3RhdGUoMWRlZyk7XHJcbiAgfVxyXG5cclxuICA5MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAycHgpIHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAtMnB4KSByb3RhdGUoLTFkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLmNvbnRhY3Qtc2VjdGlvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcblxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNDcsIDAsIDI1NSwgMC41KSwgdHJhbnNwYXJlbnQgNTAlKTtcclxuICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmNvbnRhY3QtaGVhZGVyLWRpdiB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMTUwJSk7XHJcbiAgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5jb250YWN0LWhlYWRlcjo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uY29udGFjdC1oZWFkZXI6aG92ZXI6YWZ0ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xyXG59XHJcblxyXG5cclxuXHJcbi5jb250YWN0LWJveC1kaXYge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgXHJcbiAgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xyXG4gIFxyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTUlLDYwJSk7XHJcbiAgXHJcblxyXG59XHJcblxyXG5cclxuXHJcbiNmbmFtZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG59XHJcblxyXG4jbWFpbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG5cclxuXHJcbn1cclxuXHJcbiNwaG9uZW51bSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIHJpZ2h0OiAxJTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuI3N1YmplY3Qge1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5cclxuI3N1YiB7XHJcblxyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiA4cHggMjBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4udmR7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBoZWlnaHQ6IDQwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNTAlLC0zMCUpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDQ4cHgpe1xyXG4gXHJcblxyXG4gIC5iYW5uZXItdmlkZW8tZGl2e1xyXG4gICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLmJhbm5lci12aWRlb297XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5iYW5uZXItaGVhZGVyLWRpdntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gXHJcblxyXG4gXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gIFxyXG5cclxuICAuYmFubmVyLWhlYWRlci1kaXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5wcm9kdWN0LWhlYWRlcjJ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAjYXJyb3dpbWd7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICB9XHJcbiAgIFxyXG4gICNhcnJvd2ltZzJ7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICB9XHJcblxyXG4gIC5iYW5uZXItdHh0e1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxuXHJcbiAgLmJhbm5lci1jb250ZW50e1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuICBcclxuIFxyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQ4cHgpIHtcclxuIFxyXG5cclxuICAuYmFubmVyLXNlY3Rpb257XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAuYmFubmVyLXZpZGVvLWRpdntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC01MCU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICBcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLmJhbm5lci10eHR7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG5cclxuICAuYmFubmVyLWNvbnRlbnR7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG5cclxuICAuYmFubmVyLXZpZGVvb3tcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICB9XHJcbiAgXHJcblxyXG4gIC5hYm91dC1oZWFkZXItZGl2e1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmFib3V0LWhlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gIFxyXG5cclxuICAuYWJvdXQtdGV4dC1kaXZ7XHJcbiAgICBtaW4td2lkdGg6IDgwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0JSk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxuICB9XHJcblxyXG4gIC5hYm91dC10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgfVxyXG5cclxuICAuYWJvdXQtdmlkZW8tZGl2e1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDM1JSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgXHJcblxyXG4gIC5wcm9kdWN0LWhlYWRlcntcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gIC5pbmd7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnByaXN7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG5cclxuIFxyXG4uY29udGFjdC1oZWFke1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmNvbnRhY3QtYm94LWRpdntcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0NSUsMjAlKTtcclxuICBcclxufVxyXG5cclxuLmNvbnRhY3QtdmlkZW8tZGl2e1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00MCUsODAlKTtcclxufVxyXG5cclxuXHJcbi5jb250YWN0LXNlY3Rpb257XHJcbiAgaGVpZ2h0OiAxMDB2aFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc3MHB4KXtcclxuICAuYmFubmVyLXR4dHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcblxyXG4gIC5iYW5uZXItY29udGVudHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gIFxyXG5cclxuXHJcblxyXG4gIFxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCl7XHJcbiAgLmJhbm5lci10eHR7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuYmFubmVyLWNvbnRlbnR7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XHJcbiBcclxuXHJcblxyXG4gIC5wcmlzLWRlc2Mxe1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLnZke1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIFxyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyOHB4KSAgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcclxuICAucHJvZHVjdC1zbGlkZXItZGl2e1xyXG4gICAgaGVpZ2h0OiAxMjB2aDtcclxuICB9XHJcblxyXG4gIC5iYW5uZXItc2VjdGlvbntcclxuICAgIGhlaWdodDogOTB2aDtcclxuICB9XHJcblxyXG4gIFxyXG59XHJcblxyXG5cclxuXHJcbi8qXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODk2cHgpICBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpe1xyXG4gIC5wcm9kdWN0LXNlY3Rpb257XHJcbiAgICBoZWlnaHQ6IDQwMHZoO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3Qtc2VjdGlvbntcclxuICAgIGhlaWdodDogMjUwdmg7XHJcbiAgfVxyXG59XHJcblxyXG4qL1xyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDI0cHgpICAgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKXtcclxuICAgLmNvbnRhY3Qtc2VjdGlvbntcclxuICAgICBoZWlnaHQ6IDIwMHZoO1xyXG4gICB9XHJcbn1cclxuIl19 */", "#ban-txt[_ngcontent-%COMP%] {\n      scroll-behavior: smooth;\n    }"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "IMFf":
/*!**************************************************!*\
  !*** ./src/app/preloader/preloader.component.ts ***!
  \**************************************************/
/*! exports provided: PreloaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloaderComponent", function() { return PreloaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PreloaderComponent {
    constructor() { }
    ngOnInit() {
        document.getElementById("pre").addEventListener("mousemove", function () {
            document.getElementById("pre").style.display = "none";
        });
    }
}
PreloaderComponent.ɵfac = function PreloaderComponent_Factory(t) { return new (t || PreloaderComponent)(); };
PreloaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PreloaderComponent, selectors: [["app-preloader"]], decls: 5, vars: 0, consts: [["id", "pre", 1, "loader-wrap"], ["src", "../../assets/images/loader.png", "alt", "", "id", "por", 1, "preload-img"]], template: function PreloaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#pre[_ngcontent-%COMP%]{\r\n  position: fixed;\r\n  top: 0%;\r\n  right: 0%;\r\n  background-color: black;\r\n  align-self: center;\r\n  justify-content: center;\r\n  height: 100%;\r\n  width: 100%;\r\n  z-index: 999999999999;\r\n  opacity: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n\r\n\r\n\r\n.preload-img[_ngcontent-%COMP%]{\r\n display: block;\r\n margin: auto;\r\n \r\n  width: 10vh;\r\n  height: 10vh;\r\n  animation-name: preloaded;\r\n  animation-duration: 1.5s;\r\n  animation-delay: 0s;\r\n  animation-timing-function: linear;\r\n  \r\n  animation-iteration-count: infinite;\r\n}\r\n\r\n\r\n\r\n\r\n@keyframes preloaded {\r\n  0%{\r\n    transform: rotate(0deg);\r\n  }\r\n  \r\n  25%{\r\n    transform: rotate(90deg);\r\n  }\r\n\r\n  50%{\r\n    transform: rotate(180deg);\r\n  }\r\n\r\n  75%{\r\n    transform: rotate(270deg);\r\n  }\r\n\r\n\r\n  100%{\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n.btn-grad[_ngcontent-%COMP%] {background-image: linear-gradient(to right, #E55D87 0%, #5FC3E4  51%, #E55D87  100%)}\r\n\r\n\r\n\r\n\r\n.btn-grad[_ngcontent-%COMP%] {\r\n   margin: 10px;\r\n   padding: 15px 45px;\r\n   text-align: center;\r\n   text-transform: uppercase;\r\n   transition: 0.5s;\r\n   background-size: 200% auto;\r\n   color: white;            \r\n   box-shadow: 0 0 20px #eee;\r\n   border-radius: 10px;\r\n   display: block;\r\n }\r\n\r\n\r\n\r\n\r\n.btn-grad[_ngcontent-%COMP%]:hover {\r\n   background-position: right center; \r\n   color: #fff;\r\n   text-decoration: none;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWxvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOzs7OztBQUtBO0NBQ0MsY0FBYztDQUNkLFlBQVk7O0VBRVgsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixpQ0FBaUM7O0VBRWpDLG1DQUFtQztBQUNyQzs7Ozs7QUFJQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOzs7RUFHQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOzs7OztBQU9BLFdBQVcsb0ZBQW9GOzs7OztBQUMvRjtHQUNHLFlBQVk7R0FDWixrQkFBa0I7R0FDbEIsa0JBQWtCO0dBQ2xCLHlCQUF5QjtHQUN6QixnQkFBZ0I7R0FDaEIsMEJBQTBCO0dBQzFCLFlBQVk7R0FDWix5QkFBeUI7R0FDekIsbUJBQW1CO0dBQ25CLGNBQWM7Q0FDaEI7Ozs7O0FBRUE7R0FDRSxpQ0FBaUMsRUFBRSw0Q0FBNEM7R0FDL0UsV0FBVztHQUNYLHFCQUFxQjtDQUN2QiIsImZpbGUiOiJwcmVsb2FkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcmV7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMCU7XHJcbiAgcmlnaHQ6IDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogOTk5OTk5OTk5OTk5O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4ucHJlbG9hZC1pbWd7XHJcbiBkaXNwbGF5OiBibG9jaztcclxuIG1hcmdpbjogYXV0bztcclxuIFxyXG4gIHdpZHRoOiAxMHZoO1xyXG4gIGhlaWdodDogMTB2aDtcclxuICBhbmltYXRpb24tbmFtZTogcHJlbG9hZGVkO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcclxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICBcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxufVxyXG5cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIHByZWxvYWRlZCB7XHJcbiAgMCV7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgXHJcbiAgMjUle1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIH1cclxuXHJcbiAgNTAle1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICB9XHJcblxyXG4gIDc1JXtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgMTAwJXtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5idG4tZ3JhZCB7YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRTU1RDg3IDAlLCAjNUZDM0U0ICA1MSUsICNFNTVEODcgIDEwMCUpfVxyXG4uYnRuLWdyYWQge1xyXG4gICBtYXJnaW46IDEwcHg7XHJcbiAgIHBhZGRpbmc6IDE1cHggNDVweDtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgYXV0bztcclxuICAgY29sb3I6IHdoaXRlOyAgICAgICAgICAgIFxyXG4gICBib3gtc2hhZG93OiAwIDAgMjBweCAjZWVlO1xyXG4gICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuIH1cclxuXHJcbiAuYnRuLWdyYWQ6aG92ZXIge1xyXG4gICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7IC8qIGNoYW5nZSB0aGUgZGlyZWN0aW9uIG9mIHRoZSBjaGFuZ2UgaGVyZSAqL1xyXG4gICBjb2xvcjogI2ZmZjtcclxuICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gfSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _preloader_preloader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preloader/preloader.component */ "IMFf");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav/nav.component */ "izVM");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");





class AppComponent {
    constructor() {
        this.title = 'angular-tour-of-heroes';
    }
    ngOnInIt() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-preloader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_1__["PreloaderComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "LYaK");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav/nav.component */ "izVM");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _preloader_preloader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preloader/preloader.component */ "IMFf");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _preloader_preloader_component__WEBPACK_IMPORTED_MODULE_6__["PreloaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselModule"]] }); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos/dist/aos.css */ "6Cl6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class FooterComponent {
    constructor() { }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_0___default.a.init();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 64, vars: 0, consts: [["lang", "en"], ["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"], ["href", "https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900", "rel", "stylesheet"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["href", "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700", "rel", "stylesheet"], [1, "container-fluid", "ft", "bg-grey", "py-5"], [1, "container"], [1, "row"], [1, "col-md-6"], ["data-aos", "zoom-in", 1, "col-md-6"], [1, "logo-part"], ["src", "../../assets/images/pris1.jpg", 1, "w-50", "logo-footer"], ["data-aos", "zoom-in", 1, "col-md-6", "px-4", 2, "padding-bottom", "13px"], [2, "font-family", "cursive", "font-size", "15px"], [1, "fa", "fa-envelope"], [1, "fa", "fa-phone-square"], [1, "col-md-6", "px-4"], ["href", "#section1"], ["href", "#section2"], ["href", "#prodsect"], ["href", "#sect4"], [1, "social"], ["href", "#"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], [1, "form-footer", "my-3"], ["type", "text", "placeholder", "search here....", "name", "search", 1, "banned"], ["type", "button", "value", "Go"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "link", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "footer", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " About Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Cloutbioinnovators pvt ltd TC/81/3862-1,panavilaroad Gpo trivandrum,kerala,India");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "PIN:695001");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "GSTIN:32AAHCC6911E1Z2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Research@Cloutbioinnovators.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "9633284287");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Help us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " About");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, " Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, " Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, " Newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "form", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, styles: ["Edit[_ngcontent-%COMP%]   in[_ngcontent-%COMP%]   JSFiddle\r\nResult\r\nHTML\r\nCSS\r\nResources[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\r\n        font-family: 'cursive';\r\n     }\r\n     .bg-grey[_ngcontent-%COMP%] {\r\n        background: #292929;\r\n     }\r\n     .logo-footer[_ngcontent-%COMP%] {\r\n        margin-bottom: 40px;\r\n     }\r\n     footer[_ngcontent-%COMP%] {\r\n            color: grey;\r\n     }\r\n     footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    font-family: 'cursive';\r\n}\r\n     footer[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n    font-family: 'cursive';\r\n    margin-bottom: 40px;\r\n    position: relative;\r\n}\r\n     footer[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]:after {\r\n    position: absolute;\r\n    content: \"\";\r\n    background: grey;\r\n    width: 12%;\r\n    height: 1px;\r\n    left: 0;\r\n    bottom: -20px;\r\n}\r\n     .btn-footer[_ngcontent-%COMP%] {\r\n                 color: grey;\r\n              \r\n                text-decoration: none;\r\n                border: 1px solid;\r\n                border-radius: 43px;\r\n                font-size: 13px;\r\n                padding: 7px 30px;\r\n                line-height: 47px;\r\n     }\r\n     .btn-footer[_ngcontent-%COMP%]:hover {\r\n                \r\n                text-decoration: none;\r\n               \r\n     }\r\n     .form-footer[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\r\n        border: none;\r\n    border-radius: 16px 0 0 16px;\r\n    outline: none;\r\n    padding-left: 10px;\r\n    \r\n}\r\n     [_ngcontent-%COMP%]::placeholder {\r\n    font-size: 10px;\r\n    padding-left: 10px;\r\n    font-style: italic;\r\n}\r\n     .form-footer[_ngcontent-%COMP%]   input[type=\"button\"][_ngcontent-%COMP%] {\r\n    border: none;\r\n    background:#232323;\r\n        margin-left: -5px;\r\n    color: #fff;\r\n    outline: none;\r\n    border-radius: 0 16px 16px 0;\r\n    padding: 2px 12px;\r\n}\r\n     .social[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n    color: grey;\r\n    font-size: 22px;\r\n    padding: 10px 15px;\r\n    background: #3c3c3c;\r\n}\r\n     footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    display: block;\r\n}\r\n     footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]  {\r\n   padding-left: 0;\r\n}\r\n     footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n  color: grey;\r\n  text-decoration:none;\r\n}\r\n     a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n    color: #f5f5f5 !important;\r\n    \r\n}\r\n     .logo-part[_ngcontent-%COMP%] {\r\n    border-right: 1px solid grey;\r\n    height: 100%;\r\n    }\r\n     \r\n     @media only screen and (max-width: 1024px){\r\n    .banned[_ngcontent-%COMP%]{\r\n        visibility: hidden;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7UUFNUSxzQkFBc0I7S0FDekI7S0FDQTtRQUNHLG1CQUFtQjtLQUN0QjtLQUNBO1FBQ0csbUJBQW1CO0tBQ3RCO0tBQ0E7WUFDTyxXQUFXO0tBQ2xCO0tBQ0E7SUFDRCxlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCO0tBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtLQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxPQUFPO0lBQ1AsYUFBYTtBQUNqQjtLQUNLO2lCQUNZLFdBQVc7O2dCQUVaLHFCQUFxQjtnQkFDckIsaUJBQWlCO2dCQUNqQixtQkFBbUI7Z0JBQ25CLGVBQWU7Z0JBQ2YsaUJBQWlCO2dCQUNqQixpQkFBaUI7S0FDNUI7S0FDQTs7Z0JBRVcscUJBQXFCOztLQUVoQztLQUNEO1FBQ0ksWUFBWTtJQUNoQiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLGtCQUFrQjs7QUFFdEI7S0FDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0tBQ0M7SUFDRyxZQUFZO0lBQ1osa0JBQWtCO1FBQ2QsaUJBQWlCO0lBQ3JCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLGlCQUFpQjtBQUNyQjtLQUNLO0lBQ0QsV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0tBQ0s7SUFDRCxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtLQUNFO0dBQ0MsZUFBZTtBQUNsQjtLQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7S0FDQTtJQUNJLHFCQUFxQjtJQUNyQix5QkFBeUI7O0FBRTdCO0tBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaO0tBRUosb0RBQW9EO0tBRXBEO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkVkaXQgaW4gSlNGaWRkbGVcclxuUmVzdWx0XHJcbkhUTUxcclxuQ1NTXHJcblJlc291cmNlc1xyXG4gYm9keSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdjdXJzaXZlJztcclxuICAgICB9XHJcbiAgICAgLmJnLWdyZXkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyOTI5Mjk7XHJcbiAgICAgfVxyXG4gICAgIC5sb2dvLWZvb3RlciB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICB9XHJcbiAgICAgZm9vdGVyIHtcclxuICAgICAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgfVxyXG4gICAgIGZvb3RlciBwLCBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnY3Vyc2l2ZSc7XHJcbn1cclxuZm9vdGVyIGg2IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnY3Vyc2l2ZSc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbmZvb3RlciBoNjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYmFja2dyb3VuZDogZ3JleTtcclxuICAgIHdpZHRoOiAxMiU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IC0yMHB4O1xyXG59XHJcbiAgICAgLmJ0bi1mb290ZXIge1xyXG4gICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0M3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogN3B4IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDdweDtcclxuICAgICB9XHJcbiAgICAgLmJ0bi1mb290ZXI6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgIH1cclxuICAgIC5mb3JtLWZvb3RlciBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweCAwIDAgMTZweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBcclxufVxyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG4gLmZvcm0tZm9vdGVyIGlucHV0W3R5cGU9XCJidXR0b25cIl0ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDojMjMyMzIzO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAxNnB4IDE2cHggMDtcclxuICAgIHBhZGRpbmc6IDJweCAxMnB4O1xyXG59XHJcbiAgICAgLnNvY2lhbCAuZmEge1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM2MzYzNjO1xyXG59XHJcbiAgICAgZm9vdGVyIHVsIGxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4gIGZvb3RlciB1bCAge1xyXG4gICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuZm9vdGVyIHVsICBsaSBhe1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogZ3JleTtcclxuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxufVxyXG5hOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZjVmNWY1ICFpbXBvcnRhbnQ7XHJcbiAgICBcclxufVxyXG4ubG9nby1wYXJ0IHtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuLyogQ3JlZGl0IHRvIGh0dHBzOi8vYm9vdHNuaXBwLmNvbS9zbmlwcGV0cy9NNTZFbCAgKi8gICAgXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XHJcbiAgICAuYmFubmVke1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "izVM":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos/dist/aos.css */ "6Cl6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class NavComponent {
    constructor() {
        this.scroll = false;
        this.scrolling = (s) => {
            let sc = s.target.scrollingElement.scrollTop;
            if (sc >= 100) {
                document.getElementById("lay").style.display = "block";
            }
            else if (sc <= 100) {
                this.scroll = false;
                document.getElementById("lay").style.display = "none";
            }
        };
    }
    openNav() {
        document.getElementById("myNav").style.width = "100%";
        document.getElementById("logo-a").style.opacity = "0";
    }
    closeNav() {
        document.getElementById("myNav").style.width = "0%";
        document.getElementById("logo-a").style.opacity = "1";
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_0___default.a.init();
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 22, vars: 0, consts: [["name", "viewport", "content", "width=device-width, initial-scale=1"], [2, "background-image", "linear-gradient(to right, rgba(0, 0, 255, 0.5), transparent 80%)"], ["id", "myNav", 1, "overlay"], ["href", "javascript:void(0)", 1, "closebtn", 3, "click"], [1, "overlay-content"], ["href", "#ban-txt"], ["href", "#section2"], ["href", "#prodsect"], ["href", "#"], ["href", "#sect4"], ["src", "../../assets/images/pris-logo1.png", "id", "logo-a", "alt", "", 1, "logo-image", 2, "transform", "translateY(-50px)", "position", "fixed", "z-index", "9999999"], [2, "font-size", "30px", "cursor", "pointer", "padding-top", "50px", "padding-right", "50px", "float", "right", 3, "click"], ["id", "lay", 1, "header-overlay", 3, "scroll"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "body", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavComponent_Template_a_click_5_listener() { return ctx.closeNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavComponent_Template_span_click_19_listener() { return ctx.openNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\u2630 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function NavComponent_Template_div_scroll_21_listener($event) { return ctx.scrolling($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, styles: [".nav-menu[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n\r\n  font-size: 20px;\r\n  font-weight: 800;\r\n  letter-spacing: 5px;\r\n  color: white;\r\n\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.nav-menu-a[_ngcontent-%COMP%] {\r\n  padding-bottom: 5px;\r\n\r\n  color: white;\r\n  margin-bottom: 20px;\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.nav-menu-b[_ngcontent-%COMP%] {\r\n  padding-bottom: 5px;\r\n  padding-top: 5px;\r\n  color: white;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.nav-menu-c[_ngcontent-%COMP%] {\r\n  padding-bottom: 5px;\r\n  padding-top: 5px;\r\n  color: white;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.nav-menu-d[_ngcontent-%COMP%] {\r\n  padding-bottom: 5px;\r\n  padding-top: 5px;\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.nav-menu-e[_ngcontent-%COMP%] {\r\n  padding-top: 5px;\r\n  color: white;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n#nav-id[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 40%;\r\n  left: 40%;\r\n  \r\n}\r\n\r\n\r\n\r\n\r\n\r\n.nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  text-decoration: none;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.nav-menu-a[_ngcontent-%COMP%]:hover {\r\n  color: #45a29e;\r\n  font-size: 40px;\r\n  text-decoration: none;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.nav-menu-b[_ngcontent-%COMP%]:hover {\r\n  color: #45a29e;\r\n  font-size: 40px;\r\n  text-decoration: none;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.nav-menu-c[_ngcontent-%COMP%]:hover {\r\n  color: #45a29e;\r\n  font-size: 40px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.nav-menu-d[_ngcontent-%COMP%]:hover {\r\n  color: violet;\r\n  font-size: 40px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.nav-menu-e[_ngcontent-%COMP%]:hover {\r\n  color: #45a29e;\r\n  font-size: 40px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.nav-icon-main[_ngcontent-%COMP%] {\r\n  \r\n  position: fixed;\r\n  top: 10%;\r\n  left: 90%;\r\n\r\n  \r\n  \r\n  \r\n  z-index: 1111111;\r\n  \r\n\r\n  \r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\nhtml[_ngcontent-%COMP%] {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.header-overlay[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0%;\r\n  left: 0%;\r\n  background-color: #17e9e0;\r\n  width: 100%;\r\n  height: 18%;\r\n  z-index: 99999;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media only screen and (max-width: 448px){\r\n  .logo-image[_ngcontent-%COMP%]{\r\n    width: 150px;\r\n    height: 150px;\r\n    position: absolute;\r\n    top: 6%;\r\n    \r\n  }\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0VBRUU7RUFDQSxxQkFBcUI7O0VBRXJCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7Ozs7QUFJZDs7Ozs7O0FBTUE7RUFDRSxtQkFBbUI7O0VBRW5CLFlBQVk7RUFDWixtQkFBbUI7OztBQUdyQjs7Ozs7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1COztBQUVyQjs7Ozs7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOzs7Ozs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOzs7Ozs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7Ozs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7O0FBRVg7Ozs7OztBQUdBO0VBQ0UscUJBQXFCO0FBQ3ZCOzs7Ozs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOzs7Ozs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOzs7Ozs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOzs7Ozs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOzs7Ozs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOzs7Ozs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7Ozs7O0VBS1QsZ0JBQWdCOzs7Ozs7QUFNbEI7Ozs7OztBQUdBO0VBQ0UsdUJBQXVCO0FBQ3pCOzs7Ozs7QUFJQTtFQUNFLGVBQWU7RUFDZixPQUFPO0VBQ1AsUUFBUTtFQUNSLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7O0FBRWhCOzs7Ozs7QUFLQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsT0FBTzs7RUFFVDs7QUFFRiIsImZpbGUiOiJuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgXHJcbiAgXHJcbiAgLm5hdi1tZW51IHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcblxyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLm5hdi1tZW51LWEge1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcblxyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuXHJcbn1cclxuXHJcbi5uYXYtbWVudS1iIHtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbn1cclxuXHJcbi5uYXYtbWVudS1jIHtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLm5hdi1tZW51LWQge1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5uYXYtbWVudS1lIHtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbiNuYXYtaWQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDQwJTtcclxuICBsZWZ0OiA0MCU7XHJcbiAgXHJcbn1cclxuXHJcblxyXG4ubmF2LW1lbnUgYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ubmF2LW1lbnUtYTpob3ZlciB7XHJcbiAgY29sb3I6ICM0NWEyOWU7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLm5hdi1tZW51LWI6aG92ZXIge1xyXG4gIGNvbG9yOiAjNDVhMjllO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5uYXYtbWVudS1jOmhvdmVyIHtcclxuICBjb2xvcjogIzQ1YTI5ZTtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuXHJcbi5uYXYtbWVudS1kOmhvdmVyIHtcclxuICBjb2xvcjogdmlvbGV0O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5cclxuLm5hdi1tZW51LWU6aG92ZXIge1xyXG4gIGNvbG9yOiAjNDVhMjllO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5cclxuLm5hdi1pY29uLW1haW4ge1xyXG4gIFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDEwJTtcclxuICBsZWZ0OiA5MCU7XHJcblxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIHotaW5kZXg6IDExMTExMTE7XHJcbiAgXHJcblxyXG4gIFxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5odG1sIHtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxufVxyXG5cclxuXHJcblxyXG4uaGVhZGVyLW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDAlO1xyXG4gIGxlZnQ6IDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxN2U5ZTA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxOCU7XHJcbiAgei1pbmRleDogOTk5OTk7XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ0OHB4KXtcclxuICAubG9nby1pbWFnZXtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDYlO1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG59Il19 */", "body[_ngcontent-%COMP%] {\n  font-family: 'Lato', sans-serif;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: rgb(0,0,0);\n  background-color: rgba(0,0,0, 0.9);\n  overflow-x: hidden;\n  transition: 0.5s;\n}\n\n.overlay-content[_ngcontent-%COMP%] {\n  position: relative;\n  top: 25%;\n  width: 100%;\n  text-align: center;\n  margin-top: 30px;\n}\n\n.overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 8px;\n  text-decoration: none;\n  font-size: 36px;\n  color: #818181;\n  display: block;\n  transition: 0.3s;\n}\n\n.overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  color: #f1f1f1;\n}\n\n.overlay[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 45px;\n  font-size: 60px;\n}\n\n@media screen and (max-height: 450px) {\n  .overlay[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {font-size: 20px}\n  .overlay[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n  font-size: 40px;\n  top: 15px;\n  right: 35px;\n  }\n}"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map