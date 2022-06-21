const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./routes/product-routes');
const authRoutes = require('./routes/auth-routes');
const PORT = 4009;


// define the express app container
const app = express();

// middlewares
// app.use(cors);
app.use(bodyParser.json())
app.use('/api/auth', authRoutes)
app.use('/api/product', productRoutes);

// user -> http req -> nodejs server -> express -> middleware(app.use) -> mylogic (controller) -> send response back -> user




// Route - way to define the path to access particular resource
// Http - GET, POST, PUT/PATCH, DELETE
// MVC - Model View Controller

/**
 * E-commerce
 *  - auth-routes
 *  - product-routes
 *  - categories-routes
 *  - cart-routes
 */

app.listen(PORT, () => {
    console.log("Server is Listening: @", PORT);
})