#!/usr/bin/env node 

console.log("my custom cli")

const printFiveMoves = async (pokemonName) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokemon = await response.json();
    const moves = pokemon.moves.map(({ move }) => move.name);

    console.log(moves.slice(0, 5));
};

printFiveMoves("chikorita");





// import * as p from '@clack/prompts';
// import color from 'picocolors';
// import { setTimeout } from 'timers/promises';

// async function main() {
//     p.intro(`${color.bgRed(color.black(`Welcome to the ${color.bold(`Nizzy Games`)} 🚀🚀🚀`))}`);
// }
