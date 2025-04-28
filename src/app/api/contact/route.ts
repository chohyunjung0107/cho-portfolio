import { NextResponse } from "next/server";

export type TContact = {
  id: number;
  title: string;
  apiUrl: string;
};

const contactData: TContact[] = [
  {
    id: 1,
    title: "카카오톡 문의하기",
    apiUrl: "/api/contact/1",
  },
  {
    id: 1,
    title: "이메일 문의하기",
    apiUrl: "/api/contact/1",
  },
];

export async function GET() {
  return NextResponse.json(contactData);
}
