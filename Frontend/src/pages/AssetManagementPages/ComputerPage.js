import { useState } from "react";
// @mui
import {TabContext, TabPanel} from "@mui/lab";
import {Box, Container} from "@mui/material";
// Country Component
import { ListComputer, CreateComputer, EditComputer } from "../../sections/@dashboard/AssetManagement/computers";

export default function ComputerPage(props){

    const [customerId,setCustomerId]=useState(null);
    const [optionState, setOptionState]= useState({canCreate:false, canEdit: false, canView: false});

    const handleOptionChange =(key,value)=>{
        setOptionState((pre)=>{return {...pre,[key]:value}});
    }

    const handleClickNewComputer = () =>{
        handleOptionChange('canCreate', !optionState.canCreate);
    }

    const handleClickEditComputer = (idToEdit=null) =>{
        setCustomerId(idToEdit);
        handleOptionChange('canEdit',!optionState.canEdit);
    }

    // const handleClickViewModel = (idToView) =>{
    //     setCustomerId(idToEdit);
    //     handleOptionChange('canView',true);
    // }

    // const handleClickDeletModel = (idToDelete) =>{
        
    // }

    return(
        <Container >
          <ListComputer handleClickNewComputer={handleClickNewComputer} handleClickEditComputer={handleClickEditComputer} DB_URL={props.DB_URL} loggedInUserId={props.loggedInUserId}/>
          {optionState.canCreate && <CreateComputer  handleClickNewComputer={handleClickNewComputer} optionState={optionState} DB_URL={props.DB_URL} loggedInUserId={props.loggedInUserId}/>}
          {optionState.canEdit && <EditComputer handleClickEditComputer={handleClickEditComputer} optionState={optionState} idToEdit={customerId} DB_URL={props.DB_URL} loggedInUserId={props.loggedInUserId}/>}
        </Container>
    );
}