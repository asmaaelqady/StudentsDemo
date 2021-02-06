import Search from "../combonents/search";
import Header from "../combonents/header";
import { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import StudentsList from "../combonents/studentsList";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      filtedList: [],
    };
  }
  filterList = (keywords) => {
    if (this.props.studentList) {
      console.log(this.props.studentList2);
      if (keywords) {
        this.setState((state) => {
          state.filtedList = this.props.studentList.filter((item) => {
            return item.name.toLowerCase().includes(keywords.toLowerCase());
          });
          return state;
        });
      }
    }
  };
  componentDidMount() {
    console.log("this.props.studentList");
    this.props.getStudents();
  }
  render = () => {
    console.log("render");
    return (
      <div>
        <Header />
        <div className="container">
          <Search onKeywordsChange={this.filterList} />
          <StudentsList
            list={this.state.filtedList}
            list2={this.props.studentList}
          />
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    studentList: state.students.list,
  };
};

export default connect(mapStateToProps, actions)(Home);
