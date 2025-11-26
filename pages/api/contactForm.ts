import type { NextApiRequest, NextApiResponse } from "next";

type ContactBody = {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
};

export default async function contactForm(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body: ContactBody = req.body;

  const requiredFields = ["email", "firstName", "lastName", "message"] as const;

  for (const field of requiredFields) {
    if (!body[field]) {
      return res.status(400).json({
        message: `Oops! You are missing the ${field} field, please fill it in and retry.`,
      });
    }
  }

  const endpoint = process.env.CONTACT_FORM_ENDPOINT;

  if (!endpoint) {
    return res.status(500).json({
      message: "Server error: CONTACT_FORM_ENDPOINT is not set.",
    });
  }

  // POST to AWS Lambda / API Gateway (OPEN endpoint)
  await fetch(endpoint, {
    method: "POST",
    headers: {
            "Access-Control-Allow-Origin": "*", // or your domain
            "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      message: body.message,
    }),
  });

  return res
    .status(200)
    .json({ message: "Success! Thank you for your message!" });
}
