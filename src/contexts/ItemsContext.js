import { createContext, useReducer } from "react";
import itemsReducer from "../reducers/itemsReducer";
import axios from "axios";

const initialState = {
  loading: true,
  items: [],
  error: null,
};

export const ItemsContext = createContext();

const ItemsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(itemsReducer, initialState);
  // get all items
  async function getItems() {
    const res = await axios.get(
      "https://traineesapi-dodoo.herokuapp.com/api/v1/trainees"
    );
    try {
      dispatch({
        type: "GET_ALL_ITEMS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <ItemsContext.Provider
      value={{ getItems, items: state.items, loading: state.loading }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsContextProvider;
