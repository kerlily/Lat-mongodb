const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movie_db')
    .then(() => {
    console.log("berhasil");
}).catch((err) => {
    console.log(err);
});

const movieSchema = new mongoose.Schema({
    tittle: String,
    genre: String,
    year: Number,
    rating: Number,
    director: String
}, {versionKey: false})

const Movie = mongoose.model('Movie', movieSchema);

// const movie = new Movie({
//     tittle: 'The Shawshank Redemption',
//     year: 1994,
//     rating: 9.2,
//     director: 'Frank Darabont',
// });

// Movie.insertMany([	{
//     "tittle": "Joker",
//     "genre": "Crime",
//     "director": "Todd Phillips",
//     "year": 2019,
//     "rating": 8.4,
// },
// {
//     "tittle": "Parasite",
//     "genre": "Drama",
//     "director": "Bong Joon Ho",
//     "year": 2019,
//     "rating": 8.6,
// },
// {
//     "tittle": "Spider-Man: Into the Spider-Verse",
//     "genre": "Animation",
//     "director": "Bob Persichetti, Peter Ramsey, Rodney Rothman",
//     "year": 2018,
//     "rating": 8.4,
// }])
// .then((result) => {
//     console.log('it works')
//     // console.log(result)
// }).catch((err) => {
//     console.log(err)
// });

// Movie.save();
// console.log(movie); 

// Movie.findById( '6798f4e9cd488c5ef6e5de53').then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

// update one 
// Movie.findByIdAndUpdate({ _id: '679b758d89e28b9fc55da9d0'}, { rating: 9 }, { new: true }).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

// delete one
Movie.findByIdAndDelete('679b758d89e28b9fc55da9d0').then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});