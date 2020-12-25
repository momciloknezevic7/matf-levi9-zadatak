const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// Collection with all products in store
products = new Map()

products.set(0, { naziv: 'Sir', opis: 'Mlecni proizvod' })
products.set(1, { naziv: 'Mirodjija', opis: 'Zacin' })
products.set(2, { naziv: 'Smoki', opis: 'Slano' })
products.set(3, { naziv: 'Cokolada', opis: 'Slatko' })
products.set(4, { naziv: 'Plazma', opis: 'Slatko' })
products.set(5, { naziv: 'Sok', opis: 'Pice'})



// Convert products to JSON format 
function createJSONData() {
    let data = {}

    for (const [key, value] of products)
        data[key] = value

    return data;
}



// For showing all products that I have in store right now(in JSON format)
app.get('/admin/proizvodi', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(createJSONData())
})

// Adding new product in map
app.post('/admin/unos-novog-proizvoda', (req, res) => {
    // Enter info about new product
    let naziv = req.body.naziv;
    let opis  = req.body.opis;

    res.setHeader("Access-Control-Allow-Origin", "*"); 

    products.set(
        products.size,      // id
        {                   // (naziv, opis)
            naziv: naziv,
            opis: opis
        }
    );

    // Updated list of products 
    res.send(createJSONData());

})



// Deleting product using id
app.delete('/admin/proizvodi', (req, res) => {

    let id = req.body.id;
    products.delete(id)

    // Remaining products
    data = createJSONData();
    res.send(data)
})





app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})