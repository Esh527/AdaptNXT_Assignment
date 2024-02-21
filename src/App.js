import './App.css';

import DashboardMain from './Components/DashBoard/DashboardMain';
function App() {
  return (
    <>
      <DashboardMain />
    </>
  );
}

export default App;







// import NavBarComponent from './Components/NavBarComponent';
// import SideBarComponent  from './Components/SideBarComponent';
// import OrdersTabComponent from './Components/OrdersTabComponent';
// import './App.css';

// const data = [
//   {
//     Order: 'X',
//     'Pending Accepted AWB Created': 'E',
//     'Import Orders': '',
//     'Accept': '',
//     'S': 'S',
//     'Ready to Ship': '',
//     'Channel Order No': '#TKN20203754',
//     Print: 'V',
//     '#TKN20203754': '',
//     'Shipped Completed Cancelled': '',
//     'Order Date': '2022-05-04',
//     City: 'Lucknow',
//     'Customer Name': 'Abhishek Dixit',
//     'Order Value': '0.00',
//     '+ Status': 'Pending',
//   },
//   // More data...
// ];
// const App = ()=>{
//   return (
//     <div>
//       <NavBarComponent/>
//       <SideBarComponent/>
//       <OrdersTabComponent data={data}/>
//     </div>
//   )

// }
// export default App