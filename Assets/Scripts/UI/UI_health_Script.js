#pragma strict
var player : player_Script;

var initialHealth : int;
var newHealth :int;

var UItimer : UI_timer_Script;



function Start () {
	player = GameObject.FindGameObjectWithTag("Player").GetComponent(player_Script);
	initialHealth = player.health;
	UItimer = GameObject.FindGameObjectWithTag("Timer").GetComponent(UI_timer_Script);
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
		GetComponent(TextMesh).text = "DEAD\n<size=15>press any button to reset</size>";
		
	}
	
	if (UItimer.displayTimer <= 0) {
		GetComponent(TextMesh).text = "TIME UP\n<size=15>press any button to reset</size>";
		
	}
}

function flashRed() {
	renderer.material.color = Color.red;
	yield WaitForSeconds (0.1);
	initialHealth = player.health;
}