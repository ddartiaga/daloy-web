import { render } from "@react-email/render";
import VerificationEmail from "./VerificationEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.AUTH_RESEND_KEY);

const sendVerificationRequest = async ({
  identifier,
  url,
}: {
  identifier: string;
  url: string;
}) => {
  const emailHtml = await render(VerificationEmail({ url, email: identifier }));

  await resend.emails.send({
    from: "authentication@katalysttechservices.com",
    to: identifier,
    subject: "KATALYST - Sign In Verification",
    html: emailHtml,
  });
};

export { sendVerificationRequest };
