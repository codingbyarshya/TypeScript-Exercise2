

function doubleThePopulation(value: number): number {
    return value * 2;
}



doubleThePopulation(5);

//doubleThePopulation(6.12); // it is a double so because of that it is not a number we can delete it or put number instead of 6.12.

doubleThePopulation(8_526);

//doubleThePopulation(false); // the function type is number but unfortunatly it is a boolean so we have to put a number instead of boolean.



function languagesSpoken(country: string, language1: string, language2?: string): void {
    console.log(`The languages spoken in ${country} are:`);

    console.log(language1);

    if (language2 !== undefined) {
        console.log(language2);
    }
}

languagesSpoken("Colombia", "Spanish", "English");

languagesSpoken("Greece", "Greek");

languagesSpoken("New Zealand", "English", "Māori");



export {};
