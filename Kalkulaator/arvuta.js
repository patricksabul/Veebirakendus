function clearScreen() {
    document.getElementById('result').value='';
}

function display(val) {
    document.getElementById('result').value += val;
    return val;
}
function solve() {
    let x = document.getElementById('result').value;
    console.log(x);
    let y = eval(x);
    document.getElementById('result').value = y;
    return y;
}