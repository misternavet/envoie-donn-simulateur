def on_received_string(receivedString):
    if receivedString == "avance":
        led.plot(2, 0)
    elif receivedString == "boost":
        led.plot(2, 1)
    elif receivedString == "droite":
        led.plot(4, 3)
    elif receivedString == "gauche":
        led.plot(0, 3)
    elif receivedString == "recule":
        led.plot(2, 4)
    else:
        basic.clear_screen()
radio.on_received_string(on_received_string)

radio.set_group(11)