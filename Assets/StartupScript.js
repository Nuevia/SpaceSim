#pragma strict

public var startupDelay = 2;
public var cameraToActivate : Camera;
public var objectToFollow : GameObject;
private var followCam : MainCameraFollow2;

private var timerHasExpired = false;

function Start () {
	/*
	while (true) {
      while (!cameraToActivate.GetComponent(MainCameraFollow2).active) yield;
      cameraToActivate.GetComponent(MainCameraFollow2).active = true;
      yield WaitForSeconds(startupDelay);
   }
   */
	
}

function Update () {
 	//checkTimer();
}
