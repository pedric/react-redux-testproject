import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import propTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        title: "",
      },
    };
  }

  handleChange = (e) => {
    const course = { ...this.state.course, title: e.target.value };
    this.setState({ course });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.actions.createCourse(this.state.course);
    this.setState({ course: { title: "" } });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h2>Courses</h2>
          <h3>Add course</h3>
          <input
            type='text'
            onChange={this.handleChange}
            value={this.state.course.title}
          />
          <input type='submit' value='Save' />
        </form>
        <div>
          {this.props.courses.map((course, idx) => (
            <p key={`${course.title}_${idx}`}>{course.title}</p>
          ))}
        </div>
      </>
    );
  }
}

CoursesPage.propTypes = {
  courses: propTypes.array.isRequired,
  actions: propTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
