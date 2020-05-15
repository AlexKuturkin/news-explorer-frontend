const dateArtirle = (string) => {
  console.log(string);
  let day = string.slice(8, 10);
  if (day[0] === "0") {
    // console.log(day[0]);
    // eslint-disable-next-line prefer-destructuring
    day = day[1];
  }

  let month = string.slice(5, 7);
  if (month === "01") {
    month = "января";
  }
  if (month === "02") {
    month = "февраля";
  }
  if (month === "03") {
    month = "марта";
  }
  if (month === "04") {
    month = "апреля";
  }
  if (month === "05") {
    month = "мая";
  }
  if (month === "06") {
    month = "июня";
  }
  if (month === "07") {
    month = "июля";
  }
  if (month === "08") {
    month = "августа";
  }
  if (month === "09") {
    month = "сентября";
  }
  if (month === "10") {
    month = "октября";
  }
  if (month === "11") {
    month = "ноября";
  }
  if (month === "12") {
    month = "декабря";
  }

  return `${day} ${month}, ${string.slice(0, 4)}`;
};

export default dateArtirle;
