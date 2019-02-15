export const uri = "/v1";

export const year = new Date().getFullYear() - 1;
export const tempMonth = new Date().getMonth() + 1;
export const month = (tempMonth < 10 ? "0" : "") + tempMonth;
export const date =
  (new Date().getDate() < 10 ? "0" : "") + new Date().getDate();

export const proxy = "https://stat-compare-proxy.herokuapp.com/";
export const playersUrl = `https://data.nba.net/10s/prod/v1/${year}/players.json`;
export const playerStatsUrl = `http://data.nba.net/prod/v1/${year}/players/personId_profile.json`;
export const teamsUrl = `https://data.nba.net/10s/prod/v1/${year}/teams.json`;
export const teamsScheduleUrl = `https://data.nba.net/prod/v1/${year}/teams/teamId/schedule.json`;
export const teamsRosterUrl = `https://data.nba.net/prod/v1/${year}/teams/teamId/roster.json`;
export const teamsLeadersUrl = `https://data.nba.net/prod/v1/${year}/teams/teamId/leaders.json`;
export const scoreBoardUrl = `https://data.nba.net/prod/v1/${year}${month}${date}/scoreboard.json`;
export const boxScoreUrl = `https://data.nba.net/prod/v1/timeStamp/gameId_boxscore.json`;
export const todayUrl = "https://data.nba.net/10s/prod/v1/today.json";

