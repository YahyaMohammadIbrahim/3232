import React from 'react'
import Grid from '@material-ui/core/Grid';
import CompanyMenu from './menu';
import Category from './Category';
import { Route } from 'react-router-dom';
import Product from './Product';
import Companyinfo from './Companyinfo';
import Employee from './Employee';


export default function company() {
    let sessionCode=sessionStorage.getItem("session_code");
    if(sessionCode!="") {

    
  return (
    
      
    <div><Grid container spacing={3}>
    <Grid item xs={3}>
      <CompanyMenu/>
    </Grid>
    <Grid item xs={9}>
    <Route path="/company/category/" component={Category}/>
    <Route path="/company/products/" component={Product}/>
    <Route path="/company/companyinfo/" component={Companyinfo}/>
    <Route path="/company/employee/" component={Employee}/>
    </Grid>
  </Grid>
  </div>
  )
}
}
