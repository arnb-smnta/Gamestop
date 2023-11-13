export const gamepagedata = (gameslist, ids) => {
  ids = parseInt(ids, 10);
  let game = [];
  for (let i = 0; i < gameslist.length; i++) {
    if (gameslist[i].id === ids) {
      game = gameslist[i];
    }
  }
  return game;
};