export const playerHeadShot = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/teamId/${year}/260x190/personId.png`;

export const todaysDate = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
});

export const teamStyles = {
  hawks: {
    primary: "#E03A3E",
    secondary: "#C1D32F",
    alternate: "#26282A",
    logo: `https://i.logocdn.com/nba/current/atlanta-hawks.svg`
  },
  celtics: {
    primary: "#007A33",
    secondary: "#BA9653",
    alternate: "#963821",
    logo: `https://i.logocdn.com/nba/current/boston-celtics.svg`
  },
  nets: {
    primary: "#000000",
    secondary: "#FFFFFF",
    alternate: "#002A60",
    logo: `https://i.logocdn.com/nba/current/brooklyn-nets.svg`
  },
  hornets: {
    primary: "#1D1160",
    secondary: "#00788C",
    alternate: "#A1A1A4",
    logo: `https://i.logocdn.com/nba/current/charlotte-hornets.svg`
  },
  bulls: {
    primary: "#CE1141",
    secondary: "#000000",
    alternate: "#000000",
    logo: `https://i.logocdn.com/nba/current/chicago-bulls.svg`
  },
  cavaliers: {
    primary: "#6F263D",
    secondary: "#041E42",
    alternate: "#FFB81C",
    logo: `https://i.logocdn.com/nba/current/cleveland-cavaliers.svg`
  },
  mavericks: {
    primary: "#00538C",
    secondary: "#002B5E",
    alternate: "#B8C4CA",
    logo: `https://i.logocdn.com/nba/current/dallas-mavericks.svg`
  },
  nuggets: {
    primary: "#0E2240",
    secondary: "#FEC524",
    alternate: "#8B2131",
    logo: `https://i.logocdn.com/nba/current/denver-nuggets.svg`
  },
  pistons: {
    primary: "#C8102E",
    secondary: "#006BB6",
    alternate: "#BEC0C2",
    logo: `https://i.logocdn.com/nba/current/detroit-pistons.svg`
  },
  warriors: {
    primary: "#006BB6",
    secondary: "#FDB927",
    alternate: "#26282A",
    logo: `https://i.logocdn.com/nba/2010/golden-state-warriors.svg`
  },
  rockets: {
    primary: "#CE1141",
    secondary: "#000000",
    alternate: "#C4CED4",
    logo: `https://i.logocdn.com/nba/current/houston-rockets.svg`
  },
  pacers: {
    primary: "#002D62",
    secondary: "#FDBB30",
    alternate: "#BEC0C2",
    logo: `https://i.logocdn.com/nba/current/indiana-pacers.svg`
  },
  clippers: {
    primary: "#C8102E",
    secondary: "#1D42BA",
    alternate: "#BEC0C2",
    logo: `https://i.logocdn.com/nba/current/los-angeles-clippers.svg`
  },
  lakers: {
    primary: "#552583",
    secondary: "#FDB927",
    alternate: "#000000",
    logo: `https://i.logocdn.com/nba/current/los-angeles-lakers.svg`
  },
  grizzlies: {
    primary: "#5D76A9",
    secondary: "#12173F",
    alternate: "#F5B112",
    logo: `https://i.logocdn.com/nba/current/memphis-grizzlies.svg`
  },
  heat: {
    primary: "#98002E",
    secondary: "#F9A01B",
    alternate: "#000000",
    logo: `https://i.logocdn.com/nba/current/miami-heat.svg`
  },
  bucks: {
    primary: "#00471B",
    secondary: "#EEE1C6",
    alternate: "#0077C0",
    logo: `https://i.logocdn.com/nba/current/milwaukee-bucks.svg`
  },
  timberwolves: {
    primary: "#0C2340",
    secondary: "#236192",
    alternate: "#9EA2A2",
    logo: `https://i.logocdn.com/nba/current/minnesota-timberwolves.svg`
  },
  pelicans: {
    primary: "#0C2340",
    secondary: "#C8102E",
    alternate: "#85714D",
    logo: `https://i.logocdn.com/nba/current/new-orleans-pelicans.svg`
  },
  knicks: {
    primary: "#006BB6",
    secondary: "#F58426",
    alternate: "#BEC0C2",
    logo: `https://i.logocdn.com/nba/current/new-york-knicks.svg`
  },
  thunder: {
    primary: "#007AC1",
    secondary: "#EF3B24",
    alternate: "#002D62",
    logo: `https://i.logocdn.com/nba/current/oklahoma-city-thunder.svg`
  },
  magic: {
    primary: "#0077C0",
    secondary: "#C4CED4",
    alternate: "#000000",
    logo: `https://i.logocdn.com/nba/current/orlando-magic.svg`
  },
  sixers: {
    primary: "#006BB6",
    secondary: "#ED174C",
    alternate: "#002B5C",
    logo: `https://i.logocdn.com/nba/current/philadelphia-76ers.svg`
  },
  suns: {
    primary: "#1D1160",
    secondary: "#E56020",
    alternate: "#000000",
    logo: `https://i.logocdn.com/nba/current/phoenix-suns.svg`
  },
  blazers: {
    primary: "#E03A3E",
    secondary: "#000000",
    alternate: "#000000",
    logo: `https://i.logocdn.com/nba/current/portland-trail-blazers.svg`
  },
  kings: {
    primary: "#5A2D81",
    secondary: "#63727A",
    alternate: "#000000",
    logo: `https://i.logocdn.com/nba/current/sacramento-kings.svg`
  },
  spurs: {
    primary: "#C4CED4",
    secondary: "#000000",
    alternate: "#000000",
    logo: `https://i.logocdn.com/nba/current/san-antonio-spurs.svg`
  },
  raptors: {
    primary: "#CE1141",
    secondary: "#000000",
    alternate: "#A1A1A4",
    logo: `https://i.logocdn.com/nba/current/toronto-raptors.svg`
  },
  jazz: {
    primary: "#002B5C",
    secondary: "#00471B",
    alternate: "#F9A01B",
    logo: `https://i.logocdn.com/nba/current/utah-jazz.svg`
  },
  wizards: {
    primary: "#002B5C",
    secondary: "#E31837",
    alternate: "#C4CED4",
    logo: `https://i.logocdn.com/nba/current/washington-wizards.svg`
  },
  supersonics: {
    primary: "#00653A",
    secondary: "#FFC200",
    alternate: "#FFFFFF"
  },
  bullets: {
    primary: "#002A76",
    secondary: "#EF9B21",
    alternate: "#FFFFFF",
    logo: `https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Brisbane_Bullets_logo.svg/1200px-Brisbane_Bullets_logo.svg.png`
  },
  "long-lions": {
    primary: "#0D193F",
    secondary: "#E7002B",
    alternate: "FFFFFF",
    logo: `https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Guangzhou_Long-Lions_logo.png/220px-Guangzhou_Long-Lions_logo.png`
  },
  maccabi_haifa: {
    primary: "#125C30",
    secondary: "#050708",
    alternate: "#FFFFFF",
    logo: `https://upload.wikimedia.org/wikipedia/en/4/4c/Maccabi_Haifa_B.C_logo.png`
  },
  united: {
    primary: "#151926",
    secondary: "#FFFFFF",
    alternate: "#BBBBBB",
    logo: `https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Melbourne_United_logo.svg/220px-Melbourne_United_logo.svg.png`
  },
  shanghai_sharks: {
    primary: "#B52125",
    secondary: "#0519A",
    alternate: "#FFFFFF",
    logo: `https://upload.wikimedia.org/wikipedia/en/3/38/Shanghai_Sharks_logo.png`
  },
  sydkings: {
    primary: "#5A3E9B",
    secondary: "#FFCA36",
    alternate: "#FFFFFF",
    logo: `https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Sydney_Kings_logo.svg/220px-Sydney_Kings_logo.svg.png`
  },
  team_lebron: {
    primary: "#FFFFFF",
    secondary: "#000000",
    alternate: "#FFFFFF",
    logo: `https://asset-sports.abs-cbn.com/web/dev/articles/1517442708_1516948010-1516753206-1515996790-1510273922-as18-losangeles-starlogo.jpg`
  },
  team_stephen: {
    primary: "#000000",
    secondary: "#FFFFFF",
    alternate: "#000000",
    logo: `https://asset-sports.abs-cbn.com/web/dev/articles/1517442708_1516948010-1516753206-1515996790-1510273922-as18-losangeles-starlogo.jpg`
  },
  team_clippers: {
    primary: "#000000",
    secondary: "#FFFFFF",
    alternate: "#000000",
    logo: `https://asset-sports.abs-cbn.com/web/dev/articles/1517442708_1516948010-1516753206-1515996790-1510273922-as18-losangeles-starlogo.jpg`
  },
  team_lakers: {
    primary: "#000000",
    secondary: "#FFFFFF",
    alternate: "#000000",
    logo: `https://asset-sports.abs-cbn.com/web/dev/articles/1517442708_1516948010-1516753206-1515996790-1510273922-as18-losangeles-starlogo.jpg`
  },
  usa: {
    primary: "#002655",
    secondary: "#E60E34",
    alternate: "#FFFFFF",
    logo: `https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Usa_basketball_2012.png/160px-Usa_basketball_2012.png`
  },
  world: {
    primary: "#000000",
    secondary: "#FFFFFF",
    alternate: "#000000",
    logo: `https://asset-sports.abs-cbn.com/web/dev/articles/1517442708_1516948010-1516753206-1515996790-1510273922-as18-losangeles-starlogo.jpg`
  }
};
