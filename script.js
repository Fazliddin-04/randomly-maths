let num = +prompt('Nechta misol ishlamoqchisiz?')
while (isNaN(num) || num == false) {
    num = +prompt('Nechta misol ishlamoqchisiz?')
}

for (let i = 1; i <= num; i++) {
    let num1 = Math.floor(Math.random() * 100)
    let num2 = Math.floor(Math.random() * 100)
    let answer = 0;
    let myAnswer = 0;
    if (num1 >= num2 && num1 / num2 >= 10 && num2 !== 0) {
        answer = num1 / num2
        myAnswer = +prompt(num1 + ' / ' + num2 + ' = ?')
        while (isNaN(myAnswer) || myAnswer === ' ') {
            myAnswer = +prompt(num1 + ' / ' + num2 + ' = ?')
        }
        console.log(`${i}. ${num1} / ${num2}`)
        if (answer == myAnswer) {
            console.log(`\nSizning javob to'g'ri: ${myAnswer}`);
        } else {
            console.log(`\nSizning javob noto'g'ri: ${myAnswer}\nTo'g'ri javob: ${answer}`);
        }
    } else if (num1 * num2 <= 1000) {
        answer = num1 * num2
        myAnswer = +prompt(num1 + ' * ' + num2 + ' = ?')
        while (isNaN(myAnswer) || myAnswer === ' ') {
            myAnswer = +prompt(num1 + ' * ' + num2 + ' = ?')
        }
        console.log(`${i}. ${num1} * ${num2}`)
        if (answer == myAnswer) {
            console.log(`\nSizning javob to'g'ri: ${myAnswer}`);
        } else {
            console.log(`\nSizning javob noto'g'ri: ${myAnswer}\nTo'g'ri javob: ${answer}`);
        }
    } else if (num1 >= num2 && num1 - num2 >= 0) {
        answer = num1 - num2
        myAnswer = +prompt(num1 + ' - ' + num2 + ' = ?')
        while (isNaN(myAnswer) || myAnswer === ' ') {
            myAnswer = +prompt(num1 + ' - ' + num2 + ' = ?')
        }
        console.log(`${i}. ${num1} - ${num2}`)
        if (answer == myAnswer) {
            console.log(`\nSizning javob to'g'ri: ${myAnswer}`);
        } else {
            console.log(`\nSizning javob noto'g'ri: ${myAnswer}\nTo'g'ri javob: ${answer}`);
        }
    } else {
        answer = num1 + num2
        myAnswer = +prompt(num1 + ' + ' + num2 + ' = ?')
        while (isNaN(myAnswer) || myAnswer === ' ') {
            myAnswer = +prompt(num1 + ' + ' + num2 + ' = ?')
        }
        console.log(`${i}. ${num1} + ${num2}`)
        if (answer == myAnswer) {
            console.log(`\nSizning javob to'g'ri: ${myAnswer}`);
        } else {
            console.log(`\nSizning javob noto'g'ri: ${myAnswer}\nTo'g'ri javob: ${answer}`);
        }
    }

}
