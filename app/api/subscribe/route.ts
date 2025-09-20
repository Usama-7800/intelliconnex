import { NextResponse } from "next/server";
const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_KEY,
  server: process.env.MAILCHIMP_SERVER_ID,
});

export async function POST(req: Request) {
  const { email, mergeFields, status } = (await req.json()) as {
    email: string;
    mergeFields: Object;
    status: string;
  };

  return mailchimp.lists
    .addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status,
      merge_fields: mergeFields,
    })
    .then((res: any) => {
      console.log(res);
      return NextResponse.json(
        { message: "Request Received" },
        { status: 200 }
      );
    })
    .catch((err: any) => {
      console.log(err);
      return NextResponse.json(
        { message: "Request Received" },
        { status: 200 }
      );
    });
}
