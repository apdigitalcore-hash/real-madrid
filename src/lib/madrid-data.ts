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

/**
 * Everything below was read off realmadrid.com on 4 November 2026 and is a
 * static snapshot, not a live feed. Squad, staff and per-player appearance
 * numbers come from the club's own first-team pages; honours come from the
 * club's track-record page. Re-read those sources to update.
 *
 * Only `bio` is editorial — written here, not taken from the club. Players
 * without one show their recorded details instead, so nothing is invented to
 * fill a gap.
 */
export const squadSource = "https://www.realmadrid.com/en-US/football/first-team/players";
export const honoursSource = "https://www.realmadrid.com/en-US/the-club/track-record/football";
export const dataReadOn = "4 November 2026";

export type Position = "Goalkeeper" | "Defender" | "Midfielder" | "Forward";

export type PlayerStats = {
  /** Appearances this season, all competitions. */
  played: number;
  /** Of those, how many as a starter. */
  starter: number;
  minutes: number;
  assists?: number;
};

export type Player = {
  name: string;
  shortName: string;
  number: number;
  position: Position;
  /** Country of birth, as the club lists it — not a national-team claim. */
  country: string;
  flag: string;
  birthplace: string;
  /** ISO date, so it sorts and formats predictably. */
  born: string;
  weight?: string;
  /** Local portrait, downloaded from the club rather than hotlinked. */
  photo: string;
  bio?: string;
  stats: PlayerStats;
};

