import React  from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addStudent } from '../actions';

 class Addstudent extends React.Component {
  constructor() {
    super();
    this.state = {
      id:'',
      name:'',
      age:'',
      phone:''
    };
  }
  changeName= (e) => {
    this.setState({name:e.target.value})
  }
  changeAge= (e) => {
    this.setState({age:e.target.value})
  }
  changePhone= (e) => {
    this.setState({phone:e.target.value})
  }

  submitHandeler= (e) => {
    e.preventDefault()
    if(this.state.name!==""&&this.state.age!=="",this.state.phone!==""){
      console.log(this.props.studentList);
      this.props.addStudent(this.state)
      this.setState({name:''})
      this.setState({age:''})
      this.setState({phone:''})
      window.location.replace("/")
    }else{
      alert("fields must not be empety")
    }
   
  }
  render() {
    return (
        <div className="container">
            <h2 className="text-center title">Student List</h2>
            <hr style={{height:'5px',backgroundColor:'black'}}></hr>
    <form >
        
  <div className="form-group row mt-5">
    <label htmlFor="inputname" className="col-sm-1 col-form-label">Name :</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="inputname" required minLength="3" name="name"  value={this.state.InputName}
                    onChange={this.changeName}/>
    </div>
    <div className="invalid-feedback">Please provide a valid city.</div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputage" className="col-sm-1 col-form-label">Age :</label>
    <div className="col-sm-10">
      <input type="number" className="form-control" id="inputage" required name="age"  value={this.state.InputAge}
                    onChange={this.changeAge}/>
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputphone" className="col-sm-1 col-form-label">Phone</label>
    <div className="col-sm-10">
      <input type="number" className="form-control" id="inputphone" required name="phone"  value={this.state.InputPhone}
                    onChange={this.changePhone}/>
    </div>
  </div>
  <button className="btn btn-success mt-3" style={{marginLeft:'100px'}} onClick={this.submitHandeler}>Save</button>
</form>
</div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    studentList: state.students.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addStudent }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Addstudent);

