export const proxy = "https://stat-compare-proxy.herokuapp.com/";
export const playersUrl = `https://data.nba.net/10s/prod/v1/${new Date().getFullYear()}/players.json`;
export const teamsUrl = `https://data.nba.net/10s/prod/v1/${new Date().getFullYear()}/teams.json`;
export const scoreBoardUrl = `https://data.nba.net/prod/v1/${new Date().getFullYear()}${new Date().getMonth() +
  1}${new Date().getDate()}/scoreboard.json`;
export const todayUrl = "https://data.nba.net/10s/prod/v1/today.json";
export const shotChart =
  "https://stats.nba.com/events/?flag=3&CFID=&CFPARAMS=&PlayerID=201933&TeamID=1610612765&GameID=0021800049&ContextMeasure=FG3A&Season=2018-19&SeasonType=Regular%20Season&RangeType=0&StartPeriod=1&EndPeriod=10&StartRange=0&EndRange=31800&section=game&sct=plot";

export const teamColors = {
  hawks: {
    primary: "#E03A3E",
    secondary: "#C1D32F",
    alternate: "#26282A"
  },
  celtics: {
    primary: "#007A33",
    secondary: "#BA9653",
    alternate: "#963821"
  },
  nets: {
    primary: "#000000",
    secondary: "#FFFFFF",
    alternate: "#002A60"
  },
  hornets: {
    primary: "#1D1160",
    secondary: "#00788C",
    alternate: "#A1A1A4"
  },
  bulls: {
    primary: "#CE1141",
    secondary: "#000000",
    alternate: "#000000"
  },
  cavaliers: {
    primary: "#6F263D",
    secondary: "#041E42",
    alternate: "#FFB81C"
  },
  mavericks: {
    primary: "#00538C",
    secondary: "#002B5E",
    alternate: "#B8C4CA"
  },
  nuggets: {
    primary: "#0E2240",
    secondary: "#FEC524",
    alternate: "#8B2131"
  },
  pistons: {
    primary: "#C8102E",
    secondary: "#006BB6",
    alternate: "#BEC0C2"
  },
  warriors: {
    primary: "#006BB6",
    secondary: "#FDB927",
    alternate: "#26282A"
  },
  rockets: {
    primary: "#CE1141",
    secondary: "#000000",
    alternate: "#C4CED4"
  },
  pacers: {
    primary: "#002D62",
    secondary: "#FDBB30",
    alternate: "#BEC0C2"
  },
  clippers: {
    primary: "#C8102E",
    secondary: "#1D42BA",
    alternate: "#BEC0C2"
  },
  lakers: {
    primary: "#552583",
    secondary: "#FDB927",
    alternate: "#000000"
  },
  grizzlies: {
    primary: "#5D76A9",
    secondary: "#12173F",
    alternate: "#F5B112"
  },
  heat: {
    primary: "#98002E",
    secondary: "#F9A01B",
    alternate: "#000000"
  },
  bucks: {
    primary: "#00471B",
    secondary: "#EEE1C6",
    alternate: "#0077C0"
  },
  timberwolves: {
    primary: "#0C2340",
    secondary: "#236192",
    alternate: "#9EA2A2"
  },
  pelicans: {
    primary: "#0C2340",
    secondary: "#C8102E",
    alternate: "#85714D"
  },
  knicks: {
    primary: "#006BB6",
    secondary: "#F58426",
    alternate: "#BEC0C2"
  },
  thunder: {
    primary: "#007AC1",
    secondary: "#EF3B24",
    alternate: "#002D62"
  },
  magic: {
    primary: "#0077C0",
    secondary: "#C4CED4",
    alternate: "#000000"
  },
  sixers: {
    primary: "#006BB6",
    secondary: "#ED174C",
    alternate: "#002B5C"
  },
  suns: {
    primary: "#1D1160",
    secondary: "#E56020",
    alternate: "#000000"
  },
  trailBlazers: {
    primary: "#E03A3E",
    secondary: "#000000",
    alternate: "#000000"
  },
  kings: {
    primary: "#5A2D81",
    secondary: "#63727A",
    alternate: "#000000"
  },
  spurs: {
    primary: "#C4CED4",
    secondary: "#000000",
    alternate: "#000000"
  },
  raptors: {
    primary: "#CE1141",
    secondary: "#000000",
    alternate: "#A1A1A4"
  },
  jazz: {
    primary: "#002B5C",
    secondary: "#00471B",
    alternate: "#F9A01B"
  },
  wizards: {
    primary: "#002B5C",
    secondary: "#E31837",
    alternate: "#C4CED4"
  },
  supersonics: {
    primary: "#00653A",
    secondary: "#FFC200",
    alternate: "#FFFFFF"
  }
};
