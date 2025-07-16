#!/usr/bin/env node

import inquirer from "inquirer";

const printFiveMoves = async (pokemonName) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
        if (!response.ok) throw new Error("Pokémon not found!");

        const pokemon = await response.json();
        const moves = pokemon.moves.map(({ move }) => move.name);

        console.log(`\nTop 5 moves for ${pokemonName}:\n`);
        console.log(moves.slice(0, 5).join("\n"));
    } catch (error) {
        console.error("\nError:", error.message);
    }
};

const main = async () => {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "pokemon",
            message: "Enter the name of a Pokémon to see its top 5 moves:",
        },
    ]);

    await printFiveMoves(answers.pokemon);
};

main();
