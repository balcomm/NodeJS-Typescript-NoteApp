import fs from 'fs';
import chalk from 'chalk';

export const getNotes = (): string => {
  return 'Bitchin notes babe';
};

export const addNote = (title: any, body: any): void => {
  const notes = loadNotes();
  const dupNotes: [] = notes.filter(
    (note: { title: string; body: string }): boolean => note.title === title
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
        'Duplicate title, please choose a different title for your note!'
      )
    );
  }
};

export const removeNote = (title: any): void => {
  const notes = loadNotes();
  const keepNotes: [] = notes.filter(
    (note: { title: string; body: string }): boolean => note.title !== title
  );

  if (notes.length === keepNotes.length) {
    console.log(chalk.red.bold('Note title not found'));
  } else {
    saveNotes(keepNotes);

    console.log(chalk.green.bold('Note removed!'));
  }
};

export const listNotes = (): void => {
  const notes = loadNotes();

  if (notes.length > 0) {
    console.log(chalk.green.bold.inverse('   Your Notes   '));

    notes.forEach(
      (el: { title: string; body: string }, index: number): void => {
        console.log(
          `${chalk.green.bold((index + 1).toString() + '.)')} ${chalk.italic(
            el.title
          )}`
        );
      }
    );
  } else {
    console.log(chalk.red.bold('No notes found'));
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
