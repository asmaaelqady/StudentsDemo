import { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getStudentDetails,clearStudentDetails,deleteStudent } from '../actions'
const StudentDetails = ({ getStudentDetails,clearStudentDetails,deleteStudent, details, match }) => {
    const id = match.params.id
    console.log(id)
    useEffect(() => {
        console.log('as comp did mount')
        getStudentDetails(id)

        return ()=>{
            console.log('cleanup (unmount)')
            clearStudentDetails()
        }
    },[]);
 
    const renderCarDetails = (details) => {
        if (details && details.id) {
            return(<div className="container">
                 <h2 className="text-center title">Student Details</h2>
            <hr style={{height:'5px',backgroundColor:'black'}}></hr>
            
            <div key={details.id} className="alert alert-dark">
            <p className ="text-center ">{details.name}</p>
            <p className ="text-center">{details.age}</p>
            <p className ="text-center">{details.phone}</p>
           
        </div>
        <input type="button" className="btn bg-primary" data-toggle="modal" data-target="#exampleModal"  value="delete"/>

<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Aer you sure</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
        <button type="button" className="btn btn-primary"
         onClick={() => {
            deleteStudent(details.id)
            window.location.replace("/")
          }}
        
        >Yes</button>
      </div>
    </div>
  </div>
</div>
</div>

        )
        }
        return ''
    }
    return (<div className="alert alert-light">
        {renderCarDetails(details)}
    </div>)

}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        details: state.students.details
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getStudentDetails ,clearStudentDetails,deleteStudent}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails)

