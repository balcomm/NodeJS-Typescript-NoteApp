import chalk from 'chalk';
import { getNotes } from './notes';

const cmd: string = process.argv[2];

console.log(process.argv);

if (cmd === 'add') {
  console.log('Adding Note');
} else if (cmd === 'remove') {
  console.log('Removing Note');
}
