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
import FilterEngine from '../FilterMotor'
import produce from 'immer';
function ListOfAllProjects(props) {
    const classes = useStyles();
    const [listOfProjects,setListOfProjects]=useState([]);
    
    const [numberOfPage,setNumberOfPage]=useState();
    const [numberOfPageWhenSearching,setNumberOfPageWhenSearhing]=useState();
    
    const [startIndexOfPage,setStartIndexOfPage]=useState(0);
    const [endIndexOfPage,setEndIndexOfPage]=useState(9);

    const [startIndexOfPageWhenSearching,setStartIndexOfPageWhenSearching]=useState(0);
    const [endIndexOfPageWhenSearching,setEndIndexOfPageWhenSearching]=useState(9);


    const [currentOpenPage,setCurrentOpenPage]=useState(0);
    const [currentOpenPageWhenSearching,setCurrentOpenPageWhenSearching]=useState(0);
    const [list,setList]=useState();
    const [searchResults,setSearchResults]=useState([]);

    
    const [searchKeyPairs,setSearchKeyPairs] =useState();
    

    const [listOfOptions_ForChipList, setListOfOptions_ForChipList] = useState([
        // { key: 0,type:"ByRating",data:"4", label: '4 Stars' },
    ]);
    const filterBy_titles_type={
        filter_by_title_1_type:"projectSubService",
        filter_by_title_2_type:"projectService",
        filter_by_title_3_type:"projectRatingStars",
        filter_by_title_4_type:"projectPublishDate",
        filter_by_title_5_type:"projectEstimatedPrice",
    }

    useEffect(()=>{
       setListOfProjects(store.getState().ProjectsStore.ListOfProjectsLoadedFromAPI.data);
       setNumberOfPage(Math.ceil((store.getState().ProjectsStore.ListOfProjectsLoadedFromAPI.data.length/9)))
    },[]);

    useEffect(()=>{
    //    console.log("len"+listOfProjects.length)
       updateList(startIndexOfPage,(listOfProjects.length>=endIndexOfPage) ? endIndexOfPage : listOfProjects.length);
    },[listOfProjects,endIndexOfPage]);

    useEffect(()=>{
        updateSearchKeyPair(listOfOptions_ForChipList);
    },[listOfOptions_ForChipList]);

    useEffect(()=>{
        // Not call the .. FILTER ENGINE
        try{
            const searchResultsList = FilterEngine(listOfProjects,searchKeyPairs[0]);
            console.log(searchResultsList)
            setNumberOfPageWhenSearhing(Math.ceil((searchResultsList.length)/9));
            updateSearchResultsList(startIndexOfPageWhenSearching,(searchResultsList.length>=endIndexOfPageWhenSearching) ? endIndexOfPageWhenSearching : searchResultsList.length,searchResultsList);
        }catch(e){}

    },[searchKeyPairs,endIndexOfPageWhenSearching])

    const updateSearchKeyPair = (listOfOptions_ForChipList)=>{
        let tempKeyPairs = [];
        tempKeyPairs.push(listOfOptions_ForChipList.map((item,index)=>{
                let itemToReturn = null;
                  // { key: 0,type:"ByRating",data:"4", label: '4 Stars' },
                switch (item.type) {
                    case filterBy_titles_type.filter_by_title_1_type:
                            console.log(`${filterBy_titles_type.filter_by_title_1_type} fiter  type detected`)
                            itemToReturn={
                                withRespectTo:item.type,
                                typeofValue:"SingleValueString",
                                values:item.data   
                            }
                        break;
                    case filterBy_titles_type.filter_by_title_2_type:
                        console.log(`${filterBy_titles_type.filter_by_title_2_type} fiter  type detected`)
                            itemToReturn={
                                withRespectTo:item.type,
                                typeofValue:"SingleValueString",
                                values:item.data   
                            }
                        break;
                    case filterBy_titles_type.filter_by_title_3_type:
                        console.log(`${filterBy_titles_type.filter_by_title_3_type} fiter  type detected`)
                            itemToReturn={
                                withRespectTo:item.type,
                                typeofValue:"SingleValueString",
                                values:item.data   
                            }
                        break;   
                    case filterBy_titles_type.filter_by_title_4_type: 
                    console.log(`${filterBy_titles_type.filter_by_title_4_type} fiter  type detected`)   
                            itemToReturn={
                                withRespectTo:item.type,
                                typeofValue:"SingleValueString",
                                values:item.data   
                            }
                        break;
                    case filterBy_titles_type.filter_by_title_5_type:
                        console.log(`${filterBy_titles_type.filter_by_title_5_type} fiter  type detected`)
                            //Price range. comma seperated. Make sure to conver it in int.
                            let tempValues = item.data.split(',');
                             itemToReturn={
                                    withRespectTo:item.type, 
                                    typeofValue:"Range", //Range : int
                                    values:[tempValues[0],tempValues[1]]
                                }
                        break;
                                
                    default:
                        break;
                }

                return itemToReturn;
            }))
        setSearchKeyPairs(tempKeyPairs);
       
    }
    const updateList = (startIndex,endIndex)=>{
        setList(listOfProjects.map((item,index)=>{
            if(((index)>=startIndex)&&((index)<endIndex))
            {
                return(      
                    <ImageListItem key={item.img} cols={item.cols || 1}>
                        <ProjectHolder  cols={item.cols}   handelOptionSelection={props.handelOptionSelection} data={item}/>
                    </ImageListItem>
                    )   
            }
        }))
    }

    const updateSearchResultsList = (startIndex,endIndex,listOfResults)=>{
            if(listOfResults.length===0){
                setSearchResults(<Headings text={"No match found.!!"} fontSize={25}/>)   
            }
            else
            {
                setSearchResults(listOfResults.map((item,index)=>{
                    if(((index)>=startIndex)&&((index)<endIndex))
                    {
                        return(      
                            <ImageListItem key={item.img} cols={item.cols || 1}>
                                <ProjectHolder  cols={item.cols}   handelOptionSelection={props.handelOptionSelection} data={item}/>
                            </ImageListItem>
                            )   
                    }
                }));
            }

       

    }

    const handelPageChange = (event,pageNumber)=>{

        setCurrentOpenPage((prev)=>{
            if(currentOpenPage<prev)
            {
                setStartIndexOfPage((prevSI)=>{
                    return prevSI+9;
                })
                setEndIndexOfPage((prevSE)=>{
                    return prevSE+9;
                }); 
                return (prev)
            }
            else
            {
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

    const handelPageChangeWhenSearching = (event,pageNumber)=>{

        setCurrentOpenPageWhenSearching((prev)=>{
            if(currentOpenPage<prev)
            {
                setStartIndexOfPageWhenSearching((prevSI)=>{
                    return prevSI+9;
                })
                setEndIndexOfPageWhenSearching((prevSE)=>{
                    return prevSE+9;
                }); 
                return (prev)
            }
            else
            {
                setStartIndexOfPageWhenSearching((prevSI)=>{
                    return prevSI-9;
                })
                setEndIndexOfPageWhenSearching((prevSE)=>{
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
                            
                                { (listOfOptions_ForChipList.length===0) && 
                                    <div>
                                       <div style={{marginTop:"1%",paddingBottom:'1%'}}> <Headings text={"All projects"} fontSize={30}/> </div>
                              
                                        <ImageList rowHeight={320} className={classes.imageList} cols={3}>
                                     {list}
                                    </ImageList>
                                 <div>
                                         <Pagination onChange={(e)=>{
                                             setCurrentOpenPage(parseInt(e.target.outerText));
                                             handelPageChange(e);
                                         }} count={numberOfPage} variant="outlined" shape="rounded" />
                                 </div>
                                    </div>
                                     
                                }
                                { (listOfOptions_ForChipList.length!=0) &&
                                <div>
                                    <div style={{marginTop:"1%",paddingBottom:'1%'}}> <Headings text={"Search results"} fontSize={30}/> </div>
                              
                                   <ImageList rowHeight={320} className={classes.imageList} cols={3}>
                                     {searchResults}
                                    </ImageList>
                                 <div>
                                         <Pagination onChange={(e)=>{
                                             setCurrentOpenPageWhenSearching(parseInt(e.target.outerText));
                                             handelPageChangeWhenSearching(e);
                                         }} count={numberOfPageWhenSearching} variant="outlined" shape="rounded" />
                                 </div>
                                </div>
                                 }

                                       
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
        marginTop:"1%"
      },
}))
export default ListOfAllProjects;