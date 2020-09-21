input.onButtonPressed(Button.A, function () {
    basic.showNumber(level)
    basic.pause(5000)
    basic.clearScreen()
})
let level = 0
basic.showString("Moisture")
level = 0
basic.forever(function () {
    basic.pause(5000)
    basic.clearScreen()
    basic.pause(55000)
    pins.digitalWritePin(DigitalPin.P1, 1)
    level = pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    0,
    100
    )
    basic.showNumber(level)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
