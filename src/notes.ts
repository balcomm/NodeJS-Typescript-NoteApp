import fs from 'fs';
import chalk from 'chalk';

export const getNotes = (): string => {
  return 'Bitchin notes babe';
};

export const addNote = (title: any, body: any): void => {
  const notes = loadNotes();
  const dupNotes: string[] = notes.filter(
    (note: { title: string; body: string }): boolean => {
      return note.title === title;
    }
  );

  if (dupNotes.length === 0) {
    notes.push({
      title,
      body
    });

    saveNotes(notes);

    console.log(chalk.green.bold('Note added!'));
  } else {
    console.log(
      chalk.red.bold(
        'Duplicate title, please choose a different title for your note'
      )
    );
  }
};

const saveNotes = (notes: []): void => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
