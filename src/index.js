import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, 
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation
} 
  from 'react-router-dom';
import Login from './Components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path='/login' element={<Login></Login>} />
      {/* <Route path="/myapp" element={<Navigate replace to="/learn" />}></Route>
      <Route path="/learn" element={<Learn />}>
        <Route path="course" element={<Courses/>}>
          <Route path=":courseid" element={<CourseId />}></Route>
        </Route>
        <Route path="bundle" element={<Bundles/>} />
      </Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>} /> */}
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
