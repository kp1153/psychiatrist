import Razorpay from "razorpay";

export async function POST(req) {
  try {
    const { amount, name, phone } = await req.json();

    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const order = await razorpay.orders.create({
      amount: amount * 100, // Paise में
      currency: "INR",
      receipt: `consultation_${Date.now()}`,
      notes: {
        name: name,
        phone: phone,
        service: "Online Consultation"
      }
    });

    return Response.json(order);
  } catch (error) {
    console.error("Order creation error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}