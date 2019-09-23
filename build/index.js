"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var yargs_1 = __importDefault(require("yargs"));
// Customize yargs version
yargs_1.default.version('1.1.0');
// Create add command
yargs_1.default.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note!');
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
console.log(yargs_1.default.argv);
