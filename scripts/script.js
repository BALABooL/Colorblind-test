// описание функции, позволяющей менять язык текста на странице
function languageToggle() {
  let langButtonClasses = document.getElementById("language").classList;
  console.log(langButtonClasses);
  if (langButtonClasses.contains("RUS")) {
    langButtonClasses.remove("RUS");
    langButtonClasses.add("UK");
  } else {
    langButtonClasses.remove("UK");
    langButtonClasses.add("RUS");
  }
}

function buttonBackground(number) {
  if (number == 1) {
    let buttonClasses = document.getElementById("button_col1").classList;
    let colorBarClasses = document.getElementById("color_bar").classList;
    if (buttonClasses.contains("col1")) {
      buttonClasses.remove("col1");
      colorBarClasses.add("invisible");
      colorBarClasses.add("col1");
    } else {
      buttonClasses.add("col1");
      colorBarClasses.remove("invisible");
      colorBarClasses.add("col1");
    }
  } 
  if (number == 2) {
    let buttonClasses = document.getElementById("button_col2").classList;
    let colorBarClasses = document.getElementById("color_bar").classList;
    if (buttonClasses.contains("col2")) {
      buttonClasses.remove("col2");
      colorBarClasses.add("invisible");
    } else {
      buttonClasses.add("col2");
      colorBarClasses.remove("invisible");
      colorBarClasses.add("col2");
    }
  }
}

// плохой способ

// function buttonBackground1() {
//   let buttonClasses = document.getElementById("button_col1").classList;
//   let colorBarClasses = document.getElementById("color_bar").classList;
//   if (buttonClasses.contains("col1")) {
//     buttonClasses.remove("col1");
//     colorBarClasses.add("invisible");
//     colorBarClasses.add("col1");
//   } else {
//     buttonClasses.add("col1");
//     colorBarClasses.remove("invisible");
//     colorBarClasses.add("col1");
//   }
// }
