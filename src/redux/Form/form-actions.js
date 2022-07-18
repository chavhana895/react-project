import * as actionType from './Form-type'

export const addToList = (name, surname) => {
    return {
      type: actionTypes.ADD_TO_LIST,
      payload: {
        name: name,
        surname: surname
      },
    };
  };