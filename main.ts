radio.setGroup(1)
basic.showString("OK")
basic.forever(function () {
    if (GHBit.Rocker(GHBit.enRocker.Left)) {
        radio.sendString("L")
    } else if (GHBit.Rocker(GHBit.enRocker.Up)) {
        radio.sendString("F")
    } else if (GHBit.Rocker(GHBit.enRocker.Down)) {
        radio.sendString("B")
    } else if (GHBit.Rocker(GHBit.enRocker.Right)) {
        radio.sendString("R")
    } else {
        radio.sendString("S")
    }
    basic.pause(100)
})
