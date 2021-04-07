import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import propTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";

class CoursesPage extends Component {
  state = {
    redirectToAddCoursePage: false,
  };

  componentDidMount = () => {
    const { courses, authors, actions } = this.props;
    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        console.log("failed to load courses,", error);
      });
    }

    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        console.log("failed to load authors,", error);
      });
    }
  };

  handleDeleteCourse = async (course) => {
    console.log("optimistic delete: ", course.title);
    try {
      await this.props.actions.deleteCourse(course);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        {this.state.redirectToAddCoursePage && <Redirect to='/course' />}
        <h2>Courses</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <button
              style={{ marginBottom: "30px" }}
              className='btn btn-primary'
              onClick={() => this.setState({ redirectToAddCoursePage: true })}
            >
              Add course
            </button>
            <CourseList
              onDeleteClick={this.handleDeleteCourse}
              courses={this.props.courses}
            />
          </>
        )}
      </>
    );
  }
}

CoursesPage.propTypes = {
  authors: propTypes.array.isRequired,
  courses: propTypes.array.isRequired,
  actions: propTypes.object.isRequired,
  loading: propTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find(
                (a) => parseInt(a.id, 10) === parseInt(course.authorId, 10)
              ).name,
            };
          }),
    authors: state.authors,
    loading: state.apiCallsInProgress > 0,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
      deleteCourse: bindActionCreators(courseActions.deleteCourse, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
