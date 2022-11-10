import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import {MdPersonAdd} from 'react-icons/md';
import {Table} from 'react-bootstrap';

import '../../styles/employee_management/employeeList.css';

const SupplierList = () => {

    const navigate = useNavigate();
    const axiosPrivate = useAxiosPrivate();

    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        const getAllSuppliers = async () => {
            try {
                const response = await axiosPrivate.get('/api/suppliers');
                setSuppliers(response.data.suppliers);
            } catch (err) {
                console.log(err);
            }
        }

        getAllSuppliers();
    }, [axiosPrivate]);

    return (
        <div>

            <aside className='employeeList-header'>
                <h1>Supplier Management</h1>
                <button className='btn btn-primary' onClick={() => navigate('/dash/admin/supplier-management/add')}>Add Supplier <MdPersonAdd /></button>
            </aside>

            <hr></hr>

            {suppliers.length > 0 && (
                <Table striped bordered hover responsive >
                    <thead>
                        <tr>
                            <th>#Supplier ID</th>
                            <th>Supplier Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {suppliers.map(s => (
                            <tr key={s._id}>
                                <td>{s.supplierId}</td>
                                <td>{s.name}</td>
                                <td>{s.email}</td>
                                <td>{s.phone}</td>
                                <td>
                                    <div className='d-flex align-items-center gap-2'>
                                        <button className='btn btn-sm btn-primary'>Supplies</button>
                                        <button className='btn btn-sm btn-success' onClick={() => navigate(`/dash/admin/supplier-management/add?edit=true&id=${s._id}`)}>Update</button>
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

export default SupplierList;