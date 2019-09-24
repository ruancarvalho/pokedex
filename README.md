# Pokedex for Méiuz

[![Travis](https://img.shields.io/travis/alik0211/pokedex/master.svg?style=flat-square)](https://travis-ci.com/alik0211/pokedex)
[![Dependency Status](https://img.shields.io/david/alik0211/pokedex.svg?label=deps&style=flat-square)](https://david-dm.org/alik0211/pokedex)
[![devDependency Status](https://img.shields.io/david/dev/alik0211/pokedex.svg?label=devDeps&style=flat-square)](https://david-dm.org/alik0211/pokedex?type=dev)

List of pokemons on the basis of React + Redux, bootstrapped with Create React App.

This project is a technical test for Méliuz.

## Online Preview

You may see this project running live at https://ruancarvalho-pokedex.netlify.com/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Application Flow

1. After loading, the application makes a request to pokeapi.com, to get a list of available pokemons
2. The list (collection) of pokemons is stored in a Redux store. It contains only the ID, and Name of pokemons.
3. The user is presented with a search input, to find pokemons. A miminum of 3 characters are required.
4. After typing, the app filter the collection and display a maximum 4 items that matches the search.
5. The application those pokemons images at this time, to reduce bandwidth consumption.
6. In the list of pokemons (as cards) the user can click to see the details of an item, in a modal window.
7. After the click, the app makes another request to pokeapi, to get the pokemon details.
8. When data is fetched, it is displayed as a table structure.
9. The user can close the modal, and search for other pokemons.

There is only one request to get the list of pokemons. 

And, there can be many requests to pokemon details, as the user clicks on items
Images are only loaded after search results, and with the detail modal.

## Features Delivered

* Updated all libs and packages
* Changed the UI into a more search-like visual.
* Added a logo, created at https://textcraft.net/ and hosted at Cloudinary (CDN)
* Removed the loading of all pokemon images, after initialization
* Changed the initial page to display only pokemons that match search input
* Added a limit of 4 pokemons displayed at a time. This improve usability and user focus.
* Added a modal window to display pokemon details
* Converted all components into functional components, and using Hooks
* Added a more light visual styles to improve user experience

## (Desired) Improvements Needed

* Improve responsive styles;
* Add animations when displaying items;
* Use the PokeAPI to display more detailed information, such as evolution, colors, actions, movements, etc.
