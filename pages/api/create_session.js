const stripe = require('stripe')(process.env.STRIPE_API_SECRET);
const queryRepeatableDocuments =
  require('../../queries').queryRepeatableDocuments;

const validateCartItems =
  require('use-shopping-cart/utilities').validateCartItems;

export default async (req, res) => {
  const productJSON = req.body;

  const products = await queryRepeatableDocuments(
    (docs) => docs.type === 'products'
  );

  const inventorySrc = products[0].data.productcatalog.map((p) => {
    return {
      ...p.product,
      name: p.product.title,
      sku: p.product.sku.toString(),
      price: 10000,
      image: p.product.image_url,
      currency: 'usd',
    };
  });

  const line_items = validateCartItems(inventorySrc, productJSON);

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    billing_address_collection: 'auto',
    shipping_address_collection: {
      allowed_countries: ['US', 'CA'],
    },
    success_url: `${process.env.URL}/success.html`,
    cancel_url: process.env.URL,
    line_items,
  });

  res.status(200).json({ sessionId: session.id });
};

// try {
//   const productJSON = JSON.parse(event.body);

//   // const line_items = validateCartItems(inventory, productJSON);

//   const line_items = getCheckoutData(productJSON);

// const session = await stripe.checkout.sessions.create({
//   mode: 'payment',
//   payment_method_types: ['card'],
//   billing_address_collection: 'auto',
//   shipping_address_collection: {
//     allowed_countries: ['US', 'CA'],
//   },
//   success_url: `${process.env.URL}/success.html`,
//   cancel_url: process.env.URL,
//   line_items,
// });

//   return {
//     statusCode: 200,
//     body: JSON.stringify({ sessionId: session.id }),
//   };
// } catch (error) {
//   console.error(error);
// }
