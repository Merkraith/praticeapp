// import React from 'react';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// // import ListSubheader from '@material-ui/core/ListSubheader';
// import DashboardIcon from '@material-ui/icons/Dashboard';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import PeopleIcon from '@material-ui/icons/People';
// import BarChartIcon from '@material-ui/icons/BarChart';
// // import LayersIcon from '@material-ui/icons/Layers';
// import AssignmentIcon from '@material-ui/icons/Assignment';
// import DeveloperGallery from './DeveloperGallery';
// import EditProfile from './DeveloperGallery';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";




// export const mainListItems = (
//   <div>
//     <Router>
//       <ListItem button>
//         <ListItemIcon>
//           <DashboardIcon />
//         </ListItemIcon>
//         <ListItemText primary="Dev Gallery" />
//         <Link to="/DeveloperGallery"></Link>
//       </ListItem>
//       <ListItem button>
//         <ListItemIcon>
//           <ShoppingCartIcon />
//         </ListItemIcon>
//         <ListItemText primary="Ad Postings" />
//       </ListItem>
//       <ListItem button>
//         <ListItemIcon>
//           <PeopleIcon />
//         </ListItemIcon>
//         <ListItemText primary="Edit Profile" />
//         <Link to="/EditProfile"></Link>
//       </ListItem>
//       <ListItem button>
//         <ListItemIcon>
//           <BarChartIcon />
//         </ListItemIcon>
//         <ListItemText primary="Post Ad" />
//       </ListItem>

//       <Switch>
//         <Route exact path="/DeveloperGallery">
//           <DeveloperGallery />
//         </Route>
//         <Route path="/EditProfile">
//           <EditProfile />
//         </Route>
//       </Switch>

//     </Router>
//   </div>
// );

// export const secondaryListItems = (
//   <div>
//     {/* <ListSubheader inset>Saved reports</ListSubheader> */}
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Sign Out" />
//     </ListItem>

//   </div>
// );