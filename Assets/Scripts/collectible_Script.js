#pragma strict
var gameManager : gameManager_Script;
var randomValue1 : int;
var randomValue2 : int;

function Start () {

	randomValue1 = Random.Range(0,2);
	gameManager = GameObject.FindGameObjectWithTag("GameManager").GetComponent(gameManager_Script);
	if (gameManager.floor > 4 && gameManager.floor < 15 ) {
		
			renderer.material.color = gameManager.currentFloorColour;
		
	}
	if (gameManager.floor > 14 && gameManager.floor <= 30) {
		if (randomValue1 >= 1){
			renderer.material.color = gameManager.currentFloorColour;
		}
		else {
			renderer.material.color = gameManager.currentSecondColour;
		}
	}
	
}

function Update () {

}
