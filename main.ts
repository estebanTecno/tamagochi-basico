input.onButtonPressed(Button.A, function () {
    hambre += -8
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            . # # # .
            . # # # .
            `)
    }
    if (hambre <= -20) {
        muerto += 1
        basic.showLeds(`
            . # # # .
            # . # . #
            # # . # #
            . # # # .
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(hambre)
})
let contador = 0
let muerto = 0
let hambre = 0
basic.showLeds(`
    . # . # .
    . . . . .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    muerto = 0
    contador = 5
    basic.pause(1000)
    while (contador <= 8) {
        contador += -1
        basic.pause(1000)
        if (contador == 0) {
            hambre += 1
            contador = 8
            basic.pause(1000)
        }
        if (hambre == 12 || muerto == 1) {
            contador = 9
            basic.showLeds(`
                . # # # .
                # . # . #
                # # . # #
                . # # # .
                . # # # .
                `)
        }
    }
})
// Estado de hambre
basic.forever(function () {
    if (hambre == 2) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            `)
    }
    if (hambre == 4) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
    if (hambre == 6) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            # # # # #
            `)
    }
    if (hambre == 8) {
        basic.showLeds(`
            # . . . #
            # # . # #
            . . . . .
            . # . # .
            # . # . #
            `)
    }
    if (hambre == 10) {
        basic.showLeds(`
            # . . . #
            . # . # .
            # . . . #
            . . . . .
            # # # # #
            `)
    }
})
