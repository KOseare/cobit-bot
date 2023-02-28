
# Cobit-bot

Cobit-bot is a school project developed to help with covid detection, integrating AI technlogy.

Using an NLP model, this chat-bot brings information about the Covid-19 to help people understand this disease.

You can also perform a test to know if you have probabilities to be infected. Each test is registered in a database (MongoDB) to generate a heat map of posible infections.

This repo serves a build of a React App to test the API.


## Installation

Install the required dependencies with:

```bash
  npm install
```

## Deployment

First, set the Mongo DB url in the .env file to stablish the connection.

Then, to deploy this project in Development mode, run:

```bash
  npm run dev
```

To deploy it in Production mode run:

```bash
  npm start
```

