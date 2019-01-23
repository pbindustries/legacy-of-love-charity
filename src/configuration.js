const CONFIGURATION = {
  themeColor: '#134896',

  // Funding Goal
  goal: '75000', // adjustable during funding campaign
  currency: 'USD', // shouldn't ne adjusted during funding compaing (find supported currencies at https://stripe.com/docs/currencies)

  // Checkout Form
  checkoutTitle: 'Thank you for your support!',
  checkoutDescription: 'Legacy of Love Donation', // will show up in your Stripe payment dashboard too
  checkoutButtonLabel: 'Donate',
  callToAction: 'Donate Now!',
  defaultAmount: 25
};

export default CONFIGURATION;
