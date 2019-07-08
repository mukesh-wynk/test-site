(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-component-module-ngfactory"],{

/***/ "./src/app/components/component.module.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/components/component.module.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: ComponentsModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModuleNgFactory", function() { return ComponentsModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component.module */ "./src/app/components/component.module.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _plan_plan_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plan/plan.component.ngfactory */ "./src/app/components/plan/plan.component.ngfactory.js");
/* harmony import */ var _coupan_coupan_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coupan/coupan.component.ngfactory */ "./src/app/components/coupan/coupan.component.ngfactory.js");
/* harmony import */ var _offer_coupon_offer_coupon_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offer-coupon/offer-coupon.component.ngfactory */ "./src/app/components/offer-coupon/offer-coupon.component.ngfactory.js");
/* harmony import */ var _status_page_status_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./status-page/status-page.component.ngfactory */ "./src/app/components/status-page/status-page.component.ngfactory.js");
/* harmony import */ var _net_banking_net_banking_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./net-banking/net-banking.component.ngfactory */ "./src/app/components/net-banking/net-banking.component.ngfactory.js");
/* harmony import */ var _wallet_wallet_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wallet/wallet.component.ngfactory */ "./src/app/components/wallet/wallet.component.ngfactory.js");
/* harmony import */ var _ads_payment_ads_payment_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ads-payment/ads-payment.component.ngfactory */ "./src/app/components/ads-payment/ads-payment.component.ngfactory.js");
/* harmony import */ var _otp_otp_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./otp/otp.component.ngfactory */ "./src/app/components/otp/otp.component.ngfactory.js");
/* harmony import */ var _payu_seamless_payu_seamless_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./payu-seamless/payu-seamless.component.ngfactory */ "./src/app/components/payu-seamless/payu-seamless.component.ngfactory.js");
/* harmony import */ var _one_click_payment_oneclick_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./one-click-payment/oneclick.component.ngfactory */ "./src/app/components/one-click-payment/oneclick.component.ngfactory.js");
/* harmony import */ var _terms_condition_terms_condition_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./terms-condition/terms-condition.component.ngfactory */ "./src/app/components/terms-condition/terms-condition.component.ngfactory.js");
/* harmony import */ var _payment_options_payment_option_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./payment-options/payment-option.component.ngfactory */ "./src/app/components/payment-options/payment-option.component.ngfactory.js");
/* harmony import */ var _paytm_form_post_paytm_form_post_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./paytm-form-post/paytm-form-post.component.ngfactory */ "./src/app/components/paytm-form-post/paytm-form-post.component.ngfactory.js");
/* harmony import */ var _paytm_native_add_money_form_add_money_form_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../paytm-native/add-money-form/add-money-form.component.ngfactory */ "./src/app/paytm-native/add-money-form/add-money-form.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_crypto_service_crypto_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../core/services/crypto-service/crypto.service */ "./src/app/core/services/crypto-service/crypto.service.ts");
/* harmony import */ var _core_services_data_manager_data_manager_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../core/services/data-manager/data-manager.service */ "./src/app/core/services/data-manager/data-manager.service.ts");
/* harmony import */ var _core_services_route_manager_route_manager_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../core/services/route-manager/route-manager.service */ "./src/app/core/services/route-manager/route-manager.service.ts");
/* harmony import */ var _core_guards_navigation_guard_nav_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../core/guards/navigation-guard/nav.guard */ "./src/app/core/guards/navigation-guard/nav.guard.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_request_manager_http_request_manager_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../http-request-manager/http-request-manager.service */ "./src/app/http-request-manager/http-request-manager.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_services_webview_service_webview_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../core/services/webview-service/webview.service */ "./src/app/core/services/webview-service/webview.service.ts");
/* harmony import */ var _analytic_service_analytic_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../analytic-service/analytic.service */ "./src/app/analytic-service/analytic.service.ts");
/* harmony import */ var _core_services_wynk_paytm_service_wynk_paytm_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../core/services/wynk-paytm-service/wynk-paytm.service */ "./src/app/core/services/wynk-paytm-service/wynk-paytm.service.ts");
/* harmony import */ var _core_services_modal_service_modal_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../core/services/modal-service/modal.service */ "./src/app/core/services/modal-service/modal.service.ts");
/* harmony import */ var _component_routing__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./component.routing */ "./src/app/components/component.routing.ts");
/* harmony import */ var _directive_loader_loader_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../directive/loader/loader.module */ "./src/app/directive/loader/loader.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _paytm_native_paytm_native_routing__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../paytm-native/paytm-native.routing */ "./src/app/paytm-native/paytm-native.routing.ts");
/* harmony import */ var _paytm_native_paytm_native_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../paytm-native/paytm-native.module */ "./src/app/paytm-native/paytm-native.module.ts");
/* harmony import */ var _plan_plan_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./plan/plan.component */ "./src/app/components/plan/plan.component.ts");
/* harmony import */ var _coupan_coupan_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./coupan/coupan.component */ "./src/app/components/coupan/coupan.component.ts");
/* harmony import */ var _offer_coupon_offer_coupon_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./offer-coupon/offer-coupon.component */ "./src/app/components/offer-coupon/offer-coupon.component.ts");
/* harmony import */ var _status_page_status_page_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./status-page/status-page.component */ "./src/app/components/status-page/status-page.component.ts");
/* harmony import */ var _net_banking_net_banking_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./net-banking/net-banking.component */ "./src/app/components/net-banking/net-banking.component.ts");
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./wallet/wallet.component */ "./src/app/components/wallet/wallet.component.ts");
/* harmony import */ var _ads_payment_ads_payment_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./ads-payment/ads-payment.component */ "./src/app/components/ads-payment/ads-payment.component.ts");
/* harmony import */ var _otp_otp_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./otp/otp.component */ "./src/app/components/otp/otp.component.ts");
/* harmony import */ var _payu_seamless_payu_seamless_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./payu-seamless/payu-seamless.component */ "./src/app/components/payu-seamless/payu-seamless.component.ts");
/* harmony import */ var _one_click_payment_oneclick_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./one-click-payment/oneclick.component */ "./src/app/components/one-click-payment/oneclick.component.ts");
/* harmony import */ var _terms_condition_terms_condition_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./terms-condition/terms-condition.component */ "./src/app/components/terms-condition/terms-condition.component.ts");
/* harmony import */ var _payment_options_payment_option_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./payment-options/payment-option.component */ "./src/app/components/payment-options/payment-option.component.ts");
/* harmony import */ var _paytm_form_post_paytm_form_post_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./paytm-form-post/paytm-form-post.component */ "./src/app/components/paytm-form-post/paytm-form-post.component.ts");
/* harmony import */ var _paytm_native_add_money_form_add_money_form_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../paytm-native/add-money-form/add-money-form.component */ "./src/app/paytm-native/add-money-form/add-money-form.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */

















































