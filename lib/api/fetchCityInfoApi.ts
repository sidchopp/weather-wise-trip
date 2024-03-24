const fetchCityInfo = async (city: string) => {
  try {
    const response = await fetch(`${process.env.CITY_INFO_API_URL}/${city}`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching city information data:", error);
    return null;
  }
};

export { fetchCityInfo };
