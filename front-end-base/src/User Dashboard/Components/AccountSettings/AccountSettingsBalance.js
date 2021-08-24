
import { Box, Button, Divider, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@material-ui/core";

import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

export const AccountSettingsBalance = (props) => {
  return (
    <div>
      <Box mb={2}>
        <Typography variant="h4">Account Balance</Typography>
      </Box>
      <BalanceContainer />
    </div>
  );
};

function BalanceContainer() {
  return (
    <>
      <CurrentBalance />
      <PurchaseHistory />
    </>
  );
}

const currentBalanceStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    marginTop: "2rem",
  },
  cardContent: {
    flex: 1,
  },
}));

const CurrentBalance = () => {
  const classes = currentBalanceStyles();

  return (
    <Card className={classes.root} elevation={2}>
      <CardHeader
        title={<Typography variant="h4">Current Balance</Typography>}
      />
      <Divider />
      <CardContent>
        <Box display="flex">
          <Box ml={2} className={classes.cardContent}>
            <h3>Available for purchase</h3>
          </Box>
          <Box>
            <Typography variant="h3">$4451</Typography>
          </Box>
        </Box>
      </CardContent>
      <Divider />
      <CardContent>
        <CardHeader
          action={
            <Button variant="contained" color="primary">
              Make a purchase
            </Button>
          }
        />
      </CardContent>
    </Card>
  );
};

const purchaseHistoryStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    marginTop: "2rem",
  },
  cardContent: {
    flex: 1,
  },
}));

const PurchaseHistory = () => {
  const classes = purchaseHistoryStyles();
  
  const[duration, setDuration]=useState(1);

  function handleHistoryClick(duration){
    setDuration(duration);      
  }

  function renderHistory(){
    
    if(duration==1){
      return <OneMonthHistory />
    }

    else if(duration==3){
      return <ThreeMonthHistory />
    }
    
    else if(duration==12){
      return <TwelveMonthHistory />
    }
    
    else if(duration==0){
      return <AllTimeHistory />
    }

  }
  return (
    <Card className={classes.root} elevation={2}>
      <CardHeader
        title={<Typography variant="h4">Purchase History</Typography>}
        action={
          <Box mt={2} display="flex">
            <Box ml={0.5}>
              <Button variant="outlined" color="primary" onClick={()=>handleHistoryClick(1)}>
                This Month
              </Button>
            </Box>
            <Box ml={0.5}>
              <Button variant="outlined" color="primary" onClick={()=>handleHistoryClick(3)}>
                Last 3 Months
              </Button>
            </Box>
            <Box ml={0.5}>
              <Button variant="outlined" color="primary" onClick={()=>handleHistoryClick(12)}>
                Last 1 year
              </Button>
            </Box>
            <Box ml={0.5}>
              <Button variant="outlined" color="primary" onClick={()=>handleHistoryClick(0)}>
                All time
              </Button>
            </Box>
          </Box>
        }
      />
      <Divider />
      <CardContent>
        <Box>
        {renderHistory}
        </Box>
      </CardContent>
      <Divider />
      <CardContent>
        <CardHeader
          action={
            <Button variant="contained" color="primary">
              Print Invoice
            </Button>
          }
        />
      </CardContent>
    </Card>
  );
};


const OneMonthHistory=()=>{
  const purchaseDetails=[{
    service:"MERN Website for business",
    price:"$214",
    date:new Date().toLocaleString()
  },
  {
    service:"Java app to print PDFs",
    price:"$75",
    date:new Date().toLocaleString()
  },
  {
    service:"C# .Net app for restaurant",
    price:"$300",
    date:new Date().toLocaleString()
  },
  {
    service:"Shopify Store for Amazon products",
    price:"$157",
    date:new Date().toLocaleString()
  },
]
  return(
    <Table>
      <TableHead>
        <TableRow>
          {
            ["Purchased Service","Date","Cost Paid"].map(item=>{
              return <TableCell>
                  <Typography>
                    <strong>{item}</strong>
                  </Typography>
              </TableCell>
            })
          }
        </TableRow>
      </TableHead>
      <TableBody>
      
          {
            purchaseDetails.map(item=>{
              return <TableRow>
              <TableCell>
                  <Typography>
                    {item.service}
                  </Typography>
              </TableCell>
              <TableCell>
                  <Typography>
                    {item.date}
                  </Typography>
              </TableCell>
              <TableCell>
                  <Typography>
                    {item.price}
                  </Typography>
              </TableCell>
              </TableRow>
            })
          }
      </TableBody>
    </Table>
  )
}

