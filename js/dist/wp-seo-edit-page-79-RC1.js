yoastWebpackJsonp([20],{

/***/ 2053:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function ($) {\n\t// Set the yoast-tooltips on the list table links columns that have links.\n\t$(\".yoast-column-header-has-tooltip\").each(function () {\n\t\tvar parentLink = $(this).closest(\"th\").find(\"a\");\n\n\t\tparentLink.addClass(\"yoast-tooltip yoast-tooltip-n yoast-tooltip-multiline\").attr(\"aria-label\", $(this).data(\"label\"));\n\t});\n\n\t// Clean up the columns titles HTML for the Screen Options checkboxes labels.\n\t$(\".yoast-column-header-has-tooltip, .yoast-tooltip\", \"#screen-meta\").each(function () {\n\t\tvar text = $(this).text();\n\t\t$(this).replaceWith(text);\n\t});\n})(jQuery);\n\n//////////////////\n// WEBPACK FOOTER\n// ./wp-seo-edit-page.js\n// module id = 2053\n// module chunks = 20\n\n//# sourceURL=webpack:///./wp-seo-edit-page.js?");

/***/ })

},[2053]);