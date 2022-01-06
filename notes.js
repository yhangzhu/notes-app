const fs = require('fs');
const chalk = require('chalk');
const getNotes = () => {
  console.log(chalk.bgGreen('Your notes...'));
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const find = notes.find((item) => item.title === title);
  if (find === undefined) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.bgGreen('New note added!'));
  } else {
    console.log(chalk.bgRed('Note title taken!'));
  }
};
const removeNote = (title) => {
  const notes = loadNotes();
  const newArr = notes.filter((note) => note.title != title);
  if (notes.length === newArr.length) {
    const output = 'No note found!';
    console.log(chalk.bgRed(output));
  } else {
    saveNotes(newArr);
    const output = 'Note removed!';
    console.log(chalk.bgGreen(output));
  }
};
const listNotes = () => {
  const notes = loadNotes();
  getNotes();
  notes.forEach((item) => console.log(chalk.bgRed(`Title: ${item.title}`)));
};
const readNotes = (title) => {
  const notes = loadNotes();
  const find = notes.find((item) => item.title === title);
  if (find === undefined) {
    console.log(chalk.red('Cannot find the note!'));
  } else {
    console.log(chalk.cyan(`Title: ${find.title}. Body:${find.body}`));
  }
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
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);

  fs.writeFileSync('notes.json', dataJSON);
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNotes,
};
