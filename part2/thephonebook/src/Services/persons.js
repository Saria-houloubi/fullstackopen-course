import Axios from 'axios'

const baseUrl = '/api/persons'

const getAll = () =>{   
    return  Axios.get(baseUrl).then(response=> response.data)
}

const addContact = (newObject) =>{
    const request = Axios.post(baseUrl,newObject)

    return request.then(response=>{

        return response.data});
}

const deleteContact = (id) =>{
    const request = Axios.delete(`${baseUrl}/${id}`)

    return request.then(repsones=>repsones.data)
}
const updateContact =(updateObject)=>{
    const request = Axios.put(`${baseUrl}/${updateObject.id}`,updateObject)

    return request.then(response=>response.data)
}
export default{
    getAll,addContact,deleteContact,updateContact
}