const ThreeMonthHistory=()=>{
  const purchaseDetails=[{
    service:"MERN Website for business",
    price:"$214",
    date:new Date().toLocaleString()
  },
  {
    service:"Java app to print PDFs",
    price:"$75",
    date:new Date().toLocaleString()
  },
  {
    service:"C# .Net app for restaurant",
    price:"$300",
    date:new Date().toLocaleString()
  },
  {
    service:"Shopify Store for Amazon products",
    price:"$157",
    date:new Date().toLocaleString()
  },
]
  return(
    <Table>
      <TableHead>
        <TableRow>
          {
            ["Purchased Service","Date","Cost Paid"].map(item=>{
              return <TableCell>
                  <Typography>
                    <strong>{item}</strong>
                  </Typography>
              </TableCell>
            })
          }
        </TableRow>
      </TableHead>
      <TableBody>
      
          {
            purchaseDetails.map(item=>{
              return <TableRow>
              <TableCell>
                  <Typography>
                    {item.service}
                  </Typography>
              </TableCell>
              <TableCell>
                  <Typography>
                    {item.date}
                  </Typography>
              </TableCell>
              <TableCell>
                  <Typography>
                    {item.price}
                  </Typography>
              </TableCell>
              </TableRow>
            })
          }
      </TableBody>
    </Table>
  )
}

const TwelveMonthHistory=()=>{
  const purchaseDetails=[{
    service:"MERN Website for business",
    price:"$214",
    date:new Date().toLocaleString()
  },
  {
    service:"Java app to print PDFs",
    price:"$75",
    date:new Date().toLocaleString()
  },
  {
    service:"C# .Net app for restaurant",
    price:"$300",
    date:new Date().toLocaleString()
  },
  {
    service:"Shopify Store for Amazon products",
    price:"$157",
    date:new Date().toLocaleString()
  },
]
  return(
    <Table>
      <TableHead>
        <TableRow>
          {
            ["Purchased Service","Date","Cost Paid"].map(item=>{
              return <TableCell>
                  <Typography>
                    <strong>{item}</strong>
                  </Typography>
              </TableCell>
            })
          }
        </TableRow>
      </TableHead>
      <TableBody>
      
          {
            purchaseDetails.map(item=>{
              return <TableRow>
              <TableCell>
                  <Typography>
                    {item.service}
                  </Typography>
              </TableCell>
              <TableCell>
                  <Typography>
                    {item.date}
                  </Typography>
              </TableCell>
              <TableCell>
                  <Typography>
                    {item.price}
                  </Typography>
              </TableCell>
              </TableRow>
            })
          }
      </TableBody>
    </Table>
  )
}

const AllTimeHistory=()=>{
  const purchaseDetails=[{
    service:"MERN Website for business",
    price:"$214",
    date:new Date().toLocaleString()
  },
  {
    service:"Java app to print PDFs",
    price:"$75",
    date:new Date().toLocaleString()
  },
  {
    service:"C# .Net app for restaurant",
    price:"$300",
    date:new Date().toLocaleString()
  },
  {
    service:"Shopify Store for Amazon products",
    price:"$157",
    date:new Date().toLocaleString()
  },
]
  return(
    <Table>
      <TableHead>
        <TableRow>
          {
            ["Purchased Service","Date","Cost Paid"].map(item=>{
              return <TableCell>
                  <Typography>
                    <strong>{item}</strong>
                  </Typography>
              </TableCell>
            })
          }
        </TableRow>
      </TableHead>
      <TableBody>
      
          {
            purchaseDetails.map(item=>{
              return <TableRow>
              <TableCell>
                  <Typography>
                    {item.service}
                  </Typography>
              </TableCell>
              <TableCell>
                  <Typography>
                    {item.date}
                  </Typography>
              </TableCell>
              <TableCell>
                  <Typography>
                    {item.price}
                  </Typography>
              </TableCell>
              </TableRow>
            })
          }
      </TableBody>
    </Table>
  )
}