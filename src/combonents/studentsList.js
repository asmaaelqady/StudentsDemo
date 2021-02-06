const StudentsList = (props)=>{
console.log(props.list)
if(props.list.length=== 0 && props.list2){
    return props.list2.map((student)=>{
        return(<div key={student.id} className="alert alert-dark" onClick={(event) => (window.location.href = `students/${student.id}`)}>
            <p className ="text-center ">{student.name}</p>
            <p className ="text-center">{student.email}</p>
        </div>)
    })
}
return props.list.map((student)=>{
    return(<div key={student.id} className="alert alert-dark" onClick={(event) => (window.location.href = `students/${student.id}`)}>
        <p className ="text-center ">{student.name}</p>
        <p className ="text-center">{student.email}</p>
    </div>)
})
  
    
    
    
}

export default StudentsList;