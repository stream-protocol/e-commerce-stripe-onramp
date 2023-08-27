# StreamPay Onramp
 API Gateway for accepting Solana payments

# E-Commerce Marketplace Accepting USDC

**E-Commerce that Accepts USDC** is a marketplace platform designed for selling products. This platform offers a user-friendly interface for both creators and businesses to monetize their digital content by making it available for purchase to a larger audience. This project, referred to as "Store," aims to empower content creators to showcase their work and establish connections with potential buyers. Moreover, it strives to provide customers with a seamless and convenient purchasing experience.

## Key Features

- **Content Monetization**: Content creators and businesses can easily monetize their digital products by offering them for sale on the platform.

- **User-Friendly Interface**: The store provides an intuitive and easy-to-navigate interface for both creators and customers, enhancing the overall user experience.

- **USDC Payment Integration**: The platform supports USDC payments, allowing customers to make purchases using this popular stablecoin.

- **Product Showcase**: Creators can showcase their products with detailed descriptions, images, and other relevant information.

- **Seamless Purchasing**: Customers can browse, select, and purchase products with just a few clicks, creating a frictionless buying process.

## Getting Started

To get started with the **E-Commerce that Accepts USDC** platform, follow these steps:

## ⚡ Getting Started

<p>Admin</p>
### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/VanKiem-Tran/e-commerce-stripe-onramp.git
```

```shell
cd admin
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB, and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL=''
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
STRIPE_API_KEY=
FRONTEND_STORE_URL=http://localhost:3001
STRIPE_WEBHOOK_SECRET=
```

### Connect to PlanetScale and Push Prisma
```shell
npx prisma generate
npx prisma db push
```


### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |

<hr>
<p>E-commerce Store</p>
## MAKE SURE YOU HAVE ADMIN SETUP FIRST!
### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/stream-protocol/streampay-onramp.git
```

```shell
cd ecommerce-store
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_API_URL=
```


### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |


<hr>

## 👉 Features

 - **User Interface (UI)**: The admin dashboard and web user will be built using StreamPayments UI, providing a modern and intuitive user interface for easy navigation and management of the CMS.

 - **CMS, Admin, and API Functionality**: The admin dashboard will serve as a comprehensive solution by combining content management system (CMS), administrative tasks, and API generation capabilities in one platform.

 - **Multi-Vendor/Store Management**: With this CMS, you can efficiently manage multiple vendors or stores within a single interface. For example, you can have separate sections for a "Shoe store," "Laptop store," and "Suit store." Each store's data will be organized individually with dedicated API routes generated automatically.

 - **Category Management**: You can create, update, and delete categories to organize your products effectively. This feature allows for easy categorization of items based on their types or attributes.

 - **Product Management**: Easily handle product-related tasks such as creating new products, updating existing ones with details like name, description, price, etc., as well as deleting products when necessary.

 - **Image Uploads & Customization**: Users can upload multiple images per product and change them whenever required to showcase different views or variants of the item.

 - **Filter Creation & Integration:**: Create custom filters such as "Color" or "Size" that align with your specific product attributes. These filters can then be seamlessly integrated into the product creation form for efficient matching during search queries.

 - **Comprehensive Search Functionality**: A powerful search feature allows users to explore through all categories along with their associated products' sizes/colors/billboards. The search results are presented with pagination for easy navigation.

 - **Featured Products**: Highlight specific products by marking them as "featured" so that they appear on the homepage or other prominent sections of your website, increasing their visibility to potential customers.

 - **Order Management**: Access and track all orders placed through the system, providing a comprehensive overview of sales and customer transactions.

 - **Revenue Analytics**: Visualize revenue data through graphs and charts, enabling you to analyze sales performance over time and make informed business decisions based on this information.

 - **Stripe Checkout Integration with USDC**: Seamlessly integrate with Stripe Checkout, a popular payment gateway, to enable smooth and secure online transactions for your customers. Users can easily make payments using various payment methods supported by Stripe.

 - **MySQL + Prisma + PlanetScale**: Utilize MySQL as the database management system along with Prisma ORM (Object-Relational Mapping) for efficient data modeling and querying capabilities. Leverage PlanetScale's distributed SQL database platform for scalability and high availability of your data storage infrastructure.

<hr>

## 🔧 Technologies Used

The project utilizes the following technologies and dependencies:

- **stripe/crypto** The Stripe fiat-to-crypto onramp enables individuals to securely purchase cryptocurrencies directly from your platform or Dapp at the time of checkout. The onramp is fully customizable and you can integrate it into your product or service. Stripe acts as the merchant of record for these onramp transactions and takes full liability for all fraud and disputes. Stripe also handles all regulatory requirements, know-your-customer (KYC) verifications, and sanctions screening. Customers have the option of saving payment methods, KYC data, and wallet information with Stripe, which makes the returning onramp experience much faster.

- **Next 13 (App Router)** Version 13 of Next.js, which includes the new App Router feature for client-side navigation within the application. This allows for smoother transitions between pages without full-page reloads.

- **Tailwind CSS** Is a highly customizable CSS framework that offers utility classes for rapid UI development.

- **Prisma** An open-source database toolkit that simplifies database access with its type-safe query builder, schema migrations, and data modeling features.

- **TypeScript** A statically typed superset of JavaScript that helps catch errors during development and improves code maintainability.

- **MySQL** An open-source relational database management system used to store structured data efficiently.

