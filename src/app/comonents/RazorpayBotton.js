import LiveUrl from "./Url";

export default function RazorpayBotton() {
  const startPayment = async () => {
    let data=localStorage.getItem('user')
    if(!data) {
        window.location.assign("/auth/login")
        return
    }
    let email=JSON.parse(data).email
    const orderRes = await fetch(`${LiveUrl}create-order`, {
      method: "POST",
    });
    const order = await orderRes.json();

    // 2️⃣ Razorpay Checkout
    const options = {
      key: "rzp_live_8u3N66embKvoZO", // from dashboard
      amount: order.amount,
      currency: order.currency,
      name: "Assignment Ai",
      description: "Subscription",
      order_id: order.id,
      handler: async function (response) {
        // 3️⃣ Verify payment on backend
        const verifyRes = await fetch(`${LiveUrl}verify-payment`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            email
          })
        });

        const result = await verifyRes.json();
        if (result.success) {
          let user =localStorage.getItem('user')
          if(user){
            user=JSON.parse(user)
            user.isPaid=true
            localStorage.setItem("user",JSON.stringify(user))
          } 
          window.location.assign("/dashboard")
          console.log("Payment Successful!");
        } else {
          alert("Payment Failed");
        }
      },
      prefill: {
        email
      },
      theme: {
        color: "#3399cc"
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
      <button onClick={startPayment} className="mt-3 bg-yellow-400 text-yellow-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition text-sm md:text-base">
            Buy Premium
          </button>
  );
}
