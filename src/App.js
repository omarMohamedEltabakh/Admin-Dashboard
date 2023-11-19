
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from './Component/Layout/Layout';
import SideBar from "./Component/SideBar/SideBar";
import DarkModeContextProvider from "./Context/DarkModeContext";
import NotFound from './Component/NotFound/NotFound';
import Nav from './Component/Nav/Nav';
import Manage from './Component/Manage/Manage';
import Contacts from './Component/Contacts/Contacts';
import Calender from './Component/Calender/Calender';
import Bar from './Component/Bar/Bar';
import Pie from './Component/Pie/Pie';
import Line from './Component/Line/Line';
import Geography from './Component/Geography/Geography';
import Invoices from './Component/Invoices/Invoices';
import Faq from "./Component/Faq/Faq";
import Team from './Component/Team/Team';
import Form from './Component/Form/Form';
import Dashboard from './Component/Dashboard/Dashboard';

export default function App() {


  const routers = createBrowserRouter([
    {path:"",element:<Layout/>,children:[
      {path:"SideBar",element:<SideBar/>},
      {index:true,element:<Dashboard/>},
      {path:"Nav",element:<Nav/>},
      {path:"/",element:<Dashboard/>},
      {path:"Manage",element:<Manage/>},
      {path:"Contacts",element:<Contacts/>},
      {path:"Form",element:<Form/>},
      {path:"Calender",element:<Calender/>},
      {path:"Bar",element:<Bar/>},
      {path:"Pie",element:<Pie/>},
      {path:"Line",element:<Line/>},
      {path:"Geography",element:<Geography/>},
      {path:"Invoices",element:<Invoices/>},
      {path:"Team",element:<Team/>},
      {path:"faq",element:<Faq/>},
      {path:"*",element:<NotFound/>},
    ]}
  ])

  

  return <>
<DarkModeContextProvider>
  <RouterProvider router={routers}/>
</DarkModeContextProvider>
  
  </>
}
