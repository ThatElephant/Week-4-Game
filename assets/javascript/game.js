var goalNumber = Math.floor(Math.random() * 55) + 55;
var gemsEachValue = [1, 2, 3, 4];
var wins = 0;
var loss = 0;
var scoreCounter = 0;



$(function() {

$("#goal").html(goalNumber);

 for (var i = 0; i < gemsEachValue.length; i++) {
 	var gemImg = $(".gemimg").eq(i);
 	gemImg.attr("data-gemvalue", Math.floor(Math.random() * 15) + 1);
 };

$(".gemimg").click(function() {
	var eachGemValue = parseInt($(this).attr("data-gemvalue"));
	scoreCounter += eachGemValue;
	$("#scorenumber").html(scoreCounter);

	if (scoreCounter === goalNumber) {
		
		wins++;
                 scoreCounter = 0;
                goalNumber = Math.floor(Math.random() * 55) + 55;
                $("#goal").html(goalNumber);
                $("#wins").html(wins);
                $("#scorenumber").html(scoreCounter);
                alert("You win!");

                 for (var i = 0; i < gemsEachValue.length; i++) {
                    var gemImg = $(".gemimg").eq(i);
                    gemImg.attr("data-gemvalue", Math.floor(Math.random() * 15) + 1);
                 };

	} else if (scoreCounter > goalNumber) {
		
		loss++;
                scoreCounter = 0;
                goalNumber = Math.floor(Math.random() * 55) + 55;
                $("#goal").html(goalNumber);
                $("#loss").html(loss);
                $("#scorenumber").html(scoreCounter);
                alert("You Lost");

                 for (var i = 0; i < gemsEachValue.length; i++) {
                    var gemImg = $(".gemimg").eq(i);
                    gemImg.attr("data-gemvalue", Math.floor(Math.random() * 15) + 1);
                 };

	};
        
});

});