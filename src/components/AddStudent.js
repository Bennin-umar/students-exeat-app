import { useContext, useState} from 'react'
import { StudentContext } from "../context/StudentContext";
function AddStudent() {
    const { dispatch } = useContext(StudentContext);
    
        const  [ name, setName ] = useState();
        const [ level, setLevel ] = useState();
        const [ reason, setReason ] = useState();
        const [ destination, setDestination ] = useState();
        const  [ ddate, setDdate ] = useState();
        const  [ rdate, setRdate ] = useState();
    const [indexNo, setIndexNo] = useState();
    
    const onsubmit = (e) => {
        e.preventDefault()
        dispatch({type:"ADDSTUDENT", data:{name, level, ddate,rdate,destination,reason, indexNo}})
    }
    return (
        <>
            <div>
                <h2>EXEAT BOOKING APP</h2>
            </div>
        <form className="col-6 border p-4" onSubmit={onsubmit}>
          <input type="text" placeholder="student name" onChange={ t=>setName(t.target.value)}  className="form-control"/>
            <input type="number" placeholder="student level" onChange={ t=>setLevel(t.target.value)}  className="form-control"/>
            <input type="text" placeholder="Reason" onChange={ t=>setReason(t.target.value)}  className="form-control"/>
            <input type="text" placeholder="Destination" onChange={t => setDestination(t.target.value)} className="form-control" />
            <div className="form-control">
                <label>
                    Departure date
                </label>
            <input type="date" onChange={t => setDdate(t.target.value)} className="form-control" />
                </div>
                <br/>
            <div className="form-control">
                <label>
                    Return date
                </label>
            <input type="date"  onChange={ t=>setRdate(t.target.value)}  className="form-control"/>
                </div>
                <br/>
            <input type="text" placeholder="index number" onChange={ t=>setIndexNo(t.target.value)}  className="form-control"/>
            <button className="form-control btn btn-success">ADD</button>
        </form>
        </>
    )
    
}

export default AddStudent
