const products = require("./products");

function findProductByName(productName) {
  const product = products.find(
    (p) => p.name.toLowerCase() === productName.toLowerCase()
  );

  if (product) {
    console.log(
      `✔ Found: ${product.name} - $${product.price} (${product.category})`
    );
  } else {
    console.log(`Product "${productName}" not found.`);
  }
}

findProductByName("Laptop");
findProductByName("Chair");
findProductByName("Phone");
