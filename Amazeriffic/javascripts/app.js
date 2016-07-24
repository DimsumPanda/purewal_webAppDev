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

	var toDoItem;

	$(".tabs a span").toArray().forEach(function (element){
		//create a click handler for this element
		$(element).on("click", function(){
			var $element = $(element), 
							$content;

			$(".tabs a span").removeClass("active");
			$(element).addClass("active");
			$("main .content").empty();
			
			if ($element.parent().is(":nth-child(1)")){
				$content = $("<ul>");
				for (toDoItem = toDos.length - 1; toDoItem >= 0; toDoItem--){
					$content.append($("<li>").text(toDos[toDoItem]));
				}
				$("main .content").append($content);
			} else if ($element.parent().is(":nth-child(2)")){
				$content = $("<ul>");
				toDos.forEach(function(todo) {
					$content.append($("<li>").text(todo));
				});
				$("main .content").append($content);
			} else if ($element.parent().is(":nth-child(3)")){
				console.log("Third Tab clicked!");
			}

			return false;
		});
	});
	//trigger a fake click on the first tab
	$(".tabs a:first-child span").trigger("click");
};

$(document).ready(main);