import React, { Component } from "react";
import { connect } from "react-redux";
import { loadCourses } from "../../redux/actions/courseActions";
import { loadAuthors } from "../../redux/actions/authorActions";
import propTypes from "prop-types";

class ManageCoursePage extends Component {
  componentDidMount = () => {
    const { courses, authors, loadCourses, loadAuthors } = this.props;
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        console.log("failed to load courses,", error);
      });
    }

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        console.log("failed to load authors,", error);
      });
    }
  };

  render() {
    return (
      <>
        <h2>Manage course</h2>
        {/* <CourseList courses={this.props.courses} /> */}
      </>
    );
  }
}

ManageCoursePage.propTypes = {
  authors: propTypes.array.isRequired,
  courses: propTypes.array.isRequired,
  actions: propTypes.object.isRequired,
  loadAuthors: propTypes.func.isRequired,
  loadCourses: propTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
    authors: state.authors,
  };
};

const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
