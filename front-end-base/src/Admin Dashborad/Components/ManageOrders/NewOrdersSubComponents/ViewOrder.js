import { Grid,Link,Divider } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { lightBorder } from '../../../../Theme/borders';
import { Headings } from '../../Support/Headings';
import CheckIcon from '@material-ui/icons/Check';
import { RoundButton } from '../../../../CustomComponents/UI/Buttons/RoundButton';
import colors from '../../../../Theme/colors';
import OrderChatContainer from './OrderChatContainer';

import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import { makeStyles } from '@material-ui/core';
import FileAttachmentHolder from './FileAttachmentHolder';
import VideoAttachmentHolder from './VideoAttachmentHolder'
import ImageAttachmentHolder from './ImageAttachmentHolder'
function ViewOrder(props) {

    const classes = useStyles();
    const [isOrderChatOpen,setIsOrderChatOpen]=useState(false);
    const [attachmentsList,setAttachmentsList]=useState([]);

    useEffect(()=>{
       setAttachmentsList(props.selectedOrder.listOfAttachment)
    },[])

    const handelAcceptAndStartOrder = ()=>{
        alert("Call the thunk which will add this order in progress list.");
    }
    const handeDeclineOrder=()=>{
        alert("Call the thunk which will add this order in canceled list.")
    }
    return (
        <div>
            <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={10} style={{position:'relative'}}>
                    <div style={{position:'absolute',right:0,top:0}}>
                       <div style={{display:'inline-block'}}>
                                    {/* Start */}
                                    <RoundButton
                                      title={"Accespt and Start Order"}
                                      width={250}
                                      color={colors.white}
                                      bgColor={colors.primary}
                                      margin={"0% 0% 0%  0%"}
                                      handleClick={handelAcceptAndStartOrder}
                                     />
                       </div>
                       <div style={{display:'inline-block',marginLeft:'0.5rem'}}>
                                <RoundButton
                                      title={"Decline"}
                                      width={80}
                                      color={colors.white}
                                      bgColor={colors.secondary}
                                      margin={"0% 0% 0%  0%"}
                                      handleClick={handeDeclineOrder}
                                     />
                        
                       </div>         
                         
                    </div>
                    <Grid container style={{marginTop:'2.5rem'}}>
                        <Grid item xs={12} style={{border:lightBorder,padding:'1rem'}}>
                            <Grid container>
                                <Grid item xs={5} style={{backgroundColor:''}}>
                                    {/* Order id and  buyer and date */}
                                    <Headings text={`Order ID: ${props.selectedOrder.orderId}`} fontSize={25} fontWeight={'bold'}/>
                                    <Grid container>
                                        <Grid item xs={2} style={{backgroundColor:''}}>
                                            {/* Buyer name */}
                                            <Headings text={`Buyer:`} fontSize={15} fontWeight={'bold'}/>            
                                        </Grid>
                                        <Grid item xs={6} style={{marginLeft:'0.4rem'}}>
                                            {/* Buyer name */}
                                            <Link
                                              component="button"
                                              variant="body2"
                                              onClick={() => {
                                                // console.info("I'm a button.");
                                                alert("Open profile")
                                              }}
                                            >
                                              {
                                                  <Headings text={`${props.selectedOrder.userName} (View History) |`} fontSize={16} fontWeight={'bold'}/>
                                              }
                                            </Link>            
                                        </Grid>
                                        
                                        <Grid item xs={4}>
                                            {/* Date of placement */}
                                            <Headings text={`${props.selectedOrder.orderPlacementDate} @ ${props.selectedOrder.orderPlacementTime}`} fontWeight={'bold'} fontSize={12}/>
                                        </Grid>
                                        
                                    </Grid>
                                </Grid>
                                <Grid item xs={3}>
                                    {/* View service */}
                                    <Headings text={`${props.selectedOrder.selectedService}`} fontSize={25} fontWeight={'bold'}/>
                                    <Headings text={`${props.selectedOrder.selectedSubService}`} fontSize={15} fontWeight={'bold'}/>
                                
                                </Grid>
                                <Grid item xs={4} style={{textAlign:'right'}}>
                                    {/* Price and order type. */}
                                    <Headings text={`${props.selectedOrder.orderEstimatedPrice} $`} fontSize={25} fontWeight={'bold'}/>
                                    <Headings text={`${props.selectedOrder.orderType}`}fontWeight={'bold'}/>
                                </Grid>
                            </Grid>
                           
                        </Grid>
                        <Grid container style={{border:lightBorder,padding:'1rem'}}>
                            <Grid item xs={12}>
                                {/* Desc */}
                                <Headings text={`${props.selectedOrder.orderDesc}`}/>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} style={{border:lightBorder}}>
                            <Grid container style={{backgroundColor:'#abd1ed'}}>
                                <Grid item xs={8} style={{paddingLeft:'1rem'}}>
                                    {/* item */}
                                    <Headings text={`Items`} fontWeight={'bold'}/>
                                </Grid>
                                <Grid item xs={2}>
                                    {/* Duration */}
                                    <Headings text={`Duration`} fontWeight={'bold'}/>
                                </Grid>
                                <Grid item xs={2}>
                                    {/* Quantity */}
                                    <Headings text={`Quantity`} fontWeight={'bold'}/>
                                </Grid>
                                
                            </Grid>
                            <Grid container>
                                <Grid item xs={8} style={{paddingLeft:'1rem',paddingTop:'1rem'}}>
                                    {/* item */}
                                    {
                                        props.selectedOrder.listOfItemsInOrder.map((item)=>{
                                            return <div>
                                                <div style={{display:'inline-block'}}>
                                                    <CheckIcon fontSize="small"/>
                                                </div>
                                                <div style={{display:'inline-block',marginLeft:'1rem'}}>
                                                    <Headings text={`${item.itemTitle}`} fontWeight={'bold'}/>
                                                </div>
                                            </div>
                                        })
                                    }
                                </Grid>
                                <Grid item xs={2} style={{marginTop:'auto',marginBottom:'auto'}}>
                                    {/* Duration */}
                                    <Headings text={`${props.selectedOrder.orderDuration}`}/>
                                </Grid>
                                <Grid item xs={2} style={{marginTop:'auto',marginBottom:'auto'}}>
                                    {/* Quantity */}
                                    <Headings text={`${props.selectedOrder.orderItemQuantity}`}/>
                                </Grid>

                                {/* Attachment */}
                            
                            <Grid container style={{backgroundColor:'#abd1ed'}}>
                                <Grid item xs={8} style={{paddingLeft:'1rem'}}>
                                    {/* item */}
                                    <Headings text={`Attachments`} fontWeight={'bold'}/>
                                </Grid> 
                            </Grid>

                            <Grid container >
                                <Grid item xs={12} style={{padding:'1rem'}}>
                                    {/* item */}
                                    <ImageList rowHeight={200} className={classes.imageList} cols={3}>
                                        {attachmentsList.map((item,index) => (
                                          <ImageListItem key={index} cols={item.cols || 1}>
                                            {(item.type==="File") && <FileAttachmentHolder attachment={item}/>}
                                            {(item.type==="Image") && <ImageAttachmentHolder attachment={item}/>}
                                            {(item.type==="Video") && <VideoAttachmentHolder attachment={item}/>}
                                            
                                          </ImageListItem>
                                        ))}
                                      </ImageList>
                                </Grid> 
                            </Grid>

                            </Grid>

                        </Grid>
                    
                        <Grid container>
                            <Grid item xs={12} style={{textAlign:'center',marginTop:'1rem'}}>
                            <RoundButton
                                      title={"Contact Buyer"}
                                      width={200}
                                      color={colors.white}
                                      bgColor={colors.primary}
                                      margin={"0% 0% 0%  0%"}
                                      handleClick={()=>{
                                          setIsOrderChatOpen(true); 
                                      }}
                                     />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                    {
                                        (isOrderChatOpen===true) ? (
                                            <div>
                                                <OrderChatContainer/>
                                            </div>
                                        ) : (
                                            <div>
                                               
                                            </div>
                                        )
                                    }
                            </Grid>
                        </Grid>
                        
                    </Grid>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
     
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      width: '100%',
      height: 300,
     
    },
  }));
  
export default ViewOrder;