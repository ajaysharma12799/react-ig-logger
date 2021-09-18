import React, {useState} from 'react'
import { toast } from 'react-toastify';
import Navbar from '../layout/Navbar'


const AddTechForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName, lastName);
        toast.success("Technician Added Successfully");
    }

    return (
        <React.Fragment>
            <Navbar />
            <form className="mt-5 w-50 container">
                <div className="mb-3 text-center">
                    <h4 className="display-6">Add Technician</h4>
                </div>
                <div className="mb-3">
                    <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} className="form-control" placeholder="Enter FirstName"/>
                </div>
                <div className="mb-3">
                    <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} className="form-control" placeholder="Enter LastName"/>
                </div>
                <button className="btn btn-primary w-100" onClick={e => handleSubmit(e)}>Add Technician</button>
            </form>
        </React.Fragment>
    )
}

export default AddTechForm