let password = document.getElementById("password");

//random number
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const encrypt = (wordToEncrypt) => {
  encryptedWord = wordToEncrypt
    .split("")
    .map((e) => {
      if (e.toLowerCase() === "a") {
        if (random(0, 1) === 1) {
          return "4";
        } else {
          return "a";
        }
      }
      if (e.toLowerCase() === "e") {
        if (random(0, 1) === 1) {
          return "3";
        } else {
          return "e";
        }
      }
      if (e.toLowerCase() === "i") {
        if (random(0, 1) === 1) {
          return "¡";
        } else {
          return "i";
        }
      }
      if (e.toLowerCase() === "o") {
        if (random(0, 1) === 1) {
          return "0";
        } else {
          return "o";
        }
      }
      if (e.toLowerCase() === "s") {
        if (random(0, 1) === 1) {
          return "$";
        } else {
          return "s";
        }
      } else if (random(0, 1) === 1) {
        return e.toUpperCase();
      } else {
        return e;
      }
    })
    .join("");
  return encryptedWord;
};

const generatePassword = (user1, user2, user3) => {
  password.value = "";
  password.value += `${
    encrypt(user1.value) + encrypt(user2.value) + user3.value
  }`;
};

const copyPassword = () => {
  let a = document.getElementById("password");
  a.select();
  a.setSelectionRange(0, 99999);
  document.execCommand("copy");
};
