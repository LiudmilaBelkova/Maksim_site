(function (global) {
	// Add event listeners
	document.getElementById("newyeargif").addEventListener("load", function() {
		var spinner = document.getElementById("gifspinner");
		spinner.innerHTML = "";
		console.log("Hello from LOAD event listener, spinner = " + spinner.toString());
	});

	function linkCatClickEventListener() {
		var frame = document.getElementById("framecat"); //.contentWindow.location.reload(true);
		console.log("Hello from CLICK event listener, frame = " + frame.toString());
		frame.src = frame.src;

		// document.getElementById("linkcat").removeEventListener("click", linkCatClickEventListener);
	}

	document.getElementById("linkcat").addEventListener("click", linkCatClickEventListener);


	[...document.querySelectorAll('.click2hide')].forEach(function(item) {
  		item.addEventListener('click', function() {
    		console.log(item.toString());
    		//item.style.visibility = "hidden";
    		item.style.display = "none";

    		var audios = ['sounds/eating.mp3', 'sounds/chew.mp3', 'sounds/eatingsfxwav.mp3'];
    		var index = Math.floor(Math.random() * audios.length);
    		console.log("Index = " + index.toString());
    		var audio = new Audio(audios[index]);
			audio.play();
  		});
   	});


	// Calculate dynamic fields
	selectGif();

	var today_str = new Intl.DateTimeFormat("ru", {day: "numeric", month: "long", year: "numeric", weekday: "long"}).format(new Date()); //.replace(/(\s?\г\.?)/, "");

	document.querySelector("#today").innerHTML = today_str;
	
	var today = new Date();
	today.setHours(0, 0, 0, 0);
	var bd = new Date(today.getFullYear(), 4, 2);

	if (bd < today)
		bd.setYear(today.getFullYear() + 1);

	var diffText = getDiffText(bd, today);

	if(diffText != "") {
		document.querySelector("#days2bd").innerHTML = "До дня рождения " + diffText + "!!!";
	}
	else {
		document.querySelector("#days2bd").innerHTML = "Сегодня день рождения!!!";		
	}

	// Fill in newyear label
	//today.setMonth(0, 1); // set today manually for testing purposes
	var newyear = new Date(today.getFullYear() + 1, 0, 1);

	diffText = getDiffText(newyear, today);

	if(today.getDate() == 1 && today.getMonth()==0)
	{
		document.querySelector("#days2newyear").innerHTML = "С Новым Годом!!!";
		return;
	}
	
	if(diffText != "остался 1 день") {
		document.querySelector("#days2newyear").innerHTML = "До Нового Года " + diffText + "!!!";
	}
	else {
		document.querySelector("#days2newyear").innerHTML = "Завтра Новый Год!!!";		
	}	

})(window);

function selectGif() {
	var gifs = [
		"https://media.giphy.com/media/iKbYdIG2lNYNfwxkMJ/giphy.gif",
		"https://media.giphy.com/media/YxlUxrYGw2w9y/giphy.gif",
		"https://media.giphy.com/media/dJHAdMhIN7UGooISIu/giphy.gif",
		"https://media.giphy.com/media/3oz8xs53EBnunzqxck/giphy.gif",
		// "https://media.giphy.com/media/ykaOtj0puJRBMJHuya/giphy.gif",
		"https://media.giphy.com/media/oVwQRNKshZAK7LYV7y/giphy.gif",
		"https://media.giphy.com/media/DG74Bc2YcitVsPxSC0/giphy.gif", 
		"https://media.giphy.com/media/AQVL8J3bV49aw/giphy.gif",
		"https://media.giphy.com/media/iKbYdIG2lNYNfwxkMJ/giphy.gif",
		"https://media.giphy.com/media/y8iuQRlZeZMvuu6Ce6/giphy.gif",
		"https://media.giphy.com/media/Qh1Ebbb8FQZlbeAqwQ/giphy.gif",
		"https://media.giphy.com/media/UR4id2vd9g9nbTFm5Z/giphy.gif",
		"https://media.giphy.com/media/x4mYkGqLEuYebBAghy/giphy.gif",
		"https://media.giphy.com/media/jWXl5QWiZh75jw7kic/giphy.gif",
		// "https://media.giphy.com/media/IzpMIE6ovjaXd21orP/giphy.gif",
		"https://media.giphy.com/media/EwfsnXwoCSlpqvC2pG/giphy.gif",
		"https://media.giphy.com/media/5HN21Ai8rYPMkP6XNa/giphy.gif",
		"https://media.giphy.com/media/taWXUe53TAGnvnccQC/giphy.gif",
		"https://media.giphy.com/media/9JrvLb0fnrn7k1ZjhX/giphy.gif",
		"https://media.giphy.com/media/9JrvLb0fnrn7k1ZjhX/giphy.gif"
	];

	var index = Math.floor((Math.random() * gifs.length));
	console.log("Index = " + index.toString());
	console.log("Image src = " + gifs[index]);
	document.getElementById("newyeargif").src = gifs[index];
}


function getDiffText(dateto, datefrom) {
	const diffTime = Math.abs(dateto - datefrom);
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
	// console.log(diffTime + " milliseconds");
	// console.log(diffDays + " days");

	if(diffDays == 0) return "";


	var lastDigit = diffDays % 10;
	var diffText = "дней";

	switch (lastDigit) {
		case 1:
			diffText = "день";
			break;
		case 2:
		case 3:
		case 4:
			diffText = "дня";
			break;
	}

	if (lastDigit == 1) 
		return ("остался " + diffDays + " " + diffText);

	return ("осталось " + diffDays + " " + diffText);
}


