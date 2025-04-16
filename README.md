<h1 style="border-bottom: none; margin-bottom: 0px; text-align: center;">Stripe in SaaS</h1>

<p style="margin-top: 0px; text-align: center;">This is a simple SaaS application built with Laravel and React (Inertia.js). It is a basic subscription management system that allows users to subscribe to a plan and manage their subscription.</p>

## Features

- [ ] User Authentication
- [ ] Subscription Management
- [ ] Payment Gateway Integration (Stripe)
- [ ] Admin Dashboard
- [ ] User Management
- [ ] Role-based Access Control
- [ ] Email Notifications

## Prerequisites

- PHP 8.1+
- Node.js 16.14+
- Composer
- npm
- Herd
- Stripe CLI tool https://docs.stripe.com/stripe-cli

## Installation

Step 1: Clone the repository

```bash
git clone https://github.com/tarikulwebx/stripe-integration-in-multi-tenancy.git
```

Step 2: Rename the project as 'stripe-in-saas' because we will run this application using Herd and Herd will use the project name to run the application in http://stripe-in-saas.test. It is necessary step to not run the application in http://localhost:8000. Localhost with port number will not work with stripe webhook.

Step 3: Install dependencies

```bash
composer install
npm install
```

Step 4: Create .env file

```bash
cp .env.example .env
```

Step 5: Generate key

```bash
php artisan key:generate
```

Step 6: Install frontend dependencies

```bash
npm install
```

Step 7: Migrate the database

```bash
php artisan migrate
```

Step 8: Seed the database

```bash
php artisan db:seed
```

Step 9: Run the application

```bash
composer run dev
```

Step 10: Visit the application

```bash
http://stripe-in-saas.test
```

### Stripe Webhook local setup

Step 1: Go to stripe dashboard

```bash
https://dashboard.stripe.com/test
```

Step 2: Copy stripe publishable key and secret key in .env file

```bash
STRIPE_KEY=<the stripe publishable key>
STRIPE_SECRET=<the stripe secret key>
```

Step 3: Setup Stripe CLI https://docs.stripe.com/stripe-cli

Step 4: Run Stripe CLI

```bash
stripe listen --forward-to http://stripe-in-saas.test/stripe/webhook
```

Now, you can see the webhook events in your application.
