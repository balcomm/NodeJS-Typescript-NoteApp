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
    var dupNotes = notes.filter(function (note) {
        return note.title === title;
    });
    if (dupNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk_1.default.green.bold('Note added!'));
    }
    else {
        console.log(chalk_1.default.red.bold('Duplicate title, please choose a different title for your note'));
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
