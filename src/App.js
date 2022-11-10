import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';

// utilities
import RequireAuth from './utils/RequireAuth';
import PersistAuth from './utils/PersistAuth';

// pages
import Public from './components/Public';
import Login from './components/Login';

// protected pages
import DashLayout from './components/DashLayout';
import Welcome from './features/auth/Welcome';


// admin specific
import EmployeeList from './features/employees/EmployeeList';
import EmployeeAdd from './features/employees/EmployeeAdd';

import SupplierList from './features/suppliers/SupplierList';
import SupplierAdd from './features/suppliers/SupplierAdd';

import WarehouseList from './features/warehouse/WarehouseList';
import WarehouseAdd from './features/warehouse/WarehouseAdd';
import WarehouseUpdate from './features/warehouse/WarehouseUpdate';

// employee and admin specific
import CustomerList from './features/customers/CustomerList';
import CustomerAdd from './features/customers/CustomerAdd';

import MySalesList from './features/mysales/MySalesList';
import MySalesAdd from './features/mysales/MySalesAdd';

const App = () => {


  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Public />} />
        <Route path='login' element={<Login />} />

        <Route element={<PersistAuth />}>

          <Route element={<RequireAuth allowedRoles={['Customer', 'Employee', 'Admin']}/>}>
            <Route path='dash' element={<DashLayout />}>
              <Route index element={<Welcome />} />
            </Route>
          </Route>

          <Route element={<RequireAuth allowedRoles={['Admin']}/>}>
            <Route path='dash' element={<DashLayout />}>
              <Route path="admin/employee-management" element={<EmployeeList />} />
            </Route>
          </Route>

          <Route element={<RequireAuth allowedRoles={['Admin']}/>}>
            <Route path='dash' element={<DashLayout />}>
              <Route path="admin/employee-management/add" element={<EmployeeAdd />} />
            </Route>
          </Route>

          <Route element={<RequireAuth allowedRoles={['Admin']}/>}>
            <Route path='dash' element={<DashLayout />}>
              <Route path="admin/supplier-management" element={<SupplierList />} />
            </Route>
          </Route>

          <Route element={<RequireAuth allowedRoles={['Admin']}/>}>
            <Route path='dash' element={<DashLayout />}>
              <Route path="admin/supplier-management/add" element={<SupplierAdd />} />
            </Route>
          </Route>

          <Route element={<RequireAuth allowedRoles={['Admin']}/>}>
            <Route path='dash' element={<DashLayout />}>
              <Route path="admin/warehouse-management" element={<WarehouseList />} />
            </Route>
          </Route>

          <Route element={<RequireAuth allowedRoles={['Employee', 'Admin']}/>}>
            <Route path='dash' element={<DashLayout />}>
              <Route path="warehouse-management/add" element={<WarehouseAdd />} />
            </Route>
          </Route>

          <Route element={<RequireAuth allowedRoles={['Employee', 'Admin']}/>}>
            <Route path='dash' element={<DashLayout />}>
              <Route path="warehouse-management/update" element={<WarehouseUpdate />} />
            </Route>
          </Route>

          {/* Employee  */}

          <Route element={<RequireAuth allowedRoles={['Employee', 'Admin']}/>}>
            <Route path='dash' element={<DashLayout />}>
              <Route path="employee/customer-management" element={<CustomerList />} />
            </Route>
          </Route>

          <Route element={<RequireAuth allowedRoles={['Employee', 'Admin']}/>}>
            <Route path='dash' element={<DashLayout />}>
              <Route path="employee/customer-management/add" element={<CustomerAdd />} />
            </Route>
          </Route>

          <Route element={<RequireAuth allowedRoles={['Employee', 'Admin']}/>}>
            <Route path='dash' element={<DashLayout />}>
              <Route path="employee/sales-management" element={<MySalesList />} />
            </Route>
          </Route>

          <Route element={<RequireAuth allowedRoles={['Employee', 'Admin']}/>}>
            <Route path='dash' element={<DashLayout />}>
              <Route path="employee/sales-management/add" element={<MySalesAdd />} />
            </Route>
          </Route>
          
        </Route>

      </Route>
    </Routes>
  );
}


export default App;
