exports.getCount = function(req, res, next) {
    res.send({
        count: 100
    })
};

exports.getAllProducts = (req, res, next) => {
    res.send({
        products: [
            {
                name: 'samsung',
                description: "samsung mobile",
                productImages: [],
                price: 19000,
                offers: null,
                quantity: 130,
                reviews: 5,
                category: 'mobiles',
                created: new Date(),
            },
            {
                name: 'apple',
                description: "apple mobile",
                productImages: [],
                price: 72000,
                offers: null,
                quantity: 50,
                reviews: 5,
                category: 'mobiles',
                created: new Date(),
            }
        ]
    })
};

exports.createProduct = (req, res, next) => {
    const {
        name,
        description,
        productImages,
        price,
        offers,
        quantity,
        category,
    } = req.body;

    res.send({
        msg: "product created!!"
    })
}

