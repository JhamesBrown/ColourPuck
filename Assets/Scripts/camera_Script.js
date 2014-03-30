#pragma strict

private var player : Transform;
var deadZone = 0.15;
var speed = 1.5;
 
function Start () {
    player = GameObject.Find("Player").transform;
}
 
function Update () {
    var v3 = player.position;
    v3.z = transform.position.z;
    if (Vector3.Distance(v3, player.position) > deadZone)
       transform.position = Vector3.Lerp(transform.position, v3, speed * Time.deltaTime);
}