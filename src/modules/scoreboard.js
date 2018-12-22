import { getData } from "./http";
import { scoreBoardUrl, todaysDate, year, month, date } from "../config";

const SET_SCOREBOARD_DATA = "SET_SCOREBOARD_DATA";
const SET_CALENDAR_DATA = "SET_CALENDAR_DATA";

const initialState = {
  scoreBoardGames: null,
  numberOfGames: null,
  calendarDate: {
    fullDate: new Date(),
    humanReadable: todaysDate,
    urlDate: `${year}${month}${date}`
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SCOREBOARD_DATA: {
      return {
        ...state,
        scoreBoardGames: action.payload.games,
        numberOfGames: action.payload.numGames
      };
    }
    case SET_CALENDAR_DATA: {
      return {
        ...state,
        calendarDate: {
          ...state.calendarDate,
          fullDate: action.payload.date,
          humanReadable: action.payload.humanReadable,
          urlDate: action.payload.urlDate
        }
      };
    }
    default:
      return state;
  }
};

export const fetchScoreboardData = (url = null) => {
  return async dispatch => {
    const scoreBoardData = await dispatch(getData(url || scoreBoardUrl));
    dispatch({ type: SET_SCOREBOARD_DATA, payload: scoreBoardData });
  };
};

export const changeScoreboardDate = date => {
  return async dispatch => {
    const selectedYear = date.getFullYear();
    const month = date.getMonth() + 1;
    const selectedMonth = (month < 10 ? "0" : "") + month;
    const selectedDate = (date.getDate() < 10 ? "0" : "") + date.getDate();

    const finalSelectedDate = `${selectedYear}${selectedMonth}${selectedDate}`;

    const specifiedScoreboardDateUrl = scoreBoardUrl
      .split("/")
      .reduce((acc, partialString) => {
        if (parseFloat(partialString)) {
          partialString = finalSelectedDate;
        }

        return (acc += `${partialString}/`);
      }, "")
      .slice(0, -1);
    dispatch({
      type: SET_CALENDAR_DATA,
      payload: {
        date,
        humanReadable: date.toLocaleDateString("en-us", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        }),
        urlDate: finalSelectedDate
      }
    });
    dispatch(fetchScoreboardData(specifiedScoreboardDateUrl));
  };
};