- **@clerk/nextjs** Clerk is a user authentication and identity management solution. The "@clerk/nextjs" package provides integration with Next.js, allowing you to easily implement authentication features like login, logout, and role-based access control in your application.

- **recharts** Recharts is a charting library for React that offers a wide range of customizable charts such as line charts, bar charts, pie charts, etc. It allows you to visualize data in an interactive and visually appealing way.

- **zustand** Zustand is a state management library for React applications that offers a lightweight yet powerful alternative to Redux or MobX by leveraging hooks and functional programming concepts.

<hr>

## How Stripe fiat-to-crypto onramp is being used

On the Store website, the **Stripe fiat-to-crypto onramp** is utilized to facilitate the payment process and enable seamless transactions for purchasing digital content.

- Install the SDK and client library.

- Generate a crypto onramp session on your backend.

- Render the onramp UI on your website.

- View your integration’s usage on the Stripe Dashboard.

1. Install the SDK and client library

```sh
npm install --save @stripe/stripe-js @stripe/crypto
```

2. Generate a crypto onramp session

```sh
curl -X POST https://api.stripe.com/v1/crypto/onramp_sessions \
  -u sk_test_51NXOHdARfU5KPLlVvSdDo9Y0zQXLkfS1vMj3AhYNU8A22W7rprb5YJTCDNfgaQeAl58yzZ8mMa3eBUD3EEWpdZiC00LD2YWcQA:
  # this secret key is from step 1
```

3. Render the Onramp UI

```sh
# App.jsx
import {loadStripeOnramp} from '@stripe/crypto';

import {CryptoElements, OnrampElement} from './StripeCryptoElements';

const stripeOnrampPromise = loadStripeOnramp("pk_test_51NXOHdARfU5KPLlVkKLfC8cLyGoElI4ruwGVRhpKLb49CYPRicAYBj1fPT6VFlQHK8US7tYKhxYqKdErqdY6iNFA00jHYWcJhr");

export default () => {
  // IMPORTANT: replace with your logic of how to mint/retrieve client secret
  const clientSecret = "cos_1Lb6vsAY1pjOSNXVWF3nUtkV_secret_8fuPvTzBaxj3XRh14C6tqvdl600rpW7hG4G";

  return (
    <CryptoElements stripeOnramp={stripeOnrampPromise}>
      <OnrampElement clientSecret={clientSecret} />
    </CryptoElements>
  );
}
# StripeCryptoElements.jsx
import React, { ReactNode } from 'react';

// ReactContext to simplify access of StripeOnramp object
const CryptoElementsContext = React.createContext(null);

export const CryptoElements = ({
  stripeOnramp,
  children,
}) => {
  const [ctx, setContext] = React.useState(() => ({ onramp: null }));

  React.useEffect(() => {
    let isMounted = true;

    Promise.resolve(stripeOnramp).then((onramp) => {
      if (onramp && isMounted) {
        setContext((ctx) => (ctx.onramp ? ctx : { onramp }));
      }
    });

    return () => {
      isMounted = false;
    };
  }, [stripeOnramp]);

  return (
    <CryptoElementsContext.Provider value={ctx}>
      {children}
    </CryptoElementsContext.Provider>
  );
};

// React hook to get StripeOnramp from context
export const useStripeOnramp = () => {
  const context = React.useContext(CryptoElementsContext);
  return context?.onramp;
};

// React element to render Onramp UI
export const OnrampElement = ({
  clientSecret,
  appearance,
  ...props
}) => {
  const stripeOnramp = useStripeOnramp();
  const onrampElementRef = React.useRef(null);

  React.useEffect(() => {
    const containerRef = onrampElementRef.current;
    if (containerRef) {
      containerRef.innerHTML = '';

      if (clientSecret && stripeOnramp) {
        stripeOnramp
          .createSession({
            clientSecret,
            appearance,
          })
          .mount(containerRef)
      }
    }
  }, [clientSecret, stripeOnramp]);

  return <div {...props} ref={onrampElementRef}></div>;
};
```

After running the script, the onramp renders the following:

 <img src="https://b.stripecdn.com/docs-statics-srv/assets/crypto-onramp-integrate-result.39ac3fbc71204497b33e2c0c849e823f.png" alt="demo" />

 4. View your integration's usage on the Stripe Dashboard

After you’ve launched the Crypto Onramp, you can view customized usage reports in the Stripe Dashboard.

<hr>

## 🧑‍🤝‍🧑 Contribution 

Contributions to the repository are welcome!

If you would like to contribute to the project, please follow these steps:

```sh
Fork the repository.

Create a new branch for your feature or bug fix: git checkout -b my-feature.

Make your changes and commit them: git commit -m "Add my feature".

Push to the branch: git push origin my-feature.

Open a pull request in the main repository.

Please ensure that your code follows the project's coding style and conventions.

Additionally, write clear commit messages and provide a detailed description in your pull request to facilitate the review process.
```

<hr>

## ©️ License 

The e-commerce project is licensed under the MIT License. You are free to use, modify, and distribute the codebase in accordance with the terms and conditions of the license.

<hr>

## ☎️ Contact  

If you have any questions, suggestions, or feedback regarding E-Commerce that Accepts USDC, feel free to contact us at `contact@streamprotocol.org`. I appreciate your interest in the project and will get back to you as soon as possible.

Thank you for your interest in E-Commerce that Accepts USDC. I hope you find the platform useful for selling and monetizing your digital content. Happy selling!
