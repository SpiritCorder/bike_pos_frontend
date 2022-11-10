
import {useNavigate} from 'react-router-dom';


import '../../styles/employee_management/employeeAdd.css';


const MySalesAdd = () => {

    const navigate = useNavigate();

    return (
        <div className='employeeAdd'>

            <aside className='employeeAdd-header'>
                <h1>Add New Inplace Order</h1>
                <button className='btn btn-primary' onClick={() => navigate(-1)}>Go Back</button>
            </aside>

            <hr></hr>
        </div>
    );
}

export default MySalesAdd;