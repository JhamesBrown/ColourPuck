#pragma strict

var gameManager : gameManager_Script;
var displayTimer : float =100.0;




function Start () {
	gameManager = GameObject.FindGameObjectWithTag("GameManager").GetComponent(gameManager_Script);
}

function Update () {

	if (gameManager.floorActive == true) {
	
	

	
	displayTimer -= Time.deltaTime;
	
	GetComponent(TextMesh).text = displayTimer.ToString("F2") ;
	}
	
}