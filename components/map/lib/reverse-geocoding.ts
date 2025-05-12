export interface ReverseGeocodeAddressResult {
  address: string | null;
  resultCount: number;
}

export const getReverseGeocodeAddress = async (
  lng: number,
  lat: number,
  apiKey: string
): Promise<ReverseGeocodeAddressResult> => {
  const url = `https://api.maptiler.com/geocoding/${lng},${lat}.json?key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch reverse geocode data");
    }
    const data = await response.json();
    const resultCount = data.features ? data.features.length : 0;
    // Return the first result's place name as the address if available
    const address =
      resultCount > 0 && data.features[0].place_name
        ? data.features[0].place_name
        : null;
    return { address, resultCount };
  } catch (error) {
    console.error("Error fetching reverse geocode address:", error);
    return { address: null, resultCount: 0 };
  }
};