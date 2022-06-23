"use strict"

$("#new_todo").click(function()
{
	let n_todo = window.prompt("Nouveau TODO");
	let list = $("#list");
	const node = document.createElement("li");

	if(n_todo)
	{
		const text_node = document.createTextNode(n_todo);
		node.prepend(text_node);
		list.prepend(node);
	}
	let json_str = [];
	for (let i of list.children())
		json_str.push(i.innerText);
	json_str = JSON.stringify(json_str);
	document.cookie ='liste=' + json_str;
});

$("#list").on("click", "li", function() {
	if (confirm("Souhaitez-vous vraiment supprimer ce todo??"))
	{
		let list = $("#list");
		this.remove();

		let json_str = [];
		for (let i of list.children())
			json_str.push(i.innerText);
		json_str = JSON.stringify(json_str);
		document.cookie ='liste=' + json_str;
	}
});

$(document).ready(function(){
	let temp = getCookie("liste");

	temp = JSON.parse(temp);
	for (let i in temp)
	{
		let list = $("#list");
		const node = document.createElement("li");
		const text_node = document.createTextNode(temp[i]);
		node.append(text_node);
		list.append(node);
	}
});

function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i <ca.length; i++) {
	  let c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return "";
  }