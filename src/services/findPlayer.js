import { store } from "../store";
import { teamStyles, playerHeadShot } from "../config";

export default playerId => {
  const currentState = store.getState();
  const teams = currentState.teams.teamData;
  const players = currentState.players.playerData;
  const playerData = players.find(player => player.personId === playerId);
  if (!playerData) {
    return {
      firstName: "Unknown",
      lastName: "Unknown",
      photo: null,
      info: {},
      team: {}
    };
  }
  let player = {};
  player.team = teams.find(team => playerData.teamId === team.teamId);
  player.team.logo = teamStyles[player.team.urlName].logo;
  const mapObj = {
    teamId: playerData.teamId,
    personId: playerData.personId
  };
  player.photo = playerHeadShot.replace(
    /teamId|personId/gi,
    matched => mapObj[matched]
  );
  player.firstName = playerData.firstName;
  player.lastName = playerData.lastName;
  player.info = playerData;

  return player;
};
