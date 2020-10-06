// Created by: Evan
// Created on: Oct.2020
// 
// This program uses the potentiometer and displays the resistance value
let Potentiometer = 0
basic.showIcon(IconNames.Yes)
basic.pause(200)
basic.forever(function () {
    Potentiometer = pins.analogReadPin(AnalogPin.P1)
    basic.showNumber(Potentiometer)
    basic.pause(10)
})
