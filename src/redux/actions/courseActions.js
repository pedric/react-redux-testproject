import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

export const createCourse = (course) => {
  return { type: types.CREATE_COURSE, course };
};

const loadCoursesSuccess = (courses) => {
  return { type: types.LOAD_COURSES_SUCCESS, courses }; // or put it inline in the dispatch on row 17
};

export const loadCourses = () => {
  return (dispatch) => {
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
};
