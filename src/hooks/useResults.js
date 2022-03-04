import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchApi = async searchTerm => {
    console.log("Hi there");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose"
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setError("Something went wrong");
    }
  };

  //Call searchAPI when compnent is first rendered

  // searchApi("pasta"); - infinite loop
  useEffect(() => {
    searchApi("pasta"); //samo se jednom poziva kad se otvori aplikacija
  }, []);

  return [searchApi, results, error];
};
