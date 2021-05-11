// import React from "react";

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";

// function navBar() {
//     return (
//         <div className="App">
//             <Router>
//                 <div>
//                     <nav>
//                         <ul>
//                             <li>
//                                 <Link to="/">Home</Link>
//                             </li>
//                             <li>
//                                 <Link to="/display">Display</Link>
//                             </li>
//                             <li>
//                                 <Link to="/create">Create</Link>
//                             </li>
//                             <li>
//                                 <Link to="/logout">Logout</Link>
//                             </li>
//                             <li>
//                                 <Link to="/register">Register</Link>
//                             </li>
//                         </ul>
//                     </nav>

//                     {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//                     <Switch>
//                         <Route path="/display">
//                             <Display />
//                         </Route>
//                         <Route path="/create">
//                             <Create />
//                         </Route>
//                         <Route path="/register">
//                             <Register />
//                         </Route>
//                         <Route path="/logout">
//                             <Logout />
//                         </Route>
//                         <Route path="/">
//                             <Home />
//                         </Route>
//                     </Switch>
//                 </div>
//             </Router>
//             {/* <header className="App-header"></header> */}
//         </div>
//     );
// }