import React, { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"

const buttonStyles = {
    fontSize: "13px",
    textAlign: "center",
    color: "#000",
    padding: "12px 60px",
    boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
    backgroundColor: "rgb(255, 178, 56)",
    borderRadius: "6px",
    letterSpacing: "1.5px",
  }
  
  const buttonDisabledStyles = {
    opacity: "0.5",
    cursor: "not-allowed",
  }

let stripePromise
const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe("pk_test_51PEjWlKm88QUoiNL1WShPdX0WGmrVRrf8ItzLkujD5kXPcMPcW24B1LpKCByCk1azzZrsHsnktCCtNM1R5XLGxSN00oJtRB7uf")
    }
    return stripePromise
}

const Checkout = () => {
    const [loading, setLoading] = useState(false)

    const redirectToCheckout = async event => {
        event.preventDefault()
        setLoading(true)

        const stripe = await getStripe()
        const { error } = await stripe.redirectToCheckout({
            mode: "payment",
            lineItems: [{ price: "price_1PEk27Km88QUoiNLFW1zN8Qi", quantity: 1}],
            // replace these urls with your own
            successUrl: `http://bijanjohn.com/payment-success/`,
        })

        if (error) {
            console.warn("Error:", error)
            setLoading(false)
        }
    }

    return (
        <button
            disabled={loading}
            style={
                loading ? { ...buttonStyles, ...buttonDisabledStyles } : buttonStyles
            }
            onClick={redirectToCheckout}
        >
            Buy My New Poetry Book
        </button>
    )
}

export default Checkout