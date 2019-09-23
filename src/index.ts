import chalk from 'chalk';
import yargs from 'yargs';
import { getNotes } from './notes';

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: (): void => {
    console.log('Adding a new note!');
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Removing a note',
  handler: (): void => {
    console.log('Removing a note!');
  }
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: (): void => {
    console.log('Listing notes!');
  }
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Reading note',
  handler: (): void => {
    console.log('Reading notes!');
  }
});

console.log(yargs.argv);
