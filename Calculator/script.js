let screen = document.getElementsByName("screen")[0];

function cal(x) {
    screen.value += x;
}

function clearCal() {
    screen.value = "";
}

function resultCal() {
    try {
        let sum = eval(screen.value)
        screen.value = sum;
    } catch {
        alert ("올바른 수식이 아닙니다.");
    }
}