#pragma strict

var accelerate : float = 600.0; //main engine thrust
var yawSpeed : float = 100.0; //horizontal rotation speed
var rollSpeed : float = 600.0; //rolling rotation speed
var pitchSpeed : float = 100; //vertical rotation speed


var maxAngularVeloc : float = 5;
var staticRollSpeed : float = 50;
var lastPitch : float;

function Start () {

}

function Update () {

}

function FixedUpdate(){
	
	//rigidbody.maxAngularVelocity = maxAngularVeloc;
	
	// Get inputs
    var yaw = Input.GetAxis("Yaw") * yawSpeed;
    var pitch2 = Input.GetAxis("Pitch") * pitchSpeed;
    var roll = Input.GetAxis("Roll") * staticRollSpeed;
    var thrust = Input.GetAxis("Thrust") * accelerate;
    var sideThrust = Input.GetAxis("Horizontal Thrusters") * accelerate;
	var topThrust = Input.GetAxis("Vertical Thrusters") * accelerate;    
	
	
    // Calculate new values
    thrust *= Time.fixedDeltaTime;
    yaw *= Time.fixedDeltaTime;
    roll *= Time.fixedDeltaTime;
    pitch2 *= Time.fixedDeltaTime;
    sideThrust *= Time.fixedDeltaTime;
    topThrust *= Time.fixedDeltaTime;
    //var vel = new UnityEngine.Vector3(
    
    // Apply the changes
    rigidbody.AddRelativeForce(sideThrust,topThrust,thrust); //main thrusters
    //rigidbody.AddRelativeTorque(Unityenpitch2, yaw, roll); //any rotation thruster bursts
    rigidbody.transform.Rotate(pitch2,yaw,roll*2);
    
    // Debugging
    if (lastPitch != pitch2) {
    	lastPitch=pitch2;
    	Debug.Log(lastPitch);
    }
	
    
}