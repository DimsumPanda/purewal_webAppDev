// Handling Click Events
var main = function () {
	"use strict";

	$(".comment-input button").on("click", function (event) {

		var $new_comment;

		if ($(".comment-input input").val() != "") {
			$new_comment = $("<p>").text($(".comment-input input").val());
			$(".comments").append($new_comment);
			$(".comment-input input").val("");
		}

	});

	$(".comment-input input").on("keypress", function (event) {
		console.log("this is the KeyCode " + event.keyCode);
	});
};

$(document).ready(main);