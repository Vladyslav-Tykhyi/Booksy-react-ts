import img1x from "./img/img1x.png";
import img2x from "./img/img1@2x.png";
import img3x from "./img/img2.png";
import img4x from "./img/img2@2x.png";
import img5x from "./img/img3.png";
import img6x from "./img/img3@2x.png";

import type { EventItem } from "../../../services/types";

export const eventsData: EventItem[] = [
  {
    id: 1,
    img1x,
    img2x,
    alt: "Cozy Book Club — 'The Midnight Library'",
    heading: `Cozy Book Club — "The Midnight Library"`,
    accessibility: "In-store | June 5, 6:30 PM",
    text: "Join us for an evening of tea, thoughtful conversation, and shared reflections as we dive into Matt Haig's bestseller.",
  },
  {
    id: 2,
    img1x: img3x,
    img2x: img4x,
    alt: "Book Cover Design Workshop",
    heading: "Book Cover Design Workshop",
    accessibility: "Online | June 12, 7:00 PM",
    text: "A hands-on session for aspiring designers and curious readers. Learn what makes a cover stand out — from concept to print.",
  },
  {
    id: 3,
    img1x: img5x,
    img2x: img6x,
    alt: "Children's Story Hour",
    heading: "Children's Story Hour",
    accessibility: "In-store | June 15, 11:00 AM",
    text: "A magical morning of stories, games, and imagination for our youngest book lovers (ages 4-8).",
  },
];
