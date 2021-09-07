import React, { useState } from "react";
import {
  icons,
  images,
  SIZES,
  COLORS,
  FONTS,
  localhost,
} from "../../../constants/index";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";

//ADD localhost address of your server
// const API_URL = "http://localhost:3000";

const StripeApp = () => {
  // const [name, setName] = useState("");
  const [email, setEmail] = useState();
  const [cardDetails, setCardDetails] = useState();
  const { confirmPayment, loading } = useConfirmPayment();

  // const fetchPaymentIntentClientSecret = async () => {
  //   console.log("ddddddddd");
  //   console.log(localhost);
  //   const response = await fetch(localhost + "/payment/create-payment-intent", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       paymentMethodtype: 'card',
  //       currency: 'usd'
  //     })
  //   });
  //   const { clientSecret, error } = await response.json();
  //   return { clientSecret, error };
  // };
w
  const handlePayPress = async () => {
    const response = await fetch(localhost + "/payment/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        paymentMethodType: "card",
        currency: "usd",
      }),
    });
    const { clientsecret } = await response.json();

    const { error, paymentIntent } = await confirmPayment(clientsecret, {
      type: "Card",
      billingDetails: { email },
    });

    if (error) {
      console.log("sssssss");
      console.log("ErroR::::::::", error.message);
      alert(`Payment Confirmation Error ${error.message}`);
    } else if (paymentIntent) {
      alert("Payment Successful");
      console.log("Payment successful ", paymentIntent);
    }

    // //1.Gather the customer's billing information (e.g., email)
    // if (!cardDetails?.complete || !email) {
    //   Alert.alert("Please enter Complete card details and Email");
    //   return;
    // }
    // const billingDetails = {
    //   email: email,
    // };
    // //2.Fetch the intent client secret from the backend
    // try {
    //   const { clientsecret, error } = await fetchPaymentIntentClientSecret();
    //   //2. confirm the payment
    //   if (error) {
    //     console.log("Unable to process payment");
    //   } else {
    //     const { paymentIntent, error } = await confirmPayment(clientsecret, {
    //       type: "Card",
    //       billingDetails: billingDetails,
    //     });
    // if (error) {
    //     console.log('sssssss');
    //   console.log("ErroR::::::::", error.message);
    //   alert(`Payment Confirmation Error ${error.message}`);
    // } else if (paymentIntent) {
    //   alert("Payment Successful");
    //   console.log("Payment successful ", paymentIntent);
    // }
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
    //3.Confirm the payment with the card details
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="E-mail"
        keyboardType="email-address"
        onChange={(value) => setEmail(value.nativeEvent.text)}
        style={styles.input}
      />
      <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: "4242 4242 4242 4242",
        }}
        cardStyle={styles.card}
        style={styles.cardContainer}
        onCardChange={(cardDetails) => {
          setCardDetails(cardDetails);
        }}
      />
      <Button onPress={handlePayPress} title="Pay" disabled={loading} />
    </View>
  );
};
export default StripeApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 20,
  },
  input: {
    backgroundColor: "#efefefef",

    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,
  },
  card: {
    backgroundColor: "#efefefef",
  },
  cardContainer: {
    height: 50,
    marginVertical: 30,
  },
});