var ComponentsModuleNgFactory = /*@__PURE__*/ /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_component_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵEmptyOutletComponentNgFactory"], _plan_plan_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["PlanComponentNgFactory"], _coupan_coupan_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["CoupanComponentNgFactory"], _offer_coupon_offer_coupon_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["OfferCouponComponentNgFactory"], _status_page_status_page_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["StatusPageNgFactory"], _net_banking_net_banking_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["NetBankingComponentNgFactory"], _wallet_wallet_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["WalletComponentNgFactory"], _ads_payment_ads_payment_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["AdPaymentComponentNgFactory"], _otp_otp_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["OTPComponentNgFactory"], _payu_seamless_payu_seamless_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["PayuComponentNgFactory"], _one_click_payment_oneclick_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["OneClickComponentNgFactory"], _terms_condition_terms_condition_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["TermsConditionComponentNgFactory"], _payment_options_payment_option_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["PaymentOptionComponentNgFactory"], _paytm_form_post_paytm_form_post_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["PaytmFormComponentNgFactory"], _paytm_native_add_money_form_add_money_form_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["AddMoneyFormComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_j"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_services_crypto_service_crypto_service__WEBPACK_IMPORTED_MODULE_19__["CryptoService"], _core_services_crypto_service_crypto_service__WEBPACK_IMPORTED_MODULE_19__["CryptoService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_services_data_manager_data_manager_service__WEBPACK_IMPORTED_MODULE_20__["DataManagerService"], _core_services_data_manager_data_manager_service__WEBPACK_IMPORTED_MODULE_20__["DataManagerService"], [_core_services_crypto_service_crypto_service__WEBPACK_IMPORTED_MODULE_19__["CryptoService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_services_route_manager_route_manager_service__WEBPACK_IMPORTED_MODULE_21__["RouteManagerService"], _core_services_route_manager_route_manager_service__WEBPACK_IMPORTED_MODULE_21__["RouteManagerService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_guards_navigation_guard_nav_guard__WEBPACK_IMPORTED_MODULE_22__["NavigationGuard"], _core_guards_navigation_guard_nav_guard__WEBPACK_IMPORTED_MODULE_22__["NavigationGuard"], [_core_services_route_manager_route_manager_service__WEBPACK_IMPORTED_MODULE_21__["RouteManagerService"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _http_request_manager_http_request_manager_service__WEBPACK_IMPORTED_MODULE_24__["HttpRequestManager"], _http_request_manager_http_request_manager_service__WEBPACK_IMPORTED_MODULE_24__["HttpRequestManager"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_services_webview_service_webview_service__WEBPACK_IMPORTED_MODULE_26__["WebviewService"], _core_services_webview_service_webview_service__WEBPACK_IMPORTED_MODULE_26__["WebviewService"], [_http_request_manager_http_request_manager_service__WEBPACK_IMPORTED_MODULE_24__["HttpRequestManager"], _core_services_crypto_service_crypto_service__WEBPACK_IMPORTED_MODULE_19__["CryptoService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _analytic_service_analytic_service__WEBPACK_IMPORTED_MODULE_27__["AnalyticService"], _analytic_service_analytic_service__WEBPACK_IMPORTED_MODULE_27__["AnalyticService"], [_http_request_manager_http_request_manager_service__WEBPACK_IMPORTED_MODULE_24__["HttpRequestManager"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_services_wynk_paytm_service_wynk_paytm_service__WEBPACK_IMPORTED_MODULE_28__["WynkPaytmService"], _core_services_wynk_paytm_service_wynk_paytm_service__WEBPACK_IMPORTED_MODULE_28__["WynkPaytmService"], [_http_request_manager_http_request_manager_service__WEBPACK_IMPORTED_MODULE_24__["HttpRequestManager"], _core_services_crypto_service_crypto_service__WEBPACK_IMPORTED_MODULE_19__["CryptoService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_services_modal_service_modal_service__WEBPACK_IMPORTED_MODULE_29__["ModalService"], _core_services_modal_service_modal_service__WEBPACK_IMPORTED_MODULE_29__["ModalService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_17__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["CurrencyPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_23__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _component_routing__WEBPACK_IMPORTED_MODULE_30__["ComponentsRoutingModule"], _component_routing__WEBPACK_IMPORTED_MODULE_30__["ComponentsRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_bc"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_bc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _directive_loader_loader_module__WEBPACK_IMPORTED_MODULE_31__["LoaderModule"], _directive_loader_loader_module__WEBPACK_IMPORTED_MODULE_31__["LoaderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _core_core_module__WEBPACK_IMPORTED_MODULE_32__["CoreModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_32__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _paytm_native_paytm_native_routing__WEBPACK_IMPORTED_MODULE_33__["PaytmNativeRoutingModule"], _paytm_native_paytm_native_routing__WEBPACK_IMPORTED_MODULE_33__["PaytmNativeRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _paytm_native_paytm_native_module__WEBPACK_IMPORTED_MODULE_34__["PaytmNativeModule"], _paytm_native_paytm_native_module__WEBPACK_IMPORTED_MODULE_34__["PaytmNativeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _component_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"], _component_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_23__["ROUTES"], function () { return [[{ path: "", data: _component_routing__WEBPACK_IMPORTED_MODULE_30__["ɵ0"], children: [{ path: "plan", component: _plan_plan_component__WEBPACK_IMPORTED_MODULE_35__["PlanComponent"] }, { path: "coupan", component: _coupan_coupan_component__WEBPACK_IMPORTED_MODULE_36__["CoupanComponent"] }, { path: "offer-coupon", component: _offer_coupon_offer_coupon_component__WEBPACK_IMPORTED_MODULE_37__["OfferCouponComponent"] }, { path: "status", component: _status_page_status_page_component__WEBPACK_IMPORTED_MODULE_38__["StatusPage"] }, { path: "net-banking", component: _net_banking_net_banking_component__WEBPACK_IMPORTED_MODULE_39__["NetBankingComponent"] }, { path: "wallets", component: _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_40__["WalletComponent"] }, { path: "ads-payment", component: _ads_payment_ads_payment_component__WEBPACK_IMPORTED_MODULE_41__["AdPaymentComponent"] }, { path: "otp", component: _otp_otp_component__WEBPACK_IMPORTED_MODULE_42__["OTPComponent"] }, { path: "payu", component: _payu_seamless_payu_seamless_component__WEBPACK_IMPORTED_MODULE_43__["PayuComponent"] }, { path: "oneclick", component: _one_click_payment_oneclick_component__WEBPACK_IMPORTED_MODULE_44__["OneClickComponent"] }, { path: "terms", component: _terms_condition_terms_condition_component__WEBPACK_IMPORTED_MODULE_45__["TermsConditionComponent"] }, { path: "payment-option", component: _payment_options_payment_option_component__WEBPACK_IMPORTED_MODULE_46__["PaymentOptionComponent"] }, { path: "paytm-form", component: _paytm_form_post_paytm_form_post_component__WEBPACK_IMPORTED_MODULE_47__["PaytmFormComponent"] }] }], [{ path: "", data: _paytm_native_paytm_native_routing__WEBPACK_IMPORTED_MODULE_33__["ɵ0"], children: [{ path: "add-money", component: _paytm_native_add_money_form_add_money_form_component__WEBPACK_IMPORTED_MODULE_48__["AddMoneyFormComponent"] }] }]]; }, [])]); });



/***/ })

}]);