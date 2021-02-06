const baseURL = "http://localhost:3001/students"

export const getStudents = async () => {
    let payload;
    try{
        let response = await fetch(`${baseURL}`)
        payload = await response.json()
        console.log(payload)
    }
    catch(err){
        console.log(err)
    }
    return {
        type: 'STUDENTS_LIST',
        payload
    }
}
export const getStudentDetails = async (id) => {
    let payload;
    try{
        let response = await fetch(`${baseURL}/${id}`)
        payload = await response.json()
        console.log(payload)
    }
    catch(err){
        console.log(err)
    }
    return {
        type: 'Student_DETAILS',
        payload
    }

}

export const clearStudentDetails = ()=>{
    return {
        type:'CLEAR_Student_DETAILS',
        payload:null
    }
}

export const addStudent = async (students) => {
    let payload;
    try{
        let response = await fetch(`${baseURL}`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id:students.id,name:students.name,age:students.age,phone:students.phone})
        })
        payload = await response.json()
        console.log(payload)
    }
    catch(err){
        console.log(err)
    }
    return {
        
        type: 'ADD_STUDENT',
        payload
    }

    
}

export const deleteStudent = async (id) => {
    let payload;
    try{
        let response = await fetch(`${baseURL}/${id}`,{
            method: 'DELETE'
        })
        payload = await response.json()
        console.log(payload)
    }
    catch(err){
        console.log(err)
    }
    return {
        type: 'DELETE_STUDENT',
        payload
    }

    
}