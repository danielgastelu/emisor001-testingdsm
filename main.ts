radio.setGroup(1)
basic.showLeds(`
    # # # . .
    # . . . .
    # # . . #
    # . . . .
    # # # . .
    `)
basic.forever(function () {
    basic.pause(100)
    led.unplot(4, 2)
    basic.pause(150)
    led.plot(4, 2)
    radio.sendString("" + convertToText(input.runningTime()) + "," + convertToText(input.lightLevel()))
})
