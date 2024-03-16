require('dotenv').config();
const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const options = {
  connectTimeoutMS: 30000, // 30 seconds timeout for establishing the connection
  socketTimeoutMS: 45000 // 45 seconds timeout for socket operations
};
mongoose.connect(process.env.MONGO_URI,options).then(()=>{
  console.log("successfully connected to DATABASE")});
let personSchema = new Schema ({

  name: {type:String, requried: true},
  age: Number,
  favoriteFoods: Array  
})

let Person = mongoose.model("Person", personSchema);

var createAndSavePerson = function() {
  var person = new Person({name: "Developer", age: 23, favoriteFoods: ["Mì Xào Trứng", "Bún Bò"]});

  person.save()
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.error(err);
    });
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
