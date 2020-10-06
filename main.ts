basic.showIcon(IconNames.Yes)
basic.pause(200)
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    basic.pause(100)
})
