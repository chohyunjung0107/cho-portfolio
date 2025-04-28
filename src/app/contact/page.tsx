"use client";
import { TContact } from "../api/contact/route";
import { useContact } from "../[hook]/getContact";

export default function Page() {
  const { contactList } = useContact();

  return (
    <>
      <h2>contact</h2>

      {/* ------ 리스트 ------ */}
      {contactList &&
        contactList.map((data: TContact) => {
          return (
            <div key={data.id}>
              <h3>{data.title}</h3>
            </div>
          );
        })}
    </>
  );
}
