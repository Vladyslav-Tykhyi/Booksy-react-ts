import s from "./Location.module.css";
import LocationContact from "./LocationContact/LocationContact";
import LocationMap from "./LocationMap/LocationMap";
import LocationText from "./LocationText/LocationText";
import LocationTitle from "./LocationTitle/LocationTitle";

const Location = () => {
  return (
    <div className={s.location_container}>
      <p className={s.location_text} id="location">
        Location
      </p>
      <div className={s.location_wrapper}>
        <div className={s.location_box}>
          <LocationTitle />
          <LocationText />
        </div>
        <LocationContact />
      </div>
      <LocationMap />
    </div>
  );
};

export default Location;
