# JS-Classes

This is to serve as an assessment of your skill set so far in the JavaScript block of the Dev Shop.

## Prerequisites
- Data Sets
- Properties
- Methods
- Objects
- Classes

## Requirements
- You are to pseudocode for each step of the prompt.
- Your code must run successfully with no errors, and all test must pass.

## Task
You are to complete the following prompt(s) below.


## Prompt 1
- Inside of `CharacterFunctionComponent.js` located in `./src/components/functionComponents/character`, create a `Function Component` that:
  - Imports the data inside of the `characterData.json` file which is located in the `data` directory into a variable
  - Iterates over said data variable and renders:
        - A `h1` which contains the character's name
        - a `p` tag that contains the following statement: `<Character's name> was born in the year <birth year>, is <height> inches tall, with a total mass of <mass>.`
          - You must populate the words surround in brackets with the data you have iterated over

## Prompt 2
- Inside of `CharacterClassComponent.js` located in `./src/components/classComponents/character`, convert your `Function Component` into a `Class Component`.
- Your `json` data  your must be stored within your component's `state` object.


## Prompt 3
- Inside of `StarShipFunctionComponent.js` located in `./src/components/functionComponents/starShip` , create a `Function Component`:
  - Imports the data inside of the `starShipData.json` file which is located in the `data` directory into a variable.
  - Declare a function that iterates over said data within a variable named `parsedData`
    - You must deconstruct the following fields into variables:
      - Name, Model, Manufacturer, Crew, Passengers, and Hyperdrive Rating.
      - Create a new object called `parsedObj` which only stores the data for the deconstructed fields above.
      - Print the newly created array to the console.

## Prompt 4
- Inside of `StarShipClassComponent.js` located in `./src/components/classComponents/starShip`, convert your `Function Component` into a `Class Component`.
- Your newly created array must be stored within a property called `parsedData` within your component's `state` object.
