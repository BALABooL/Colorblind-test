// описание функции, позволяющей менять язык текста на странице
function languageToggle() {
  let langButtonClasses = document.getElementById("language").classList;
  if (langButtonClasses.contains("RUS")) {
    langButtonClasses.remove("RUS");
    langButtonClasses.add("UK");
  } else {
    langButtonClasses.remove("UK");
    langButtonClasses.add("RUS");
  }
}

function buttonBackground() {
  let buttonClasses = document.getElementById("button_col1").classList;
  let colorBarClasses = document.getElementById("color_bar").classList;
  if (buttonClasses.contains("col1") ) {
    buttonClasses.remove("col1");
    colorBarClasses.add("invisible");
  } else {
    buttonClasses.add("col1");
    colorBarClasses.remove("invisible");
    colorBarClasses.add("col1");
  }
}