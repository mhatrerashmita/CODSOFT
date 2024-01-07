//  import {useEffect,useState} from 'react';
//  import { Link } from 'react-router-dom';
//  import PieChart from './Piechart';


//  const Dashboard = () => {

//     const[record,setRecord] = useState([])
//     const getData = () =>
//     {
//         fetch('https:jsonplaceholder.typicode.com/users')
//         .then(resposne=> resposne.json())
//         .then(res=>setRecord(res))
//     }
//     useEffect(() => {
//        getData();
//     },)

//      return (
//      <div className="col main pt-5 mt-3">

//          <nav aria-label="breadcrumb">
//          <ol className="breadcrumb">
//              <li className="breadcrumb-item"><Link to="#">Home</Link></li>
//              <li className="breadcrumb-item"><Link to="#">Library</Link></li>
//              <li className="breadcrumb-item active" aria-current="page">Data</li>
//          </ol>
//          </nav>
//          <p className="lead d-none d-sm-block">Add Employee Details and Records</p>
//          <div className="alert alert-warning fade collapse" role="alert" id="myAlert">
//              <button type="button" className="close" data-dismiss="alert" aria-label="Close">
//                  <span aria-hidden="true">×</span>
//                  <span className="sr-only">Close</span>
//              </button>
//              <strong>Data and Records</strong> Learn more about employee
//          </div>
//          <div className="row mb-3">
//              <div className="col-xl-3 col-sm-6 py-2">
//                  <div className="card bg-success text-white h-100">
//                      <div className="card-body bg-success" style={{backgroundColor:"#57b960"}}>
//                          <div className="rotate">
//                              <i className="fa fa-user fa-4x"></i>
//                          </div>
//                          <h6 className="text-uppercase">Users</h6>
//                          <h1 className="display-4">134</h1>
//                      </div>
//                  </div>
//              </div>
//              <div className="col-xl-3 col-sm-6 py-2">
//                  <div className="card text-white bg-danger h-100">
//                      <div className="card-body bg-danger">
//                          <div className="rotate">
//                              <i className="fa fa-list fa-4x"></i>
//                          </div>
//                          <h6 className="text-uppercase">Posts</h6>
//                          <h1 className="display-4">87</h1>
//                      </div>
//                  </div>
//              </div>
//              <div className="col-xl-3 col-sm-6 py-2">
//                  <div className="card text-white bg-info h-100">
//                      <div className="card-body bg-info">
//                          <div className="rotate">
//                            <i className="fab fa-twitter fa-4x"></i>
//                          </div>
//                          <h6 className="text-uppercase">Tweets</h6>
//                          <h1 className="display-4">125</h1>
//                      </div>
//                  </div>
//              </div>
//              <div className="col-xl-3 col-sm-6 py-2">
//                  <div className="card text-white bg-warning h-100">
//                      <div className="card-body">
//                          <div className="rotate">
//                              <i className="fa fa-share fa-4x"></i>
//                          </div>
//                          <h6 className="text-uppercase">Shares</h6>
//                          <h1 className="display-4">36</h1>
//                      </div>
//                  </div>
//              </div>
//          </div>
//          <hr/>
//          {/* <div className="row placeholders mb-3">
//              <div className="col-6 col-sm-3 placeholder text-center">
//                  <img src="placehold.it/200/dddddd/fff?text=1" className="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
//                  <h4>Responsive</h4>
//                  <span className="text-muted">Device agnostic</span>
//              </div>
//              <div className="col-6 col-sm-3 placeholder text-center">
//                  <img src="placehold.it/200/e4e4e4/fff?text=2" className="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
//                  <h4>Frontend</h4>
//                  <span className="text-muted">UI / UX oriented</span>
//              </div>
//              <div className="col-6 col-sm-3 placeholder text-center">
//                  <img src="placehold.it/200/d6d6d6/fff?text=3" className="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
//                  <h4>HTML5</h4>
//                  <span className="text-muted">Standards-based</span>
//              </div>
//              <div className="col-6 col-sm-3 placeholder text-center">
//                  <img src="placehold.it/200/e0e0e0/fff?text=4" className="center-block img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
//                  <h4>Framework</h4>
//                  <span className="text-muted">CSS and JavaScript</span>
//              </div>
//          </div> */}

