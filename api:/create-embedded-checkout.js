import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Méthode non autorisée' });
    }

    try {
        const { items } = req.body;

        if (!items || items.length === 0) {
            return res.status(400).json({ error: "Panier vide" });
        }

        const line_items = items.map(item => ({
            price_data: {
                currency: 'eur',
                product_data: {
                    name: item.name,
                },
                unit_amount: Math.round(item.price * 100),
            },
            quantity: 1,
        }));

        const session = await stripe.checkout.sessions.create({
            ui_mode: 'embedded',
            line_items,
            mode: 'payment',
            return_url: 'https://ton-site.com/', // ← À changer plus tard par ton vrai domaine
        });

        res.status(200).json({ clientSecret: session.client_secret });
    } catch (error) {
        console.error("Erreur Stripe :", error);
        res.status(500).json({ error: error.message });
    }
}