  import { Typography } from '@mui/material'
  import { Box, Container } from '@mui/system'
  import React from 'react'
  import SMInput from '../../config/components/input'
  import Grid from '@mui/material/Grid';
import SMButton from '../../config/components/button';

  function StudentRegForm() {
    return (
      <>
      <Typography> <h1>Student Registration Form * </h1></Typography>
      <Grid container spacing>
      
      <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:''}}>Enter Name     <SMInput id="" label="Enter Name"/>
  </h1>
      </Grid>
      <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:''}}>Father  Name     <SMInput id="" label="Enter FatherName"/>
  </h1>
      </Grid>
      
      <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:''}}>CNIC NO     <SMInput id="" label="Enter CNIC"/>
  </h1>
      </Grid>
      <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:''}}>Father  Name     <SMInput id="" label="Enter FatherName"/>
  </h1>
      </Grid>
      <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:''}}>Contact    <SMInput id="" label="Enter Contact"/>
  </h1>
      </Grid>
      <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:''}}>Enter Age <SMInput id="" label="Enter Age"/>
  </h1>
      </Grid>
      <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:''}}>Date of Birth <SMInput id="" label="" type="date"/>
  </h1>
      </Grid>
      <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:''}}>Enter Class<SMInput id="" label="Class"/>

  </h1>
      </Grid>
      <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:''}}>Enter Class    <SMInput id="" label="Enter Class"/>
  </h1>
      </Grid>
      <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:''}}>Enter Section   <SMInput id="" label="Enter Section"/>
  </h1>
      </Grid>
      
      <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:''}}>Enter Email <SMInput id="" label="Enter Email"/>
  </h1>
      </Grid>
      <Grid item lg={3} sm={6} xs={12}><h1 style={{backgroundColor:''}}>Enter Password<SMInput id="" label="Enter Password"/>
  </h1>
      </Grid>
      
          
      
      </Grid>
     <SMButton label="Register"/>
      
      </>
    )
  }

  export default StudentRegForm