import axios from "axios";
import { writeFile } from "fs/promises";

const API_URL = "https://api.kicks.dev/v3/stockx/products";
const API_KEY = "KICKS-3AA3-71DF-B3A4-4E80F75D95CA";
const TOTAL_PAGES = 60;

async function fetchAllSneakers() {
  let allSneakers = [];

  for (let page = 1; page <= TOTAL_PAGES; page++) {
    try {
      const response = await axios.get(`${API_URL}?page=${page}`, {
        headers: { Authorization: API_KEY }
      });
      allSneakers = allSneakers.concat(response.data.data);
      console.log(`Fetched page ${page}, total so far: ${allSneakers.length}`);
    } catch (error) {
      console.error(`Error fetching page ${page}:`, error.message);
    }
  }

  try {
    await writeFile("./public/products.json", JSON.stringify(allSneakers, null, 2), "utf-8");
    console.log("All sneakers saved to sneakers.json");
  } catch (err) {
    console.error("Error writing to sneakers.json:", err.message);
  }
}

fetchAllSneakers();

