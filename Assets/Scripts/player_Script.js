#pragma strict
var Ymomentum : float;
var Xmomentum : float;
var momentumValue : float = 0.1;
var speed : float = 0.1;
var health : int = 100;

var gib : Transform;


var gameManager : gameManager_Script;

function Start () {
	gameManager = GameObject.FindGameObjectWithTag("GameManager").GetComponent(gameManager_Script);
}

function Update () {
	
	if (Xmomentum != 0 || Ymomentum != 0){
		transform.Translate(Vector3(Xmomentum,Ymomentum, 0));		
	}
	
	if (Input.GetAxis("Vertical")){
		Ymomentum += Input.GetAxis("Vertical") * momentumValue;
		transform.Translate(Vector3.up * Input.GetAxis("Vertical") * speed);
	}
	
	if (Input.GetAxis("Horizontal")){
		Xmomentum += Input.GetAxis("Horizontal") * momentumValue;
		transform.Translate(Vector3.right * Input.GetAxis("Horizontal") * speed);
	}
	
	if (Input.GetAxis("Agreen")){
		renderer.material.color = Color.green;
	}
	if (Input.GetAxis("Bred")){
		renderer.material.color = Color.red;
	}
	if (Input.GetAxis("Xblue")){
		renderer.material.color = Color.blue;
	}
	if (Input.GetAxis("Yyellow")){
		renderer.material.color = Color.yellow;
	}
	
	if (transform.position.x > 5.5 ||  transform.position.x < -5.5 || transform.position.y > 5.5 ||  transform.position.y < -5.5) {
		health--;
	}
	
	if (health <= 0 ){
		Time.timeScale = 1;
		Destroy(gameObject);
		for (var i = 0; i < 200; i++){
			Instantiate(gib, Vector3(transform.position.x, transform.position.y,0), Quaternion.identity);
		}	
	}
	
}

function OnCollisionEnter2D (col : Collision2D){
	if(col.gameObject.tag =="Collectible"){
				transform.localScale += Vector3(0.1,0.1,0.0);
				Destroy(col.gameObject);
				yield WaitForSeconds (0.1);
				gameManager.collectiblesLeft--;
				transform.localScale -= Vector3(0.1,0.1,0.0);
		}
}
