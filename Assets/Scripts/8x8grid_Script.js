#pragma strict
var gameManager : gameManager_Script;
var startPosition : int;
var moveForward : boolean;

function Start () {
	gameManager = GameObject.FindGameObjectWithTag("GameManager").GetComponent(gameManager_Script);
	startPosition = transform.position.z;
	moveForward = false;
}

function Update () {
//	if (gameManager.nextFloor == true) {
//		moveForward = true;	
//	}	
//	
//	if (moveForward == true) {	
//		transform.position += Vector3.back * Time.deltaTime * 20;
//		if (transform.position.z <= startPosition - 10){
//			moveForward = false;
//		}
//		
//	}
}