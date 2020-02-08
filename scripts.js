function testFunc(buttonVal){
	if (buttonVal === "")
		document.getElementById("display").value = "";
	else if (buttonVal === "="){
		try {
			document.getElementById("display").value = eval(document.getElementById("display").value);
		} catch (e) {
			document.getElementById("display").value = "ERROR"
		}
	}
	else if (buttonVal ==="CE"){
		let x = document.getElementById("display").value;
		let y = x.substring(0,x.length - 1);
		document.getElementById("display").value = y;
	}
	else{
		let x = document.getElementById("display").value;
		x += buttonVal;
		document.getElementById("display").value = x;
	}
}