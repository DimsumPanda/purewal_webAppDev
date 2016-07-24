var main = function () {
	"use strict";

	var toDos = [
		"Finish writing this book",
		"Take Gracie to the park",
		"Answeer emails",
		"Prep for Monday's class",
		"Make up some new ToDos",
		"Get Groceries"
	];


	$(".tabs a span").toArray().forEach(function (element){
			var $element = $(element);
		//create a click handler for this element
		$(element).on("click", function(){
			var $content,
				$input,
				$button,
				toDoItem;

			$(".tabs a span").removeClass("active");
			$(element).addClass("active");
			$("main .content").empty();
			
			if ($element.parent().is(":nth-child(1)")){
				$content = $("<ul>");
				for (toDoItem = toDos.length - 1; toDoItem >= 0; toDoItem--){
					$content.append($("<li>").text(toDos[toDoItem]));
				}
			} else if ($element.parent().is(":nth-child(2)")){
				$content = $("<ul>");
				toDos.forEach(function(todo) {
					$content.append($("<li>").text(todo));
				});
			} else if ($element.parent().is(":nth-child(3)")){
				$input = $("<input>"),
				$button = $("<button>").text("+");

				$button.on("click", function () {
					if ($input.val() !== "") {
						toDos.push($input.val());
						$input.val("");
					}
				});
				$input.on("keypress", function (event) {
					if (event.keyCode === 13) {
						if ($input.val() !== "") {
							toDos.push($input.val());
							$input.val("");
						}
					}
				});
				$content = $("<div>").append($input, $button);
			}

			$("main .content").append($content);
			return false;
		});
	});
	//trigger a fake click on the first tab
	$(".tabs a:first-child span").trigger("click");
};

$(document).ready(main);