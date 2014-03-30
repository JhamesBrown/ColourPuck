#pragma strict
//need to have this grab variables from the gamemanager and use those variables to roll boards
//collectibles can spawn at 'from top left to top right' 
// Vector3(-3.855, 3.855, 0.0)
// Vector3(-1.285, 3.855, 0.0)
// Vector3(1.285, 3.855, 0.0)
// Vector3(3.855, 3.855, 0.0)

//dont rewrite that shit, its easy to automate that for all the different values

var Position = new Array (-3.855, -1.285f ,1.285f, 3.855); // multiply the value by -1 to make it go to the left of the center
var gameManager : gameManager_Script;

var rolled : boolean = true;

var collectible : Transform;



function Start () {
	gameManager = GameObject.FindGameObjectWithTag("GameManager").GetComponent(gameManager_Script);
}

function Update () {
 
	if (gameManager.nextFloor == true && gameManager.collectiblesSpawned == false){
		for (var i : int= 0; i <4; i++){
			Instantiate (collectible, Vector3(Position[Random.Range(0,4)], Position[i], 0), Quaternion.identity);
			gameManager.collectiblesLeft++;
		} 
		gameManager.collectiblesSpawned = true;
		gameManager.floor++;
		
	}
	
	
}