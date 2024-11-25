hambre = 0
contador = 0
basic.show_leds("""
    . # . # .
        . . . . .
        . . . . .
        # . . . #
        . # # # .
""")

def on_forever():
    global contador, hambre
    contador = 10
    basic.pause(1000)
    while contador <= 10:
        contador += -1
        basic.pause(1000)
        if contador == 0:
            hambre += 1
            contador = 10
            basic.pause(1000)
basic.forever(on_forever)
