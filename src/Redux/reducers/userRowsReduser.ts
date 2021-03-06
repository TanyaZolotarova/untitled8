import {combineReducers} from "redux";
import {
  EDIT_USER_ROW,
  GENERATE_DATA,
  UPDATE_FILTERED_ROWS,
  UPDATE_PAGE,
  GET_TEXT,
  ActionTypesRow
} from "../actions/row";
import IEditInterface from "/home/tanya/PhpstormProjects/untitled8/src/Container/TypeScript/Interfaces/IEditInterface";


const rows = (state: Array<IEditInterface> = [], action: ActionTypesRow) => {
  switch (action.type) {
    case GENERATE_DATA:
    case EDIT_USER_ROW:
      return [...action.data || []].map((item, index) => {
        item.idx = index;
        return item;
      });
    default:
      return state;
  }
};


const page = (state:number = 1, action: ActionTypesRow) => {
  switch (action.type) {
    case UPDATE_PAGE:
      return action.page;
    case UPDATE_FILTERED_ROWS:
      return 1;
    default:
      return state;
  }
};

const filterText = (state: string = '', action: ActionTypesRow)=>{
  switch (action.type) {
    case GET_TEXT:
      return action.text;
    default:
      return state;
  }
};


export const usersReducer = combineReducers({
  rows,
  page,
  filterText
});








// import {combineReducers} from "redux";
// import {EDIT_USER_ROW, GENERATE_DATA, UPDATE_FILTERED_ROWS, UPDATE_PAGE, GET_TEXT} from "../actions/row";
//
//
// const rows = (state = [], action) => {
//   switch (action.type) {
//     case GENERATE_DATA:
//     case EDIT_USER_ROW:
//       return [...action.data || []].map((item, index) => {
//         item.idx = index;
//         return item;
//       });
//     default:
//       return state;
//   }
// };
//
//
// const page = (state = 1, action) => {
//   switch (action.type) {
//     case UPDATE_PAGE:
//       return action.page;
//     case UPDATE_FILTERED_ROWS:
//       return 1;
//     default:
//       return state;
//   }
// };
//
// const filterText = (state = '', action)=>{
//   switch (action.type) {
//     case GET_TEXT:
//       return action.text;
//     default:
//       return state;
//   }
// };
//
//
// export const usersReducer = combineReducers({
//   rows,
//   page,
//   filterText
// });
