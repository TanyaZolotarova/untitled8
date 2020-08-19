import {combineReducers} from "redux";
import {EDIT_USER_ROW, GENERATE_DATA, UPDATE_FILTERED_ROWS, UPDATE_PAGE} from "../actions/row";
import {generateEmail, generateId, generateName} from "/home/tanya/PhpstormProjects/untitled8/src/SitePageComponents/RandomFunctions.js";




function generateRows() {
  const amountOfRows = 100;
  const result = [];

  for (let i = 0; i < amountOfRows; i++) {
    result.push({
      id: generateId(),
      name1: generateName(),
      name2: generateName(),
      name3: generateName(),
      email: generateEmail(),
      uniqueId: i,
    })
  }

  return result;
};


const generateUserRow = (state = generateRows(), action) => {
  switch (action.type) {
    case GENERATE_DATA:
      return [...action.data];
    default:
      return state;
  }
};

const updatedData = (state = [], action) => {
  switch (action.type) {
    case UPDATE_FILTERED_ROWS:
      return [...action.data];
    default:
      return state;
  }
};

const page = (state = 1, action) => {
  switch (action.type) {
    case UPDATE_PAGE:
      return action.page;
    case UPDATE_FILTERED_ROWS:
      return 1;
    default:
      return state;
  }
};

const edit = (state = [], action) => {
  switch (action.type) {
    case EDIT_USER_ROW:
      return [...action.data];
    default:
      return state;
  }
};




export const userRowsReducer = combineReducers({
  updatedData,
  page,
  edit,
  generateUserRow
});


// const initialState = {
//     rowsInitial: [],
//     rowsFiltered: [],
//     currentPage: 1,
// };
//
// export const userRowsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case GENERATE_DATA:
//             return { ...state, rowsInitial: [...action.data], rowsFiltered: [...action.data] };
//         case UPDATE_FILTERED_ROWS:
//             return { ...state, rowsFiltered: [...action.data] };
//         case UPDATE_PAGE:
//             return { ...state, currentPage: action.page };
//         default:
//             return state;
//     }
// };


// const data = (state = [], action) => {
//     switch (action.type) {
//         case GENERATE_DATA:
//             return [...action.data];
//         default:
//             return state;
//     }
// };