export const players: Player[] = [
  {
    name: "Thibaut Courtois",
    shortName: "Courtois",
    number: 1,
    photo: "/squad/courtois.webp",
    position: "Goalkeeper",
    country: "Belgium",
    flag: "🇧🇪",
    birthplace: "Bree, Belgium",
    born: "1992-05-11",
    weight: "95 kg",
    bio: "An imposing presence between the posts. The Belgian goalkeeper is known for his reach, reflexes and calm under pressure.",
    stats: { played: 14, starter: 14, minutes: 1260 },
  },
  {
    name: "Andriy Lunin",
    shortName: "Lunin",
    number: 13,
    photo: "/squad/lunin.webp",
    position: "Goalkeeper",
    country: "Ukraine",
    flag: "🇺🇦",
    birthplace: "Krasnograd, Ukraine",
    born: "1999-02-11",
    stats: { played: 1, starter: 1, minutes: 90 },
  },
  {
    name: "Raúl Asencio del Rosario",
    shortName: "Asencio",
    number: 2,
    photo: "/squad/asencio.webp",
    position: "Defender",
    country: "Spain",
    flag: "🇪🇸",
    birthplace: "Las Palmas de Gran Canaria",
    born: "2003-02-13",
    weight: "85 kg",
    stats: { played: 0, starter: 0, minutes: 0 },
  },
  {
    name: "Éder Gabriel Militão",
    shortName: "E. Militão",
    number: 3,
    photo: "/squad/militao.webp",
    position: "Defender",
    country: "Brazil",
    flag: "🇧🇷",
    birthplace: "Sertãozinho, Brazil",
    born: "1998-01-18",
    weight: "78 kg",
    stats: { played: 2, starter: 0, minutes: 95 },
  },
  {
    name: "Dean Huijsen",
    shortName: "Huijsen",
    number: 4,
    photo: "/squad/huijsen.webp",
    position: "Defender",
    country: "Netherlands",
    flag: "🇳🇱",
    birthplace: "Amsterdam, Netherlands",
    born: "2005-04-14",
    weight: "86 kg",
    stats: { played: 11, starter: 9, minutes: 952, assists: 0 },
  },
  {
    name: "Trent Alexander-Arnold",
    shortName: "Trent",
    number: 12,
    photo: "/squad/trent.webp",
    position: "Defender",
    country: "England",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    birthplace: "Liverpool, England",
    born: "1998-10-07",
    stats: { played: 8, starter: 7, minutes: 435, assists: 1 },
  },
  {
    name: "Ibrahima Konaté",
    shortName: "Konaté",
    number: 16,
    photo: "/squad/konate.webp",
    position: "Defender",
    country: "France",
    flag: "🇫🇷",
    birthplace: "Paris, France",
    born: "1999-05-25",
    stats: { played: 12, starter: 10, minutes: 1080, assists: 0 },
  },
  {
    name: "Marc Cucurella Saseta",
    shortName: "Cucurella",
    number: 17,
    photo: "/squad/cucurella.webp",
    position: "Defender",
    country: "Spain",
    flag: "🇪🇸",
    birthplace: "Alella, Barcelona",
    born: "1998-07-22",
    stats: { played: 15, starter: 11, minutes: 1014, assists: 1 },
  },
  {
    name: "Álvaro Fernández Carreras",
    shortName: "Á. Carreras",
    number: 18,
    photo: "/squad/carreras.webp",
    position: "Defender",
    country: "Spain",
    flag: "🇪🇸",
    birthplace: "Mallorca, Spain",
    born: "2003-03-23",
    weight: "75 kg",
    stats: { played: 9, starter: 5, minutes: 340, assists: 0 },
  },
  {
    name: "Antonio Rüdiger",
    shortName: "Rüdiger",
    number: 22,
    photo: "/squad/rudiger.webp",
    position: "Defender",
    country: "Germany",
    flag: "🇩🇪",
    birthplace: "Berlin, Germany",
    born: "1993-03-03",
    weight: "86 kg",
    stats: { played: 7, starter: 4, minutes: 576, assists: 0 },
  },
  {
    name: "Ferland Mendy",
    shortName: "F. Mendy",
    number: 23,
    photo: "/squad/mendy.webp",
    position: "Defender",
    country: "France",
    flag: "🇫🇷",
    birthplace: "Meulan-en-Yvelines, France",
    born: "1995-06-08",
    weight: "73 kg",
    stats: { played: 0, starter: 0, minutes: 0 },
  },
  {
    name: "Denzel Dumfries",
    shortName: "Dumfries",
    number: 24,
    photo: "/squad/dumfries.webp",
    position: "Defender",
    country: "Netherlands",
    flag: "🇳🇱",
    birthplace: "Rotterdam, Netherlands",
    born: "1996-04-18",
    stats: { played: 11, starter: 8, minutes: 686, assists: 1 },
  },
  {
    name: "Jude Bellingham",
    shortName: "Bellingham",
    number: 5,
    photo: "/squad/bellingham.webp",
    position: "Midfielder",
    country: "England",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    birthplace: "Stourbridge, England",
    born: "2003-06-29",
    weight: "75 kg",
    bio: "Composure, creativity and a gift for arriving when it matters. The English midfielder connects every part of the pitch.",
    stats: { played: 15, starter: 11, minutes: 1222, assists: 2 },
  },
  {
    name: "Eduardo Camavinga",
    shortName: "Camavinga",
    number: 6,
    photo: "/squad/camavinga.webp",
    position: "Midfielder",
    country: "Angola",
    flag: "🇦🇴",
    birthplace: "Cabinda, Angola",
    born: "2002-11-10",
    weight: "77 kg",
    stats: { played: 12, starter: 10, minutes: 468, assists: 1 },
  },
  {
    name: "Federico Santiago Valverde Dipetta",
    shortName: "Valverde",
    number: 8,
    photo: "/squad/valverde.webp",
    position: "Midfielder",
    country: "Uruguay",
    flag: "🇺🇾",
    birthplace: "Montevideo, Uruguay",
    born: "1998-07-22",
    weight: "78 kg",
    bio: "The engine in midfield. The Uruguayan combines tireless running with powerful striking and remarkable versatility.",
    stats: { played: 14, starter: 10, minutes: 1094, assists: 2 },
  },
  {
    name: "Aurélien Tchouaméni",
    shortName: "Tchouaméni",
    number: 14,
    photo: "/squad/tchouameni.webp",
    position: "Midfielder",
    country: "France",
    flag: "🇫🇷",
    birthplace: "Rouen, France",
    born: "2000-01-27",
    weight: "81 kg",
    stats: { played: 9, starter: 7, minutes: 619, assists: 1 },
  },
  {
    name: "Arda Güler",
    shortName: "Arda Güler",
    number: 15,
    photo: "/squad/guler.webp",
    position: "Midfielder",
    country: "Turkey",
    flag: "🇹🇷",
    birthplace: "Ankara, Turkey",
    born: "2005-02-25",
    weight: "70 kg",
    stats: { played: 13, starter: 11, minutes: 769, assists: 5 },
  },
  {
    name: "Bernardo Silva",
    shortName: "Bernardo Silva",
    number: 20,
    photo: "/squad/bernardo.webp",
    position: "Midfielder",
    country: "Portugal",
    flag: "🇵🇹",
    birthplace: "Lisbon, Portugal",
    born: "1994-08-10",
    stats: { played: 12, starter: 9, minutes: 637, assists: 1 },
  },
  {
    name: "Thiago Pitarch Pinar",
    shortName: "Thiago",
    number: 27,
    photo: "/squad/thiago.webp",
    position: "Midfielder",
    country: "Spain",
    flag: "🇪🇸",
    birthplace: "Fuenlabrada, Spain",
    born: "2007-08-03",
    stats: { played: 0, starter: 0, minutes: 0 },
  },
  {
    name: "Vinícius Júnior",
    shortName: "Vini Jr.",
    number: 7,
    photo: "/squad/vinicius.webp",
    position: "Forward",
    country: "Brazil",
    flag: "🇧🇷",
    birthplace: "São Gonçalo, Rio de Janeiro, Brazil",
    born: "2000-07-12",
    weight: "73 kg",
    bio: "Fearless on the ball and devastating in space. The Brazilian winger makes the left flank his own.",
    stats: { played: 12, starter: 8, minutes: 882, assists: 3 },
  },
  {
    name: "Endrick Felipe Moreira de Sousa",
    shortName: "Endrick",
    number: 9,
    photo: "/squad/endrick.webp",
    position: "Forward",
    country: "Brazil",
    flag: "🇧🇷",
    birthplace: "Brasília, Brazil",
    born: "2006-07-21",
    weight: "67 kg",
    stats: { played: 6, starter: 3, minutes: 134, assists: 0 },
  },
  {
    name: "Kylian Mbappé",
    shortName: "Mbappé",
    number: 10,
    photo: "/squad/mbappe.webp",
    position: "Forward",
    country: "France",
    flag: "🇫🇷",
    birthplace: "Paris, France",
    born: "1998-12-20",
    weight: "75 kg",
    bio: "Electric pace. Clinical finishing. The French forward brings a relentless eye for goal to the Madrid attack.",
    stats: { played: 15, starter: 11, minutes: 1341, assists: 2 },
  },
  {
    name: "Rodrygo Goes",
    shortName: "Rodrygo",
    number: 11,
    photo: "/squad/rodrygo.webp",
    position: "Forward",
    country: "Brazil",
    flag: "🇧🇷",
    birthplace: "Osasco, Brazil",
    born: "2001-01-09",
    weight: "64 kg",
    bio: "Sharp movement and effortless technique. The Brazilian forward brings imagination and versatility to the front line.",
    stats: { played: 0, starter: 0, minutes: 0 },
  },
  {
    name: "Carlos Espí Escrihuela",
    shortName: "C. Espí",
    number: 19,
    photo: "/squad/espi.webp",
    position: "Forward",
    country: "Spain",
    flag: "🇪🇸",
    birthplace: "Tavernes de Valldigna, Valencia",
    born: "2005-07-24",
    stats: { played: 10, starter: 6, minutes: 51, assists: 0 },
  },
  {
    name: "Brahim Díaz",
    shortName: "Brahim",
    number: 21,
    photo: "/squad/brahim.webp",
    position: "Forward",
    country: "Spain",
    flag: "🇪🇸",
    birthplace: "Málaga, Spain",
    born: "1999-08-03",
    weight: "68 kg",
    stats: { played: 8, starter: 5, minutes: 243, assists: 2 },
  },
  {
    name: "Yan Diomande",
    shortName: "Diomande",
    number: 25,
    photo: "/squad/diomande.webp",
    position: "Forward",
    country: "Ivory Coast",
    flag: "🇨🇮",
    birthplace: "Abidjan, Ivory Coast",
    born: "2006-11-14",
    stats: { played: 15, starter: 11, minutes: 806, assists: 2 },
  },
];

