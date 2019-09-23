"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var chalk_1 = __importDefault(require("chalk"));
exports.getNotes = function () {
    return 'Bitchin notes babe';
};
exports.addNote = function (title, body) {
    var notes = loadNotes();
    var dupNotes = notes.filter(function (note) { return note.title === title; });
    if (dupNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk_1.default.green.bold('Note added!'));
    }
    else {
        console.log(chalk_1.default.red.bold('Duplicate title, please choose a different title for your note!'));
    }
};
exports.removeNote = function (title) {
    var notes = loadNotes();
    var keepNotes = notes.filter(function (note) { return note.title !== title; });
    if (notes.length === keepNotes.length) {
        console.log(chalk_1.default.red.bold('Note title not found'));
    }
    else {
        saveNotes(keepNotes);
        console.log(chalk_1.default.green.bold('Note removed!'));
    }
};
exports.listNotes = function () {
    var notes = loadNotes();
    if (notes.length > 0) {
        console.log(chalk_1.default.green.bold.inverse('   Your Notes   '));
        notes.forEach(function (el, index) {
            console.log(chalk_1.default.green.bold((index + 1).toString() + '.)') + " " + chalk_1.default.italic(el.title));
        });
    }
    else {
        console.log(chalk_1.default.red.bold('No notes found'));
    }
};
var saveNotes = function (notes) {
    var dataJSON = JSON.stringify(notes);
    fs_1.default.writeFileSync('notes.json', dataJSON);
};
var loadNotes = function () {
    try {
        var dataBuffer = fs_1.default.readFileSync('notes.json');
        var dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch (e) {
        return [];
    }
};
