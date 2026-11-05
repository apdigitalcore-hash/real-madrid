import crestAsset from "@/assets/crest.svg.asset.json";
import stadiumAsset from "@/assets/bernabeu.jpg.asset.json";
import featureAsset from "@/assets/bellingham-match.jpg.asset.json";
import valverdeMatchAsset from "@/assets/valverde-match.jpg.asset.json";
import foundationAsset from "@/assets/foundation.jpg.asset.json";
import mbappeAsset from "@/assets/mbappe.png.asset.json";
import viniAsset from "@/assets/vinicius.png.asset.json";
import judeAsset from "@/assets/bellingham.png.asset.json";
import fedeAsset from "@/assets/valverde.png.asset.json";
import courtoisAsset from "@/assets/courtois.png.asset.json";
import rodrygoAsset from "@/assets/rodrygo.png.asset.json";
export const crest = crestAsset.url;
export const stadium = stadiumAsset.url;
export const featureImage = featureAsset.url;
export const squadSource =
  "https://www.realmadrid.com/en-US/news/football/first-team/latest-news/dorsales-del-real-madrid-para-la-temporada-2026-27-10-08-2026";
export type Player = {
  name: string;
  shortName: string;
  number: number;
  position: "Forward" | "Midfielder" | "Goalkeeper";
  country: string;
  flag: string;
  image: string;
  bio: string;
};
export const players: Player[] = [
  {
    name: "Kylian Mbappé",
    shortName: "Kylian Mbappé",
    number: 10,
    position: "Forward",
    country: "France",
    flag: "🇫🇷",
    image: mbappeAsset.url,
    bio: "Electric pace. Clinical finishing. The French forward brings a relentless eye for goal to the Madrid attack.",
  },
  {
    name: "Vinícius Júnior",
    shortName: "Vini Jr.",
    number: 7,
    position: "Forward",
    country: "Brazil",
    flag: "🇧🇷",
    image: viniAsset.url,
    bio: "Fearless on the ball and devastating in space. The Brazilian winger makes the left flank his own.",
  },
  {
    name: "Jude Bellingham",
    shortName: "Jude Bellingham",
    number: 5,
    position: "Midfielder",
    country: "England",
    flag: "🏴",
    image: judeAsset.url,
    bio: "Composure, creativity and a gift for arriving when it matters. The English midfielder connects every part of the pitch.",
  },
  {
    name: "Federico Valverde",
    shortName: "Fede Valverde",
    number: 8,
    position: "Midfielder",
    country: "Uruguay",
    flag: "🇺🇾",
    image: fedeAsset.url,
    bio: "The engine in midfield. The Uruguayan combines tireless running with powerful striking and remarkable versatility.",
  },
  {
    name: "Thibaut Courtois",
    shortName: "Thibaut Courtois",
    number: 1,
    position: "Goalkeeper",
    country: "Belgium",
    flag: "🇧🇪",
    image: courtoisAsset.url,
    bio: "An imposing presence between the posts. The Belgian goalkeeper is known for his reach, reflexes and calm under pressure.",
  },
  {
    name: "Rodrygo Goes",
    shortName: "Rodrygo",
    number: 11,
    position: "Forward",
    country: "Brazil",
    flag: "🇧🇷",
    image: rodrygoAsset.url,
    bio: "Sharp movement and effortless technique. The Brazilian forward brings imagination and versatility to the front line.",
  },
];
export type Story = {
  id: string;
  title: string;
  category: "Champions League" | "Club";
  date: string;
  summary: string;
  image: string;
  href: string;
};
export const stories: Story[] = [
  {
    id: "bellingham",
    title: "Bellingham, MVP: “This is the mindset we need to maintain”",
    category: "Champions League",
    date: "4 NOV 2026",
    summary:
      "Jude reflects on a crucial European comeback in Athens, his goal and the mentality behind the win.",
    image: featureImage,
    href: "https://www.realmadrid.com/en-US/news/football/first-team/latest-news/bellingham-ha-sido-una-victoria-muy-importante-en-el-camino-de-esta-champions-04-11-2026",
  },
  {
    id: "valverde",
    title: "Valverde: “We never stopped trying and came back again”",
    category: "Champions League",
    date: "4 NOV 2026",
    summary: "The midfielder on the fightback against AEK Athens and scoring the decisive goal.",
    image: valverdeMatchAsset.url,
    href: "https://www.realmadrid.com/en-US/news/football/first-team/latest-news/declaraciones-jugador-post-aek-atenas-rm-04-11-2026",
  },
  {
    id: "foundation",
    title: "Beyond the pitch: the Foundation looks to the season ahead",
    category: "Club",
    date: "4 NOV 2026",
    summary:
      "Florentino Pérez chairs the Board of Trustees as the Real Madrid Foundation approves its 2026–27 Action Plan.",
    image: foundationAsset.url,
    href: "https://www.realmadrid.com/en-US/news/club/foundation/florentino-perez-preside-el-patronato-de-la-fundacion-real-madrid-04-11-2026",
  },
];

// Honours as listed on the club's own palmarés page (read 4 Nov 2026). These are
// static records, not a live feed — update them from the source below.
export const honoursSource = "https://www.realmadrid.com/en-US/the-club/about-real-madrid/palmares";
export type Honour = { count: number; label: string };
export const honours: Honour[] = [
  { count: 15, label: "EUROPEAN CUPS / CHAMPIONS LEAGUE" },
  { count: 36, label: "LALIGA TITLES" },
  { count: 20, label: "COPA DEL REY" },
];
