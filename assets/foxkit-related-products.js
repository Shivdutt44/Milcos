/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
if (!customElements.get('fox-related-product')) {
  class FoxRelatedProduct extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      if (window?.FoxKit?.foxKitSettings?.productRecommendations) {
        window?.FoxKit?.initProductRecommendations?.();
      }
    }

  }

  customElements.define('fox-related-product', FoxRelatedProduct);
}
/******/ })()
;