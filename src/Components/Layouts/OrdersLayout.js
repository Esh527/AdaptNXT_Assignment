import PendingTableHeader from '../Headers/PendingTableHeader'
// import Dashboard from '../DashBoard/Dashboard';
import React, { useState } from 'react';
import PendingTable from '../tables/PendingTable';


// import MainHeader from '../MainHeader/MainHeader';

const OrdersLayout = ()=> {
  const [selectedTable, setSelectedTable] = useState("Pending");

  const handleHeaderClick = (tableName) => {
    setSelectedTable(tableName);
  };

  return (
        <div  style={{paddingTop:"80px", width:'100%', backgroundColor:'rgb(244, 207, 213)', height:'100vh'}}>
          <PendingTableHeader handleHeaderClick={handleHeaderClick} />
          {selectedTable === 'Pending' && <PendingTable />}
          
        </div>
  );
}

export default OrdersLayout;
