## 02 – Architecture open source

This Harry Potter Character Filter is an easy-to-use JavaScript package that interacts with the Harry Potter API to filter characters based on specific criteria. This package allows you to search for characters by gender, species, and wizard status, and returns a random character that matches the given criteria.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

Clone the repository and install dependencies with npm

```bash
npm i select-potter-character
```

### Features

- Random Harry Potter Character retrieval: Uses the HP-API to fetch random Character.
- Ability to filter characters by 3 different criteria : Gender ( male, female), Species ( human, werewolf, dog ...) or wizard ( true of false )

### Project Structure

```
02–Architecture/
│
├── src/
│   └── select-potter-character.js
├── test/
│   └── select-potter-character.test.js
├── package.json
├── README.md
├── LICENSE
└── index.js
```

### License

Distributed under the MIT License. See LICENSE for more information.
