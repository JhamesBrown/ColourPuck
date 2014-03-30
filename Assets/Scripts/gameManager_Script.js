﻿#pragma strict
var timer : float;


var floor8x8grid : Transform;

var floor : int ;
var floorActive : boolean = false;
var floorStartTime : float;
var collectiblesSpawned = false;


var floorInactiveTexture : Transform;
var floorInactiveGO : GameObject;

var floorFinished : boolean = false;
var waiting : boolean = false;
var nextFloor : boolean = true;

var player : GameObject;


var collectiblesLeft : int = 0; // gets value from collectible spawner

function Start () {
	player = GameObject.FindGameObjectWithTag("Player");
	floor = 0;
	for (var i : int = 0; i < 5; i++) { //this makes the stack of floors
		Instantiate (floor8x8grid, Vector3(0, 0, 10 * i), Quaternion.identity);
	}
}

function Update () {
	timer = Time.time;
	
	if (collectiblesSpawned == true) {
		floorActive = true;
		nextFloor = false;
		floorFinished = false;
		
	}
	if (collectiblesLeft <= 0 && floorActive == true) {
		Instantiate (floorInactiveTexture, Vector3(0, 0, 0), Quaternion.identity);
		floorInactiveGO = GameObject.FindGameObjectWithTag("FloorInactiveGO");
		floorActive = false;
		floorFinished = true;
		
	}
	
	if (floorFinished == true){
		collectiblesSpawned = false;
		waitingCenterCheck();
		
	}
	
	if (nextFloor == true){
		Destroy(floorInactiveGO);

		
		
	}
}



function waitingCenterCheck(){
	if (player.transform.position.x > -1 && player.transform.position.x < 1 && player.transform.position.y > -1 && player.transform.position.y < 1) {
			waiting = true;
			yield WaitForSeconds (3);
			if (player.transform.position.x > -1 && player.transform.position.x < 1 && player.transform.position.y > -1 && player.transform.position.y < 1) {
				nextFloor = true;
				
			}
			else {
				waiting = false;
			}
		}
}