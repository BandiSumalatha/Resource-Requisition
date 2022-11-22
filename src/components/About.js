<Grid className="c2" container xs={8} >
 <Grid xs={3} >
 <Button variant="contained" size="large">new</Button>
 </Grid>
 
 <Grid xs={3}>
    <Button variant="contained" size="large">edit</Button>
    </Grid>
    
</Grid>
     <Grid container className="c3" xs={9} columnSpacing={{ xs: 1 }}>
      <Grid xs={3} >
        <InputLabel style={{marginTop:"20px", marginLeft:"50px"}}>Created By</InputLabel>
      </Grid>
    <Grid xs={3}>
    <TextField style={{marginLeft:"20px", padding:"0px",marginTop:"10px" }}
          required
          id="outlined-required"
          label="Required"
          defaultValue="Employee Id"
        />
        </Grid>
          <Grid xs={3}>
    
    <TextField style={{marginLeft:"0px", padding:"0px",marginTop:"10px" }}
          required
          id="outlined-required"
          label="Required"
          defaultValue="Employee Name"
        />
      </Grid>
    </Grid>
    <Grid container className="c3" xs={9} columnSpacing={{ xs: 1 }}>
      <Grid xs={3} >
        <InputLabel style={{marginTop:"20px", marginLeft:"50px"}}>Hiring Type</InputLabel>
      </Grid>
      <Grid xs={5} >
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel >Hiring</InputLabel>
        <Select
       
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={technology}
          onChange={handleChange}
          input={<OutlinedInput label="Hiring" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem 
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      </Grid>
    
    </Grid>
    <Grid container className="c4" xs={9} columnSpacing={{ xs: 1 }}>
      <Grid xs={3} >
        <InputLabel style={{marginTop:"20px", marginLeft:"50px"}}>Request By</InputLabel>
      </Grid>
      <Grid xs={5} >
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel >Unit</InputLabel>
        <Select
           
          multiple
          value={unit}
          onChange={handleChange2}
       
          MenuProps={MenuProps}
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
    <Grid container className="c4" xs={9} columnSpacing={{ xs: 1 }}>
      <Grid xs={3} >
        <InputLabel style={{marginTop:"20px", marginLeft:"50px"}}>Technology knowledge <br/>Required</InputLabel>
      </Grid>
      <Grid xs={5} >
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel > Required Knowledge</InputLabel>
        <Select
          
          multiple
          value={unit}
          onChange={handleChange3}
          input={<OutlinedInput label="Hiring" />}
          MenuProps={MenuProps}
        >
          {Technology.map((Tech) => (
            <MenuItem 
              key={Tech}
              value={Tech}
              style={getStyles(Tech, unit, theme)}
            >
              {Tech}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      </Grid>
    
    </Grid>
    <Grid container className="c5" xs={9} columnSpacing={{ xs: 1 }}>
      <Grid xs={3} >
        <InputLabel style={{marginTop:"20px", marginLeft:"50px"}}>Resourse Availability</InputLabel>
      </Grid>
      <Grid xs={5} >
      <FormControl sx={{ m: 1, width: 300 }}>
         
    <TextField 

          required
          id="outlined-required"
          label="Required"
          defaultValue="Employee Name"
          type="date"
         
        />
        
        </FormControl>
      </Grid>
    
    </Grid>
    <Grid container className="c6" xs={9} columnSpacing={{ xs: 1 }}>
      <Grid xs={3} >
        <InputLabel style={{marginTop:"20px", marginLeft:"50px"}}>Require to work in shifts</InputLabel>
      </Grid>
      <Grid xs={5} >
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel > Shift times</InputLabel>
        <Select
         
          multiple
          value={shift}
          onChange={handleChange4}
          input={<OutlinedInput label="Hiring" />}
          MenuProps={MenuProps} 
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
    <Grid container className="c7" xs={9} columnSpacing={{ xs: 1 }}>
      <Grid xs={3} >
        <InputLabel style={{marginTop:"20px", marginLeft:"50px"}}>Time zone of shifts</InputLabel>
      </Grid>
      <Grid xs={5} >
      <FormControl sx={{ m: 1, width: 300}}>
      
        <TimezoneSelect
        multiple
          value={timezone}
          onChange={setTimezone}
          timezones={{
            ...allTimezones,
            "America/Lima": "Pittsburgh",
            "Europe/Berlin": "Frankfurt",
          }}
      
          input={<OutlinedInput label="timezone" />}
          MenuProps={MenuProps} 
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
     <Grid container className="c5" xs={8} columnSpacing={{ xs: 1 }}>
      <Grid xs={3} >
        <InputLabel style={{marginTop:"20px", marginLeft:"50px"}}>Sales order num</InputLabel>
      </Grid>
      <Grid xs={5} >
      <FormControl sx={{ m: 1, width: 300 }}>
         
    <TextField style={{marginLeft:"20px", padding:"6px",marginTop:"5px", width:"320px"}}

          required
          id="outlined-required"
          label="Required"
          defaultValue="sales order num"
          type="text"
         
        />
        
        </FormControl>
      </Grid>
        </Grid>
        <Grid container className="c5" xs={9} columnSpacing={{ xs: 1 }}>
      <Grid xs={3} >
        <InputLabel style={{marginTop:"20px", marginLeft:"50px"}}>PassPort</InputLabel>
      </Grid>
      <Grid xs={5} >
      <FormControl sx={{ m: 1, width: 300 }}>
      <RadioGroup
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
        <Grid container className="c3" xs={9} columnSpacing={{ xs: 1 }}>
      <Grid xs={3} >
        <InputLabel style={{marginTop:"20px", marginLeft:"50px"}}>Approved By</InputLabel>
      </Grid>
    <Grid xs={3}>
    <TextField style={{marginLeft:"0px", padding:"0px",marginTop:"10px" }}
          required
          id="outlined-required"
          label="Required"
          defaultValue="Employee Id"
        />
        </Grid>
          <Grid xs={3}>
    
    <TextField style={{marginLeft:"0px", padding:"0px",marginTop:"10px" }}
          required
          id="outlined-required"
          label="Required"
          defaultValue="Employee Name"
        />
      </Grid>
    </Grid>
    <Grid className="c2" container xs={8} >
 <Grid xs={3} >
 <Button variant="contained" color="success" size="large">Save</Button>
 </Grid>
 
 <Grid xs={3}>
    <Button variant="contained" color="secondary" size="large">Update</Button>
    </Grid>
    
</Grid>



