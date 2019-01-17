const storage = require('./storage');

storage.put('First', 'FirstPlayer');
storage.put('Second', 'SecondPlayer');
// console.log(storage.get('Second'));
// storage.update('First', 'ChangedFirstPlayer');
// console.log(storage.get('First'));
// storage.clear();
// console.log(storage.getAll());
storage.save();
storage.load();
storage.put('Last', 'FirstPlayer');
console.log(storage.getAll());