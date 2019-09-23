"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cmd = process.argv[2];
console.log(process.argv);
if (cmd === 'add') {
    console.log('Adding Note');
}
else if (cmd === 'remove') {
    console.log('Removing Note');
}
