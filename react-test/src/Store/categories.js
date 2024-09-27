export function loadCategories() {
    return (dispatch) => {
        dispatch({ type: "LOAD_CATEGORIES_START" });
        fetch("https://run.mocky.io/v3/18720816-1673-4182-ad7d-8575c5084503")
        .then(function (ressponse) {
            return ressponse.json();
        })
        .then((res) => {
            dispatch({ type: "LOAD_CATEGORIES_DONE", payload: res});
        });
    };
}

function categoriesReducer(
    state = {
      isLoading: true,
      categories: []
    },
    action
  ) {
    switch (action.type) {
      case "LOAD_CATEGORIES_START": {
        return {
          ...state,
          isLoading: true
        };
      }
  
      case "LOAD_CATEGORIES_DONE": {
        return {
          ...state,
          isLoading: false,
          categories: action.payload
        };
      }
      default:
        return state;
    }
  }

  export default categoriesReducer;