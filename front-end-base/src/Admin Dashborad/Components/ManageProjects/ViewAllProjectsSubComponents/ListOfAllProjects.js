import { Card, CardContent, Grid, makeStyles } from '@material-ui/core';
import React,{useState} from 'react';
import ProjectHolder from './ProjectHolder';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Filters from '../Filters'
import { lightBorder } from '../../../../Theme/borders';
import { Headings } from '../../Support/Headings';
import Pagination from '@material-ui/lab/Pagination';
import { ScrollView } from "@cantonjs/react-scroll-view";

function ListOfAllProjects(props) {
    const classes = useStyles();
    const [numberOfPage,setNumberOfPage]=useState();
    
    const [listOfOptions_ForChipList, setListOfOptions_ForChipList] = useState([
        // { key: 0,type:"ByRating",data:"4", label: '4 Stars' },
    ]);

    console.log(listOfOptions_ForChipList);
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

                                    {props.projectsList.map((item) => (
                                     <ImageListItem key={item.img} cols={item.cols || 1}>
                                        <ProjectHolder ptojectTitle={item.ptojectTitle} projectKey={item.projectKey} cols={item.cols} img={item.img} handelOptionSelection={props.handelOptionSelection}/>
                                     </ImageListItem>
                                    ))}
                                </ImageList>
                                <div>
                                        <Pagination count={10} variant="outlined" shape="rounded" />
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