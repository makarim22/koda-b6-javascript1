let temp = 10;
let tempSource = 0;
let convertTo = "Fahrenheit";

if (typeof temp === "number") {
  if(typeof tempSource === 'string' &&  tempSource == "Celcius") {
    if(convertTo == "Fahrenheit") {
      temp = temp * 1.8 + 32;
    } else if (convertTo == "Kelvin") {
      temp = temp + 273.15;
    } else if (convertTo == "Reamur") {
      temp = temp * 0.8;
    } else {
      console.log("Masukkan suhu yang valid")
    }
  } else if (typeof tempSource === 'string' && tempSource == "Fahrenheit") {
      if(convertTo == "Celcius") {
        temp = (temp - 32) / 1.8;
      } else if (convertTo == "Kelvin") {
        temp = (temp - 32) / 1.8 + 273.15;
      } else if (convertTo == "Reamur") {
        temp = (temp - 32) / 1.8 * 0.8;
      } else {
        console.log("Masukkan suhu yang valid")
      }
  } else if (typeof tempSource === 'string' && tempSource == "Reamur"){
      if(convertTo == "Celcius") {
        temp = temp * 0.8;
      } else if (convertTo == "Kelvin") {
        temp = temp * 0.8 + 273.15;
      } else if (convertTo == "Fahrenheit") {
        temp = temp * 1.8 + 32;
      } else {
        console.log("Masukkan suhu yang valid")
      }
  } else if (typeof tempSource === 'string' && tempSource == "Kelvin") {
      if(convertTo == "Celcius") {
        temp = temp - 273.15;
      } else if (convertTo == "Fahrenheit") {
        temp = temp - 273.15 * 1.8 + 32;
      } else if (convertTo == "Reamur") {
        temp = temp - 273.15 * 0.8;
      } else {
        console.log("Masukkan suhu yang valid")
      }
  }
} else {
    console.log("Tipe data harus berupa angka!")
}

console.log(temp);
console.log(typeof tempSource);