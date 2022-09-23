input.onSound(DetectedSound.Loud, function () {
    input.setSoundThreshold(SoundThreshold.Loud, 200)
    alive = !(alive)
})
let its_going_to_dieeee = 0
let alive = false
alive = true
basic.forever(function () {
    if (alive) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
        its_going_to_dieeee = randint(1, 3)
        if (its_going_to_dieeee != 2) {
            led.unplot(2, 0)
            led.plot(its_going_to_dieeee, 0)
            basic.pause(4400)
        }
    } else {
        basic.clearScreen()
    }
})