export const POSITION_ORDER: Position[] = ["Goalkeeper", "Defender", "Midfielder", "Forward"];

export const squadByPosition = POSITION_ORDER.map((position) => ({
  position,
  players: players
    .filter((player) => player.position === position)
    .sort((a, b) => a.number - b.number),
}));

/**
 * The club does not publish a "starting XI", so this is not one. It is the
 * most-used XI: for each slot in a 4-3-3 we take the players with the most
 * minutes in that position this season. Derived from the stats above rather
 * than hand-picked, so it cannot disagree with them.
 */
export const FORMATION = "4-3-3";

const mostUsed = (position: Position, count: number) =>
  players
    .filter((player) => player.position === position)
    .sort((a, b) => b.stats.minutes - a.stats.minutes)
    .slice(0, count);

export const startingXi: Array<{ line: string; players: Player[] }> = [
  { line: "Goalkeeper", players: mostUsed("Goalkeeper", 1) },
  { line: "Defence", players: mostUsed("Defender", 4) },
  { line: "Midfield", players: mostUsed("Midfielder", 3) },
  { line: "Attack", players: mostUsed("Forward", 3) },
];

export type StaffMember = { name: string; role: string; photo: string };

export const headCoach = {
  name: "José Mourinho",
  role: "Head coach",
  birthplace: "Setúbal, Portugal",
  born: "1963-01-26",
  since: "2026",
  photo: "/staff/mourinho.webp",
  career:
    "Benfica, União de Leiria, Porto, Chelsea, Inter, Real Madrid, Chelsea, Manchester United, Tottenham, Roma, Fenerbahçe, Benfica.",
  note: "Back at Real Madrid from 2026, having first managed the club between 2010 and 2013.",
};

