import { Card, CardContent, Grid, makeStyles } from '@material-ui/core';
import React,{useEffect, useState} from 'react';
import ProjectHolder from './ProjectHolder';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Filters from '../Filters'
import { lightBorder } from '../../../../Theme/borders';
import { Headings } from '../../Support/Headings';
import Pagination from '@material-ui/lab/Pagination';
import { ScrollView } from "@cantonjs/react-scroll-view";
import {actions,store} from '../../../Redux/ReduxResourceExporter';

function ListOfAllProjects(props) {
    const classes = useStyles();
    const [listOfProjects,setListOfProjects]=useState([]);
    const [numberOfPage,setNumberOfPage]=useState();
    const [startIndexOfPage,setStartIndexOfPage]=useState(0);
    const [endIndexOfPage,setEndIndexOfPage]=useState(9);
    const [currentOpenPage,setCurrentOpenPage]=useState(0);

    const [list,setList]=useState();
    const [listOfOptions_ForChipList, setListOfOptions_ForChipList] = useState([
        // { key: 0,type:"ByRating",data:"4", label: '4 Stars' },
    ]);

    useEffect(()=>{
       
       setListOfProjects(store.getState().ProjectsStore.ListOfProjectsLoadedFromAPI.data);
       setNumberOfPage(Math.ceil((store.getState().ProjectsStore.ListOfProjectsLoadedFromAPI.data.length/9)))
       
    },[]);

    useEffect(()=>{
       console.log("len"+listOfProjects.length)
       updateList(startIndexOfPage,(listOfProjects.length>=endIndexOfPage) ? endIndexOfPage : listOfProjects.length);
    },[listOfProjects,endIndexOfPage]);

    const updateList = (startIndex,endIndex)=>{
        const img = "https://www.designyourway.net/blog/wp-content/uploads/2018/08/387011_3d-cute-wallpapers-for-desktop-hd-1-jpg_1024x768_h-700x525.jpg"
        setList(listOfProjects.map((item,index)=>{
            if(((index)>=startIndex)&&((index)<endIndex))
            {
                return(      
                    <ImageListItem key={item.img} cols={item.cols || 1}>
                        <ProjectHolder ptojectTitle={"Sample Project"} projectKey={"SampleKey"} cols={item.cols} img={img} handelOptionSelection={props.handelOptionSelection}/>
                    </ImageListItem>
                    )   
            }
            
        }))
    }

    const handelPageChange = (event,pageNumber)=>{
        setCurrentOpenPage((prev)=>{
            if(currentOpenPage<prev)
            {
                // console.log("increament");
                setStartIndexOfPage((prevSI)=>{
                    return prevSI+9;
                })
                setEndIndexOfPage((prevSE)=>{
                    return prevSE+9;
                })
                
                return (prev)
            }
            else
            {
                // console.log("dec");
                setStartIndexOfPage((prevSI)=>{
                    return prevSI-9;
                })
                setEndIndexOfPage((prevSE)=>{
                    return prevSE-9;
                })
                return (prev)
            }
           
        })

    }

    return (
        <div>
            <Filters listOfOptions_ForChipList={listOfOptions_ForChipList} setListOfOptions_ForChipList={setListOfOptions_ForChipList}/>
            <Grid container>

                <Grid item xs={1}></Grid>           
                <Grid item xs={10}>
                    <Card
                      elevation={0}
                      style={{border:lightBorder}}  
                    >
                        <CardContent>
                            
                                { (listOfOptions_ForChipList.length!=0) && <Headings text={"Search Results "} fontSize={25}/>}
                                { (listOfOptions_ForChipList.length===0) && <Headings text={"All projects"} fontSize={25}/>}
                                
                                <ImageList rowHeight={340} className={classes.imageList} cols={3}>
                                    {list}
                                </ImageList>
                                <div>
                                        <Pagination onChange={(e)=>{
                                            setCurrentOpenPage(parseInt(e.target.outerText));
                                            handelPageChange(e);
                                        }} count={numberOfPage} variant="outlined" shape="rounded" />
                                </div>        
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={1}></Grid>    
            </Grid>
        </div>
    );
}
const useStyles = makeStyles((theme)=>({
    container:{

    },
    projectHolderContainer:{
        border:'1px solid #f7f2f7'
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
      imageList: {
        width: '100%',
        marginTop:"5rem"
      },
}))
export default ListOfAllProjects;