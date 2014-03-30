#pragma strict

var gameManager : gameManager_Script;
var displayTimer : float =0.0;
var startTime : float;



function Start () {
	gameManager = GameObject.FindGameObjectWithTag("GameManager").GetComponent(gameManager_Script);
}

function Update () {

	if (gameManager.floorActive == true) {
	
	

	//displayTimer = gameManager.timer;
	displayTimer += Time.deltaTime;
	
	GetComponent(TextMesh).text = displayTimer.ToString("F2") ;
	}
	
}