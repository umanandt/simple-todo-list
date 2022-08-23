import { useReducer } from "react";

let intialState = {
  items: [],
};

const firstReducer = (state, action) => {
  

  if (action.type === "REMOVE") {
    let updatedItems;
    const itemIndex = state.items.findIndex((item) => item.id === action.id);

    if (itemIndex) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      updatedItems = [...state.items];
    }

    return {
      items: updatedItems,
    };
  }

  return intialState;
};

const useContext = () => {
  const [cartState, setDispatch] = useReducer(firstReducer, intialState);

  const RemoveHandler = (id) => {
    setDispatch({ type: "REMOVE", id: id });
  };

  return {
    items: cartState.items,
    RemoveHandler,
  };
};

export default useContext;
