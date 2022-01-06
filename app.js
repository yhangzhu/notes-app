const yargs = require('yargs');
const note = require('./notes.js');

// create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note description',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    note.addNote(argv.title, argv.body);
  },
});

// create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note!',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    note.removeNote(argv.title);
  },
});

// create read command
yargs.command({
  command: 'read',
  describe: 'Read a note!',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    note.readNotes(argv.title);
  },
});

//create list command
yargs.command({
  command: 'list',
  describe: 'List note!',
  handler() {
    note.listNotes();
  },
});

yargs.parse();
