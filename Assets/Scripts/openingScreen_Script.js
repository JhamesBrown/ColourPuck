#pragma strict

function Start () {

}

function Update () {
	if (Input.anyKey){
		Application.LoadLevel(1);
	}
	if (Input.GetKey ("escape")) {
		Application.Quit();
	}
}