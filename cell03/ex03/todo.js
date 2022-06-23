


function new_todo()
{
	let n_todo = window.prompt("Nouveau TODO");
	let list = document.getElementById("list");
	const node = document.createElement("li");

	if(n_todo)
	{
		const text_node = document.createTextNode(n_todo);
		node.setAttribute("onclick", "remove('" + n_todo + "')");
		node.setAttribute("class", n_todo);
		node.prepend(text_node);
		list.prepend(node);
	}
	let json_str = [];
	for (let i of list.childNodes.values())
		json_str.push(i.innerText);
	json_str = JSON.stringify(json_str);
	document.cookie ='liste=' + json_str;
}

function remove(class_name)
{
	if (confirm("Souhaitez-vous vraiment supprimer ce todo??"))
	{
		let list = document.getElementById("list");
		let temp = document.getElementsByClassName(class_name);
		for (let i = 0; i < temp.length; i++)
		{
			temp[i].remove()
		};

		let json_str = [];
		for (let i of list.childNodes.values())
			json_str.push(i.innerText);
		json_str = JSON.stringify(json_str);
		document.cookie ='liste=' + json_str;
	}
}

function read_cookie()
{
	let temp = getCookie("liste");

	if (temp)
	{
		temp = JSON.parse(temp);
		for (let i in temp)
		{
			let list = document.getElementById("list");
			const node = document.createElement("li");
			const text_node = document.createTextNode(temp[i]);
			node.setAttribute("onclick", "remove('" + temp[i] + "')");
			node.setAttribute("class", temp[i]);
			node.append(text_node);
			list.append(node);
		}
	}
}

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