// TODO : Save new game IN match if it already exist !!!!!

const initialState = { gameSaved: [] };

function saveGame(state = initialState, action) {
  let nextState;
  let itemMatch;
  switch (action.type) {
    case "ADD_GAME":
      const matchSavedIndex = state.gameSaved.findIndex(
        item => (itemMatch = item.idMatch) === action.value.idMatch
      );

      if (matchSavedIndex !== -1) {
        // Match already exist, check if game exist
        console.log('| Match already exist, check if game exist |')
        const newIdGame = action.value.paramsMatch[0].idGame;
        const index = state.gameSaved[matchSavedIndex].paramsMatch.findIndex(
          x => x.idGame === newIdGame
        );
        if (index >= 0) {   // <-------------------------------Doesn't works------------------------
          // Game already exists
          console.log('| Game already exists |')
          // nextState.gameSaved[matchSavedIndex].paramsMatch[index] =
          //   action.value.paramsMatch[0];
        } else {
          // Game doesn't exist, new game !
          console.log('| Game doesn t exist, new game ! | ' )

          state.gameSaved[matchSavedIndex].paramsMatch.push(action.value.paramsMatch[0])
         
        }
      } else {
        // Save new match
        console.log('| Save new match |')
        nextState = {
          ...state,
          gameSaved: [...state.gameSaved, action.value] // concatenation
        };
        console.log(
          "Match saved " +
            "| itemMatch " +
            itemMatch +
            " |idMatch " +
            action.value.idMatch
        );
      }
      return nextState || state; // mean if undefined return state

    default:
      return state;
  }
}

export default saveGame;
