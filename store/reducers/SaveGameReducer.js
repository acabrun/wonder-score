// GLOBAL STATE INITIALIZATION
const initialState = {gameSaved: []};

function saveGame(state = initialState, action) {
  let nextState;
  let itemMatch;
  switch (action.type) {
    case 'ADD_GAME':
      const matchSavedIndex = state.gameSaved.findIndex(
        (item) => (itemMatch = item.idMatch) === action.value.idMatch,
      );

      if (matchSavedIndex !== -1) {
        // Match already exist, check if game exist
        console.log('| Match already exist, check if game exist |');
        const newIdGame = action.value.paramsMatch[0].idGame;
        const index = state.gameSaved[matchSavedIndex].paramsMatch.findIndex(
          (x) => x.idGame === newIdGame,
        );
        if (index >= 0) {
          // <-------------------------------Doesn't works------------------------
          // Game already exists
          console.log('| Game already exists |');
          // nextState.gameSaved[matchSavedIndex].paramsMatch[index] =
          //   action.value.paramsMatch[0];
        } else {
          // Game doesn't exist, new game !
          console.log('| Game doesn t exist, new game ! | ');

          nextState = {
            ...state,
            gameSaved: state.gameSaved.map((game, id) => {
              if (id === action.value.idMatch - 1) {
                console.log(`ID: ${id} `);
                return Object.assign({}, game, {
                  paramsMatch: [
                    ...game.paramsMatch,
                    action.value.paramsMatch[0],
                  ],
                });
              }
            }),
          };

          //state.gameSaved[matchSavedIndex].paramsMatch.push(action.value.paramsMatch[0])
        }
      } else {
        // Save new match
        console.log('| Save new match |');
        // nextState = {
        //   ...state,
        //   gameSaved: [...state.gameSaved, action.value], // concatenation
        // };

        nextState = Object.assign({}, state, {
          gameSaved: [...state.gameSaved, action.value],
        });

        console.log(
          'Match saved ' +
            '| itemMatch ' +
            itemMatch +
            ' |idMatch ' +
            action.value.idMatch,
        );
      }
      return nextState || state;

    case 'CLEAR_DATA':
      console.log(action.value);
      nextState = {
        ...state,
        gameSaved: action.value, // concatenation
      };

      return nextState || state;

    default:
      return state;
  }
}

export default saveGame;
