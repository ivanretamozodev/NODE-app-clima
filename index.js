const { readInput, inquirerMenu, pause } = require('./helpers/inquirer');
const Searches = require('./models/searches');
require('colors');

const main = async () => {
    const searches = new Searches();
    let option;
    do {
        option = await inquirerMenu();

        switch (option) {
            case 1:
                //mostramos el mensaje
                const place = await readInput('city:');
                await searches.city(place);
                //buscamos los lugares

                //seleccionamos el lugar

                //cluma

                //mostramos el resultado
                console.log('\ncity information\n'.green);
                console.log('City:');
                console.log('Lat:');
                console.log('Lng:');
                console.log('Temperature:');
                console.log('Min:');
                console.log('Max:');

                break;
            case 2:
                break;
        }

        await pause();
    } while (option !== 0);
};

main();
