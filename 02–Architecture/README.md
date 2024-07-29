## 02 – Architecture open source

This Harry Potter Character Filter is an easy-to-use JavaScript package that interacts with the Harry Potter API to filter characters based on specific criteria. This package allows you to search for characters by gender, species, house and wizard status, and returns a random character that matches the given criteria.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

Clone the repository and install dependencies with npm

```bash
npm i select-potter-character
```

## Local development

```bash
npm install
```

```bash
npm run test
```

### Features

- Random Harry Potter Character retrieval: Uses the HP-API to fetch random Character.
- Ability to filter characters by 4 different criteria : Gender ( male, female), Species ( human, werewolf, dog ...), House () or wizard ( true of false )
- Each filter is case insensitive ( everything's transformed to lowercase )

### Project Structure

```
02–Architecture/
├── index.js
├── index.test.js
├── babel.config.cjs
├── package.json
├── README.md
├── LICENSE
```

## Get a random character

Retrieve a character randomly from the Harry Potter world

```js
import { getHarryPotterCharacter } from "select-potter-character";

const response = await getHarryPotterCharacter();
```

return an object with all attributes of the randomly selected Harry Potter character

## Get a character based on gender

Retrieve a character randomly from the Harry Potter world with the provided gender

- male
- female

```js
import { getHarryPotterCharacter } from "select-potter-character";

const response = await getHarryPotterCharacter({ gender: "male" });
```

return an object with

- an error, set to true if the API call failed - false otherwise
- a message to help understand the response in case an error occurred or not character matching provided criteria was found
- a data key containing the randomly selected character if any

## Get a character based on species

Retrieve a character randomly from the Harry Potter world with the provided species

- human
- half-human
- goblin
- werewolf
- giant
- half-giant
- house-elf
- hat
- dog
- cat
- owl
- pygmy puff
- toad
- snake
- serpent
- acromantula
- hippogriff
- phoenix
- three-headed dog
- dragon
- centaur
- vampire
- cephalopod
- selkie
- ghost
- poltergeist

```js
import { getHarryPotterCharacter } from "select-potter-character";

const response = await getHarryPotterCharacter({ species: "werewolf" });
```

return an object with

- an error, set to true if the API call failed - false otherwise
- a message to help understand the response in case an error occurred or not character matching provided criteria was found
- a data key containing the randomly selected character if any

## Get a character based on house

Retrieve a character randomly from the Harry Potter world from the provided house

- Gryffindor
- Slytherin
- Hufflepuff
- Ravenclaw

```js
import { getHarryPotterCharacter } from "select-potter-character";

const response = await getHarryPotterCharacter({ house: "Gryffindor" });
```

return an object with

- an error, set to true if the API call failed - false otherwise
- a message to help understand the response in case an error occurred or not character matching provided criteria was found
- a data key containing the randomly selected character if any

## Get a character based on being a wizard

Retrieve a character randomly from the Harry Potter world based on whether he/she is a wizard

```js
import { getHarryPotterCharacter } from "select-potter-character";

const response = await getHarryPotterCharacter({ wizard: true });
```

return an object with

- an error, set to true if the API call failed - false otherwise
- a message to help understand the response in case an error occurred or not character matching provided criteria was found
- a data key containing the randomly selected character if any

## Get a character based on a combination of above criteria

Retrieve a character randomly from the Harry Potter world with a combination of any of the above filtering criteria

```js
import { getHarryPotterCharacter } from "select-potter-character";

const response = await getHarryPotterCharacter({
  gender: "male",
  species: "human",
});
```

return an object with

- an error, set to true if the API call failed - false otherwise
- a message to help understand the response in case an error occurred or not character matching provided criteria was found
- a data key containing the randomly selected character if any

### License

Distributed under the MIT License. See LICENSE for more information.
