/* eslint-disable react/prop-types */
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import styles from "./CityList.module.css";

// eslint-disable-next-line react/prop-types
function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (cities.length === 0)
    return (
      <Message message="Add your first city by clicking on a city ont the map." />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
