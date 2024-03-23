function makeBold(index) {
  toggleStyle(index, 'fontWeight', 'bold');
}

function makeItalic(index) {
  toggleStyle(index, 'fontStyle', 'italic');
}

function makeUnderline(index) {
  toggleStyle(index, 'textDecoration', 'underline');
}

function changeFontSize(index, size) {
  const sentence = document.getElementById(`sentence${index}`);
  sentence.style.fontSize = size + "px";
}

function changeColor(index, color) {
  const sentence = document.getElementById(`sentence${index}`);
  sentence.style.color = color;
}

function toggleStyle(index, style, value) {
  const sentence = document.getElementById(`sentence${index}`);
  const currentValue = sentence.style[style];
  if (currentValue === value) {
    sentence.style[style] = 'normal';
  } else {
    sentence.style[style] = value;
  }
}
