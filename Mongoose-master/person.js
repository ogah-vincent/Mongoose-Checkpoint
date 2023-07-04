    const mongoose = require('mongoose');

    const { Schema } = mongoose;

    const personSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number },
    favoriteFoods: [{ type: String }],
    });

    module.exports = {
    Person: mongoose.model('Person', personSchema),
    personSchema: personSchema,
    };