import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../../lib/stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method.toLocaleLowerCase() !== "post") {
    return res.status(405).json({
      error: "Method not allowed",
      status: "error",
    });
  }

  if (!req.body.priceId) {
    return res.status(400).json({
      error: "Missing priceId",
      status: "error",
    });
  }

  const priceId = req.body.priceId;
  const host = req.headers.host;
  const URL =
    process.env.NODE_ENV === "production"
      ? `https://${host}`
      : `http://${host}`;

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    cancel_url: URL,
    success_url: `${URL}/success?session_id={CHECKOUT_SESSION_ID}`,
  });
  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}
