import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

import {Table} from 'react-bootstrap';
import {MdPersonAdd} from 'react-icons/md';

import '../../styles/employee_management/employeeList.css';

const EmployeeList = () => {

    const navigate = useNavigate();
    const axiosPrivate = useAxiosPrivate();

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const getAllEmployees = async () => {
            try {
                const response = await axiosPrivate.get('/api/users/employee');

                setEmployees(response.data.employees);
            } catch (err) {
                console.log(err);
            }
        }

        getAllEmployees();
    }, [axiosPrivate]);

    return (
        <div>

            <aside className='employeeList-header'>
                <h1>Employee Management</h1>
                <button className='btn btn-primary' onClick={() => navigate('/dash/admin/employee-management/add')}>Add Employee <MdPersonAdd /></button>
            </aside>

            <hr></hr>

            
                {employees.length > 0 && (
                    <Table striped bordered hover responsive >
                        <thead>
                            <tr>
                                <th>#Employee ID</th>
                                <th>Username</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Phone No.</th>
                                <th>Age</th>
                                <th>Salary</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map(e => (
                                <tr key={e._id}>
                                    <td>{e.userId}</td>
                                    <td>{e.username}</td>
                                    <td>{e.employee?.firstName}</td>
                                    <td>{e.employee?.lastName}</td>
                                    <td>{e.employee?.address}</td>
                                    <td>{e.employee?.email}</td>
                                    <td>{e.employee?.phone}</td>
                                    <td>{e.employee?.age}</td>
                                    <td>{e.employee?.salary}</td>
                                    <td><span className={`employee-state-tagger ${e.roles.includes('Admin') ? 'employee-state-tagger-admin' : 'employee-state-tagger-employee'}`}>{e.roles.includes('Admin') ? 'Admin' : 'Employee'}</span></td>
                                    <td>
                                        <div className='d-flex align-items-center gap-2'>
                                            <button className='btn btn-sm btn-primary'>Sales</button>
                                            <button className='btn btn-sm btn-success' onClick={() => navigate(`/dash/admin/employee-management/add?edit=true&id=${e._id}`)}>Update</button>
                                            <button className='btn btn-sm btn-danger'>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )}
            
        </div>
    );
}

export default EmployeeList;