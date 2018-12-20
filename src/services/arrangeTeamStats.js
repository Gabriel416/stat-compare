export default (basicGameData, previousMatchup) => {
  if (
    basicGameData.hTeam.teamId !== previousMatchup.basicGameData.hTeam.teamId
  ) {
    // If the previous match had an opposite home team switch roles around
    let statsCopy = JSON.parse(JSON.stringify(previousMatchup.stats));
    statsCopy.hTeam = previousMatchup.stats.vTeam;
    statsCopy.vTeam = previousMatchup.stats.hTeam;

    return statsCopy;
  }

  return previousMatchup.stats;
};
