"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import { TContact } from "../api/contact/route";

export async function getContact() {
  const [contactList, setContactList] = useState<TContact[]>([
    {
      id: 0,
      title: "hi",
      apiUrl: "",
    },
  ]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("http://localhost:3000/api/contact")
        .then((res) => {
          console.log("res", res.data);
          setContactList(res.data);
        })
        .catch((err) => {
          console.log("err", err);
        });
    };

    getData();
  }, []);

  return { contactList };
}
