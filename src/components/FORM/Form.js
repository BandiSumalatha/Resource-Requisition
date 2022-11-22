import React,{useState} from 'react'
import TimezoneSelect, { allTimezones } from "react-timezone-select"
// import {InputLabel,MenuItem,FormControl,Select,SelectChangeEvent,Button,TextField,} from '@mui/material';
import "../FORM/form.css"
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import UpdateIcon from '@mui/icons-material/Update';
import EditIcon from '@mui/icons-material/Edit';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';


import {Grid,Box,Button,TextField,InputLabel,Select,MenuItem,FormControl,OutlinedInput,Radio,RadioGroup,FormControlLabel} from "@mui/material"

import { useTheme } from '@mui/material/styles';

import SearchIcon from '@mui/icons-material/Search';


// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };


const Technology =[ 'React','Angular','Html','Css','Bootstrap','CoreJave','Javascript','Sql','Node js','Mongodb',];
const Units= ["Hr","Assitant Manager","Manager","Genral Manager" ];
const hiringType=["IT","NonIT","Techsupport"]
const shifts=["night","day","rotational"]
const countries=[" United States/America","France/paris","United Kingdom/Europe","China/Bejing","India/Delhi","Japan/tokyo","Canada/ottawa"]
const Education=["Degree","MBA","MCA","BA","B.TECH","B.E"]
const Domain=["sql","react","springboot"]
const locations=["WFH","WFO"]


  function getStyles(name,personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

const Form = () => {
  const theme = useTheme();
  const [name, setName] = useState("");
  const [empId,setEid]=useState("")
  const [hiring,setHiring]=useState([])
 const [unit, setUnit] = useState([]);
  const [technology,setTechnology]=useState([])
  const [shift,setShift]=useState([])
  const [timezone, setTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  )
  const [Qualification,setQualification]=useState([])
  const [Knowledge,setKnowledge]=useState([])
  const [location,setLocation]=useState([])
  const handleChange1=(e)=>{
setName(e.target.value)
  }
  const handleChange12=(e)=>{
    setEid(e.target.value)
  }

  const handleChange13 = (event) => {
    const {
      target: { value },
    } = event;
    setHiring(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setUnit(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleChange3 = (event) => {
    const {
      target: { value },
    } = event;
    setTechnology(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleChange4 = (event) => {
    const {
      target: { value },
    } = event;
    setShift(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
const handleChange5=(event)=>{
  const {
    target: { value },
  } = event;
  setQualification(
    // On autofill we get a stringified value.
    typeof value === 'string' ? value.split(',') : value,
  );
}
const handleChange6=(event)=>{
  const {
    target: { value },
  } = event;
  setKnowledge(
    // On autofill we get a stringified value.
    typeof value === 'string' ? value.split(',') : value,
  );
}
const handleChange7=(event)=>{
  const {
    target: { value },
  } = event;
  setLocation(
    // On autofill we get a stringified value.
    typeof value === 'string' ? value.split(',') : value,
  );
}


  return (
    <Box className='Form'>
    <Grid container lg={12} rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={6}>
    <h3 style={{margin:"30px"}}>Resourse Requirement</h3>

<Grid className="c2" container xs={12} style={{marginTop:"20px"}}>
 <Grid xs={6} >
 <Button variant="outlined" color="primary" startIcon={<OpenInNewIcon/>}>
  New
</Button>
 </Grid>
 
 <Grid xs={6} >
 <Button  variant="outlined" color="primary" startIcon={<EditIcon />}>
  Edit
</Button>
    </Grid>
    
</Grid>
     <Grid container className="c3" xs={12} columnSpacing={{ xs: 1 }}>
      <Grid xs={4} >
        <InputLabel className='inputlabel' >Created By</InputLabel>
      </Grid>
    <Grid xs={3}>
      
      <TextField style={{marginLeft:"0px",marginTop:"20px", width:"200px"}}
        id="input-with-icon-textfield"
        label="reqired"
        placeholder='Employee Name'
        value={name}
        onChange={handleChange1}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
   
        </Grid>
          <Grid xs={3}>
    
          <TextField style={{marginLeft:"50px",marginTop:"20px", width:"200px"}}
        id="input-with-icon-textfield"
        label="reqired"
        value={empId}
        onChange={handleChange12}
        placeholder='Employee Id'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
   
        </Grid>
    </Grid>
    <Grid container className="c3" xs={12} columnSpacing={{ xs: 1 }}>
      <Grid xs={4} >
        <InputLabel className='inputlabel'>Hiring Type</InputLabel>
      </Grid>
      <Grid xs={8} >
      <FormControl sx={{ m: 1, width: 350 }}>
        <InputLabel >Hiring</InputLabel>
        <Select

          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={hiring}
          onChange={handleChange13}
          input={<OutlinedInput label="Hiring" />}
     
        >
          {hiringType.map((type) => (
            <MenuItem 
              key={type}
              value={type}
              style={getStyles(type, hiring, theme)}
            >
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      </Grid>
    
    </Grid>
    <Grid container className="c2" xs={12} columnSpacing={{ xs: 1 }}>
      <Grid xs={4} >
        <InputLabel className='inputlabel'>Request By</InputLabel>
      </Grid>
      <Grid xs={6} >
      <FormControl sx={{ m: 1, width: 350 }}>
        <InputLabel >Unit</InputLabel>
        <Select
           
          multiple
          value={unit}
          onChange={handleChange2}
       
       
        >
          {Units.map((Unit) => (
            <MenuItem 
              key={Unit}
              value={Unit}
              style={getStyles(Unit, unit, theme)}
            >
              {Unit}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      </Grid>
    
    </Grid>
    <Grid container className="c2" xs={12} columnSpacing={{ xs: 1 }}>
      <Grid xs={4} >
        <InputLabel className='inputlabel'>Technology  <br/>Required</InputLabel>
      </Grid>
      <Grid xs={6} >
      <FormControl sx={{ m: 1, width: 350 }}>
        <InputLabel > Required Knowledge</InputLabel>
        <Select
          
          multiple
          value={technology}
          onChange={handleChange3}
          input={<OutlinedInput  />}
        
        >
          {Technology.map((Tech) => (
            <MenuItem 
              key={Tech}
              value={Tech}
              style={getStyles(Tech, technology, theme)}
            >
              {Tech}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      </Grid>
    
    </Grid>
    <Grid container className="c2" xs={12} columnSpacing={{ xs: 1 }}>
      <Grid xs={4} >
        <InputLabel className='inputlabel'>Resource Availability</InputLabel>
      </Grid>
      <Grid xs={8} >
      <FormControl sx={{ m: 1, width: 350 }}>
         
      <TextField
        id="input-with-icon-textfield"
        type="date"
      variant="outlined"
      />
        
        </FormControl>
      </Grid>
    
    </Grid>
    <Grid container className="c2" xs={12} columnSpacing={{ xs: 1 }}>
      <Grid xs={4} >
        <InputLabel className='inputlabel'>Require to work in shifts</InputLabel>
      </Grid>
      <Grid xs={8} >
      <FormControl sx={{ m: 1, width: 350 }}>
        <InputLabel > Shift times</InputLabel>
        <Select
         
          multiple
          value={shift}
          onChange={handleChange4}
          input={<OutlinedInput label="Hiring" />}
          
        >
          {shifts.map((shif) => (
            <MenuItem 
              key={shif}
              value={shif}
              style={getStyles(shif, unit, theme)}
            >
              {shif}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      </Grid>
    
    </Grid>
    <Grid container className="c3" xs={12} columnSpacing={{ xs: 1 }}>
      <Grid xs={4} >
        <InputLabel className='inputlabel'>Time zone of shifts</InputLabel>
      </Grid>
      <Grid xs={8} >
      <FormControl sx={{ m: 1, width: 350}}>
      
        <TimezoneSelect
        multiple
          value={timezone}
          onChange={setTimezone}
          timezones={{
            ...allTimezones,
            "America/Lima": "Pittsburgh",
            "Europe/Berlin": "Frankfurt",
          }}
      >
           {countries.map((country) => (
            <MenuItem 
              key={country}
              value={country}
              style={getStyles(country, timezone, theme)}
            >
              {country}
            </MenuItem>
          ))}

    </TimezoneSelect>
      </FormControl>
     </Grid>
     </Grid>
     <Grid container className="c3" xs={12} columnSpacing={{ xs: 1 }}>
      <Grid xs={4} >
        <InputLabel className='inputlabel'>Sales order num</InputLabel>
      </Grid>
      <Grid xs={8} >
      <FormControl sx={{ m: 1, width: 350 }}>
         
    <TextField 

          required
          id="outlined-required"
          label="Required"
          defaultValue="sales order num"
          type="text"
         
        />
        
        </FormControl>
      </Grid>
        </Grid>
        <Grid container className="c3" xs={12} columnSpacing={{ xs: 1 }}>
      <Grid xs={4} >
        <InputLabel className='inputlabel'>PassPort</InputLabel>
      </Grid>
      <Grid xs={8} >
      <FormControl sx={{ m: 1, width: 300 }}>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
      <FormControlLabel  control={<Radio />} label="Yes" />
        <FormControlLabel  control={<Radio />} label="No" />
        </RadioGroup>
    </FormControl>
  
      </Grid>
        </Grid>
        <Grid container className="c3" xs={12} columnSpacing={{ xs: 1 }}>
      <Grid xs={4} >
        <InputLabel className='inputlabel'>Visa</InputLabel>
      </Grid>
      <Grid xs={8} >
      <FormControl sx={{ m: 1, width: 300 }}>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
      <FormControlLabel  control={<Radio />} label="Yes" />
        <FormControlLabel  control={<Radio />} label="No" />
        </RadioGroup>
    </FormControl>
  
      </Grid>
        </Grid>
      
        <Grid container className="c3" xs={12} columnSpacing={{ xs: 1 }}>
      <Grid xs={4} >
        <InputLabel className='inputlabel'>Approved By</InputLabel>
      </Grid>
      <Grid xs={3}>
      
      <TextField style={{marginLeft:"0px",marginTop:"20px", width:"200px"}}
        id="input-with-icon-textfield"
        label="reqired"
        placeholder='Employee Name'
        value={name}
        onChange={handleChange1}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
   
        </Grid>
          <Grid xs={3}>
    
          <TextField style={{marginLeft:"50px",marginTop:"20px", width:"200px"}}
        id="input-with-icon-textfield"
        label="reqired"
        value={empId}
        onChange={handleChange12}
        placeholder='Employee Id'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
   
        </Grid>
    </Grid>
    <Grid  className="c2"container xs={12} style={{margin:"20px"}} >
 <Grid xs={5} >
 <Button variant="outlined" color="success" startIcon={<SaveIcon />}>
  Save
</Button>
 </Grid>
 
 <Grid xs={5}>
    <Button variant="outlined" color="secondary" startIcon={<UpdateIcon />}>Update</Button>
    </Grid>
    
</Grid>




</Grid>


      
    <Grid item xs={6}>
      <h1><span id="span">Birla</span>soft</h1> 
   <Grid container  xs={12} columnSpacing={{ xs: 1 }}>
      <Grid xs={5} >
        <InputLabel className='g2'>Search request num</InputLabel>
      </Grid>
      <Grid xs={6} >
    

       <div  className="box">
       <SearchIcon/>
       <input type="search" defaultValue="search"/>
       </div>
       
       
    
      </Grid>

    </Grid>

    <Grid container  xs={12} columnSpacing={{ xs: 1 }} >
      <Grid xs={5} >
        <InputLabel className='g2'>Created on</InputLabel>
      </Grid>
      <Grid xs={6} >
      <FormControl sx={{ m: 1, width: 300 }}>
         
    <TextField 

          required
          id="outlined-required"
          label="Required"
          defaultValue="date"
          type="date"
         
        />
        
        </FormControl>
      </Grid>
    
    </Grid>
    <Grid container  xs={12} columnSpacing={{ xs: 1 }} >
      <Grid xs={5} >
        <InputLabel className='g2'># Positions</InputLabel>
      </Grid>
      <Grid xs={6} >
      <FormControl sx={{ m: 1, width: 300 }}>
         
    <TextField 

          required
          id="outlined-required"
          label="Required"
          defaultValue="position"
          type="text"
         
        />
        
        </FormControl>
      </Grid>
    
    </Grid>
    <Grid container  xs={12} columnSpacing={{ xs: 1 }} >
      <Grid xs={5} >
        <InputLabel className='g2'>Years of Expreance</InputLabel>
      </Grid>
      <Grid xs={6} >
      <FormControl sx={{ m: 1, width: 300 }}>
         
    <TextField 

          required
          id="outlined-required"
          label="Required"
          defaultValue="Expreance"
          type="text"
         
        />
        
        </FormControl>
      </Grid>
    
    </Grid>
    <Grid container  xs={12} columnSpacing={{ xs: 1 }}>
      <Grid xs={5} >
        <InputLabel className='g2'>Educational Qualification</InputLabel>
      </Grid>
      <Grid xs={6} >
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel >Qulification</InputLabel>
        <Select
           
          multiple
          value={Qualification}
          onChange={handleChange5}
       
        >
          {Education.map((edu) => (
            <MenuItem 
              key={edu}
              value={edu}
              style={getStyles(edu, Qualification, theme)}
            >
              {edu}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      </Grid>
    
    </Grid>
    
    <Grid container  xs={12} columnSpacing={{ xs: 1 }}>
      <Grid xs={5} >
        <InputLabel className='g2'>Required Domain Knowledge</InputLabel>
      </Grid>
      <Grid xs={6} >
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel >domain</InputLabel>
        <Select
           
          multiple
          value={Knowledge}
          onChange={handleChange6}
    
        >
          {Domain.map((know) => (
            <MenuItem 
              key={know}
              value={know}
              style={getStyles(know, Knowledge, theme)}
            >
              {know}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      </Grid>
    
    </Grid>
    
    <Grid container  xs={12} columnSpacing={{ xs: 1 }}>
      <Grid xs={5} >
        <InputLabel className='g2'>Resource Working Location</InputLabel>
      </Grid>
      <Grid xs={6} >
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel >location</InputLabel>
        <Select
           
          multiple
          value={location}
          onChange={handleChange7}
       
     
        >
          {locations.map((loc) => (
            <MenuItem 
              key={loc}
              value={loc}
              style={getStyles(loc, Knowledge, theme)}
            >
              {loc}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      </Grid>

    </Grid>
    
    
    <Grid container  xs={12} columnSpacing={{ xs: 1 }}>
      <Grid xs={5} >
        <InputLabel className='g2'>Ready to relocate any
        <br></br> birlasoft location</InputLabel>
      </Grid>
      <Grid xs={6} >
      <FormControl sx={{ m: 1, width: 300 }}>
      <RadioGroup
      style={{marginTop:"10px"}}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
      <FormControlLabel value="female" control={<Radio />} label="Yes" />
        <FormControlLabel value="male" control={<Radio />} label="No" />
        </RadioGroup>
    </FormControl>
  
      </Grid>
        </Grid>
        <Grid container  xs={12} columnSpacing={{ xs: 1 }} >
      <Grid xs={5} >
        <InputLabel className='g2'>No.of Js provided</InputLabel>
      </Grid>
      <Grid xs={6} >
      <FormControl sx={{ m: 1, width: 300 }}>
         
      <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
        
        </FormControl>
      </Grid>
    
    </Grid>
    <Grid container  xs={12} columnSpacing={{ xs: 1 }} >
      <Grid xs={5} >
        <InputLabel className='g2'>No.of Js provided</InputLabel>
      </Grid>
      <Grid xs={6} >
      <FormControl sx={{ m: 1, width: 300 }}>
     <input type="file"  style={{width:"300px", padding:"20px"}}/>
        </FormControl>
      
      </Grid>
    
    </Grid>
    <Grid container className="c2" xs={12} columnSpacing={{ xs: 1 }}>
      <Grid xs={5} >
        <InputLabel className='g2' >Resource Availability</InputLabel>
      </Grid>
      <Grid xs={6} >
      <FormControl sx={{ m: 1, width: 300 }}>
         
      <TextField
        id="input-with-icon-textfield"
        type="date"
      variant="outlined"
      />
        
        </FormControl>
      </Grid>
    </Grid>
    
    <Grid container className="c2" xs={12} columnSpacing={{ xs: 1 }}>
      <Grid xs={5} >
        
      </Grid>
      <Grid xs={6} >
     
        
   
<Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
Delete
</Button>
      </Grid>
    </Grid>
    


   </Grid>
  
     </Grid>

</Box>

        
    
    
  )
}


export default Form