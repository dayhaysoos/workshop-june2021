const stripe = require('stripe')(process.env.STRIPE_API_SECRET);
const queryRepeatableDocuments =
  require('../../queries').queryRepeatableDocuments;

const validateCartItems =
  require('use-shopping-cart/utilities/serverless').validateCartItems;

export default async (req, res) => {
  const productJSON = req.body;

  const collection = await queryRepeatableDocuments(
    (docs) => docs.type === 'product_collection'
  );

  const inventorySrc = collection[0].data.products.map((p) => {
    const { product } = p;
    return { ...product, description: p.description };
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
