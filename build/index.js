"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var yargs_1 = __importDefault(require("yargs"));
var notes_1 = require("./notes");
// Customize yargs version
yargs_1.default.version('1.1.0');
// Create add command
yargs_1.default.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note description',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes_1.addNote(argv.title, argv.body);
    }
});
// Create remove command
yargs_1.default.command({
    command: 'remove',
    describe: 'Removing a note',
    handler: function () {
        console.log('Removing a note!');
    }
});
// Create list command
yargs_1.default.command({
    command: 'list',
    describe: 'List all notes',
    handler: function () {
        console.log('Listing notes!');
    }
});
// Create read command
yargs_1.default.command({
    command: 'read',
    describe: 'Reading note',
    handler: function () {
        console.log('Reading notes!');
    }
});
yargs_1.default.parse();
