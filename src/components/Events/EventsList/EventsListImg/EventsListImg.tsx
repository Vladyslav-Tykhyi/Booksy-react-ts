import s from "./EventsListImg.module.css";

interface ListImgProps {
  img1x: string;
  img2x: string;
  alt: string;
}

const EventsListImg = ({ img1x, img2x, alt }: ListImgProps) => {
  return (
    <picture className={s.img}>
      <source srcSet={`${img1x} 1x, ${img2x} 2x`} media="(min-width:1158px)" />
      <img src={img1x} alt={alt} />
    </picture>
  );
};

export default EventsListImg;
