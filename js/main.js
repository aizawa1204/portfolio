 $("#skills .spot1 .img-pin").mouseover(function() {
    $("#skills .spot1 .spot-hover1").show();
  }).mouseout(function() {
    $("#skills .spot1 .spot-hover1").hide();
  });

  $("#skills .spot2 .img-pin").mouseover(function() {
    $("#skills .spot2 .spot-hover2").show();
  }).mouseout(function() {
    $("#skills .spot2 .spot-hover2").hide();
  });

  $("#skills .spot3 .img-pin").mouseover(function() {
    $("#skills .spot3 .spot-hover3").show();
  }).mouseout(function() {
    $("#skills .spot3 .spot-hover3").hide();
  });

  $("#skills .spot4 .img-pin").mouseover(function() {
    $("#skills .spot4 .spot-hover4").show();
  }).mouseout(function() {
    $("#skills .spot4 .spot-hover4").hide();
  });




$(function(){

  $(".kurahiro").on("click", function () {
    $(".kurahiro").toggleClass("active");
    $(".kurahiro-active").toggleClass("active");
  });

  $(".kurahiro-close").on("click", function () {
    $(".kurahiro").removeClass("active");
    $(".kurahiro-active").removeClass("active");
  });

});

$(function(){

  $(".juken").on("click", function () {
    $(".juken").toggleClass("active");
    $(".juken-active").toggleClass("active");
  });

  $(".juken-close").on("click", function () {
    $(".juken").removeClass("active");
    $(".juken-active").removeClass("active");
  });

});

$(function(){

  $(".tech").on("click", function () {
    $(".tech").toggleClass("active");
    $(".tech-active").toggleClass("active");
  });

  $(".tech-close").on("click", function () {
    $(".tech").removeClass("active");
    $(".tech-active").removeClass("active");
  });

});

$(function(){

  $(".mama").on("click", function () {
    $(".mama").toggleClass("active");
    $(".mama-active").toggleClass("active");
  });

  $(".mama-close").on("click", function () {
    $(".mama").removeClass("active");
    $(".mama-active").removeClass("active");
  });

});

$(function(){

  $(".sticker").on("click", function () {
    $(".sticker").toggleClass("active");
    $(".sticker-active").toggleClass("active");
  });

  $(".sticker-close").on("click", function () {
    $(".sticker").removeClass("active");
    $(".sticker-active").removeClass("active");
  });

});

$(function(){

  $(".game").on("click", function () {
    $(".game").toggleClass("active");
    $(".game-active").toggleClass("active");
  });

  $(".game-close").on("click", function () {
    $(".game").removeClass("active");
    $(".game-active").removeClass("active");
  });

});

$(function(){

  $(".hs").on("click", function () {
    $(".hs").toggleClass("active");
    $(".hs-active").toggleClass("active");
  });

  $(".hs-close").on("click", function () {
    $(".hs").removeClass("active");
    $(".hs-active").removeClass("active");
  });

});

$(function(){

  $(".us").on("click", function () {
    $(".us").toggleClass("active");
    $(".us-active").toggleClass("active");
  });

  $(".us-close").on("click", function () {
    $(".us").removeClass("active");
    $(".us-active").removeClass("active");
  });

});

$(function () {
  $(".return-secret").on("click", function (e) {
    e.preventDefault();

    const url = $(this).attr("href");

    $("body").addClass("fade-out");

    setTimeout(function () {
      window.location.href = url;
    }, 600);
  });
});