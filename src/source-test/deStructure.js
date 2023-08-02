const response = {
  paymentIntent: {
    client_secret: "abcde1234",
  },
};

const {
  paymentIntent: { client_secret },
} = response;

console.log(client_secret);
