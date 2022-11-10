import {useSelector, useDispatch} from 'react-redux';
import {selectAuthUser} from '../app/auth/authSlice';
import {logoutAuthUser} from '../app/auth/authSlice';
import {Link} from 'react-router-dom';
import { MdDashboard, MdSupervisedUserCircle, MdOutlineTwoWheeler,  MdAccountCircle, MdOutlinePowerSettingsNew, MdHomeFilled } from "react-icons/md";
import {FaUsers, FaMoneyBillWave} from 'react-icons/fa';


const Sidebar = () => {

    const dispatch = useDispatch();
    const {roles} = useSelector(selectAuthUser);

    return (
        <aside className="dash-layout-sidebar">

            <button className='logout-btn' onClick={() => dispatch(logoutAuthUser())}>
                <MdOutlinePowerSettingsNew />
                Logout
            </button>

            <div className='sidebar-logo'>
                {/* <img src='/img/logo.png' alt='logo' /> */}
            </div>

            <nav className='sidebar-nav'>
                <ul>
                    <li>
                        <Link to='/dash'>
                            <MdDashboard />
                            Dashboard
                        </Link>
                    </li>

                    {/* Admin Specific Navigations */}
                    {roles.indexOf('Admin') !== -1 && (
                        <>
                            <li>
                                <Link to='/dash/admin/employee-management'>
                                    <MdSupervisedUserCircle />
                                    Employee Management
                                </Link>
                            </li>
                            <li>
                                <Link to='/dash/admin/supplier-management'>
                                    <MdOutlineTwoWheeler />
                                    Supplier Management
                                </Link>
                            </li>
                            <li>
                                <Link to='/dash/admin/warehouse-management'>
                                    <MdHomeFilled />
                                    Warehouse Management
                                </Link>
                            </li>
                        </>
                    )}

                    {roles.indexOf('Employee') !== -1 && (
                        <>
                            <li>
                                <Link to='/dash/employee/customer-management'>
                                    <FaUsers />
                                    Customer Management
                                </Link>
                            </li>
                            <li>
                                <Link to='/dash/employee/sales-management'>
                                    <FaMoneyBillWave />
                                    My Sales Management
                                </Link>
                            </li>
                        </>
                    )}

                    <li>
                        <Link to='/dash/employee/my-profile'>
                            <MdAccountCircle />
                            My Profile
                        </Link>
                    </li>
                </ul>
            </nav>

        </aside>
    );
}

export default Sidebar;