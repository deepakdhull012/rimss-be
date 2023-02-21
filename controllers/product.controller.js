
const fileSystem = require('fs');

function fetchByCategory(req, res, next) {
  try {
    console.error("req", req)
    let matchingProducts = readProducts();
    if (req.body?.category?.length) {
        matchingProducts = filterByCategory(matchingProducts, req.body.category);
    }
    
    res.json(matchingProducts);
    
  } catch (err) {
    console.error(`Error while login`, err.message);
    next(err);
  }
}

function readProducts() {
    const dbRaw = fileSystem.readFileSync('./db.json');  
    const products = JSON.parse(dbRaw).products
    return products;
}

function filterByCategory(products,category) {
    return products.filter(product => {
        const allCatMatches = category?.every(cat => {
            product.productCategory = product.productCategory?.map(pCat => pCat.toLowerCase());
            return product.productCategory?.includes(cat?.toLowerCase());
            
        })
        return allCatMatches;
    });
}

module.exports = {
  fetchByCategory
}