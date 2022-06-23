"use strict"

$("#button").click(function() {
	const hex = "0123456789ABCDEF";
	let color = "#";
	let i = 0;

	while (i < 8)
	{
		let x = Math.floor((Math.random() * 100) % 16);
		color += hex[x];
		i++;
	}
	$("body").css("background-color", color)
});