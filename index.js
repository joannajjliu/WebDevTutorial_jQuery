console.log($("h1").css("font-size"));
//$("h1").css("font-size", 12);
// $("h1").addClass("big-title margin-50");

console.log($("h1").hasClass("big-title"));

$("h1").text("Bye");

$("button").text("Hello world");
$("button").html("<em>Italicized button</em>")

console.log($("img").attr("src"));
$("a").attr("href", "https://www.yahoo.com");

// $("h1").click(function() {
//     $("h1").css("color", "purple");
// });

$("button").click(function() { 
    $("h1").css("color","purple");
});

$("input").keypress(function(event) {
    console.log(event.key);
    $("h1").text(event.key);
});

$(document).keypress(function(event) {
    console.log("document keypress", event.key);
});

$("button").on("dblclick", function() {
    //$("h1").fadeToggle();
    // $("h1").slideToggle();
    // $("h1").animate({opacity: 0.5});
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});