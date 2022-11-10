
import {useNavigate} from 'react-router-dom';

import {MdOutlineAddTask} from 'react-icons/md';

import '../../styles/employee_management/employeeList.css';


const MySalesList = () => {

    const navigate = useNavigate();

    return (
        <div>

            <aside className='employeeList-header'>
                <h1>My Sales Management</h1>
                <button className='btn btn-primary' onClick={() => navigate('/dash/employee/sales-management/add')}>New Inplace Order<MdOutlineAddTask /></button>
            </aside>

            <hr></hr>

        </div>
    );
}

export default MySalesList;