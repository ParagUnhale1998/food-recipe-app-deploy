"use strict";
(self["webpackChunkfood_recipe_app"] = self["webpackChunkfood_recipe_app"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _home_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home/home.component */ 3625);
/* harmony import */ var _meal_main_all_meals_main_all_meals_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meal/main-all-meals/main-all-meals.component */ 595);
/* harmony import */ var _home_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/cart/cart.component */ 1586);
/* harmony import */ var _meal_meal_details_meal_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meal/meal-details/meal-details.component */ 8829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);







const routes = [{
  path: '',
  component: _home_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'cart',
  component: _home_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__.CartComponent
}, {
  path: 'mealDetails/:id',
  component: _meal_meal_details_meal_details_component__WEBPACK_IMPORTED_MODULE_3__.MealDetailsComponent
}, {
  path: 'allMeals/:name/:type',
  component: _meal_main_all_meals_main_all_meals_component__WEBPACK_IMPORTED_MODULE_1__.MainAllMealsComponent
}, {
  path: '**',
  component: _home_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/header/header.component */ 74);
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/footer/footer.component */ 8014);




class AppComponent {
  constructor() {
    this.title = 'food-recipe-app';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 3,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header")(1, "router-outlet")(2, "app-footer");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _meal_meal_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meal/meal.module */ 8503);
/* harmony import */ var _category_category_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category/category.module */ 3370);
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.module */ 4320);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared/shared.module */ 1383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);











class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, _meal_meal_module__WEBPACK_IMPORTED_MODULE_2__.MealModule, _category_category_module__WEBPACK_IMPORTED_MODULE_3__.CategoryModule, _home_home_module__WEBPACK_IMPORTED_MODULE_4__.HomeModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, _meal_meal_module__WEBPACK_IMPORTED_MODULE_2__.MealModule, _category_category_module__WEBPACK_IMPORTED_MODULE_3__.CategoryModule, _home_home_module__WEBPACK_IMPORTED_MODULE_4__.HomeModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule]
  });
})();

/***/ }),

/***/ 7480:
/*!*******************************************************************!*\
  !*** ./src/app/category/category-list/category-list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryListComponent: () => (/* binding */ CategoryListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class CategoryListComponent {
  static #_ = this.ɵfac = function CategoryListComponent_Factory(t) {
    return new (t || CategoryListComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CategoryListComponent,
    selectors: [["app-category-list"]],
    decls: 2,
    vars: 0,
    template: function CategoryListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "category-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8885:
/*!*****************************************************!*\
  !*** ./src/app/category/category-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryRoutingModule: () => (/* binding */ CategoryRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



const routes = [];
class CategoryRoutingModule {
  static #_ = this.ɵfac = function CategoryRoutingModule_Factory(t) {
    return new (t || CategoryRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: CategoryRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CategoryRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 3370:
/*!*********************************************!*\
  !*** ./src/app/category/category.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryModule: () => (/* binding */ CategoryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-routing.module */ 8885);
/* harmony import */ var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-list/category-list.component */ 7480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class CategoryModule {
  static #_ = this.ɵfac = function CategoryModule_Factory(t) {
    return new (t || CategoryModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: CategoryModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _category_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoryRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CategoryModule, {
    declarations: [_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_1__.CategoryListComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _category_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoryRoutingModule]
  });
})();

/***/ }),

/***/ 9933:
/*!**********************************************!*\
  !*** ./src/app/core/serviecs/api.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiService: () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2235);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _caching_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caching-service.service */ 8561);




class ApiService {
  constructor(httpclient, cachingService) {
    this.httpclient = httpclient;
    this.cachingService = cachingService;
  }
  getRandomMeal() {
    const cacheKey = 'RandomMeals';
    const cachedData = this.cachingService.get(cacheKey);
    if (cachedData) {
      console.log('catched random Meals');
      return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
        observer.next(cachedData);
        observer.complete();
      });
    } else {
      console.log('call api random Meals');
      return this.httpclient.get('https://www.themealdb.com/api/json/v1/1/search.php?s=').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(data => this.cachingService.set(cacheKey, data)));
    }
  }
  getCategoryMeal() {
    const cacheKey = 'categoryMeal';
    const cachedData = this.cachingService.get(cacheKey);
    if (cachedData) {
      console.log('catched categoryMeal');
      return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
        observer.next(cachedData);
        observer.complete();
      });
    } else {
      console.log('call api categoryMeal');
      return this.httpclient.get('https://www.themealdb.com/api/json/v1/1/categories.php/').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(data => this.cachingService.set(cacheKey, data)));
    }
  }
  getIngredientMeal() {
    const cacheKey = 'ingredientMeal';
    const cachedData = this.cachingService.get(cacheKey);
    if (cachedData) {
      console.log('catched ingredientMeal');
      return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
        observer.next(cachedData);
        observer.complete();
      });
    } else {
      console.log('call api ingredientMeal');
      return this.httpclient.get('https://www.themealdb.com/api/json/v1/1/filter.php?i=').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(data => {
        this.cachingService.set(cacheKey, data);
      }));
    }
  }
  getSingleCategoryMeal(name) {
    const cacheKey = name;
    const cachedData = this.cachingService.get(cacheKey);
    if (cachedData) {
      console.log('catched SingleCategoryMeal' + name);
      return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
        observer.next(cachedData);
        observer.complete();
      });
    } else {
      return this.httpclient.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + name).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(data => {
        this.cachingService.set(cacheKey, data);
      }));
    }
  }
  getSearchMeal(searchName) {
    return this.httpclient.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchName);
  }
  getIngredientAll() {
    const cacheKey = 'IngredientAll';
    const cachedData = this.cachingService.get(cacheKey);
    if (cachedData) {
      console.log('catched IngredientAll');
      return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
        observer.next(cachedData);
        observer.complete();
      });
    } else {
      return this.httpclient.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(data => this.cachingService.set(cacheKey, data)));
    }
  }
  getMealByLocation(location) {
    const cacheKey = 'loactions Meal';
    const cachedData = this.cachingService.get(cacheKey);
    if (cachedData) {
      console.log('catched loactions Meal');
      return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
        observer.next(cachedData);
        observer.complete();
      });
    } else {
      return this.httpclient.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=' + location).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(data => this.cachingService.set(cacheKey, data)));
    }
  }
  getMealBySingleIngredient(ingredientName) {
    return this.httpclient.get('https://www.themealdb.com/api/json/v1/1/filter.php?i=' + ingredientName);
  }
  getMealByID(idMeal) {
    return this.httpclient.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + idMeal);
  }
  static #_ = this.ɵfac = function ApiService_Factory(t) {
    return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_caching_service_service__WEBPACK_IMPORTED_MODULE_0__.CachingServiceService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ApiService,
    factory: ApiService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8561:
/*!**********************************************************!*\
  !*** ./src/app/core/serviecs/caching-service.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CachingServiceService: () => (/* binding */ CachingServiceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class CachingServiceService {
  constructor() {
    this.cache = {};
    console.log(this.cache);
  }
  set(key, data) {
    this.cache[key] = data;
  }
  get(key) {
    console.log(this.cache);
    return this.cache[key];
  }
  clear() {
    this.cache = {};
  }
  static #_ = this.ɵfac = function CachingServiceService_Factory(t) {
    return new (t || CachingServiceService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: CachingServiceService,
    factory: CachingServiceService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9243:
/*!***********************************************!*\
  !*** ./src/app/core/serviecs/cart.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartService: () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class CartService {
  constructor() {
    this.cartItems = [];
    const storedCartItems = localStorage.getItem('cartItems');
    this.cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
  }
  getCartItems() {
    return this.cartItems;
  }
  addToCart(meal) {
    const mealExists = this.cartItems.some(item => item.idMeal === meal.idMeal);
    if (!mealExists) {
      this.cartItems.push(meal);
      this.updateLocalStorage();
    } else {
      console.log('mealExists already in the list');
    }
  }
  removeFromCart(itemId) {
    this.cartItems = this.cartItems.filter(item => item.idMeal !== itemId);
    this.updateLocalStorage();
  }
  updateLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
  static #_ = this.ɵfac = function CartService_Factory(t) {
    return new (t || CartService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: CartService,
    factory: CartService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1586:
/*!*********************************************!*\
  !*** ./src/app/home/cart/cart.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartComponent: () => (/* binding */ CartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_core_serviecs_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/serviecs/cart.service */ 9243);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);




