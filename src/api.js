const carData = [
    {
        "product_id": 1,
        "car_name": "Tesla Model S",
        "car_price": 79999.99,
        "car_image": " https://i.ibb.co/pZr7TGW/pngwing-com-2.png  ",
        "discount_price": 74999.99,
        "category": "electric"
    },
    {
        "product_id": 2,
        "car_name": "Toyota Prius",
        "car_price": 24999.99,
        "car_image": " https://i.ibb.co/HP1Kw0Y/Seek-Png-com-toyota-png-459338.png  ",
        "discount_price": null,
        "category": "hybrid"
    },
    {
        "product_id": 3,
        "car_name": "Porsche 911",
        "car_price": 99999.99,
        "car_image": " https://i.ibb.co/BCR5jWD/Tesla-Model-S-PNG-Photo.png  ",
        "discount_price": 94999.99,
        "category": "sports"
    },
    {
        "product_id": 4,
        "car_name": "Mercedes-Benz S-Class",
        "car_price": 109999.99,
        "car_image": " https://i.ibb.co/HP1Kw0Y/Seek-Png-com-toyota-png-459338.png  ",
        "discount_price": null,
        "category": "luxury"
    },
    {
        "product_id": 5,
        "car_name": "Nissan Leaf",
        "car_price": 31999.99,
        "car_image": " https://i.ibb.co/pZr7TGW/pngwing-com-2.png  ",
        "discount_price": 29999.99,
        "category": "electric"
    },
    {
        "product_id": 6,
        "car_name": "Chevrolet Volt",
        "car_price": 33999.99,
        "car_image": " https://i.ibb.co/BCR5jWD/Tesla-Model-S-PNG-Photo.png  ",
        "discount_price": 31999.99,
        "category": "hybrid"
    },
    {
        "product_id": 7,
        "car_name": "Ford Mustang",
        "car_price": 55999.99,
        "car_image": " https://i.ibb.co/HP1Kw0Y/Seek-Png-com-toyota-png-459338.png  ",
        "discount_price": null,
        "category": "sports"
    },
    {
        "product_id": 8,
        "car_name": "BMW 7 Series",
        "car_price": 85999.99,
        "car_image": " https://i.ibb.co/pZr7TGW/pngwing-com-2.png  ",
        "discount_price": 81999.99,
        "category": "luxury"
    },
    {
        "product_id": 9,
        "car_name": "Audi e-tron",
        "car_price": 65999.99,
        "car_image": " https://i.ibb.co/BCR5jWD/Tesla-Model-S-PNG-Photo.png  ",
        "discount_price": null,
        "category": "electric"
    },
    {
        "product_id": 10,
        "car_name": "Honda Insight",
        "car_price": 24999.99,
        "car_image": " https://i.ibb.co/HP1Kw0Y/Seek-Png-com-toyota-png-459338.png  ",
        "discount_price": 22999.99,
        "category": "hybrid"
    },
    {
        "product_id": 11,
        "car_name": "Chevrolet Camaro",
        "car_price": 40999.99,
        "car_image": " https://i.ibb.co/pZr7TGW/pngwing-com-2.png  ",
        "discount_price": null,
        "category": "sports"
    },
    {
        "product_id": 12,
        "car_name": "Lexus LS",
        "car_price": 74999.99,
        "car_image": " https://i.ibb.co/BCR5jWD/Tesla-Model-S-PNG-Photo.png  ",
        "discount_price": 71999.99,
        "category": "luxury"
    },
    {
        "product_id": 13,
        "car_name": "Hyundai Ioniq",
        "car_price": 27999.99,
        "car_image": " https://i.ibb.co/HP1Kw0Y/Seek-Png-com-toyota-png-459338.png  ",
        "discount_price": null,
        "category": "electric"
    },
    {
        "product_id": 14,
        "car_name": "Kia Niro",
        "car_price": 29999.99,
        "car_image": " https://i.ibb.co/pZr7TGW/pngwing-com-2.png  ",
        "discount_price": 27999.99,
        "category": "hybrid"
    },
    {
        "product_id": 15,
        "car_name": "Ferrari F8",
        "car_price": 279999.99,
        "car_image": " https://i.ibb.co/BCR5jWD/Tesla-Model-S-PNG-Photo.png  ",
        "discount_price": 269999.99,
        "category": "sports"
    },
    {
        "product_id": 16,
        "car_name": "Jaguar XJ",
        "car_price": 84999.99,
        "car_image": " https://i.ibb.co/HP1Kw0Y/Seek-Png-com-toyota-png-459338.png  ",
        "discount_price": null,
        "category": "luxury"
    },
    {
        "product_id": 17,
        "car_name": "Rivian R1T",
        "car_price": 73999.99,
        "car_image": " https://i.ibb.co/pZr7TGW/pngwing-com-2.png  ",
        "discount_price": 69999.99,
        "category": "electric"
    },
    {
        "product_id": 18,
        "car_name": "Volvo XC90 T8",
        "car_price": 65999.99,
        "car_image": " https://i.ibb.co/BCR5jWD/Tesla-Model-S-PNG-Photo.png  ",
        "discount_price": 62999.99,
        "category": "hybrid"
    },
    {
        "product_id": 19,
        "car_name": "Lamborghini Huracan",
        "car_price": 249999.99,
        "car_image": " https://i.ibb.co/HP1Kw0Y/Seek-Png-com-toyota-png-459338.png  ",
        "discount_price": null,
        "category": "sports"
    },
    {
        "product_id": 20,
        "car_name": "Rolls-Royce Ghost",
        "car_price": 319999.99,
        "car_image": " https://i.ibb.co/pZr7TGW/pngwing-com-2.png  ",
        "discount_price": 309999.99,
        "category": "luxury"
    },
    {
        "product_id": 21,
        "car_name": "Lucid Air",
        "car_price": 89999.99,
        "car_image": " https://i.ibb.co/BCR5jWD/Tesla-Model-S-PNG-Photo.png  ",
        "discount_price": 85999.99,
        "category": "electric"
    },
    {
        "product_id": 22,
        "car_name": "Toyota RAV4 Prime",
        "car_price": 41999.99,
        "car_image": " https://i.ibb.co/HP1Kw0Y/Seek-Png-com-toyota-png-459338.png  ",
        "discount_price": null,
        "category": "hybrid"
    },
    {
        "product_id": 23,
        "car_name": "McLaren 720S",
        "car_price": 299999.99,
        "car_image": " https://i.ibb.co/pZr7TGW/pngwing-com-2.png  ",
        "discount_price": 289999.99,
        "category": "sports"
    },
    {
        "product_id": 24,
        "car_name": "Bentley Continental GT",
        "car_price": 219999.99,
        "car_image": " https://i.ibb.co/BCR5jWD/Tesla-Model-S-PNG-Photo.png  ",
        "discount_price": 209999.99,
        "category": "luxury"
    },
    {
        "product_id": 25,
        "car_name": "Polestar 2",
        "car_price": 59999.99,
        "car_image": " https://i.ibb.co/HP1Kw0Y/Seek-Png-com-toyota-png-459338.png  ",
        "discount_price": null,
        "category": "electric"
    },
    {
        "product_id": 26,
        "car_name": "Hyundai Santa Fe Hybrid",
        "car_price": 37999.99,
        "car_image": " https://i.ibb.co/pZr7TGW/pngwing-com-2.png  ",
        "discount_price": 35999.99,
        "category": "hybrid"
    },
    {
        "product_id": 27,
        "car_name": "Aston Martin Vantage",
        "car_price": 149999.99,
        "car_image": " https://i.ibb.co/BCR5jWD/Tesla-Model-S-PNG-Photo.png  ",
        "discount_price": null,
        "category": "sports"
    },
    {
        "product_id": 28,
        "car_name": "Maserati Quattroporte",
        "car_price": 109999.99,
        "car_image": " https://i.ibb.co/HP1Kw0Y/Seek-Png-com-toyota-png-459338.png  ",
        "discount_price": 104999.99,
        "category": "luxury"
    },
    {
        "product_id": 29,
        "car_name": "Volkswagen ID.4",
        "car_price": 40999.99,
        "car_image": " https://i.ibb.co/pZr7TGW/pngwing-com-2.png  ",
        "discount_price": 38999.99,
        "category": "electric"
    },
    {
        "product_id": 30,
        "car_name": "Ford Escape Hybrid",
        "car_price": 33999.99,
        "car_image": " https://i.ibb.co/BCR5jWD/Tesla-Model-S-PNG-Photo.png  ",
        "discount_price": null,
        "category": "hybrid"
    }
]

export default carData