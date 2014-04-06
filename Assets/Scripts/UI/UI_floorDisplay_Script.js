#pragma strict
var gameManager : gameManager_Script;


function Start () {
	gameManager = GameObject.FindGameObjectWithTag("GameManager").GetComponent(gameManager_Script);
}

function Update () {
	GetComponent(TextMesh).text = "FLOOR "+ gameManager.floor ;
}