import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

// export const createCourse = (course) => {
//   return { type: types.CREATE_COURSE, course };
// };

const loadCoursesSuccess = (courses) => {
  return { type: types.LOAD_COURSES_SUCCESS, courses }; // or put it inline in the dispatch on row 17
};

export const loadCourses = () => {
  return (dispatch) => {
    dispatch(beginApiCall());
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
};

const updateCourseSuccess = (course) => {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
};

const createCourseSuccess = (course) => {
  return { type: types.CREATE_COURSE_SUCCESS, course };
};

export const saveCourse = (course) => {
  return (dispatch, getState) => {
    dispatch(beginApiCall());
    return courseApi
      .saveCourse(course)
      .then((savedCourse) => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
};

const deleteCourseOptimistic = (course) => {
  return { type: types.DELETE_COURSE_OPTIMISTIC, course };
};

export const deleteCourse = (course) => {
  return (dispatch) => {
    dispatch(deleteCourseOptimistic(course));
    return courseApi.deleteCourse(course.id);
  };
};
