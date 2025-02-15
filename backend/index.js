const express = require("express"); 
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const jwt = require('jsonwebtoken');  
const { log } = require("console");

const app = express();
const port = 5000;

// Middleware
// Parse JSON bodies
// app.use  (cors({
//   origin: "http://localhost:3000",  // Allow frontend requests
//   methods: "GET,POST,PUT,DELETE",
//   credentials: true
// })); // uncommented


// Allow multiple origins
const allowedOrigins = ["http://localhost:5173", "http://localhost:3000"];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use(express.json());
// app.use(cors());
app.use(express.json());


// Connect to the database
mongoose
  .connect("mongodb://localhost:27017/expresse", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.error("Database connection error:", err));

// Define Product schema and model
const ProductSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  new_price: { type: Number, required: true },
  old_price: { type: Number, required: true },
  Date: { type: Date, default: Date.now },
  available: { type: Boolean, default: true },
});

const Product = mongoose.model("Product", ProductSchema);

// Image storage engine setup with multer
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 } });

// Serve images statically
app.use("/images", express.static("upload/images"));

// Root endpoint
app.get("/", (req, res) => {
  res.send("App is running");
});

// Endpoint to upload an image
app.post("/upload", upload.single("product"), (req, res) => {
  if (req.file) {
    res.json({
      success: 1,
      image_url: `http://localhost:${port}/images/${req.file.filename}`,
    });
  } else {
    res.status(400).json({ success: 0, message: "Image upload failed" });
  }
});

// Add product endpoint
app.post("/addproduct", async (req, res) => {
 
  try {
    const {id, name, image, category, new_price, old_price } = req.body;

    if (!id||!name || !image || !category || !new_price || !old_price) {
      return res.status(400).json({ success: false, message: "Missing fields" });
    }
 // Check if ID already exists
 const existingProduct = await Product.findOne({ id });
 if (existingProduct) {
   return res.status(400).json({ success: false, message: "ID already exists, choose a different ID" });
 }
    const product = new Product({ id, name, image, category, new_price, old_price });
    
    await product.save();

    res.json({ success: true, message: "Product added successfully", product });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
});

// Remove product endpoint
app.post("/removeproduct", async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ success: false, message: "ID is required" });
    }

    const deletedProduct = await Product.findOneAndDelete({ id });
    if (deletedProduct) {
      res.json({ success: true, message: "Product removed successfully", product: deletedProduct });
    } else {
      res.status(404).json({ success: false, message: "Product not found" });
    }
  } catch (error) {
    console.error("Error removing product:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
});

// Get all products endpoint
app.get("/allproducts", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
});

// Schema for Users model
const Users = mongoose.model('Users', {
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  cartData: { type: Object },
  date: { type: Date, default: Date.now }
});

// Endpoint for registering user
app.post('/signup', async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res.status(400).json({ success: false, message: "Email already exists" });
  }

  let cart = {};  // Initialize as an empty object

  const user = new Users({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,  // Note: In production, hash the password
    cartData: cart
  });

  await user.save();

  const data = {
    user: {
      id: user.id
    }
  };

  const token = jwt.sign(data, 'secret_ecom');
  res.json({ success: true, token });
});

// Create endpoint for user login
app.post('/login', async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = {
        user: {
          id: user.id
        }
      };
      const token = jwt.sign(data, 'secret_ecom');
      res.json({ success: true, token });
    } else {
      res.status(400).json({ success: false, message: "Invalid email or password" });
    }
  } else {
    res.status(400).json({ success: false, message: "Invalid email ID" });
  }
});

//create endpoint for newcollection data
app.get('/newcollections', async (req, res) => {
  let products = await Product.find({});
  let newcollection=products.slice(1).slice(-8);
  console.log("New collection fetched ");
  console.log("Total products found:", products.length);
  res.send(newcollection);
})

//creating endpoint for popular in woman section
app.get('/popularinwoman', async (req, res) => {
  let products = await Product.find({category:"women"});
  let popular_in_women= products.slice(0,4);
  console.log("Popular in women fetched ");
  console.log("Total products found:", products.length);
  res.send(popular_in_women);
})


// Creating endpoint for related products section
app.get('/relatedproducts', async (req, res) => {
  let products = await Product.find({});
  let related_products = products.slice(0, 4);
  console.log("Related products fetched ");
  console.log("Total products found:", products.length);
  res.send(related_products);
});

//create middleware to fetch user 
const fetchUser = async (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
    return res.status(401).send({ errors: "plz authenticate using valid token"})
  }
  else{
    try {
const data = jwt.verify(token,'secret_ecom');
req.user = data.user;
next();
    }
    catch (error) {
res.status(401).send({errors:"plz authenticate using a valid token"})
    }
  }
}

//creating endpoint for adding products in cart data
  app.post('/addtocart', fetchUser, async (req, res) => {
    try {
        console.log("Received request at /addtocart", req.body, req.user);
        console.log("added" , req.body.itemId);
        let userData = await Users.findOne({ _id: req.user.id });

        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Ensure cartData is initialized
        if (!userData.cartData) {
            userData.cartData = {};  // Initialize as an empty object if undefined
        }

        // Ensure item exists in cart before incrementing
        if (!userData.cartData[req.body.itemId]) {
            userData.cartData[req.body.itemId] = 0;
        }

        userData.cartData[req.body.itemId] += 1;

        await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
 
        res.send({ success: true, message: "Product added to cart" });
    } catch (error) {
        console.error("Error adding to cart:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
    
});

//creating endpoint to remove product from cart data
app.post('/removefromcart', fetchUser, async (req, res) => {
  try {
      console.log("Received request at /removefromcart", req.body, req.user);
      console.log("removed" , req.body.itemId);
      
      let userData = await Users.findOne({ _id: req.user.id });
      if (!userData) {
          return res.status(404).json({ success: false, message: "User not found" });
      }
      // Ensure cartData is initialized
      if (!userData.cartData) {
          return res.status(400).json({ success: false, message: "Cart is empty" });
      }
      // Ensure item exists in cart before decrementing
      if (!userData.cartData[req.body.itemId] || userData.cartData[req.body.itemId] === 0) {
          return res.status(400).json({ success: false, message: "Item not found in cart" });
      }
      userData.cartData[req.body.itemId] -= 1;
    
      // If item count reaches zero, remove it from the cart
      if (userData.cartData[req.body.itemId] <= 0) {
          delete userData.cartData[req.body.itemId];
      }
      
      await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData },{new: true});
      res.send({ success: true, message: "Product removed from cart" });
 
}
 catch (error) {
      console.error("Error removing from cart:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
  }
 
});

//creating endpoint to get cart data
app.get('/getcart', fetchUser, async (req, res) => {
  console.log("get cart");
  let userData = await Users.findOne({ _id: req.user.id });
  res.json(userData.cartData);
  
})

// Start the server
app.listen(port, (err) => {
  if (err) {
    console.error("Error starting server:", err);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});

