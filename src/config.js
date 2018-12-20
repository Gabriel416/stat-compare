export const year = new Date().getFullYear();
export const month = new Date().getMonth() + 1;
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
export const boxScoreUrl = `https://data.nba.net/prod/v1/${year}${month}${date}/gameId_boxscore.json`;
export const todayUrl = "https://data.nba.net/10s/prod/v1/today.json";
export const shotChart =
  "https://stats.nba.com/events/?flag=3&CFID=&CFPARAMS=&PlayerID=201933&TeamID=1610612765&GameID=0021800049&ContextMeasure=FG3A&Season=2018-19&SeasonType=Regular%20Season&RangeType=0&StartPeriod=1&EndPeriod=10&StartRange=0&EndRange=31800&section=game&sct=plot";

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
  }
};
