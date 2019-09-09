$(function(){

	'use strict';

	// loader
	var loader = function() {
		setTimeout(function() {
			if($('#probootstrap-loader').length > 0) {
				$('#probootstrap-loader').removeClass('show');
			}
		}, 1);
	};
	loader();


	var controller = new ScrollMagic.Controller(),
		tl = new TimelineLite(),
		tl2 = new TimelineLite();

	tl2
		.from('.probootstrap-device-vertical-1', 1, {  x: -100, autoAlpha: 0, ease: Power4.easeOut } )
		.staggerFrom('.probootstrap-cover .probootstrap-stagger', 1, { autoAlpha: 0, x: -100, scale: 0.95, delay: 0.2, ease: Power4.easeOut}, 0.2 , '-=.8')


	var scene = new ScrollMagic.Scene({
		triggerElement: '.probootstrap-scene-0',
		reverse: false
		// offset: 500
	})
	.setTween(tl2)
	// .addIndicators({name: "scene 1", colorEnd: "#F6A623"})
	.addTo(controller);


	tl
		.from('.probootstrap-device-center', .5, { autoAlpha: 0, y: 100, ease: Power4.easeIn }, )
		.from('.probootstrap-device-left', .5, { autoAlpha: 0, x: 200, delay: .2, ease: Power4.easeIn }, '-=.5' )
		.from('.probootstrap-device-right', .5, { autoAlpha: 0, x: -200,  delay: .2, ease: Power4.easeIn }, '-=.7')

	var scene = new ScrollMagic.Scene({
		triggerElement: '.probootstrap-scene-1',
		reverse: false
		// offset: 500
	})
	.setTween(tl)
	// .addIndicators({name: "scene 1", colorEnd: "#F6A623"})
	.addTo(controller);




});

//CAlCULATOR

//seperate input values for each button category (would have its own value)

var currentButton = -1;
// To move to local/session storage, change the array into a stored object and use functions to get/set the values.
var inputValues = [0,0,0,0,0,0,0,0,0,0,0,0];
var assignedTaxValues = [3,3,3,4,8,1,2,8,20,3,2,0];
var calculation = [0,0,0,0,0,0,0,0,0,0,0,0];
var total = 0;

function goToButtonView(btnNumber) {
  $(".caculator").css("background-color:white");

  $("#btnview").removeClass("hidden");
  $("#mainview").addClass("hidden");
  $("#resultsview").addClass("hidden");

  currentButton = btnNumber;
  $("#buttonInput")[0].value = inputValues[currentButton];
}

function returnToMainView() {
  $("#mainview").removeClass("hidden");
  $("#btnview").addClass("hidden");
  $("#resultsview").addClass("hidden");
}

function updateCurrentValue() {
  let num = parseFloat($("#buttonInput")[0].value);
  //what does [0].value stand for
  if (num >= 0) {
  inputValues[currentButton] = num;
  }
}

function showResults() {
  $("#resultsview").removeClass("hidden");
  $("#mainview").addClass("hidden");
  $("#btnview").addClass("hidden");

  calculateReturns();

  for (var i = 0; i < inputValues.length; i++) {
    $("#result" + i).text("" + inputValues[i] + " items for $" + calculation[i]);
  }

  $("#resultTotal").text(total);
}

function calculateReturns() {
  total = 0;
  for (var i=0; i < inputValues.length; i++){
    calculation[i] = inputValues[i] * assignedTaxValues[i];
    total += calculation[i];
  }
};
