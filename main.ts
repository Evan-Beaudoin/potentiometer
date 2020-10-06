basic.showIcon(IconNames.Yes)
basic.pause(200)
let Potentiometer = pins.analogReadPin(AnalogPin.P0)
basic.forever(function () {
    basic.showNumber(Potentiometer)
    basic.pause(10)
})
