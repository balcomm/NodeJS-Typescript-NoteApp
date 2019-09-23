import yargs from 'yargs';
import { addNote, removeNote, listNotes, readNote } from './notes';

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
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
  handler(argv): void {
    addNote(argv.title, argv.body);
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Removing a note',
  builder: {
    title: {
      describe: 'Title of note you would like to remove',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv): void {
    removeNote(argv.title);
  }
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler(): void {
    listNotes();
  }
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read note',
  builder: {
    title: {
      describe: 'Title of note you would like to read',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv): void {
    readNote(argv.title);
  }
});

yargs.parse();