//          <div className="row ">
//              <div className="col-lg-7 col-md-6 col-sm-12">
//                <h5 className="mt-3 mb-3 text-secondary">
//                 Check More Records of Employees
//                </h5>
//                  <div className="table-responsive">
//                      <table className="table table-striped">
//                          <thead className="thead-light">
//                              <tr>
//                                  <th>No</th>
//                                  <th>Label</th>
//                                  <th>Header</th>
//                                  <th>Column</th>
//                                  <th>Record Data</th>
//                              </tr>
//                          </thead>
//                          <tbody>
//                           {record.slice(0, 5).map((output)=>
//                              <tr>
//                                  <td>{output.id}</td>
//                                  <td>{output.name}</td>
//                                  <td>{output.email}</td>
//                                  <td>{output.username}</td>
//                                  <td>{output.website}</td>
//                                  <td></td>
//                              </tr>
//                             )}
//                          </tbody>
//                      </table>
//                  </div>
//              </div>
//              <div classNameName="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">

//                  <h4 classNameName='title mt-3 mb-3 text-center text-secondary'>Data in Chart</h4>
//                   <div classNameName="mb-5" style={{height:"300px",width:"400px"}}><PieChart/></div></div>
//          </div>

//      </div>
//      )
//  }
//  export default Dashboard
//  Dashboard.js
//  Dashboard.js
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import PieChart from './Piechart';
// import Sidebar from './Sidebar';

// const Dashboard = () => {
//   const [record, setRecord] = useState([]);

//   const getData = () => {
//     fetch('https:jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((res) => setRecord(res));
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <Sidebar />

//         <div className="col main pt-5 mt-3">
//           <nav aria-label="breadcrumb">
//             <ol className="breadcrumb">
//               <li className="breadcrumb-item">
//                 <Link to="#">Home</Link>
//               </li>
//               <li className="breadcrumb-item">
//                 <Link to="#">Library</Link>
//               </li>
//               <li className="breadcrumb-item active" aria-current="page">
//                 Data
//               </li>
//             </ol>
//           </nav>

//           <p className="lead d-none d-sm-block">Add Employee Details and Records</p>

//           <div className="alert alert-warning fade collapse" role="alert" id="myAlert">
//             <button type="button" className="close" data-dismiss="alert" aria-label="Close">
//               <span aria-hidden="true">×</span>
//               <span className="sr-only">Close</span>
//             </button>
//             <strong>Data and Records</strong> Learn more about employee
//           </div>

//           <div className="row mb-3">
//             <div className="col-xl-3 col-sm-6 py-2">
//               <div className="card bg-success text-white h-100">
//                 <div className="card-body bg-success" style={{ backgroundColor: '#57b960' }}>
//                   <div className="rotate">
//                     <i className="fa fa-user fa-4x"></i>
//                   </div>
//                   <h6 className="text-uppercase">Users</h6>
//                   <h1 className="display-4">134</h1>
//                 </div>
//               </div>
//             </div>
//             {/* Add other cards here */}
//             <div className="col-xl-3 col-sm-6 py-2">
//              <div className="card text-white bg-danger h-100">
//                   <div className="card-body bg-danger">
//                          <div className="rotate">
//                              <i className="fa fa-list fa-4x"></i>
//                          </div>
//                          <h6 className="text-uppercase">Posts</h6>
//                          <h1 className="display-4">87</h1>
//                      </div>
//                  </div>
//              </div>
//              <div className="col-xl-3 col-sm-6 py-2">
//                  <div className="card text-white bg-info h-100">
//                      <div className="card-body bg-info">
//                          <div className="rotate">
//                            <i className="fab fa-twitter fa-4x"></i>
//                          </div>
//                          <h6 className="text-uppercase">Tweets</h6>
//                          <h1 className="display-4">125</h1>
//                      </div>
//                  </div>
//              </div>
//              <div className="col-xl-3 col-sm-6 py-2">
//                  <div className="card text-white bg-warning h-100">
//                      <div className="card-body">
//                          <div className="rotate">
//                              <i className="fa fa-share fa-4x"></i>
//                          </div>
//                          <h6 className="text-uppercase">Shares</h6>
//                          <h1 className="display-4">36</h1>
//                      </div>
//                  </div>
//              </div>
//          </div>
//           <hr />

