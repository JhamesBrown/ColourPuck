#pragma strict
var Ymomentum : float;
var Xmomentum : float;
var momentumValue : float = 0.1;
var speed : float = 0.1;
var health : int = 100;

var blib : AudioClip;
var glitch : AudioClip;

var gib : Transform;


var gameManager : gameManager_Script;
var UItimer : UI_timer_Script;

function Start () {
	gameManager = GameObject.FindGameObjectWithTag("GameManager").GetComponent(gameManager_Script);
	UItimer = GameObject.FindGameObjectWithTag("Timer").GetComponent(UI_timer_Script);
}

function Update () {
	
	
	if (gameManager.paused == false) {
		
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
	
	if ((transform.position.x > 5.5 ||  transform.position.x < -5.5 || transform.position.y > 5.5 ||  transform.position.y < -5.5) && gameManager.paused == false) {
		health--;
	}
	
	if (health <= 0 || UItimer.displayTimer <= 0){
		Time.timeScale = 1;
		Destroy(gameObject);
		for (var i = 0; i < 200; i++){
			Instantiate(gib, Vector3(transform.position.x, transform.position.y,0), Quaternion.identity);
		}	
	}
	
}

function OnCollisionEnter2D (col : Collision2D){
	if(col.gameObject.tag =="Collectible"){
		if(col.gameObject.renderer.material.color == Color.white) {
					audio.PlayOneShot(blib);
					transform.localScale += Vector3(0.2,0.2,0.0);
					Destroy(col.gameObject);
					yield WaitForSeconds (0.1);
					gameManager.collectiblesLeft--;
					transform.localScale -= Vector3(0.2,0.2,0.0);
					
					
		}
		else if(col.gameObject.renderer.material.color !=  Color.white) {
				if (renderer.material.color == col.gameObject.renderer.material.color) {
					audio.PlayOneShot(blib);
					transform.localScale += Vector3(0.2,0.2,0.0);
					Destroy(col.gameObject);
					yield WaitForSeconds (0.1);
					gameManager.collectiblesLeft--;
					transform.localScale -= Vector3(0.2,0.2,0.0);
					
				}
				else{
					audio.PlayOneShot(glitch);
					transform.localScale += Vector3(0.2,0.2,0.0);
					Destroy(col.gameObject);
					yield WaitForSeconds (0.1);
					gameManager.collectiblesLeft--;
					transform.localScale -= Vector3(0.2,0.2,0.0);
					health -= 10;
				}
		}
	}
}