function CartComponent_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 9)(8, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartComponent_tr_16_Template_button_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const meal_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.navigateToDetails(meal_r2.idMeal));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartComponent_tr_16_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const meal_r2 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.removeFromCart(meal_r2.idMeal));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const meal_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", meal_r2.strMealThumb, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](meal_r2.strMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](meal_r2.strArea);
  }
}
function CartComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Your cart is empty.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class CartComponent {
  constructor(cartService, router) {
    this.cartService = cartService;
    this.router = router;
    this.cartItems = [];
    this.cartItems = this.cartService.getCartItems();
  }
  removeFromCart(itemId) {
    this.cartService.removeFromCart(itemId);
    this.cartItems = this.cartService.getCartItems();
  }
  navigateToDetails(id) {
    this.router.navigateByUrl(`mealDetails/${id}`);
  }
  static #_ = this.ɵfac = function CartComponent_Factory(t) {
    return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_serviecs_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CartComponent,
    selectors: [["app-cart"]],
    decls: 18,
    vars: 2,
    consts: [[1, "container-fluid", "mb-5"], [1, "text-center"], [1, "container", "border", "mt-5"], [1, "table", "table-hover"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["class", "text-center mt-3", 4, "ngIf"], [1, "align-middle"], ["alt", "Product Image", 1, "img-fluid", "rounded-start", "img-thumbnail", "image", 3, "src"], [1, "align-middle", "text-center"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-danger", "m-2", 3, "click"], [1, "text-center", "mt-3"], [1, "empty"]],
    template: function CartComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "My Meals Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "table", 3)(5, "thead")(6, "tr")(7, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CartComponent_tr_16_Template, 12, 3, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CartComponent_div_17_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cartItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cartItems.length === 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
    styles: [".container-fluid[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #84bd00;\n  font-family: \"Montez\", \"Source Sans Pro\", sans-serif;\n  font-size: 3rem;\n  font-weight: 600;\n  line-height: 1.2175;\n  text-align: center;\n  margin-top: 2%;\n  border-bottom: 1px solid #84bd00;\n  padding-bottom: 1%;\n}\n.container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 1.5rem;\n}\n.container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-align: left;\n}\n.container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #343a40;\n  color: #fff;\n}\n.container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100px;\n  border-radius: 0.25rem;\n}\n.container-fluid[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.container-fluid[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%] {\n  color: #e34316;\n  font-family: \"Montez\", \"Source Sans Pro\", sans-serif;\n  font-size: 3rem;\n  font-weight: 600;\n  line-height: 1.2175;\n  text-align: center;\n  letter-spacing: 1px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi8uLi9Gcm9udCUyMEVuZCUyMFdlYnNpdGUvQmVzdCUyMENvZGUlMjBUZW1wbGV0ZSUyMGklMjB3cm90ZS9Bbmd1bGFyJTIwbGVhcm5pbmclMjBjbGFzcy9Gb29kJTIwUmVjaXBlJTIwQXBwL2Zvb2QtcmVjaXBlLWFwcC9zcmMvYXBwL2hvbWUvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksY0FBQTtFQUNBLG9EQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FDQVI7QURHSTtFQUNFLGdCQUFBO0FDRE47QURHTTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDRFI7QURHUTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ0RWO0FESVE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUNGVjtBREtRO0VBQ0UseUJBQUE7QUNIVjtBRE1RO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtBQ0pWO0FEWU07RUFDRSxrQkFBQTtBQ1ZSO0FEYUk7RUFDSSxjQUFBO0VBQ0Esb0RBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNYUiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xyXG4gICAgaDIge1xyXG4gICAgICAgIGNvbG9yOiAjODRiZDAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udGV6JywgJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7ICBcclxuICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgICAgICAgXHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjE3NTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4NGJkMDA7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDElO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgXHJcbiAgICAgIHRhYmxlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICBcclxuICAgICAgICB0aCwgdGQge1xyXG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIHRoIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgdGJvZHkgdHI6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAvLyAuYnRuIHtcclxuICAgICAgICAvLyAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAudGV4dC1jZW50ZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmVtcHR5e1xyXG4gICAgICAgIGNvbG9yOiAjZTM0MzE2O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udGV6JywgJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7ICBcclxuICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgICAgICAgXHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjE3NTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIH1cclxuICB9XHJcbiAgIiwiLmNvbnRhaW5lci1mbHVpZCBoMiB7XG4gIGNvbG9yOiAjODRiZDAwO1xuICBmb250LWZhbWlseTogXCJNb250ZXpcIiwgXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS4yMTc1O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzg0YmQwMDtcbiAgcGFkZGluZy1ib3R0b206IDElO1xufVxuLmNvbnRhaW5lci1mbHVpZCAuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cbi5jb250YWluZXItZmx1aWQgLmNvbnRhaW5lciB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG4uY29udGFpbmVyLWZsdWlkIC5jb250YWluZXIgdGFibGUgdGgsIC5jb250YWluZXItZmx1aWQgLmNvbnRhaW5lciB0YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY29udGFpbmVyLWZsdWlkIC5jb250YWluZXIgdGFibGUgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jb250YWluZXItZmx1aWQgLmNvbnRhaW5lciB0YWJsZSB0Ym9keSB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG4uY29udGFpbmVyLWZsdWlkIC5jb250YWluZXIgdGFibGUgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cbi5jb250YWluZXItZmx1aWQgLmNvbnRhaW5lciAudGV4dC1jZW50ZXIge1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG4uY29udGFpbmVyLWZsdWlkIC5lbXB0eSB7XG4gIGNvbG9yOiAjZTM0MzE2O1xuICBmb250LWZhbWlseTogXCJNb250ZXpcIiwgXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS4yMTc1O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1790:
/*!*******************************************************************!*\
  !*** ./src/app/home/filter-category/filter-category.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterCategoryComponent: () => (/* binding */ FilterCategoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _meal_meal_list_meal_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../meal/meal-list/meal-list.component */ 1964);



function FilterCategoryComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-meal-list", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function FilterCategoryComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-meal-list", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function FilterCategoryComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-meal-list", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function FilterCategoryComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-meal-list", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class FilterCategoryComponent {
  constructor() {
    this.active = 1;
  }
  static #_ = this.ɵfac = function FilterCategoryComponent_Factory(t) {
    return new (t || FilterCategoryComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FilterCategoryComponent,
    selectors: [["app-filter-category"]],
    decls: 20,
    vars: 6,
    consts: [[1, "container-fluid", "p-4", "border"], ["ngbNav", "", 1, "nav-tabs", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "mt-2", 3, "ngbNavOutlet"], [1, "scrollable-content", 2, "max-height", "700px", "overflow-y", "auto"], ["tabName", "Home"], ["tabName", "Categories"], ["tabName", "Locations"], ["tabName", "Ingredient"]],
    template: function FilterCategoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "ul", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("activeIdChange", function FilterCategoryComponent_Template_ul_activeIdChange_1_listener($event) {
          return ctx.active = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 3)(4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, FilterCategoryComponent_ng_template_6_Template, 2, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 3)(8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, FilterCategoryComponent_ng_template_10_Template, 2, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 3)(12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, FilterCategoryComponent_ng_template_14_Template, 2, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 3)(16, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Ingredient");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, FilterCategoryComponent_ng_template_18_Template, 2, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("activeId", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavOutlet", _r0);
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavItemRole, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavLinkButton, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavLinkBase, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbNavOutlet, _meal_meal_list_meal_list_component__WEBPACK_IMPORTED_MODULE_0__.MealListComponent],
    styles: [".filterBtn[_ngcontent-%COMP%] {\n  align-items: center;\n  color: #84bd00;\n  display: flex;\n  font-family: Montserrat, \"Source Sans Pro\";\n  font-size: 2rem;\n  font-weight: 600;\n  height: 2.5rem;\n  justify-content: center;\n  left: 53.25rem;\n  line-height: 1.2175;\n  position: absolute;\n  top: 2.6rem;\n  white-space: nowrap;\n  width: 6.9rem;\n}\n\n.nav-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\nbutton[_ngcontent-%COMP%] {\n  color: #84bd00;\n  font-family: \"Montez\", \"Source Sans Pro\", sans-serif;\n  border-radius: none;\n  font-size: 2rem;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  color: #000;\n}\n\n#ngb-nav-0[_ngcontent-%COMP%], #ngb-nav-1[_ngcontent-%COMP%], #ngb-nav-2[_ngcontent-%COMP%], #ngb-nav-3[_ngcontent-%COMP%] {\n  color: #84bd00;\n  font-family: \"Montez\", \"Source Sans Pro\", sans-serif;\n  border-radius: none;\n  font-size: 2rem;\n}\n\n#ngb-nav-0[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.2941176471);\n}\n\n#ngb-nav-0.active[_ngcontent-%COMP%], #ngb-nav-1.active[_ngcontent-%COMP%], #ngb-nav-2.active[_ngcontent-%COMP%], #ngb-nav-3.active[_ngcontent-%COMP%] {\n  background: revert;\n}\n\n.scrollable-content[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\n\n.scrollable-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 12px;\n}\n\n.scrollable-content[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background-color: #f5f5f5;\n}\n\n.scrollable-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #888;\n  border-radius: 6px;\n  border: 3px solid #f5f5f5;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9maWx0ZXItY2F0ZWdvcnkvZmlsdGVyLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vLi4vRnJvbnQlMjBFbmQlMjBXZWJzaXRlL0Jlc3QlMjBDb2RlJTIwVGVtcGxldGUlMjBpJTIwd3JvdGUvQW5ndWxhciUyMGxlYXJuaW5nJTIwY2xhc3MvRm9vZCUyMFJlY2lwZSUyMEFwcC9mb29kLXJlY2lwZS1hcHAvc3JjL2FwcC9ob21lL2ZpbHRlci1jYXRlZ29yeS9maWx0ZXItY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDRUo7O0FEQ0U7RUFDRSxjQUFBO0VBQ0Esb0RBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNFSjtBRERJO0VBQ0UsV0FBQTtBQ0dOOztBREFJO0VBQ0ksY0FBQTtFQUNBLG9EQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDR1I7O0FEQ1E7RUFDSSx1Q0FBQTtBQ0VaOztBRENJO0VBQ0osa0JBQUE7QUNFQTs7QURDSTtFQUVJLHVCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxXQUFBO0FDRVI7O0FEQ007RUFDRSx5QkFBQTtBQ0VSOztBRENNO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDRVIiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyQnRue1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjODRiZDAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCAnU291cmNlIFNhbnMgUHJvJztcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbGVmdDogNTMuMjVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS4yMTc1O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyLjZyZW07XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgd2lkdGg6IDYuOXJlbTtcclxuICB9XHJcbiAgLm5hdi10YWJze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB9XHJcbiBcclxuICBidXR0b257XHJcbiAgICBjb2xvcjogIzg0YmQwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udGV6JywgJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gICAgI25nYi1uYXYtMCwjbmdiLW5hdi0xLCNuZ2ItbmF2LTIsI25nYi1uYXYtM3tcclxuICAgICAgICBjb2xvcjogIzg0YmQwMDtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRleicsICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG4gICAgI25nYi1uYXYtMHtcclxuXHJcbiAgICAgICAgLm5hdi1saW5rIC5hY3RpdmV7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA0YjtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG4gICAgI25nYi1uYXYtMC5hY3RpdmUsI25nYi1uYXYtMS5hY3RpdmUsI25nYi1uYXYtMi5hY3RpdmUsI25nYi1uYXYtMy5hY3RpdmV7XHJcbmJhY2tncm91bmQ6cmV2ZXJ0O1xyXG4gICAgfVxyXG5cclxuICAgIC5zY3JvbGxhYmxlLWNvbnRlbnR7XHJcblxyXG4gICAgICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gICAgfVxyXG4gICAgLnNjcm9sbGFibGUtY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuc2Nyb2xsYWJsZS1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnNjcm9sbGFibGUtY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNmNWY1ZjU7XHJcbiAgICAgIH0iLCIuZmlsdGVyQnRuIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICM4NGJkMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBcIlNvdXJjZSBTYW5zIFByb1wiO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGhlaWdodDogMi41cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbGVmdDogNTMuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjIxNzU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyLjZyZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiA2LjlyZW07XG59XG5cbi5uYXYtdGFicyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG5idXR0b24ge1xuICBjb2xvcjogIzg0YmQwMDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udGV6XCIsIFwiU291cmNlIFNhbnMgUHJvXCIsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1yYWRpdXM6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cbmJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4jbmdiLW5hdi0wLCAjbmdiLW5hdi0xLCAjbmdiLW5hdi0yLCAjbmdiLW5hdi0zIHtcbiAgY29sb3I6ICM4NGJkMDA7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRlelwiLCBcIlNvdXJjZSBTYW5zIFByb1wiLCBzYW5zLXNlcmlmO1xuICBib3JkZXItcmFkaXVzOiBub25lO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbiNuZ2ItbmF2LTAgLm5hdi1saW5rIC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMjk0MTE3NjQ3MSk7XG59XG5cbiNuZ2ItbmF2LTAuYWN0aXZlLCAjbmdiLW5hdi0xLmFjdGl2ZSwgI25nYi1uYXYtMi5hY3RpdmUsICNuZ2ItbmF2LTMuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogcmV2ZXJ0O1xufVxuXG4uc2Nyb2xsYWJsZS1jb250ZW50IHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbi5zY3JvbGxhYmxlLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDEycHg7XG59XG5cbi5zY3JvbGxhYmxlLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuLnNjcm9sbGFibGUtY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNmNWY1ZjU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6058:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeRoutingModule: () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



const routes = [];
class HomeRoutingModule {
  static #_ = this.ɵfac = function HomeRoutingModule_Factory(t) {
    return new (t || HomeRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: HomeRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 4320:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeModule: () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 6058);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 3625);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 5238);
/* harmony import */ var _filter_category_filter_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-category/filter-category.component */ 1790);
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared/shared.module */ 1383);
/* harmony import */ var _meal_meal_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../meal/meal.module */ 8503);
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart/cart.component */ 1586);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);










class HomeModule {
  static #_ = this.ɵfac = function HomeModule_Factory(t) {
    return new (t || HomeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: HomeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _meal_meal_module__WEBPACK_IMPORTED_MODULE_5__.MealModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent, _filter_category_filter_category_component__WEBPACK_IMPORTED_MODULE_3__.FilterCategoryComponent, _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__.CartComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _meal_meal_module__WEBPACK_IMPORTED_MODULE_5__.MealModule]
  });
})();

