const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
    console.log("berhasil");
}).catch((err) => {
    console.log(err);
});

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    color: {
        type: String,
        required: true
    },
    size: 
    [{
        type: String,
        required: true
    }],
    description: {
        type: String,
        required: true,
        maxLength: 100
    },
    condition: {
        type: String,
        enum: ['baru', 'bekas'],
        default: 'baru'
    },
    stock: {
        type: Number,
        min: 0,
        required: true
    },
    availability: {
        online: {
            type: Boolean,
            required: true
        },
        offline: {
            type: Boolean,
            required: true
        }
    }




})

const Product = mongoose.model('Product', productSchema);

// const shirt = new Product({                               
//     "name": "Celana Chino",
//     "brand": "Levi's",
//     "price": 900000,
//     "color": "krem",
//     "size": ["28", "30", "32", "34", "36"],
//     "description": "Celana chino dengan warna yang cerah",
//     "condition": "baru",
//     "stock": 15,
//     "availability": {
//         "online": true,
//         "offline": false
//     }
// })

// shirt.save().then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// })

Product.findOneAndUpdate(
    {name: "Celana Chino"},{
    "name": "Celana Chino",
    "brand": "Levi's",
    "price": 80000,
    "color": "krem",
    "size": ["28", "30", "32", "34", "36"],
    "description": "Celana chino dengan warna yang cerah",
    "condition": "baru",
    "stock": 5,
    "availability": {
        "online": true,
        "offline": true
    }
    },{new: true, runValidators: true}
).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})