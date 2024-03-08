import React, {  useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { dbConfig } from "../config";

export const useCollection = () => {
    const [data, setData] = useState(["dfdsf", "sdfdsf"]);
    let result=[];
    useEffect(() => {
        const querySnapshot = getDocs(collection(dbConfig, "userData"));
        debugger
        querySnapshot.then(doc => doc.forEach((data)=> result.push(data.doc().title)))
        debugger
    }, [dbConfig]);

    setData(result);

    return data;
    
}