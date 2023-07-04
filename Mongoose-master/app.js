require('dotenv').config()
const { MongoClient } = require('mongodb');

const mongoose = require("mongoose")
const { Person, personSchema } = require('./person');



mongoose.connect(process.env.DATABASE_URL);
const client = new MongoClient(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function () {
console.log('Connected successfully to database');


// const A = new Person({
//      name: 'Moyin',
//      age: 19,
//      favoriteFoods: ['Rice', 'Beans', 'Yam'],
//    });
const people = client.db("moyindb").collection("people");
//   try {
//     await A.save();
//     console.log('New person saved to database');
//   } catch (error) {
//     console.error(error);
//   }


//   try {
//     const persons = await Person.find({});
//     console.log('All persons in the database:', persons);
//   } catch (error) {
//     console.error(error);
//   }


//   try {
//     const person = await Person.findOne({ name: 'Moyin' });
//     console.log('Person found by name:', person);
//   } catch (error) {
//     console.error(error);
//   }


//   try {
//     const updatedPerson = await Person.findOneAndUpdate(
//       { name: 'Moyin' },
//       { age: 20 },
//       { new: true },
//     );
//     console.log('Updated person:', updatedPerson);
//   } catch (error) {
//     console.error(error);
//   }

//   try {
//const deletedPerson = await Person.findOneAndDelete({ name: 'Moyin' });
//console.log('Deleted person:', deletedPerson);
//   } catch (error) {
//     console.error(error);
//   }
//   const id = '64386be8c0e896ffb68cac57'; 

//   try {
//     const doc = await Person.findById(id);
//     console.log(doc);
//   } catch (err) {
//     console.error(err);
//   };

//   try {
//     const personId = '64387ddfcde6613faf16ebc9';
//     const person = await Person.findById(personId);
//     if (person) {
//       person.favoriteFoods.push("hamburger");
//       await person.save();
//       console.log(person);
//     } else {
//       console.log(`Person with ID ${personId} not found.`);
//     }
//   } catch (err) {
//     console.error(err);
//   };
//   try {
//     const personName = 'Dorcas';
//     const updatedPerson = await Person.findOneAndUpdate(
//       { name: personName },
//       { age: 20 },
//       { new: true }
//     );
//     console.log(updatedPerson);
//   } catch (err) {
//     console.error(err);
//   };
// try {
//     const personId = '64387ebec393903a51e912ab';
//     const deletedPerson = await Person.findByIdAndRemove(personId);
//     console.log(deletedPerson);
//   } catch (err) {
//     console.error(err);
//   };
//   try {
//     const personId = '64387ebec393903a51e912ab';
//     const deletedPerson = await Person.findByIdAndRemove(personId);
//     if (!deletedPerson) {
//       console.log(`Person with _id ${personId} not found`);
//     } else {
//       console.log(`Person with _id ${personId} has been deleted`);
//     }
//   } catch (err) {
//     console.error(err);
//   };
// try {
//     const result = await Person.deleteMany({ name: "Mujeeb" });
//     console.log(result);
//   } catch (err) {
//     console.error(err);
//   }
// try {
//     const result = await Person.find({ favoriteFoods: 'pizza' })
//       .sort('name')
//       .limit(2)
//       .select('age')
//       .exec();
//     console.log(result);
//   } catch (err) {
//     console.error(err);
//   }






// Close the database connection
//   db.close();
});