//           <div className="row">
//             <div className="col-lg-7 col-md-6 col-sm-12">
//               <h5 className="mt-3 mb-3 text-secondary">Check More Records of Employees</h5>
//               <div className="table-responsive">
//                 <table className="table table-striped">
//                   <thead className="thead-light">
//                     <tr>
//                       <th>No</th>
//                       <th>Label</th>
//                       <th>Header</th>
//                       <th>Column</th>
//                       <th>Record Data</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {record.slice(0, 5).map((output) => (
//                       <tr key={output.id}>
//                         <td>{output.id}</td>
//                         <td>{output.name}</td>
//                         <td>{output.email}</td>
//                         <td>{output.username}</td>
//                         <td>{output.website}</td>
//                         <td></td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
//               <h4 className="title mt-3 mb-3 text-center text-secondary">Data in Chart</h4>
//               <div className="mb-5" style={{ height: '300px', width: '400px' }}>
//                 <PieChart />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PieChart from './Piechart';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [record, setRecord] = useState([]);

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((res) => setRecord(res));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />

        <div className="col main pt-5 mt-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="#">Library</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Data
              </li>
            </ol>
          </nav>

          <p className="lead d-none d-sm-block">Add Employee Details and Records</p>

          {/* Add responsive button to toggle sidebar visibility */}
          <button
            className="btn btn-link btn-sm d-block d-md-none"
            type="button"
            data-toggle="collapse"
            data-target="#sidebar"
            aria-expanded="false"
            aria-controls="sidebar"
          >
            Toggle Sidebar
          </button>

          <div className="alert alert-warning fade collapse" role="alert" id="myAlert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">×</span>
              <span className="sr-only">Close</span>
            </button>
            <strong>Data and Records</strong> Learn more about employee
          </div>

          {/* Cards Section */}
          <div className="row mb-3">
            <div className="col-md-6 col-lg-3 py-2">
              <div className="card text-white bg-success h-100">
                <div className="card-body bg-success" style={{ backgroundColor: '#57b960' }}>
                  <div className="rotate">
                    <i className="fa fa-user fa-4x"></i>
                  </div>
                  <h6 className="text-uppercase">Users</h6>
                  <h1 className="display-4">134</h1>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 py-2">
              <div className="card text-white bg-danger h-100">
                <div className="card-body bg-danger">
                  <div className="rotate">
                    <i className="fa fa-list fa-4x"></i>
                  </div>
                  <h6 className="text-uppercase">Posts</h6>
                  <h1 className="display-4">87</h1>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 py-2">
              <div className="card text-white bg-info h-100">
                <div className="card-body bg-info">
                  <div className="rotate">
                    <i className="fab fa-twitter fa-4x"></i>
                  </div>
                  <h6 className="text-uppercase">Tweets</h6>
                  <h1 className="display-4">125</h1>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 py-2">
              <div className="card text-white bg-warning h-100">
                <div className="card-body">
                  <div className="rotate">
                    <i className="fa fa-share fa-4x"></i>
                  </div>
                  <h6 className="text-uppercase">Shares</h6>
                  <h1 className="display-4">36</h1>
                </div>
              </div>
            </div>
          </div>
          {/* End Cards Section */}

          <hr />

          {/* Table and Chart Section */}
          <div className="row">
            <div className="col-md-12 col-lg-7">
              <h5 className="mt-3 mb-3 text-secondary">Check More Records of Employees</h5>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead className="thead-light">
                    <tr>
                      <th>No</th>
                      <th>Label</th>
                      <th>Header</th>
                      <th>Column</th>
                      <th>Record Data</th>
                    </tr>
                  </thead>
                  <tbody>
                    {record.slice(0, 5).map((output) => (
                      <tr key={output.id}>
                        <td>{output.id}</td>
                        <td>{output.name}</td>
                        <td>{output.email}</td>
                        <td>{output.username}</td>
                        <td>{output.website}</td>
                        <td></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-md-6 col-lg-2">
              <h4 className="title mt-3 mb-3 text-center text-secondary">Data in Chart</h4>
              <div className="mb-4" style={{ marginLeft: "-320px" }} >
                <PieChart />
              </div>
            </div>
          </div>
          {/* End Table and Chart Section */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