export const coachingStaff: StaffMember[] = [
  { name: "João Tralhão", role: "Assistant coach", photo: "/staff/tralhao.webp" },
  { name: "Pedro Machado", role: "Technical assistant", photo: "/staff/machado.webp" },
  { name: "Sami Khedira", role: "Technical assistant", photo: "/staff/khedira.webp" },
  { name: "Nuno Santos", role: "Goalkeeper coach", photo: "/staff/nuno-santos.webp" },
  { name: "António Dias", role: "Fitness coach", photo: "/staff/antonio-dias.webp" },
  { name: "Antonio Pintus", role: "Performance manager", photo: "/staff/pintus.webp" },
  { name: "Sandro Carriço", role: "Sports sciences", photo: "/staff/carrico.webp" },
  { name: "Roberto Merella", role: "Head analyst", photo: "/staff/merella.webp" },
];

export const president = {
  name: "Florentino Pérez",
  role: "President",
  // The club publishes no studio portrait of its president, so this is a
  // photograph of him at a club event, framed wide on purpose.
  photo: "/staff/florentino.webp",
  note: "President of Real Madrid since 2009, and previously from 2000 to 2006.",
};

export type Honour = { count: number; label: string };

export const honours: Honour[] = [
  { count: 15, label: "CHAMPIONS LEAGUES" },
  { count: 36, label: "LEAGUE TITLES" },
  { count: 20, label: "COPA DEL REY" },
];

export const fullHonours: Honour[] = [
  { count: 15, label: "Champions Leagues" },
  { count: 36, label: "League titles" },
  { count: 20, label: "Copa del Rey" },
  { count: 13, label: "Spanish Super Cups" },
  { count: 9, label: "FIFA Club World Cups" },
  { count: 6, label: "European Super Cups" },
  { count: 2, label: "UEFA Cups" },
];

export const clubFacts = [
  { label: "Founded", value: "1902" },
  { label: "Stadium", value: "Santiago Bernabéu, Madrid" },
  { label: "President", value: president.name },
  { label: "Head coach", value: headCoach.name },
  { label: "First-team squad", value: `${players.length} players` },
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
