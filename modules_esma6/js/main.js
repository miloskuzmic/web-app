import addMovieToList from '../functions/addMovie.js'
import createProgram from '../functions/createProgram.js'
import addMovieToProgram from '../functions/addMovieToList.js'
import {createMovieButton, createProgramButtons, addMovieBtnElement } from '../entities/variables.js'

createMovieButton.addEventListener('click', addMovieToList);
createProgramButtons.addEventListener('click', createProgram);
addMovieBtnElement.addEventListener('click', addMovieToProgram);
