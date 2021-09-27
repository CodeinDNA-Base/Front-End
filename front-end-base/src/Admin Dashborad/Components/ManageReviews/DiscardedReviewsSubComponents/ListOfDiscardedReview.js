import { Card, CardContent, Grid, makeStyles } from '@material-ui/core';
import React,{useEffect, useState} from 'react';
// import ProjectHolder from './ProjectHolder';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Filters from '../Filters'
import { lightBorder } from '../../../../Theme/borders';
import { Headings } from '../../Support/Headings';
import Pagination from '@material-ui/lab/Pagination';
import { ScrollView } from "@cantonjs/react-scroll-view";
import FilterEngine from '../FilterMotor'
import produce from 'immer';
import Skeleton from '@material-ui/lab/Skeleton';
import { useSelector } from 'react-redux';
import { selectAll, selectListOfDiscardedReviews } from '../Redux Components/Selectors';
import ReviewInforHolderForList from './ReviewInforHolderForList';
function ListOfDiscardedReview({showMenueSelectionOpt=false,...props}) {
    const classes = useStyles();
    const [listOfDiscardedReviews,setlistOfDiscardedReviews]=useState([]);
    
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
        //must match with the keys in temp file and filter.
        filter_by_title_1_type:"reviewTargetSubService",
        filter_by_title_2_type:"reviewTargetService",
        filter_by_title_3_type:"reviewRatingScore",
        filter_by_title_4_type:"reviewPlacementDate",
        filter_by_title_5_type:"requestEstimatedPrice",
        filter_by_title_6_type:"lastSeen",
        filter_by_title_7_type:"userName",
        
    }

    const listOfDiscardedReviewsFromStore = useSelector(selectListOfDiscardedReviews); //this will be updated and will cause auto render as soon as sotre get updated.
    const {isLoading_loadListOfDiscardedReviews} = useSelector(selectAll);
 
    useEffect(()=>{
       // setting up list of projects in project's rneder list.
       setlistOfDiscardedReviews(listOfDiscardedReviewsFromStore);
       setNumberOfPage(Math.ceil((listOfDiscardedReviewsFromStore.length/9)))
    },[listOfDiscardedReviewsFromStore]);

    useEffect(()=>{
       updateList(startIndexOfPage,(listOfDiscardedReviews.length>=endIndexOfPage) ? endIndexOfPage : listOfDiscardedReviews.length);
    },[listOfDiscardedReviews,endIndexOfPage]);

    useEffect(()=>{
        updateSearchKeyPair(listOfOptions_ForChipList);
    },[listOfOptions_ForChipList]);

    useEffect(()=>{
        // Not call the .. FILTER ENGINE
        try{
            const searchResultsList = FilterEngine(listOfDiscardedReviews,searchKeyPairs[0]);
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
                  console.log(item)
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
                        case filterBy_titles_type.filter_by_title_6_type:
                            console.log(`${filterBy_titles_type.filter_by_title_6_type} fiter  type detected`)
                                //Price range. comma seperated. Make sure to conver it in int.
                                console.log("Created key");
                                itemToReturn={
                                    withRespectTo:item.type,
                                    typeofValue:"SingleValueString",
                                    values:item.data   
                                }
                        break;
                        
                        case filterBy_titles_type.filter_by_title_7_type:
                            console.log(`${filterBy_titles_type.filter_by_title_7_type} fiter  type detected`)
                                //Price range. comma seperated. Make sure to conver it in int.
                                console.log("Created key");
                                itemToReturn={
                                    withRespectTo:item.type,
                                    typeofValue:"SingleValueString",
                                    values:item.data   
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
        setList(listOfDiscardedReviews.map((item,index)=>{
            if(((index)>=startIndex)&&((index)<endIndex))
            {
                return(      
                    <ImageListItem key={item.img} cols={item.cols || 1}>
                        <ReviewInforHolderForList  cols={item.cols} showMenueSelectionOpt={showMenueSelectionOpt} handelOptionSelection={props.handelOptionSelection}  data={item}/>
                    </ImageListItem>
                    )   
            }
        }));
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
                                {/* <ReviewInforHolderForList  /> */}
                                <ReviewInforHolderForList  cols={item.cols}  handeSelectOption={props.handeSelectOption} handelOptionSelection={props.handelOptionSelection} data={item}/>
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

                <Grid item xs={12}>
                    <Card
                      elevation={0}
                      style={{border:lightBorder}}  
                    >
                        <CardContent>
                            {
                                (isLoading_loadListOfDiscardedReviews) ? (
                                    <div>
                                    <div style={{marginTop:"1%",paddingBottom:'1%'}}> <Headings text={"Fetching Discarded Reviews.."} fontSize={30}/> </div>
                                    <Skeleton />
                                    <Skeleton />
                                    <Skeleton />
                                    <Skeleton />
                                    </div>
                                ):(

                            <div>
                                { (listOfOptions_ForChipList.length===0) && 
                                    <div>
                                        
                                        <div style={{marginTop:"1%",paddingBottom:'1%'}}> <Headings text={"Discarded Reviews"} fontSize={30}/> </div>
                                            
                                            <ImageList rowHeight={500} className={classes.imageList} cols={3}>
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
                              
                                   <ImageList rowHeight={500} className={classes.imageList} cols={3}>
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
                                </div>
                                )
                            }

                                       
                        </CardContent>
                    </Card>
                </Grid>
                 
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

export default ListOfDiscardedReview;