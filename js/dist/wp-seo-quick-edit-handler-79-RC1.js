yoastWebpackJsonp([16],{

/***/ 2061:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/* global ajaxurl */\n\njQuery(function ($) {\n\tvar currentScreen = $(location).attr(\"pathname\").split(\"/\").pop();\n\tvar slugField = currentScreen === \"edit-tags.php\" ? \"slug\" : \"post_name\";\n\tvar notificationTarget = $(\".wrap\").children().eq(0);\n\n\t/**\n  * Use notification counter so we can count how many times the function wpseoShowNotification is called.\n  *\n  * @type {number}\n  */\n\tvar wpseoNotificationCounter = 0;\n\n\tvar addedNotifications = [];\n\n\t/**\n  * Adds the given notification to the DOM if it doesn't already exist.\n  *\n  * @param {string} notification The notification to add.\n  *\n  * @returns {void}\n  */\n\tfunction addNotificationToDom(notification) {\n\t\tif (!addedNotifications.includes(notification)) {\n\t\t\taddedNotifications.push(notification);\n\n\t\t\t$(notification).insertAfter(notificationTarget);\n\t\t}\n\t}\n\n\t/**\n  * Shows notification to user when a redirect is created.\n  *\n  * When the response is empty, up the notification counter with 1, wait 500 ms and call the function again.\n  * Stops when the notification counter is more than 20.\n  *\n  * @returns {void}\n  */\n\tfunction wpseoShowNotification() {\n\t\t$.post(ajaxurl, {\n\t\t\taction: \"yoast_get_notifications\",\n\t\t\tversion: 2\n\t\t}, function (response) {\n\t\t\tif (response !== \"\") {\n\t\t\t\twpseoNotificationCounter = 0;\n\n\t\t\t\tvar notifications = JSON.parse(response);\n\t\t\t\tnotifications.map(addNotificationToDom);\n\t\t\t}\n\n\t\t\tif (wpseoNotificationCounter < 20 && response === \"\") {\n\t\t\t\twpseoNotificationCounter++;\n\t\t\t\tsetTimeout(wpseoShowNotification, 500);\n\t\t\t}\n\t\t});\n\t}\n\n\t/**\n  * Gets the current post or term ID.\n  *\n  * Returns an empty string if no editor is currently active.\n  *\n  * @param {Object} editor The editor to get the ID from.\n  *\n  * @returns {string} The ID of the current post or term.\n  */\n\tfunction wpseoGetItemId(editor) {\n\t\tif (editor.length === 0 || editor === \"\") {\n\t\t\treturn \"\";\n\t\t}\n\n\t\treturn editor.attr(\"id\").replace(\"edit-\", \"\");\n\t}\n\n\t/**\n  * Gets the current slug of a post based on the current page and post or term being edited.\n  *\n  * @param {string} currentPost The current element.\n  *\n  * @returns {string} The slug of the current post or term.\n  */\n\tfunction wpseoGetCurrentSlug(currentPost) {\n\t\treturn $(\"#inline_\" + currentPost).find(\".\" + slugField).html();\n\t}\n\n\t/**\n  * Checks whether or not the slug has changed.\n  *\n  * @returns {boolean} Whether or not the slug has changed.\n  */\n\tfunction wpseoSlugChanged() {\n\t\tvar editor = $(\"tr.inline-editor\");\n\t\tvar currentPost = wpseoGetItemId(editor);\n\t\tvar currentSlug = wpseoGetCurrentSlug(currentPost);\n\t\tvar newSlug = editor.find(\"input[name=\" + slugField + \"]\").val();\n\n\t\treturn currentSlug !== newSlug;\n\t}\n\n\tif ([\"edit.php\", \"edit-tags.php\"].includes(currentScreen)) {\n\t\t$(\"#inline-edit input\").on(\"keydown\", function (ev) {\n\t\t\t// 13 refers to the enter key.\n\t\t\tif (ev.which === 13 && wpseoSlugChanged()) {\n\t\t\t\twpseoShowNotification();\n\t\t\t}\n\t\t});\n\n\t\t$(\".button-primary\").click(function (ev) {\n\t\t\tif ($(ev.target).attr(\"id\") !== \"save-order\" && wpseoSlugChanged()) {\n\t\t\t\twpseoShowNotification();\n\t\t\t}\n\t\t});\n\t}\n\n\tif (currentScreen === \"edit-tags.php\") {\n\t\t$(document).on(\"ajaxComplete\", function (e, xhr, settings) {\n\t\t\tif (settings.data.indexOf(\"action=delete-tag\") > -1) {\n\t\t\t\twpseoShowNotification();\n\t\t\t}\n\t\t});\n\t}\n}(jQuery));\n\n//////////////////\n// WEBPACK FOOTER\n// ./wp-seo-quick-edit-handler.js\n// module id = 2061\n// module chunks = 16\n\n//# sourceURL=webpack:///./wp-seo-quick-edit-handler.js?");

/***/ })

},[2061]);