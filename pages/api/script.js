// ignore this whole thing

const data = require('./get_products').products;
const fs = require('fs');

function createFile() {
  const updatedData = data.results.map((p) => {
    return {
      ...p,
      blob: {
        ...p.blob,
        name: p.title,
        currency: 'usd',
        price: Math.floor(Math.random() * 10000 + Math.random() * 50000),
        image: p.image_url,
        sku: p.id,
      },
    };
  });
  fs.writeFileSync('foo.json', JSON.stringify(updatedData));
}

createFile();
