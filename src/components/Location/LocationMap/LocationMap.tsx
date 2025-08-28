import s from "./LocationMap.module.css";

const LocationMap = () => {
  return (
    <iframe
      className={s.location_map}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6624.789966176461!2d151.18870907228424!3d-33.879479966711195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae4ea0885e2d%3A0x5017d681632cdd0!2sUltimo%20Nieuw-Zuid-Wales%202007%2C%20Australi%C3%AB!5e0!3m2!1snl!2snl!4v1756403093264!5m2!1snl!2snl"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default LocationMap;
