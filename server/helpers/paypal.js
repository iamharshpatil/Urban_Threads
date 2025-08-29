const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AQ1FMfWbQl__hwC6gn0byhlxdWmzwjXZL2pV4YjQcD5gWGglBo2VhdT23_nfjxWNZRdmzua06-y-0eDh",
  client_secret: "AQ1FMfWbQl__hwC6gn0byhlxdWmzwjXZL2pV4YjQcD5gWGglBo2VhdT23_nfjxWNZRdmzua06-y-0eDh",
});

module.exports = paypal;
