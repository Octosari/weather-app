import { useEffect, useState } from "react";

const useFetch = (city) => {
  const [data, setData] = useState(null);
  const apiKey = "de706bc8913ef2937255d4be4ce4baa0";

  useEffect(() => {
    if (city !== null) {
      const dataFetch = async () => {
        const data = await (
          await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
          )
        ).json();

        setData(data);
      };
      dataFetch();
    }
  }, [city]);
  return { data };
};

export default useFetch;
