/* eslint-disable react/prop-types */
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
import styles from "./CountryList.module.css";

// eslint-disable-next-line react/prop-types
function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (cities.length === 0)
    return (
      <Message message="Add your first city by clicking on a city ont the map." />
    );

  const countries = cities.reduce((acc, city) => {
    if (!acc.map((acc) => acc.country).includes(city.country))
      return [...acc, city];
    else return acc;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        // eslint-disable-next-line react/jsx-key
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
