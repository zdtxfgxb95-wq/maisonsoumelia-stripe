# Backend Stripe Vercel - MaisonSoumélia

## Déploiement (ultra simple) :

1. Va sur https://vercel.com
2. Connecte-toi avec GitHub (ou crée un compte)
3. Clique sur **"New Project"**
4. Glisse-dépose tout le dossier `maisonsoumelia-stripe-vercel` ou connecte un repo GitHub
5. Dans les **Environment Variables**, ajoute :
   - Clé : `STRIPE_SECRET_KEY`
   - Valeur : ta clé secrète Stripe (`sk_live_...`)
6. Clique sur Deploy

Vercel te donnera une URL du style :  
`https://maisonsoumelia-stripe.vercel.app`

C’est tout !