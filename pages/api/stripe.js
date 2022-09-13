import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        /*discounts: [{
          coupon: 'MAMASITA',
          code: '',
        }],*/
        payment_method_types: ['card'],
        billing_address_collection: 'required',
        phone_number_collection: {
          enabled: true,
        },
        shipping_options: [
          { shipping_rate: 'shr_1LgVItDo11d76qd2VTxJ7rZW' },
          /*{ shipping_rate: 'shr_1LPtPaDo11d76qd2y3w0S4vq' },*/
        ],
        line_items: req.body.map((item) => {
          const img = item.image[0].asset._ref;
          const newImage = img.replace('image-', 'https://cdn.sanity.io/images/5ui6vxv8/production2/').replace('-webp', '.webp');

          return {
            price_data: { 
              currency: 'MXN',
              product_data: { 
                name: item.name
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled:true,
              minimum: 1,
            },
            quantity: item.quantity
          }
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/`,
      }

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);

      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}