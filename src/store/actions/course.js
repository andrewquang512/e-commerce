import { GET_COURSE, GET_COURSES, COURSE_ERROR, CHANGE_LINK } from "./types.js";
import coursesData from "../../api/courses.json";

export const getCourses = () => async (dispatch) => {
  try {
    const res = coursesData.courses;

    dispatch({
      type: GET_COURSES,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: COURSE_ERROR,
      payload: {
        msg: "Courses Not Found",
      },
    });
  }
};

export const getCourse = (id) => async (dispatch) => {
  try {
    const res = coursesData.courses.find((course) => course.id === id);
    dispatch({
      type: GET_COURSE,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: COURSE_ERROR,
      payload: {
        msg: "Course Not Found",
      },
    });
  }
};

export const changeLesson = (link) => async (dispatch) => {
  try {
    // dispatch({
    //   type: CHANGE_LINK,
    //   payload: "",
    // });

    dispatch({
      type: CHANGE_LINK,
      payload: link,
    });
  } catch (error) {
    dispatch({
      type: COURSE_ERROR,
      payload: {
        msg: "Course Not Found",
      },
    });
  }
};