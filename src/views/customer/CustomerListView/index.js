import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));



const CustomerListView = () => {
  const classes = useStyles();
  const [customers] = useState(data);
  // const [customers,setCustomers] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:8080/v1/talks')
  //   .then(res => {
  //       setData(res.data);
  //       //setCustomers(res.data)
  //   })
  // },[])

  return (
    <Page
      className={classes.root}
      title="Customers"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results customers={customers} />
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
