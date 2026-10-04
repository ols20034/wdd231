// Base URL + API key
const baseUrl = "https://developer.nps.gov/api/v1/";
const apiKey = import.meta.env.VITE_NPS_API_KEY;

// Base template for info links (no images yet)
const baseInfoLinks = [
  {
    name: "Current Conditions ›",
    link: "conditions.html",
    description:
      "See what conditions to expect in the park before leaving on your trip!"
  },
  {
    name: "Fees and Passes ›",
    link: "fees.html",
    description: "Learn about the fees and passes that are available."
  },
  {
    name: "Visitor Centers ›",
    link: "visitor_centers.html",
    description: "Learn about the visitor centers in the park."
  }
];

// Generic JSON fetcher
async function getJson(url) {
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey
    }
  };

  const response = await fetch(baseUrl + url, options);

  if (!response.ok) {
    throw new Error("response not ok");
  }

  return await response.json();
}

// Fetch park data
export async function getParkData() {
  const parkData = await getJson("parks?parkCode=yell");
  return parkData.data[0];
}

// Build info links using API images
export function getInfoLinks(images) {
  return baseInfoLinks.map((item, index) => {
    return {
      ...item,
      image: images[index + 2].url
    };
  });
}
