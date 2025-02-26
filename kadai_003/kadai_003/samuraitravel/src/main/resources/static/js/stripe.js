const stripe = Stripe('pk_test_51QmRadGdLGuhtS25O1z7Et4BUcGwP2prbHHx2zmUOY4p63zt9aWKrcrag4c7YbpD2DM8S2Zfpkt5OaJP1kdOjA3000g1DnTNof');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
});