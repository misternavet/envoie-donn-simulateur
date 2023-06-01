radio.onReceivedString(function (receivedString) {
    if (receivedString == "avance") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 204)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 204)
    } else if (receivedString == "boost") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 255)
    } else if (receivedString == "droite") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 224)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 204)
    } else if (receivedString == "gauche") {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 204)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 224)
    } else if (receivedString == "recule") {
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 180)
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 180)
    } else {
        motor.motorStopAll()
    }
})
motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 204)
motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 204)
