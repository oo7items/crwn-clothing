import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51Hml3TDpLiUxWOGQLSIOwSoG9XwXwZPXNdf4JDIWIKoFcSIXMao1kU7cO1rz0wVHKm30r09lEVtnKWIxlDZoPu8S00RJVJNNQu';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Lta.'
            billingAddress
            shiippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panellabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}
        />
    );
};

export default StripeCheckoutButton;
