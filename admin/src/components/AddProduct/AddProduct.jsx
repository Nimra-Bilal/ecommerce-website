
// import { useState } from "react";

// const AddProduct = () => {
//     const [productDetails, setProductDetails] = useState({
//         id: "",
//         name: "",
//         category: "women",
//         new_price: "",
//         old_price: "",
//         image: null
//     });

//     const handleChange = (e) => {
//         setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
//     };

//     const handleImageChange = (e) => {
//         setProductDetails({ ...productDetails, image: e.target.files[0] });
//     };

//     const Add_Product = async (e) => {
//         e.preventDefault(); // Prevent page reload

//         console.log("Uploading Image...");
//         let formData = new FormData();
//         formData.append("product", productDetails.image);

//         // Upload Image
//         let uploadResponse = await fetch("http://localhost:5000/upload", {
//             method: "POST",
//             body: formData,
//             credentials: "include",
//         });

//         let uploadData = await uploadResponse.json();
//         if (!uploadData.success) {
//             console.error("Image upload failed:", uploadData.message);
//             return;
//         }

//         console.log("Image uploaded:", uploadData.image_url);

//         // Validate Fields Before Sending
//         if (!productDetails.category?.trim()) {
//             alert("Category cannot be empty!");
//             return;
//         }

//         let product = {
//             id: productDetails.id || "0", // Ensure an ID is provided
//             name: productDetails.name || "Unnamed Product",
//             image: uploadData.image_url,
//             category: productDetails.category.trim(),
//             new_price: productDetails.new_price || "0",
//             old_price: productDetails.old_price || "0",
//         };

//         console.log("Sending data to backend:", product);

//         try {
//             let response = await fetch("http://localhost:5000/addproduct", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(product),
//                 credentials: "include",
//             });

//             let responseData = await response.json();

//             if (responseData.success) {
//                 console.log("Product added:", responseData.product);
//                 alert("Product added successfully!");
//             } else {
//                 console.error("Error adding product:", responseData.message);
//                 alert("Failed to add product!");
//             }
//         } catch (error) {
//             console.error("An error occurred while adding the product:", error);
//             alert("Error while adding product. Please try again.");
//         }
//     };

//     return (
//         <form onSubmit={Add_Product}>
//             <input type="text" name="id" value={productDetails.id} onChange={handleChange} placeholder="Product ID" />
//             <input type="text" name="name" value={productDetails.name} onChange={handleChange} placeholder="Product Name" />
//             <input type="text" name="category" value={productDetails.category} onChange={handleChange} placeholder="Category" />
//             <input type="number" name="new_price" value={productDetails.new_price} onChange={handleChange} placeholder="New Price" />
//             <input type="number" name="old_price" value={productDetails.old_price} onChange={handleChange} placeholder="Old Price" />
//             <input type="file" onChange={handleImageChange} />
//             <button type="submit">Add Product</button>
//         </form>
//     );
// };

// export default AddProduct; // bilkulllll chlta hua code 


import { useState } from "react";
//used use state to store product details , usestate will save details when user enters them
const AddProduct = () => {
    const [productDetails, setProductDetails] = useState({
        id: "",
        name: "",
        category: "women",
        new_price: "",
        old_price: "",
        image: null
    });

//inputfield's field's changes handled here
    const handleChange = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    }; 
    //e.target.name is fieldname and e.target.value is the name of product to be stored

//it selects the very first selected file
    const handleImageChange = (e) => {
        setProductDetails({ ...productDetails, image: e.target.files[0] });
    }; 
//if you select photo.jpg , then productDetails.image = photo.jpg


    const Add_Product = async (e) => {
        e.preventDefault(); //prevents page reloading
        console.log("Uploading Image...");
        let formData = new FormData();
        formData.append("product", productDetails.image);
//product is name of field for backend , append function for sending data to backend

        let uploadResponse = await fetch("http://localhost:5000/upload", {
            method: "POST",
            body: formData,
            credentials: "include", 
            //if authentication is required
        });

        //Server response is converted to JSON 
        let uploadData = await uploadResponse.json();
        if (!uploadData.success) {
            console.error("Image upload failed:", uploadData.message);
            return;
        }

        console.log("Image uploaded:", uploadData.image_url);

        let product = {
            id: productDetails.id || "0",
            name: productDetails.name || "Unnamed Product",
            image: uploadData.image_url,
            category: productDetails.category.trim(),
            //trim used to remove leading and trailing space for consistent data 
            new_price: productDetails.new_price || "0",
            old_price: productDetails.old_price || "0",
        };

        console.log("Sending data to backend:", product);

        try {
            let response = await fetch("http://localhost:5000/addproduct", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(product),
                //to convert to JSON format
                credentials: "include",
            });

            //checking server response
            let responseData = await response.json();
            if (responseData.success) {
                console.log("Product added:", responseData.product);
                alert("Product added successfully!");
            } else {
                console.error("Error adding product:", responseData.message);
                alert("Failed to add product!");
            }
        } catch (error) {
            console.error("An error occurred while adding the product:", error);
            alert("Error while adding product. Please try again.");
        }
    };

    return (
        <div className="addproduct">
            <form onSubmit={Add_Product}>
                <div className="addproduct-itemfield">
                    <p>Product ID</p>
                    <input value={productDetails.id} onChange={handleChange} type="text" name="id" placeholder="type here ..." />
                </div>
                <div className="addproduct-itemfield">
                    <p>Product Title</p>
                    <input value={productDetails.name} onChange={handleChange} type="text" name="name" placeholder="type here ..." />
                </div>
                <div className="addproduct-price">
                    <div className="addproduct-itemfield">
                        <p>Price</p>
                        <input value={productDetails.old_price} onChange={handleChange} type="text" name="old_price" placeholder="type here ..." />
                    </div>
                </div>
                <div className="addproduct-price">
                    <div className="addproduct-itemfield">
                        <p>Offer Price</p>
                        <input value={productDetails.new_price} onChange={handleChange} type="text" name="new_price" placeholder="type here ..." />
                    </div>
                </div>
                <div className="addproduct-itemfield">
                    <p>Product Category</p>
                    <select value={productDetails.category} onChange={handleChange} name="category" className="add-product-selector">
                        <option value="women">Women</option>
                        <option value="men">Men</option>
                        <option value="kid">Kid</option>
                    </select>
                </div>
    
                  <div className="addproduct-itemfield">
    <p>Product Image</p>
    <label htmlFor="file-input" style={{ cursor: "pointer" }}>
        {productDetails.image ? (
            <img 
                src={URL.createObjectURL(productDetails.image)} 
                className="addproduct-thumbnail-img" 
                alt="Preview"
            />
        ) : (
            <p>Click to upload image</p> // Placeholder text
        )}
    </label>
    <input 
        onChange={handleImageChange} 
        type="file" 
        id="file-input" 
        name="image" 
        accept="image/*" 
        style={{ display: "none" }} // Hide actual input
    />
</div>
               
                <button type="submit" className="addproduct-button">ADD</button>
            </form>
        </div>
    );
};

export default AddProduct;




