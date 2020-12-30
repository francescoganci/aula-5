input.onButtonPressed(Button.A, function () {
    for (let índice = 0; índice <= 4; índice++) {
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . #
            `)
        for (let índice = 0; índice <= 10; índice++) {
            let index = 0
            basic.showNumber(index)
        }
    }
})
