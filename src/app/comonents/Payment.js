'use client';
import React, { useState, useEffect } from "react";
import Script from "next/script";

export default function Payment() {
  const [loading, setLoading] = useState(false);
  const [sdkReady, setSdkReady] = useState(false);

  // Detect when the SDK is ready
  useEffect(() => {
    if (window.Cashfree) {
      setSdkReady(true);
    }
  }, []);

  const startPayment = async () => {
    if (!sdkReady) {
      alert("Cashfree SDK not loaded yet. Please wait.");
      return;
    }

    setLoading(true);

    // 1. Create order from backend
    const res = await fetch("http://localhost:5000/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        orderAmount: 1,
        customerId: "cust_001",
        customerEmail: "test@example.com",
        customerPhone: "9999999999",
      }),
    });

    const order = await res.json();
    console.log("Order Response:", order);

    if (!order.payment_session_id) {
      alert("Failed to get payment session ID");
      setLoading(false);
      return;
    }

    // 2. Initialize Cashfree
    const cashfree = new window.Cashfree({ mode: "production" });

    cashfree.checkout({
      paymentSessionId: order.payment_session_id,
      redirectTarget: "_self",
    });

    setLoading(false);
  };

  return (
    <>
      {/* Load Cashfree SDK */}
      <Script
        src="https://sdk.cashfree.com/js/v3/cashfree.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("Cashfree SDK loaded");
          setSdkReady(true);
        }}
      />

      <div>
        <button onClick={startPayment} disabled={loading || !sdkReady}>
          {loading ? "Processing..." : "Pay ₹100"}
        </button>
      </div>
    </>
  );
}
