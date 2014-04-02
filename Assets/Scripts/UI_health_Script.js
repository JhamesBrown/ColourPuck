#pragma strict
var player : player_Script;

var initialHealth : int;
var newHealth :int;

function Start () {
	player = GameObject.FindGameObjectWithTag("Player").GetComponent(player_Script);
	initialHealth = player.health;
}

function Update () {
	newHealth = player.health;
	
	if (newHealth < initialHealth) {
		flashRed();
	}
	
	if (newHealth == initialHealth) {
		renderer.material.color = Color.white;
	}
	
	if (player.health >= 1) { 
		GetComponent(TextMesh).text = "" + player.health + "%"; 
	}
	else {
		GetComponent(TextMesh).text = "DEAD";
	}
}

function flashRed() {
	renderer.material.color = Color.red;
	yield WaitForSeconds (0.1);
	initialHealth = player.health;
}