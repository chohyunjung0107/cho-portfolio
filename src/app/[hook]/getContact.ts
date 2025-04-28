"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import { TContact } from "../api/contact/route";

export function useContact() {
  const [contactList, setContactList] = useState<TContact[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/api/contact");
        setContactList(res.data);
      } catch (err) {
        console.log("err", err);
      }
    };

    getData();
  }, []);

  return { contactList };
}
