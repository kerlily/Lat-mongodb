const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
    console.log("berhasil");
}).catch((err) => {
    console.log(err);
});

const personSchema = mongoose.Schema({
    first_name: String,
    last_name: String
})

personSchema.virtual('fullname').get(function () {
    return this.first_name + ' ' + this.last_name
})

personSchema.pre('save',async function (next) {
    this.first_name = "luna"
    this.last_name = "lontong"
    console.log('persiapan menyimpan data');
})

personSchema.post('save',async function (next) {
    console.log('data berhasil disimpan');
})

const Person = mongoose.model('Person', personSchema);

const person = new Person({
    first_name: 'ron',
    last_name: 'weasley'
})

console.log(person)
person.save().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});