#pragma strict
var timer : float;
var gameStarted : boolean;

var floor8x8grid : Transform;

var floor : int ;
var floorActive : boolean = false;
var floorStartTime : float;
var collectiblesSpawned : boolean = false;
var floorColour = new Array (Color.green, Color.red, Color.blue, Color.yellow);
var currentFloorColour : Object;
var currentSecondColour : Object;
var randomValue : int;



var floorInactiveTexture : Transform;
var floorInactiveGO : GameObject;

var floorFinished : boolean = false;
var waiting : boolean = false;
var nextFloor : boolean = true;

var player : GameObject;

var paused : boolean = false;

var explosion : AudioClip;
var soundPlayed : boolean;

var collectiblesLeft : int = 0; // gets value from collectible spawner

function Start () {
	gameStarted = false;
	soundPlayed = false;
	player = GameObject.FindGameObjectWithTag("Player");
	floor = 0;
	for (var i : int = 0; i < 5; i++) { //this makes the stack of floors
		Instantiate (floor8x8grid, Vector3(0, 0, 10 * i), Quaternion.identity);
	}
	
}



function Update () {
	timer = Time.time;
	if (Input.GetKey ("escape")) {
			Application.Quit();
	}
	if (floor == 30) {
		Application.LoadLevel(2);
	}
	
	
	if (player == null) {
		//if (Input.GetAxis("Yyellow") || Input.GetAxis("Agreen") || Input.GetAxis("Bred") || Input.GetAxis("Xblue")) {
		if (soundPlayed == false) {
			audio.PlayOneShot(explosion);
			soundPlayed = true;
		}
		if (Input.anyKey){
		Application.LoadLevel (Application.loadedLevelName);
		
		}
	}
	
	if (player != null && player.transform.position != Vector3(0,0,-0.1)) {
		gameStarted = true;
	}
	
	
	if (gameStarted) {
		if(Input.GetButtonDown("pauseButton")){
			pause();
		}
		
		if (player == null) {
			floorActive = false;
		}
		

		if (player != null) {
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
				
				currentFloorColour = floorColour[Random.Range(Mathf.Round (0),Mathf.Round (4))] ;
				currentSecondColour = floorColour[Random.Range(Mathf.Round (0),Mathf.Round (4))] ;
				if (currentSecondColour == currentFloorColour) {
					currentSecondColour = floorColour[Random.Range(Mathf.Round (0),Mathf.Round (4))] ;
				}
				
			}
			
			if (nextFloor == true){
				Destroy(floorInactiveGO);

				
				
			}
		
		}
	}
	
}



function waitingCenterCheck(){
	if (player != null) {
	
		if (player.transform.position.x > -1 && player.transform.position.x < 1 && player.transform.position.y > -1 && player.transform.position.y < 1) {
				waiting = true;
				yield WaitForSeconds (3);
				if ( player != null && player.transform.position.x > -1 && player.transform.position.x < 1 && player.transform.position.y > -1 && player.transform.position.y < 1) {
					nextFloor = true;
					
				}
				else {
					waiting = false;
				}
		}
	}
}


function pause (){
//pause & unpause
	if(paused == false){
		
		//player.transform.Translate(Vector3(0,0,0));
		Time.timeScale = 0;
		paused = true;
		
	}
	else
	{
		Time.timeScale = 1;
		paused = false;
	
	}
}
