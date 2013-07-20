/*
For testing purposes, the rigidbody has a mass of 1.
Drag and Angular Drag set to 0.  Gravity, kinematic
and freeze rotation set to false.  Interpolate set to
none.  The intention of setting the drags to zero is
so that counter thrusts can be used to slow things down
at the same rate they were applied via the AddRelativeForce
and AddRelativeTorque values.
 
Inputs created for this script:
Thrust
Yaw
Pitch
Roll
TransSide
TransVert
TransFor
*/
 
var rollSpeed : float = 600.0; //rolling rotation speed
var pitchSpeed : float = 600.0; //vertical rotation speed
var yawSpeed : float = 600.0; //horizontal rotation speed
 
var accelerate : float = 600.0; //main engine thrust
 
var transZ : float = 600.0; //maneuver thrust forward
var transY : float = 600.0; //maneuver thrust vertical
var transX : float = 600.0; //maneuver thrust horizontal
 
static var dragOn : boolean = false;
 
function FixedUpdate(){
        var thrust = Input.GetAxis("Thrust") * accelerate;
        var yaw = Input.GetAxis("Yaw") * yawSpeed;
        var pitch2 = Input.GetAxis("Pitch") * pitchSpeed;
        var roll = Input.GetAxis("Roll") * rollSpeed;
        //var iTransX = Input.GetAxis("TransSide") * transX;
        //var iTransY = Input.GetAxis("TransVert") * transY;
        //var iTransZ = Input.GetAxis("TransFor") * transZ;
 
 
        thrust *= Time.fixedDeltaTime;
        yaw *= Time.fixedDeltaTime;
        pitch2 *= Time.fixedDeltaTime;
        roll *= Time.fixedDeltaTime;
        //iTransX *= Time.fixedDeltaTime;
        //iTransY *= Time.fixedDeltaTime;
        //iTransZ *= Time.fixedDeltaTime;
 
        rigidbody.AddRelativeForce(0,0,thrust); //main thrusters
        //rigidbody.AddRelativeForce(iTransX, iTransY, iTransZ); //any maneuvering thruster bursts
        rigidbody.AddRelativeTorque(pitch2, yaw, roll); //any rotation thruster bursts
 
        //Debug.Log(rigidbody.angularVelocity);  //track rotation angle values for local x y and z.
        //Debug.Log(rigidbody.velocity);  //track velocity rates along local x y and z.
        
        
        /*
        Press O to toggle drags to make things a little easier.  Will no longer be newtonian.  This is
        a sanity shortcut until I can figure out something better.
        */
        
        if(Input.GetKey(KeyCode.O)){
            if(!dragOn){
                rigidbody.angularDrag = 1.0;
                rigidbody.drag = 0.8;
                dragOn = true;
            }
            else
            {
                rigidbody.angularDrag = 0.0;
                rigidbody.drag = 0.0;
                dragOn = false;
            }
        }
        
}