/***/ }),

/***/ 3625:
/*!*********************************************!*\
  !*** ./src/app/home/home/home.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_components_hero_hero_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/hero/hero.component */ 7708);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ 5238);
/* harmony import */ var _filter_category_filter_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filter-category/filter-category.component */ 1790);




class HomeComponent {
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 7,
    vars: 0,
    consts: [[1, "container-fluid"], [1, "row"], [1, "col-lg-2", "col-md-3"], [1, "col-lg-10", "col-md-9"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-hero");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-filter-category");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_shared_components_hero_hero_component__WEBPACK_IMPORTED_MODULE_0__.HeroComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent, _filter_category_filter_category_component__WEBPACK_IMPORTED_MODULE_2__.FilterCategoryComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5238:
/*!***************************************************!*\
  !*** ./src/app/home/sidebar/sidebar.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarComponent: () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class SidebarComponent {
  constructor(router) {
    this.router = router;
  }
  navigateToMainPage(name) {
    this.router.navigateByUrl(`allMeals/${name}/${name}`);
  }
  static #_ = this.ɵfac = function SidebarComponent_Factory(t) {
    return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SidebarComponent,
    selectors: [["app-sidebar"]],
    decls: 47,
    vars: 0,
    consts: [[1, "container-fluid", "p-4", "sidebar"], ["id", "filterHeading", 1, "text-center", "font-weight-bold", "mb-4"], [1, "text-center", "font-weight-bold", "mb-2", "cusine-pPB"], [1, "list-unstyled", "mb-4", "text-center", 3, "click"], [1, "dairy-free-TSq"], [1, "egg-free-kgq"], [1, "sugar-free-U73"], [1, "gluten-free-BXF"], [1, "list-unstyled", "mb-4", "text-center", "frame-2-xRX", 3, "click"], [1, "glutten-5FF"], [1, "legumes-kEu"], [1, "grain-Gyw"], [1, "fruite-gnm"], [1, "asian-vx1"], [1, "italian-qp5"], [1, "chines-Zk5"], [1, "thai-5iR"], [1, "text-center", "font-weight-bold", "mb-2", "goals-CY9"], [1, "weight-loss-jHB"], [1, "freshness-3Hs"], [1, "activeness-xvd"], [1, "rich-nutritions-gbj"]],
    template: function SidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Filter Recipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Diet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_ul_click_5_listener() {
          return ctx.navigateToMainPage("Ingredients");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Dairy Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Egg Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sugar Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Gluten Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Allergies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_ul_click_16_listener() {
          return ctx.navigateToMainPage("Random");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Gluten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Legumes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Grain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Fruite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Cuisine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_ul_click_27_listener() {
          return ctx.navigateToMainPage("Locations");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Asian");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Italian");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Chinese");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Thai");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Goals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_ul_click_38_listener() {
          return ctx.navigateToMainPage("Random2");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Weight Loss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Freshness");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Activeness");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Rich Nutritions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: [".sidebar[_ngcontent-%COMP%]   h2.text-center[_ngcontent-%COMP%] {\n  color: #28a745;\n  font-family: \"Montserrat\", \"Source Sans Pro\";\n  font-size: 2rem;\n  font-weight: bold;\n  text-transform: capitalize;\n  font-style: italic;\n  margin-bottom: 1.5rem;\n  font-family: \"Montserrat\", \"Source Sans Pro\";\n  font-size: 1.5rem;\n  font-weight: 400;\n  line-height: 1.2175;\n  margin: 0.6rem 1.1rem 0.6rem 1.1rem;\n  color: #84bd00;\n  white-space: nowrap;\n}\n\n#filterHeading[_ngcontent-%COMP%] {\n  align-items: center;\n  color: #80e031;\n  display: flex;\n  flex-shrink: 0;\n  font-family: Montez, \"Source Sans Pro\";\n  font-family: \"Montez\", \"Source Sans Pro\", sans-serif;\n  font-size: 2.1rem;\n  font-weight: 400;\n  justify-content: center;\n  line-height: 1.31;\n  margin-bottom: 4.15rem;\n  white-space: nowrap;\n  width: 100%;\n}\n\n#filterHeading[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\ndiv[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #515151;\n  transition: 1s ease;\n}\ndiv[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  color: #131313;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi8uLi9Gcm9udCUyMEVuZCUyMFdlYnNpdGUvQmVzdCUyMENvZGUlMjBUZW1wbGV0ZSUyMGklMjB3cm90ZS9Bbmd1bGFyJTIwbGVhcm5pbmclMjBjbGFzcy9Gb29kJTIwUmVjaXBlJTIwQXBwL2Zvb2QtcmVjaXBlLWFwcC9zcmMvYXBwL2hvbWUvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0UsY0FBQTtFQUNBLDRDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0ZOOztBREtFO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxzQ0FBQTtFQUNBLG9EQUFBO0VBRUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0hOOztBRFdRO0VBQ0UsZUFBQTtBQ1JWOztBRGFDO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ1ZGO0FEV0k7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUNUTiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc2lkZWJhciBoMiB7XHJcbiBcclxuICAgICYudGV4dC1jZW50ZXIge1xyXG4gICAgICBjb2xvcjogIzI4YTc0NTsgLy8gR3JlZW4gY29sb3IsIHlvdSBjYW4gY2hhbmdlIGl0XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgXCJTb3VyY2UgU2FucyBQcm9cIjtcclxuICAgICAgZm9udC1zaXplOiAycmVtOyAvLyBBZGp1c3QgdGhlIGZvbnQgc2l6ZVxyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIFwiU291cmNlIFNhbnMgUHJvXCI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtOyAvLyBBZGp1c3QgdGhlIGZvbnQgc2l6ZVxyXG4gICAgICBmb250LXdlaWdodDogNDAwOyAvLyBBZGp1c3QgdGhlIGZvbnQgd2VpZ2h0XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjIxNzU7XHJcbiAgICAgIG1hcmdpbjogMC42cmVtIDEuMXJlbSAwLjZyZW0gMS4xcmVtOyAvLyBBZGp1c3QgdGhlIG1hcmdpbnNcclxuICAgICAgY29sb3I6ICM4NGJkMDA7IC8vIEFkanVzdCB0aGUgdGV4dCBjb2xvclxyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgfVxyXG4gIH1cclxuICAjZmlsdGVySGVhZGluZyB7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjODBlMDMxO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgZm9udC1mYW1pbHk6IE1vbnRleiwgXCJTb3VyY2UgU2FucyBQcm9cIjtcclxuICAgICAgZm9udC1mYW1pbHk6ICdNb250ZXonLCAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxuICAvLyBmb250LXN0eWxlOml0YWxpYztcclxuICAgICAgZm9udC1zaXplOiAyLjFyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4zMTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNC4xNXJlbTtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIC8vIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgXCJTb3VyY2UgU2FucyBQcm9cIjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgI2ZpbHRlckhlYWRpbmd7XHJcbiAgICAgIHVse1xyXG5cclxuICAgICAgICBsaXtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiBkaXYgPiB1bCAgPiBsaXtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICM1MTUxNTE7XHJcbiAgdHJhbnNpdGlvbjogMXMgZWFzZTtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgY29sb3I6ICMxMzEzMTM7XHJcbiAgICB9XHJcbiB9IiwiLnNpZGViYXIgaDIudGV4dC1jZW50ZXIge1xuICBjb2xvcjogIzI4YTc0NTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBcIlNvdXJjZSBTYW5zIFByb1wiO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgXCJTb3VyY2UgU2FucyBQcm9cIjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjIxNzU7XG4gIG1hcmdpbjogMC42cmVtIDEuMXJlbSAwLjZyZW0gMS4xcmVtO1xuICBjb2xvcjogIzg0YmQwMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuI2ZpbHRlckhlYWRpbmcge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzgwZTAzMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGZvbnQtZmFtaWx5OiBNb250ZXosIFwiU291cmNlIFNhbnMgUHJvXCI7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRlelwiLCBcIlNvdXJjZSBTYW5zIFByb1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxLjMxO1xuICBtYXJnaW4tYm90dG9tOiA0LjE1cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuI2ZpbHRlckhlYWRpbmcgdWwgbGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdiA+IHVsID4gbGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjNTE1MTUxO1xuICB0cmFuc2l0aW9uOiAxcyBlYXNlO1xufVxuZGl2ID4gdWwgPiBsaTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgY29sb3I6ICMxMzEzMTM7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 595:
/*!*****************************************************************!*\
  !*** ./src/app/meal/main-all-meals/main-all-meals.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainAllMealsComponent: () => (/* binding */ MainAllMealsComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_core_serviecs_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/serviecs/api.service */ 9933);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-lazyload-image */ 1935);






