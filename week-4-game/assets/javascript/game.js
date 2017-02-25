var crystal = {
	wins: 0,
	loss: 0,
	totalScore: 0,
	crystals: [1, 2, 3, 4],

	randomNumber: function(first, second){
		var result = Math.floor(Math.random() * second) + first;
		return result;
	},

	result: 0
};

var totalScore = crystal.randomNumber(19, 120);

function random(){
	for(var i = 0; i < crystal.crystals.length; i++){
	crystal.crystals[i] = crystal.randomNumber(1, 12);
	};
}

random();

console.log(crystal.crystals);

var m = $("crystal-buttons");

function crystalRandom(){
	for (var i = 0; i < m.length; i++){

	$(m[i]).html(crystal.crystals[i]);
		
	}
}

crystalRandom();

function reset(){
	random()
	crystal.totalScore = crystal.randomNumber(19, 120);

	crystalRandom();

	crystal.result = 0;
};


$('.crystal-buttons').on("click", function(){
	var value = $(this).children(this).text();

	var number = parseInt(value);

	crystal.result += number;
	console.log(crystal.result);


	if (crystal.totalScore === crystal.result) {

		crystal.wins++;
		$(".wins").html(crystal.wins);
		reset();
	}

	else if(crystal.result > crystal.totalScore){
		crystal.loss++;
		$(".loss").html(crystal.loss);
		reset();
	}
});












