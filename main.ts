input.onButtonPressed(Button.A, function () {
    Number_of_strike += 1
    basic.pause(500)
    basic.showString("S")
    basic.showNumber(Number_of_strike)
    if (Number_of_strike == 3) {
        basic.clearScreen()
        basic.showString("Out")
    }
})
input.onButtonPressed(Button.AB, function () {
    let out = 0
    basic.pause(100)
    basic.showNumber(4)
    Number_of_strike = 0
    Number_of_balls = 0
    basic.showNumber(out)
    basic.showNumber(Number_of_strike)
})
input.onButtonPressed(Button.B, function () {
    Number_of_balls += 1
    basic.pause(500)
    basic.showString("B")
    basic.showNumber(Number_of_balls)
    if (Number_of_balls == 4) {
        basic.clearScreen()
        basic.showString("WALK")
    }
})
let Number_of_balls = 0
let Number_of_strike = 0
basic.showIcon(IconNames.Yes)
basic.clearScreen()
basic.forever(function () {
	
})
