const inquirer = require('inquirer');
require('colors');

const answers = [
    {
        type: 'list',
        name: 'option',
        message: 'Choose an option',
        choices: [
            {
                value: 1,
                name: `${'1'.green} Search City`
            },
            {
                value: 2,
                name: `${'2.'.green} History`
            },
            {
                value: 0,
                name: `${'3.'.green} Exit`
            }
        ]
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log('============================'.green);
    console.log('      Select an Option       '.white);
    console.log('============================\n'.green);

    const { option } = await inquirer.prompt(answers);
    return option;
};

const pause = async () => {
    const question = [
        {
            type: 'input',
            name: 'Enter',
            message: `\n Press ${'ENTER'.green} To Continue \n`
        }
    ];
    console.log('\n');
    await inquirer.prompt(question);
};

const readInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'description',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'please enter a task';
                }
                return true;
            }
        }
    ];

    const { description } = await inquirer.prompt(question);
    return description;
};

const deleteMenu = async (tasks = []) => {
    const choices = tasks.map((task, i) => {
        const index = `${i + 1}.`.green;
        return {
            value: task.id,
            name: `${index} ${task.description}`
        };
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + 'Cancel.'
    });

    const question = {
        type: 'list',
        name: 'id',
        message: 'Delete',
        choices
    };
    const { id } = await inquirer.prompt(question);
    return id;
};

const confirm = async (message) => {
    const question = {
        type: 'confirm',
        name: 'ok',
        message
    };
    const { ok } = await inquirer.prompt(question);
    return ok;
};

const showChecklists = async (tasks = []) => {
    const choices = tasks.map((task, i) => {
        const index = `${i + 1}.`.green;
        return {
            value: task.id,
            name: `${index} ${task.description}`,
            checked: task.createdAt ? true : false
        };
    });

    const question = {
        type: 'checkbox',
        name: 'ids',
        message: 'Selections',
        choices
    };
    const { ids } = await inquirer.prompt(question);
    return ids;
};

module.exports = { inquirerMenu, pause, readInput, deleteMenu, confirm, showChecklists };
