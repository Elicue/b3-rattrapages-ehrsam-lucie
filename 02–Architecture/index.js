const getHarryPotterCharacter = require("../src/select-potter-character");

getHarryPotterCharacter({ gender: "female" }).then((response) =>
  console.log(response)
);
