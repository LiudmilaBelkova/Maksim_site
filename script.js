(function (global) {
	var today_str = new Intl.DateTimeFormat("ru", {day: "numeric", month: "long", year: "numeric", weekday: "long"}).format(new Date()); //.replace(/(\s?\г\.?)/, "");

	document.querySelector("#today").innerHTML = today_str;
	
	var today = new Date();
	today.setHours(0, 0, 0, 0);
	var bd = new Date();
	bd.setMonth(4, 2);
	bd.setHours(0, 0, 0, 0);
	
	// Set date manually for debut purposes
	// bd.setMonth(11, 18);
	
	bd.setYear(today.getFullYear());
	console.log(bd);
	if (bd < today)
		bd.setYear(today.getFullYear() + 1);

	console.log("Next birthday: " + bd.toString());

	const diffTime = Math.abs(bd - today);
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
	console.log(diffTime + " milliseconds");
	console.log(diffDays + " days");

	var lastDigit = diffDays % 10;
	console.log(typeof lastDigit);
	console.log("lastDigit: " + lastDigit);
	var diffText = "";

	switch (lastDigit) {
		case 0: 
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
			diffText = "дней";
			break;
		case 1:
			diffText = "день";
			break;
		case 2:
		case 3:
		case 4:
			diffText = "дня";
			break;
		default:
			diffText = "???";
	}
	console.log(diffText);

	if(diffDays > 0) {
		document.querySelector("#days2bd").innerHTML = "До дня рождения осталось " + diffDays + " " + diffText + "!!!";
	}
	else {
		document.querySelector("#days2bd").innerHTML = "Сегодня день рождения!!!";		
	}

})(window);