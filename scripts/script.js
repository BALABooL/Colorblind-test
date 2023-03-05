// описание функции, позволяющей менять язык текста на странице
function languageToggle() {
  let langBtnClasses = document.getElementById("language").classList;
  console.log(langBtnClasses);
  if (langBtnClasses.contains("RUS")) {
    langBtnClasses.remove("RUS");
    langBtnClasses.add("UK");
  } else {
    langBtnClasses.remove("UK");
    langBtnClasses.add("RUS");
  }
}
// number - код цветового спектра
// расписано только для двух кнопок
function btnBackground(number) {
  if (number == 1) {
    let btnClasses = document.getElementById("button_col1").classList;
    let colorBarClasses = document.getElementById("color_bar").classList;
    if (btnClasses.contains("col1")) {
      btnClasses.remove("col1");
      colorBarClasses.add("invisible");
    } else {
      btnClasses.add("col1");
      colorBarClasses.remove("invisible");
      colorBarClasses.add("col1");
    }
  } 
  if (number == 2) {
    let btnClasses = document.getElementById("button_col2").classList;
    let colorBarClasses = document.getElementById("color_bar").classList;
    if (btnClasses.contains("col2")) {
      btnClasses.remove("col2");
      colorBarClasses.add("invisible");
    } else {
      btnClasses.add("col2");
      colorBarClasses.remove("invisible");
      colorBarClasses.add("col2");
    }
  }
}
// функция работает неправильно, нужно переработать