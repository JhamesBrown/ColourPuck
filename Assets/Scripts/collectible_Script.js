#pragma strict
var gameManager : gameManager_Script;
var randomValue1 : int;
var randomValue2 : int;

function Start () {

	randomValue1 = Random.Range(0,5);
	gameManager = GameObject.FindGameObjectWithTag("GameManager").GetComponent(gameManager_Script);
	if (gameManager.floor > 4) {
		if (randomValue1 > 3){
			renderer.material.color = gameManager.currentFloorColour;
		}
		else {
			renderer.material.color = Color.white;
		}
	}
	
}

function Update () {

}
