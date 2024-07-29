/**
 *
 * this function returns a Harry Potter character randomly chosen among all those that meet the provided search criteria
 *
 * @param {*} filterCriteria is an object with key value pairs - key is the name of the attribute to filter on, value is the value on which to filter
 * criteria supported and optional:
 * - gender (male, female)
 * - species (human, werewolf, dog, ...)
 * @returns an object with
 * - a data object containing a Harry Potter character if found, null otherwise
 * - a boolean field indicating if any error occured
 * - a message to better understand the reponse
 */

async function getHarryPotterCharacter(filterCriteria) {
  // Define the API URL
  const apiUrl = "https://hp-api.onrender.com/api/characters";

  let character_list;

  // Make a GET request
  const response = await fetch(apiUrl);

  if (!response.ok) {
    return {
      data: null,
      error: true,
      message: "something went wrong with the query. Please try again later",
    };
  } else {
    character_list = await response.json();
    if (filterCriteria?.gender) {
      character_list = character_list.filter(
        (c) => c.gender.toLowerCase() === filterCriteria.gender.toLowerCase()
      );
    }

    if (filterCriteria?.species) {
      character_list = character_list.filter(
        (c) => c.species.toLowerCase() === filterCriteria.species.toLowerCase()
      );
    }

    if (filterCriteria?.wizard) {
      character_list = character_list.filter(
        (c) => c.wizard === filterCriteria.wizard
      );
    }

    if (character_list.length === 0)
      return {
        data: null,
        error: false,
        message: "No character matches your search criteria",
      };

    return {
      data: character_list[Math.floor(Math.random() * character_list.length)],
      error: false,
      message: "",
    };
  }
}
module.exports = getHarryPotterCharacter;
