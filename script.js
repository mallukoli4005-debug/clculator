let screen = document.getElementById("screen");

function press(val) {
  screen.value += val;
}

function clearScreen() {
  screen.value = "";
}

function backspace() {
  screen.value = screen.value.slice(0, -1);
}

function solve() {
  try {
    screen.value = eval(screen.value);
  } catch {
    screen.value = "Error";
  }
}
