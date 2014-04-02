#pragma strict

function Start () {
	transform.rotation.eulerAngles = Vector3(Random.Range(0,360), Random.Range(0,360),Random.Range(0,360));
}

function Update () {
	transform.Translate(Vector3.forward);
}