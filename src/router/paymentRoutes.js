const express = require('express');
const router = express.Router();
const stripe = require('stripe')(
    'sk_test_51NLukIDJpb5c4dYONtHVhJLGKSM2Ix8GwoNsdXOjWldccx0cpizF5n6gwq7umViQXkW1gpl7DUC5RMXfXjloyMAY00xoTsfhCF'
);

router.post('/intents', async (req, res) => {
    try {
        const paymentIntent =  await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: 'usd',
            automatic_payment_methods: {
                enabled: true,
            }
        });

        res.json({ paymentIntent: paymentIntent.client_secret });
    } catch (e) {
        res.status(400).json({
            error: e.message,
        });
    }
});

module.exports = router;