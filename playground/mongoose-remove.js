const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove 
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5b5810bce40a09bec3b6d465'}).then((todo) => {

// });

Todo.findByIdAndRemove('5b5810bce40a09bec3b6d465').then((todo) => {
    console.log(todo);
});