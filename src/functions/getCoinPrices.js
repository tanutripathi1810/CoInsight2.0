import axios from "axios";

export const getCoinPrices = async (id, days, priceType, setError) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`,
      { crossDomain: true }
    );

    if (response.data) {
      console.log("Prices>>>", response.data);
      if (priceType === "market_cap") {
        return response.data.market_caps;
      } else if (priceType === "total_volume") {
        return response.data.total_volumes;
      } else {
        return response.data.prices;
      }
    }
  } catch (e) {
    console.log(e.message);
    if (setError) {
      setError(true);
    }
  }
};
