"use strict"

function change_background()
{
	const hex = "0123456789ABCDEF";
	let color = "#";
	let i = 0;

	while (i < 8)
	{
		let x = Math.floor((Math.random() * 100) % 16);
		color += hex[x]
		i++;
	}
	document.body.style.backgroundColor = color;
}