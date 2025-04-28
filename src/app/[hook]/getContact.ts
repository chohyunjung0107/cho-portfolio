"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import { TContact } from "../api/contact/route";

export function useContact() {
  const [contactList, setContactList] = useState<TContact[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/contact");
        console.log("res", res.data);
        setContactList(res.data);
      } catch (err) {
        console.log("err", err);
      }
    };

    getData();
  }, []);

  return { contactList };
}
