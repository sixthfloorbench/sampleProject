import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { dbConfig } from "../config";

export const useCollection = () => {
  const [dbState, setDbState] = useState([]);

  useEffect(() => {
    const userDataCollectionRef = collection(dbConfig, "userData");

    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(userDataCollectionRef);
        querySnapshot.forEach((doc) => {
          setDbState((prev) => [...prev, doc.data()]);
          console.log("Document data:", doc.data());
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return dbState;
};
