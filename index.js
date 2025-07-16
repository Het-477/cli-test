#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv))
    .option("pokemon", {
        type: "string",
        demandOption: true,
        describe: "Name of the Pokémon to fetch moves for"
    })
    .help()
    .argv;

const printFiveMoves = async (pokemonName) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) throw new Error("Pokémon not found!");
        const pokemon = await response.json();
        const moves = pokemon.moves.map(({ move }) => move.name);
        console.log(moves.slice(0, 5));
    } catch (error) {
        console.error("Error:", error.message);
    }
};

printFiveMoves(argv.pokemon);