function MainAllMealsComponent_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11)(3, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 11)(10, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainAllMealsComponent_div_2_div_1_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const meal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.navigateToDetails(meal_r2.idMeal));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const meal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", meal_r2.strMealThumb, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](meal_r2.strMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Location: ", meal_r2.strArea, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Recipe : ", meal_r2.strInstructions.split(" ").splice(0, 20).join(" "), "...");
  }
}
function MainAllMealsComponent_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11)(3, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 11)(6, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainAllMealsComponent_div_2_div_2_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
      const meal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.navigateToDetails(meal_r2.idMeal));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const meal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", meal_r2.strMealThumb, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](meal_r2.strMeal);
  }
}
function MainAllMealsComponent_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11)(3, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 11)(10, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainAllMealsComponent_div_2_div_3_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);
      const meal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.getMealByLocation(meal_r2.strArea));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const meal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", meal_r2.strMealThumb, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](meal_r2.strArea);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Location: ", meal_r2.strMeal, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Recipe : ", meal_r2.strInstructions.split(" ").splice(0, 20).join(" "), "...");
  }
}
function MainAllMealsComponent_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11)(3, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 11)(6, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainAllMealsComponent_div_2_div_4_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);
      const meal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.navigateToDetails(meal_r2.idMeal));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const meal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", meal_r2.strMealThumb, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](meal_r2.strMeal);
  }
}
function MainAllMealsComponent_div_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11)(3, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 11)(6, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainAllMealsComponent_div_2_div_5_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27);
      const meal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r25.navigateToDetails(meal_r2.idMeal));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const meal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", meal_r2.strMealThumb, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](meal_r2.strMeal);
  }
}
function MainAllMealsComponent_div_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 19)(3, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 21)(6, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainAllMealsComponent_div_2_div_6_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31);
      const meal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r29.getMealByIngredient(meal_r2.strIngredient));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Details Meals");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const meal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", meal_r2.strIngredient);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("defaultImage", ctx_r8.getIngredientSmallImageUrl(meal_r2.strIngredient))("lazyLoad", ctx_r8.getIngredientImageUrl(meal_r2.strIngredient));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](meal_r2.strIngredient);
  }
}
function MainAllMealsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MainAllMealsComponent_div_2_div_1_Template, 12, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MainAllMealsComponent_div_2_div_2_Template, 8, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MainAllMealsComponent_div_2_div_3_Template, 12, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MainAllMealsComponent_div_2_div_4_Template, 8, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MainAllMealsComponent_div_2_div_5_Template, 8, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MainAllMealsComponent_div_2_div_6_Template, 8, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.tabName === "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.tabName === "Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.tabName === "Locations");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.tabName === "SingleLocation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.tabName === "SingleIngredient");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.tabName === "Ingredient");
  }
}
function MainAllMealsComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainAllMealsComponent_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r33.loadMoreIngredients());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Show More");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class MainAllMealsComponent {
  constructor(mealApi, route, router) {
    this.mealApi = mealApi;
    this.route = route;
    this.router = router;
    this.allMeals = [];
    this.mealCategoryNames = '';
    this.tabName = '';
    this.initialIngredientsToShow = 20;
    this.additionalIngredientsToShow = 20;
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      const name = params['name'];
      const type = params['type'];
      this.mealCategoryNames = name;
      console.log(name);
      if (type === 'Ingredients') {
        this.tabName = 'Ingredient';
        console.log('Ingredients');
        this.getallIngredients();
      } else if (type === 'Locations') {
        this.tabName = 'Locations';
        this.getLocationMeals();
      } else if (type === 'SingleLocation') {
        this.tabName = 'SingleLocation';
        this.getMealByLocation(name);
      } else if (type === 'SingleIngredient') {
        this.tabName = 'SingleIngredient';
        this.getMealByIngredient(name);
      } else if (type === 'allMeals') {
        this.tabName = 'Home';
        this.getRandomMeals2();
      } else if (type === 'Random') {
        this.tabName = 'Home';
        this.getRandomMeals();
      } else if (type === 'Random2') {
        this.tabName = 'Home';
        this.getRandomMeals2();
      } else if (type === 'inputSearch') {
        this.tabName = 'Home';
        this.getSearchMeals(this.mealCategoryNames);
      } else {
        console.log('Categories');
        this.tabName = 'Categories';
        this.getCategoryMeals(this.mealCategoryNames);
      }
    });
  }
  getSearchMeals(mealName) {
    this.mealApi.getSearchMeal(mealName).subscribe({
      next: data => {
        this.allMeals = data.meals;
        console.log(this.allMeals);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  getRandomMeals() {
    this.mealApi.getRandomMeal().subscribe({
      next: data => {
        this.allMeals = data.meals;
      },
      error: err => {
        console.log(err);
      }
    });
  }
  shuffleArray(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  getRandomMeals2() {
    this.mealApi.getRandomMeal().subscribe({
      next: data => {
        this.allMeals = this.shuffleArray(data.meals);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  getCategoryMeals(name) {
    this.mealApi.getSingleCategoryMeal(name).subscribe({
      next: data => {
        this.allMeals = data.meals;
        console.log(data.meals);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  getLocationMeals() {
    this.mealApi.getRandomMeal().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => {
      if (data?.meals) {
        return data.meals.sort((a, b) => a.strArea.localeCompare(b.strArea));
      }
      return [];
    })).subscribe({
      next: sortedMeals => {
        this.allMeals = sortedMeals;
        console.log(sortedMeals);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  getallIngredients() {
    this.mealApi.getIngredientAll().subscribe({
      next: data => {
        // this.allMeals = data.meals.slice(0, this.initialIngredientsToShow);
        const endIndex = this.allMeals.length + this.additionalIngredientsToShow;
        this.allMeals = this.allMeals.concat(data.meals.slice(this.allMeals.length, endIndex));
        console.log(data);
        console.log(this.allMeals);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  loadMoreIngredients() {
    this.getallIngredients();
  }
  getMealByLocation(locationName) {
    this.tabName = 'SingleLocation';
    this.mealApi.getMealByLocation(locationName).subscribe({
      next: data => {
        this.allMeals = data.meals;
        console.log(data.meals);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  getMealByIngredient(ingredientName) {
    this.tabName = 'SingleIngredient';
    this.mealApi.getMealBySingleIngredient(ingredientName).subscribe({
      next: data => {
        this.allMeals = data.meals;
        console.log(data);
        console.log(this.allMeals);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  navigateToDetails(id) {
    this.router.navigateByUrl(`mealDetails/${id}`);
  }
  getIngredientImageUrl(ingredient) {
    return `https://www.themealdb.com/images/ingredients/${ingredient}.png`;
  }
  getIngredientSmallImageUrl(ingredient) {
    return `https://www.themealdb.com/images/ingredients/${ingredient}-small.png`;
  }
  static #_ = this.ɵfac = function MainAllMealsComponent_Factory(t) {
    return new (t || MainAllMealsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_serviecs_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MainAllMealsComponent,
    selectors: [["app-main-all-meals"]],
    decls: 4,
    vars: 2,
    consts: [[1, "container-fluid", "text-center"], [1, "container-fluid", "d-flex", "align-items-start", "justify-content-around", "flex-wrap", "gap-4", "mb-5"], ["class", "card", "style", "width: 18rem;", 4, "ngFor", "ngForOf"], ["class", "btn btn-dark text-center m-3", 3, "click", 4, "ngIf"], [1, "card", 2, "width", "18rem"], ["class", "container-fluid m-0 p-0 Card-shadow", 4, "ngIf"], ["class", "container-fluid m-0 p-0 Card-shadow ", 4, "ngIf"], ["class", "container-fluid m-0 p- Card-shadow", 4, "ngIf"], ["class", "container-fluid m-0 p-0 Card-shadow text-center", 4, "ngIf"], [1, "container-fluid", "m-0", "p-0", "Card-shadow"], ["alt", "...", 1, "card-img-top", "img-thumbnail", 2, "width", "18rem", "height", "200px", "object-fit", "cover", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-location"], [1, "card-text"], [1, "btn", "btn-success", 3, "click"], [1, "container-fluid", "m-0", "p-", "Card-shadow"], [1, "container-fluid", "m-0", "p-0", "Card-shadow", "text-center"], [1, "card-img-top", "img-thumbnail", 3, "defaultImage", "lazyLoad", "alt"], [1, "card-body", "m-0", "p-1"], [1, "ingredient-Title", "text-center"], [1, "card-body", "ingredient-btn"], [1, "btn", "btn-success", "text-center", 3, "click"], [1, "btn", "btn-dark", "text-center", "m-3", 3, "click"]],
    template: function MainAllMealsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MainAllMealsComponent_div_2_Template, 7, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MainAllMealsComponent_button_3_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.allMeals);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tabName === "Ingredient");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_5__.LazyLoadImageDirective],
    styles: [".card-title[_ngcontent-%COMP%] {\n  color: #5b5b55;\n  font-family: \"Montez\", \"Source Sans Pro\", sans-serif;\n  font-size: 2rem;\n  font-family: cursive;\n}\n\n.card-location[_ngcontent-%COMP%] {\n  color: #53c14b;\n  font-family: \"Montez\", \"Source Sans Pro\", sans-serif;\n  font-size: 1.5rem;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  font-family: cursive;\n}\n\n.ingredient-Title[_ngcontent-%COMP%] {\n  color: #505d53;\n  font-size: 1.7rem;\n  font-family: cursive;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  color: #505d53;\n  font-size: 1.7rem;\n}\n\n.ingredient-btn[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 3%;\n  text-align: center;\n}\n\n.Card-shadow[_ngcontent-%COMP%] {\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.611);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVhbC9tYWluLWFsbC1tZWFscy9tYWluLWFsbC1tZWFscy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uLy4uL0Zyb250JTIwRW5kJTIwV2Vic2l0ZS9CZXN0JTIwQ29kZSUyMFRlbXBsZXRlJTIwaSUyMHdyb3RlL0FuZ3VsYXIlMjBsZWFybmluZyUyMGNsYXNzL0Zvb2QlMjBSZWNpcGUlMjBBcHAvZm9vZC1yZWNpcGUtYXBwL3NyYy9hcHAvbWVhbC9tYWluLWFsbC1tZWFscy9tYWluLWFsbC1tZWFscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQUE7RUFDQSxvREFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQ0FKOztBREVBO0VBQ0ksY0FBQTtFQUNBLG9EQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLG9CQUFBO0FDRUo7O0FEQUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFBVyxjQUFBO0VBQ1gsaUJBQUE7QUNJSjs7QURGQTtFQUNJLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNLSjs7QURIQTtFQUNJLDZDQUFBO0FDTUoiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNhcmQtdGl0bGV7XHJcbiAgICBjb2xvcjogIzViNWI1NTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udGV6JywgJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxufVxyXG4uY2FyZC1sb2NhdGlvbntcclxuICAgIGNvbG9yOiAjNTNjMTRiO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250ZXonLCAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcbi5jYXJkLXRleHR7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxufVxyXG4uaW5ncmVkaWVudC1UaXRsZXtcclxuICAgIGNvbG9yOiAjNTA1ZDUzO1xyXG4gICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7Y29sb3I6ICM1MDVkNTM7XHJcbiAgICBmb250LXNpemU6IDEuN3JlbTtcclxufVxyXG4uaW5ncmVkaWVudC1idG57XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uQ2FyZC1zaGFkb3d7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjYxMSk7XHJcbn0iLCIuY2FyZC10aXRsZSB7XG4gIGNvbG9yOiAjNWI1YjU1O1xuICBmb250LWZhbWlseTogXCJNb250ZXpcIiwgXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbn1cblxuLmNhcmQtbG9jYXRpb24ge1xuICBjb2xvcjogIzUzYzE0YjtcbiAgZm9udC1mYW1pbHk6IFwiTW9udGV6XCIsIFwiU291cmNlIFNhbnMgUHJvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uY2FyZC10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG59XG5cbi5pbmdyZWRpZW50LVRpdGxlIHtcbiAgY29sb3I6ICM1MDVkNTM7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjNTA1ZDUzO1xuICBmb250LXNpemU6IDEuN3JlbTtcbn1cblxuLmluZ3JlZGllbnQtYnRuIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAzJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uQ2FyZC1zaGFkb3cge1xuICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjYxMSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8829:
/*!*************************************************************!*\
  !*** ./src/app/meal/meal-details/meal-details.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MealDetailsComponent: () => (/* binding */ MealDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_core_serviecs_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/serviecs/api.service */ 9933);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);





function MealDetailsComponent_li_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ingredient_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ingredient_r1);
  }
}
class MealDetailsComponent {
  constructor(mealApi, route, sanitizer) {
    this.mealApi = mealApi;
    this.route = route;
    this.sanitizer = sanitizer;
    this.route.params.subscribe(params => {
      let mealId = params['id'];
      console.log(mealId);
      this.getMeal(mealId);
    });
  }
  ngOnInit() {}
  getMeal(mealId) {
    this.mealApi.getMealByID(mealId).subscribe({
      next: data => {
        this.meal = data.meals[0];
        console.log(data);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  getIngredients() {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredientName = this.meal[`strIngredient${i}`];
      const ingredientMeasure = this.meal[`strMeasure${i}`];
      if (ingredientName && ingredientMeasure) {
        ingredients.push(`${ingredientMeasure} ${ingredientName}`);
      }
    }
    return ingredients;
  }
  getVideoUrl(youtubeUrl) {
    // Extract the video ID from the YouTube URL
    const videoId = youtubeUrl.split('v=')[1];
    const sanitizedUrl = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(sanitizedUrl);
  }
  static #_ = this.ɵfac = function MealDetailsComponent_Factory(t) {
    return new (t || MealDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_serviecs_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MealDetailsComponent,
    selectors: [["app-meal-details"]],
    decls: 30,
    vars: 7,
    consts: [[1, "container-fluid", "border", "p-2"], [1, "styleFont", "text-center", "border-none", "fs-1", 2, "font-family", "Raleway", "border", "none", "color", "rgba(43, 42, 42, 0.655)", "letter-spacing", "1px"], [2, "color", "#84bd00", "border-bottom", "1px solid #84bd00", "font-weight", "600"], [1, "row"], [1, "col-md-6"], ["alt", "Meal Image", 1, "img-fluid", "img-thumbnail", "shadow", "mb-4", 3, "src"], [1, "col-md-6", "intro-Details"], [1, "styleFont"], [1, "text-muted", "fs-4", "px-4"], [1, "col-md-12", "text-center", "p-2"], [1, "fs-5"], [1, "row", "mt-4", "text-center"], [1, "col"], [1, "d-flex", "align-items-start", "justify-content-evenly", "flex-wrap"], ["class", "border p-1 m-2 shadow rounded fs-4", 4, "ngFor", "ngForOf"], [1, "row", "mt-4"], [1, "col-md-12", "text-center"], [1, "ratio", "ratio-21x9"], ["title", "YouTube video", "allowfullscreen", "", 3, "src"], [1, "border", "p-1", "m-2", "shadow", "rounded", "fs-4"]],
    template: function MealDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "p", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Meal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Informations");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9)(14, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Instructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11)(19, "div", 12)(20, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Ingredients");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, MealDetailsComponent_li_23_Template, 2, 1, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 15)(25, "div", 16)(26, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Video Tutorial");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "iframe", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.meal.strMealThumb, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.meal.strMeal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.meal.strCategory, " | ", ctx.meal.strArea, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.meal.strInstructions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getIngredients());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.getVideoUrl(ctx.meal.strYoutube), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeResourceUrl"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
    styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: auto;\n}\n\n.styleFont[_ngcontent-%COMP%] {\n  color: #84bd00;\n  font-family: \"Montez\", \"Source Sans Pro\", sans-serif;\n  border-radius: none;\n  font-size: 3rem;\n  border-bottom: 1px solid #84bd00;\n  text-align: center;\n}\n\n.row1[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #84bd00;\n}\n\n.intro-Details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n}\n\nimg[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n\nli[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  padding: 0.5rem 1rem;\n  text-decoration: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVhbC9tZWFsLWRldGFpbHMvbWVhbC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vLi4vRnJvbnQlMjBFbmQlMjBXZWJzaXRlL0Jlc3QlMjBDb2RlJTIwVGVtcGxldGUlMjBpJTIwd3JvdGUvQW5ndWxhciUyMGxlYXJuaW5nJTIwY2xhc3MvRm9vZCUyMFJlY2lwZSUyMEFwcC9mb29kLXJlY2lwZS1hcHAvc3JjL2FwcC9tZWFsL21lYWwtZGV0YWlscy9tZWFsLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQUE7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtFQUNBLG9EQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVFO0VBQ0UsZ0NBQUE7QUNDSjs7QURHSTtFQUNJLHFEQUFBO0FDQVI7O0FER0U7RUFDRSxrQkFBQTtBQ0FKOztBREdFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FDQUo7O0FER0U7RUFDRSxxQkFBQTtBQ0FKOztBREdFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQ0FKOztBREdFO0VBQ0UseUJBQUE7QUNBSiIsInNvdXJjZXNDb250ZW50IjpbIi8qIG1lYWwtZGV0YWlscy5jb21wb25lbnQuc2NzcyAqL1xyXG4uY29udGFpbmVyIHtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5zdHlsZUZvbnR7XHJcbiAgICBjb2xvcjogIzg0YmQwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udGV6JywgJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItcmFkaXVzOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4NGJkMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gXHJcbiAgLnJvdzF7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzg0YmQwMDtcclxuICB9XHJcbiBcclxuICAuaW50cm8tRGV0YWlsc3tcclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBcclxuICBsaSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1wcmltYXJ5OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XHJcbiAgfVxyXG4gICIsIi8qIG1lYWwtZGV0YWlscy5jb21wb25lbnQuc2NzcyAqL1xuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnN0eWxlRm9udCB7XG4gIGNvbG9yOiAjODRiZDAwO1xuICBmb250LWZhbWlseTogXCJNb250ZXpcIiwgXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLXJhZGl1czogbm9uZTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzg0YmQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucm93MSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODRiZDAwO1xufVxuXG4uaW50cm8tRGV0YWlscyBwIHtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbn1cblxuaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xufVxuXG4uYnRuLXByaW1hcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 1964:
/*!*******************************************************!*\
  !*** ./src/app/meal/meal-list/meal-list.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MealListComponent: () => (/* binding */ MealListComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_core_serviecs_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/serviecs/api.service */ 9933);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_core_serviecs_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/serviecs/cart.service */ 9243);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);






function MealListComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 6)(3, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 10)(10, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MealListComponent_div_1_div_1_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const meal_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.navigateToDetails(meal_r1.idMeal));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MealListComponent_div_1_div_1_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const meal_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.navigateToCart(meal_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const meal_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", meal_r1.strMealThumb, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](meal_r1.strMeal);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Location: ", meal_r1.strArea, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Recipe : ", meal_r1.strInstructions.split(" ").splice(0, 20).join(" "), "...");
  }
}
function MealListComponent_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 6)(3, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 14)(8, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MealListComponent_div_1_div_2_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const meal_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.navigateToCategoryMeals(meal_r1.strCategory));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Show All Meals");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const meal_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", meal_r1.strCategoryThumb, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](meal_r1.strCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Recipe : ", meal_r1.strCategoryDescription.split(" ").splice(0, 15).join(" "), "...");
  }
}
function MealListComponent_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 6)(3, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6)(10, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MealListComponent_div_1_div_3_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const meal_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r16.navigateToLocationMeals(meal_r1.strArea));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const meal_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", meal_r1.strMealThumb, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](meal_r1.strArea);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Location: ", meal_r1.strMeal, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Recipe : ", meal_r1.strInstructions.split(" ").splice(0, 20).join(" "), "...");
  }
}
function MealListComponent_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 15)(3, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 17)(6, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MealListComponent_div_1_div_4_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.navigateToIngredient("Ingredients"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "See All");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const meal_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", meal_r1.strMealThumb, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](meal_r1.strMeal);
  }
}
function MealListComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MealListComponent_div_1_div_1_Template, 14, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MealListComponent_div_1_div_2_Template, 10, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MealListComponent_div_1_div_3_Template, 12, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MealListComponent_div_1_div_4_Template, 8, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tabName === "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tabName === "Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tabName === "Locations");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tabName === "Ingredient");
  }
}
class MealListComponent {
  constructor(mealApi, router, cartService) {
    this.mealApi = mealApi;
    this.router = router;
    this.cartService = cartService;
    this.tabName = '';
  }
  ngOnInit() {
    if (this.tabName === 'Home') {
      this.getRandomMeals();
    } else if (this.tabName === 'Categories') {
      this.getCategoryMeals();
    } else if (this.tabName === 'Locations') {
      this.getLocationMeals();
    } else if (this.tabName === 'Ingredient') {
      this.getIngredientMeals();
    }
  }
  getRandomMeals() {
    this.mealApi.getRandomMeal().subscribe({
      next: data => {
        this.allMeals = data.meals;
        console.log(this.allMeals);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  getLocationMeals() {
    this.mealApi.getRandomMeal().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(data => {
      if (data?.meals) {
        return data.meals.sort((a, b) => a.strArea.localeCompare(b.strArea));
      }
      return [];
    })).subscribe({
      next: sortedMeals => {
        this.allMeals = sortedMeals;
        console.log(this.allMeals);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  getCategoryMeals() {
    this.mealApi.getCategoryMeal().subscribe({
      next: data => {
        this.allMeals = data.categories;
        console.log(this.allMeals);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  getIngredientMeals() {
    this.mealApi.getIngredientMeal().subscribe({
      next: data => {
        this.allMeals = data.meals;
        console.log(this.allMeals);
      },
      error: err => {
        console.log(err);
      }
    });
  }
  navigateToCart(meal) {
    this.cartService.addToCart(meal);
    console.log(meal);
    this.router.navigateByUrl('cart');
  }
  navigateToLocationMeals(name) {
    this.router.navigateByUrl(`allMeals/${name}/${'SingleLocation'}`);
  }
  navigateToCategoryMeals(name) {
    this.router.navigateByUrl(`allMeals/${name}/${'categories'}`);
  }
  navigateToIngredient(name) {
    this.router.navigateByUrl(`allMeals/${name}/${name}`);
  }
  navigateToDetails(id) {
    this.router.navigateByUrl(`mealDetails/${id}`);
  }
  static #_ = this.ɵfac = function MealListComponent_Factory(t) {
    return new (t || MealListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_serviecs_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_serviecs_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MealListComponent,
    selectors: [["app-meal-list"]],
    inputs: {
      tabName: "tabName"
    },
    decls: 2,
    vars: 1,
    consts: [[1, "container", "d-flex", "align-items-start", "justify-content-around", "flex-wrap", "gap-4"], ["class", "card", "style", "width: 18rem;", 4, "ngFor", "ngForOf"], [1, "card", 2, "width", "18rem"], ["class", "container-fluid m-0 p-0 card-Container", 4, "ngIf"], [1, "container-fluid", "m-0", "p-0", "card-Container"], ["alt", "...", 1, "card-img-top", "img-thumbnail", 2, "width", "18rem", "height", "200px", "object-fit", "cover", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-location"], [1, "card-text"], [1, "card-body", "d-flex", "justify-content-between", "gap-4"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-dark", 3, "click"], [1, "fas", "fa-shopping-cart", "fs-4"], [1, "card-body", "text-center"], [1, "card-body", "m-0", "p-1"], [1, "ingredient-Title"], [1, "card-body", "ingredient-btn"]],
    template: function MealListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MealListComponent_div_1_Template, 5, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.allMeals);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
    styles: [".card-Container[_ngcontent-%COMP%] {\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.657);\n}\n\n.card-title[_ngcontent-%COMP%] {\n  color: #5b5b55;\n  font-family: \"Montez\", \"Source Sans Pro\", sans-serif;\n  font-size: 2rem;\n  font-family: cursive;\n}\n\n.card-location[_ngcontent-%COMP%] {\n  color: #53c14b;\n  font-family: \"Montez\", \"Source Sans Pro\", sans-serif;\n  font-size: 1.5rem;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  font-family: cursive;\n}\n\n.ingredient-Title[_ngcontent-%COMP%] {\n  color: #505d53;\n  font-size: 1.7rem;\n  font-family: cursive;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  color: #505d53;\n  font-size: 1.7rem;\n}\n\n.ingredient-btn[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 3%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVhbC9tZWFsLWxpc3QvbWVhbC1saXN0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vLi4vRnJvbnQlMjBFbmQlMjBXZWJzaXRlL0Jlc3QlMjBDb2RlJTIwVGVtcGxldGUlMjBpJTIwd3JvdGUvQW5ndWxhciUyMGxlYXJuaW5nJTIwY2xhc3MvRm9vZCUyMFJlY2lwZSUyMEFwcC9mb29kLXJlY2lwZS1hcHAvc3JjL2FwcC9tZWFsL21lYWwtbGlzdC9tZWFsLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSw2Q0FBQTtBQ0FKOztBREVBO0VBQ0ksY0FBQTtFQUNBLG9EQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0VBQ0Esb0RBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksb0JBQUE7QUNHSjs7QUREQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUFXLGNBQUE7RUFDWCxpQkFBQTtBQ0tKOztBREhBO0VBQ0ksU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ01KIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jYXJkLUNvbnRhaW5lcntcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNjU3KTtcclxufVxyXG4uY2FyZC10aXRsZXtcclxuICAgIGNvbG9yOiAjNWI1YjU1O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250ZXonLCAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG59XHJcbi5jYXJkLWxvY2F0aW9ue1xyXG4gICAgY29sb3I6ICM1M2MxNGI7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRleicsICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuLmNhcmQtdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG59XHJcbi5pbmdyZWRpZW50LVRpdGxle1xyXG4gICAgY29sb3I6ICM1MDVkNTM7XHJcbiAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtjb2xvcjogIzUwNWQ1MztcclxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG59XHJcbi5pbmdyZWRpZW50LWJ0bntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDMlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59IiwiLmNhcmQtQ29udGFpbmVyIHtcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC42NTcpO1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIGNvbG9yOiAjNWI1YjU1O1xuICBmb250LWZhbWlseTogXCJNb250ZXpcIiwgXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbn1cblxuLmNhcmQtbG9jYXRpb24ge1xuICBjb2xvcjogIzUzYzE0YjtcbiAgZm9udC1mYW1pbHk6IFwiTW9udGV6XCIsIFwiU291cmNlIFNhbnMgUHJvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uY2FyZC10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG59XG5cbi5pbmdyZWRpZW50LVRpdGxlIHtcbiAgY29sb3I6ICM1MDVkNTM7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjNTA1ZDUzO1xuICBmb250LXNpemU6IDEuN3JlbTtcbn1cblxuLmluZ3JlZGllbnQtYnRuIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAzJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9119:
/*!*********************************************!*\
  !*** ./src/app/meal/meal-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MealRoutingModule: () => (/* binding */ MealRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



const routes = [];
class MealRoutingModule {
  static #_ = this.ɵfac = function MealRoutingModule_Factory(t) {
    return new (t || MealRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MealRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MealRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 8503:
/*!*************************************!*\
  !*** ./src/app/meal/meal.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MealModule: () => (/* binding */ MealModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _meal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meal-routing.module */ 9119);
/* harmony import */ var _meal_list_meal_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meal-list/meal-list.component */ 1964);
/* harmony import */ var _meal_details_meal_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meal-details/meal-details.component */ 8829);
/* harmony import */ var _main_all_meals_main_all_meals_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-all-meals/main-all-meals.component */ 595);
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared/shared.module */ 1383);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-lazyload-image */ 1935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);








class MealModule {
  static #_ = this.ɵfac = function MealModule_Factory(t) {
    return new (t || MealModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: MealModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _meal_routing_module__WEBPACK_IMPORTED_MODULE_0__.MealRoutingModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__.LazyLoadImageModule, _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MealModule, {
    declarations: [_meal_list_meal_list_component__WEBPACK_IMPORTED_MODULE_1__.MealListComponent, _meal_details_meal_details_component__WEBPACK_IMPORTED_MODULE_2__.MealDetailsComponent, _main_all_meals_main_all_meals_component__WEBPACK_IMPORTED_MODULE_3__.MainAllMealsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _meal_routing_module__WEBPACK_IMPORTED_MODULE_0__.MealRoutingModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__.LazyLoadImageModule, _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule],
    exports: [_meal_list_meal_list_component__WEBPACK_IMPORTED_MODULE_1__.MealListComponent, _meal_details_meal_details_component__WEBPACK_IMPORTED_MODULE_2__.MealDetailsComponent]
  });
})();

/***/ }),

/***/ 8014:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class FooterComponent {
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 78,
    vars: 0,
    consts: [[1, "container-fluid", 2, "background", "url(assets/Images/rectangle-48.png) center / cover no-repeat"], [1, "p-5", "text-white"], [1, "row"], [1, "col-6", "col-md-2", "mb-1"], [1, "nav", "flex-column"], [1, "nav-item", "mb-2"], ["href", "#", 1, "nav-link", "p-0", "text-white"], [1, "col-md-5", "offset-md-1", "mb-3"], [1, "d-flex", "flex-column", "flex-sm-row", "w-100", "gap-2"], ["for", "newsletter1", 1, "visually-hidden"], ["id", "newsletter1", "type", "text", "placeholder", "Email address", 1, "form-control"], ["type", "button", 1, "btn", "btn-primary"], [1, "d-flex", "flex-column", "flex-sm-row", "justify-content-around", "py-4", "border-top"], [1, "row", "d-flex", "align-items-center", "justify-content-center", "flex-column"], ["src", "assets/Images/cp-logo-2.png", "alt", "Logo", 2, "width", "100px"], [1, "list-unstyled", "d-flex"], [1, "ms-3"], ["href", "#", 1, "link-white", "text-white"], [1, "fab", "fa-twitter"], [1, "fab", "fa-instagram"], [1, "fab", "fa-facebook"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "footer", 1)(2, "div", 2)(3, "div", 3)(4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Fresh Recipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4)(7, "li", 5)(8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Recipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5)(11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Winter salads");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 5)(14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Organic chicken");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 5)(17, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Mutton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3)(20, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "In News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 4)(23, "li", 5)(24, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Our Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 5)(27, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Contests/Sweepsatkes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 5)(30, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 5)(33, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3)(36, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul", 4)(39, "li", 5)(40, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 5)(43, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Our Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 5)(46, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Our Staff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 5)(49, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 7)(52, "form")(53, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Subscribe to our newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Monthly digest of what's new and exciting from us.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 8)(58, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 12)(64, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u00A9 2022 Company, Inc. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "ul", 15)(69, "li", 16)(70, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 16)(73, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li", 16)(76, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 74:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_core_serviecs_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/serviecs/api.service */ 9933);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_core_serviecs_caching_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/serviecs/caching-service.service */ 8561);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);





function HeaderComponent_a_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_a_12_Template_a_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const meal_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.navigateToMeals(meal_r2.strCategory));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const meal_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](meal_r2.strCategory);
  }
}
class HeaderComponent {
  constructor(mealApi, router, cachingService) {
    this.mealApi = mealApi;
    this.router = router;
    this.cachingService = cachingService;
    this.active = 1;
  }
  ngOnInit() {
    this.getCategoryMeals();
  }
  getCategoryMeals() {
    this.mealApi.getCategoryMeal().subscribe({
      next: data => {
        this.categories = data.categories;
        console.log('Categories loaded:', this.categories);
      },
      error: err => {
        console.error('Error loading categories:', err);
      }
    });
  }
  searchMeals(searchName) {
    this.router.navigateByUrl(`allMeals/${searchName}/${'inputSearch'}`);
  }
  navigateToMeals(name) {
    this.router.navigateByUrl(`allMeals/${name}/${'categories'}`);
  }
  // navigateToHome(){
  //   this.router.navigateByUrl(``);
  // }
  navigateToCart() {
    this.router.navigateByUrl(`cart`);
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_serviecs_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_serviecs_caching_service_service__WEBPACK_IMPORTED_MODULE_1__.CachingServiceService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    decls: 21,
    vars: 1,
    consts: [[1, "navbar", "navbar-expand-lg", "px-4"], [1, "container-fluid"], ["href", "/", 1, "navbar-brand", "mb-2"], ["src", "assets/Images/cp-logo-1.png", "alt", "Logo"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "justify-content-between", "align-items-center", "flex-grow-1"], [1, "navbar-nav", "mb-2", "mb-lg-0", "p-1", "p-lg-0"], [1, "nav-item", "dropdown"], ["href", "#", "id", "categoryDropdown", "role", "button", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "mb-2"], ["aria-labelledby", "categoryDropdown", 1, "dropdown-menu"], ["class", "dropdown-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "align-items-center", "w-100", "w-lg-auto", "mb-2"], ["type", "search", "placeholder", "Search Meals...", "aria-label", "Search", 1, "form-control", "me-2", "search-input", "border", "rounded"], ["search", ""], ["type", "submit", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "navbar-text", "ms-lg-3", "border", "rounded", "p-2", "mb-2"], [1, "cursor-pointer", 3, "click"], [1, "fas", "fa-shopping-cart", "fs-4"], [1, "dropdown-item", 3, "click"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "ul", 7)(8, "li", 8)(9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Categories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, HeaderComponent_a_12_Template, 2, 1, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.searchMeals(_r1.value));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 16)(19, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_19_listener() {
          return ctx.navigateToCart();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categories);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
    styles: [".search-input[_ngcontent-%COMP%]:focus, .search-input[_ngcontent-%COMP%]:active {\n  border-color: rgba(108, 117, 125, 0.4039215686) !important; \n\n  box-shadow: 1px 1px 10px rgba(164, 170, 176, 0.6431372549); \n\n}\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uLy4uL0Zyb250JTIwRW5kJTIwV2Vic2l0ZS9CZXN0JTIwQ29kZSUyMFRlbXBsZXRlJTIwaSUyMHdyb3RlL0FuZ3VsYXIlMjBsZWFybmluZyUyMGNsYXNzL0Zvb2QlMjBSZWNpcGUlMjBBcHAvZm9vZC1yZWNpcGUtYXBwL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSwwREFBQSxFQUFBLHdEQUFBO0VBQ0EsMERBQUEsRUFBQSwwQ0FBQTtBQ0NGOztBRENBLGtEQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1pbnB1dDpmb2N1cyxcclxuLnNlYXJjaC1pbnB1dDphY3RpdmUge1xyXG4gIGJvcmRlci1jb2xvcjogIzZjNzU3ZDY3ICFpbXBvcnRhbnQ7IC8qIENoYW5nZSB0aGUgY29sb3IgdG8geW91ciBkZXNpcmVkIGZvY3VzL2FjdGl2ZSBjb2xvciAqL1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCAjYTRhYWIwYTQ7IC8qIFJlbW92ZSB0aGUgYm94IHNoYWRvdyBvbiBmb2N1cy9hY3RpdmUgKi9cclxufVxyXG4vKiBBZGQgdGhpcyB0byB5b3VyIGNvbXBvbmVudCdzIENTUyBvciBTQ1NTIGZpbGUgKi9cclxuXHJcblxyXG5cclxuICAiLCIuc2VhcmNoLWlucHV0OmZvY3VzLFxuLnNlYXJjaC1pbnB1dDphY3RpdmUge1xuICBib3JkZXItY29sb3I6IHJnYmEoMTA4LCAxMTcsIDEyNSwgMC40MDM5MjE1Njg2KSAhaW1wb3J0YW50OyAvKiBDaGFuZ2UgdGhlIGNvbG9yIHRvIHlvdXIgZGVzaXJlZCBmb2N1cy9hY3RpdmUgY29sb3IgKi9cbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMTY0LCAxNzAsIDE3NiwgMC42NDMxMzcyNTQ5KTsgLyogUmVtb3ZlIHRoZSBib3ggc2hhZG93IG9uIGZvY3VzL2FjdGl2ZSAqL1xufVxuXG4vKiBBZGQgdGhpcyB0byB5b3VyIGNvbXBvbmVudCdzIENTUyBvciBTQ1NTIGZpbGUgKi8iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7708:
/*!**********************************************************!*\
  !*** ./src/app/shared/components/hero/hero.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeroComponent: () => (/* binding */ HeroComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class HeroComponent {
  constructor(router) {
    this.router = router;
  }
  navigateToMeals() {
    this.router.navigateByUrl(`allMeals/${'allMeals'}/${'allMeals'}`);
  }
  static #_ = this.ɵfac = function HeroComponent_Factory(t) {
    return new (t || HeroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HeroComponent,
    selectors: [["app-hero"]],
    decls: 10,
    vars: 0,
    consts: [[1, "container-fluid", "hero-container"], [1, "row", "align-items-center", "justify-content-center"], [1, "col-lg-6", "hero-text"], [1, "display-4", "text-bold", "fw-bold"], [1, "lead"], [1, "btn", "btn-outline-light", "btn-lg", 3, "click"], [1, "col-lg-6", "hero-image"]],
    template: function HeroComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Delicious Meals Await!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Explore our mouthwatering chicken recipes crafted with love and perfection.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroComponent_Template_button_click_7_listener() {
          return ctx.navigateToMeals();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Discover More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: [".hero-container[_ngcontent-%COMP%] {\n  min-height: 85vh; \n\n  background-color: #343a40; \n\n  color: #fff; \n\n  background-color: #343a40; \n\n  background-image: url('cropped-pistaciafood11-1.png'); \n\n  background-size: cover;\n  background-position: center;\n}\n\n.hero-text[_ngcontent-%COMP%] {\n  height: 80vh;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVyby9oZXJvLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vLi4vRnJvbnQlMjBFbmQlMjBXZWJzaXRlL0Jlc3QlMjBDb2RlJTIwVGVtcGxldGUlMjBpJTIwd3JvdGUvQW5ndWxhciUyMGxlYXJuaW5nJTIwY2xhc3MvRm9vZCUyMFJlY2lwZSUyMEFwcC9mb29kLXJlY2lwZS1hcHAvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZXJvL2hlcm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQSxFQUFBLDBDQUFBO0VBQ0EseUJBQUEsRUFBQSxnQ0FBQTtFQUNBLFdBQUEsRUFBQSwwQkFBQTtFQUNBLHlCQUFBLEVBQUEsZ0NBQUE7RUFDQSxxREFBQSxFQUFBLHFDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREdFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNBSiIsInNvdXJjZXNDb250ZW50IjpbIi5oZXJvLWNvbnRhaW5lciB7XHJcbiAgICBtaW4taGVpZ2h0OiA4NXZoOyAvKiBBZGp1c3QgdGhlIGhlaWdodCBiYXNlZCBvbiB5b3VyIG5lZWRzICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwOyAvKiBBZGp1c3QgdGhlIGJhY2tncm91bmQgY29sb3IgKi9cclxuICAgIGNvbG9yOiAjZmZmOyAvKiBBZGp1c3QgdGhlIHRleHQgY29sb3IgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7IC8qIEFkanVzdCB0aGUgYmFja2dyb3VuZCBjb2xvciAqL1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL0ltYWdlcy9jcm9wcGVkLXBpc3RhY2lhZm9vZDExLTEucG5nXCIpOyAvKiBTcGVjaWZ5IHRoZSBiYWNrZ3JvdW5kIGltYWdlIFVSTCAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIFxyXG4gIC5oZXJvLXRleHQge1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAuaGVyby1pbWFnZSB7XHJcbiAgICAvLyBtaW4taGVpZ2h0OiAyMHZoOyAvKiBBZGp1c3QgdGhlIGhlaWdodCBiYXNlZCBvbiB5b3VyIG5lZWRzICovXHJcbiAgfVxyXG4gIFxyXG5cclxuICAiLCIuaGVyby1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiA4NXZoOyAvKiBBZGp1c3QgdGhlIGhlaWdodCBiYXNlZCBvbiB5b3VyIG5lZWRzICovXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7IC8qIEFkanVzdCB0aGUgYmFja2dyb3VuZCBjb2xvciAqL1xuICBjb2xvcjogI2ZmZjsgLyogQWRqdXN0IHRoZSB0ZXh0IGNvbG9yICovXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7IC8qIEFkanVzdCB0aGUgYmFja2dyb3VuZCBjb2xvciAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvSW1hZ2VzL2Nyb3BwZWQtcGlzdGFjaWFmb29kMTEtMS5wbmdcIik7IC8qIFNwZWNpZnkgdGhlIGJhY2tncm91bmQgaW1hZ2UgVVJMICovXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmhlcm8tdGV4dCB7XG4gIGhlaWdodDogODB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 1383:
/*!************************************************!*\
  !*** ./src/app/shared/shared/shared.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header/header.component */ 74);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/footer/footer.component */ 8014);
/* harmony import */ var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hero/hero.component */ 7708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);





class SharedModule {
  static #_ = this.ɵfac = function SharedModule_Factory(t) {
    return new (t || SharedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_2__.HeroComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
    exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_2__.HeroComponent]
  });
})();

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/// <reference types="@angular/localize" />


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4686), __webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map