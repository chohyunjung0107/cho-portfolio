"use client";
import { TContact } from "../api/contact/route";
import { getContact } from "../[hook]/getContact";

import { useEffect, useState } from "react";

export default function Page() {
  const { contactList } = getContact() as any;
  const [conList, setConList] = useState([]);

  useEffect(() => {
    // console.log("contactList", contactList);
    setConList(contactList);
  }, []);

  return (
    <>
      <h2>contact</h2>

      {/* ------ 리스트 ------ */}
      {/* {conList &&
        conList.map((data: TContact) => {
          return (
            <div key={data.id}>
              <h3>{data.title}</h3>
            </div>
          );
        })} */}
    </>
  );
}
