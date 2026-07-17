function 送信 (コマンド: string) {
    basic.showString(コマンド)
    radio.sendString(コマンド)
}
input.onButtonPressed(Button.A, function () {
    はじめの時間 = control.millis()
})
input.onButtonPressed(Button.B, function () {
    かかった秒数 = (control.millis() - はじめの時間) / 1000
    かかった秒数 = Math.trunc(かかった秒数)
    basic.showNumber(かかった秒数)
})
let y = 0
let x = 0
let かかった秒数 = 0
let はじめの時間 = 0
はじめの時間 = 0
かかった秒数 = 0
radio.setGroup(1)
basic.forever(function () {
    x = pins.analogReadPin(AnalogPin.P0)
    y = pins.analogReadPin(AnalogReadWritePin.P1)
    if (y < 10) {
        if (x < 10) {
            送信("s")
        } else if (x > 1000) {
            送信("s")
        } else {
            送信("f")
        }
    } else if (x > 1000) {
        送信("r")
    } else if (y > 1000) {
        if (x < 10) {
            送信("s")
        } else if (x > 1000) {
            送信("s")
        } else {
            送信("b")
        }
    } else if (x < 10) {
        送信("l")
    } else {
        送信("s")
    }
})
