const { readInput, inquirerMenu, pause } = require('./helpers/inquirer');

const main = async () => {
    let option;

    do {
        option = await inquirerMenu();
        console.log(option);
        await pause();
    } while (option !== 0);
};

main();
