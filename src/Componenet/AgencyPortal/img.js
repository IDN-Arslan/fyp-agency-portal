// import axios from 'axios'
// import React, { useState } from 'react'

// export const UploadingFile = () => {


//     const [selectedField , setSelectedField] = useState("")

//    const myHandler = (e) => {
//         setSelectedField(e.target.files[0])
//     }

//   const submitHandler= (e)=>{
//         e.preventDefault()
//         // var url = "/auth/registration";
//         // const formdata = new FormData();
//         // formdata.append('myFile', selectedField, setSelectedField.name);
//         // formdata.append('name', 'image')
//         // let response = axios.post(url, formdata)
//         // console.log(response)
//         console.log(selectedField)
//     }
//   return (
//     <div>
//         <form onSubmit={submitHandler} >
//         <input type= "file" name='myFile' onChange={myHandler} />   
//         <input type= "submit" value= "Upload" />
//         </form>
//     </div>
//   )
// }
// import  React from 'react';
// import { styled } from '@mui/material/styles';
// import Badge from '@mui/material/Badge';
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import img1 from '../images/off the beaten track.png'

// const StyledBadge = styled(Badge)(({ theme }) => ({
//   '& .MuiBadge-badge': {
//     backgroundColor: '#44b700',
//     color: '#44b700',
//     boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
//     '&::after': {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       borderRadius: '50%',
//       animation: 'ripple 1.2s infinite ease-in-out',
//       border: '1px solid currentColor',
//       content: '""',
//     },
//   },
//   '@keyframes ripple': {
//     '0%': {
//       transform: 'scale(.8)',
//       opacity: 1,
//     },
//     '100%': {
//       transform: 'scale(2.4)',
//       opacity: 0,
//     },
//   },
// }));

// const SmallAvatar = styled(Avatar)(({ theme }) => ({
//   width: 22,
//   height: 22,
//   border: `2px solid ${theme.palette.background.paper}`,
// }));

// export default function UploadingFile() {
//   return (
//     <Stack direction="row" spacing={2}>
//       <StyledBadge
//         overlap="circular"
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//         variant="dot"
//       >
//         <Avatar alt="Remy Sharp" src= {img1} />
//       </StyledBadge>
//       <Badge
//         overlap="circular"
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//         badgeContent={
//           <SmallAvatar alt="Remy Sharp" src= {img1} />
//         }
//       >
//         <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
//       </Badge>
//     </Stack>
//   );
// }

// import React, { Component } from 'react';
// import '../../App.css';
// import img1 from '../images/off the beaten track.png'
// export class UploadingFile extends Component {
//   state={
//     profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
//   }
//   imageHandler = (e) => {
//     const reader = new FileReader();
//     reader.onload = () =>{
//       if(reader.readyState === 2){
//         this.setState({profileImg: reader.result})
//       }
//     }
//     reader.readAsDataURL(e.target.files[0])
//   };
// 	render() {
//     const { profileImg} = this.state
// 		return (
// 			<div className="page">
// 				<div className="container">
// 					<div className="img-holder">
// 					</div>
// 					<input type="file" accept="image/*" name="image-upload" id="input" 
// 					 />
// 					<div className="label">
//           <label className="image-upload" htmlFor="input">
// 						Choose your Photo
// 					</label>
//           </div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default UploadingFile;
// 						{/* <i className="material-icons">add_photo_alternate</i> */}
// 					// onChange={this.imageHandler}
// 						{/* <img src={profileImg} alt="" id="img" className="img" /> */}
// 					{/* <h1 className="heading">Add your Image</h1> */}

import { useState} from "react";
import Snackbar from "../AgencyPortal/Snackbar/index";
import { TextField, Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import img1 from "../../images/off the beaten track.png";
// import './deals.css'

const Signup = () => {
  const initialValues = {
    briefdescription: "",
    actualamount: "",
    discountamount: "",
    phonenumber: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [Interset, setInterset] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const [open, setOpen] = useState(false);
  const [type, setType] = useState(false);
  const [snakbarMessage, setsnakbarMessage] = useState(false);

  const validate = (values) => {
    if (!values.actualamount.trim()) {
      setType("error");
      setsnakbarMessage("Actual Amount Required");
      setOpen(true);
    }
     if (!values.discountamount) {
      setType("error");
      setsnakbarMessage("Discount Amount is required!");
      setOpen(true);
    }
    if (!values.briefdescription) {
      setType("error");
      setsnakbarMessage("Brief Description is Required");
      setOpen(true);
    }
    if (!values.phonenumber) {
      setType("error");
      setsnakbarMessage("Phone number is required");
      setOpen(true);
    } else return true;
  };
  const create = async (formValues) => {
    if (!Interset) {
      setType("error");
      setsnakbarMessage("select interest");
      setOpen(true);
    }
  };

  const [selectedField , setSelectedField] = useState("")

  const myHandler = (e) => {
       setSelectedField(e.target.files[0])
   }


  return (
     <div className="deals-container">
      <div className="deals-content-left">
      <div className="container">
					<div className="img-holder">
						 {/* <img src={img1} alt="" id="img" className="img" />  */}
					</div>
					<input type="file" accept="image/*" name="image-upload" id="input" 
					 />
					<div className="label">
          <label className="image-upload" htmlFor="input">
						Choose your Photo
					</label>
          </div>
				</div>
       </div>
      <div className="deals-content-right">
        <form onSubmit={handleSubmit} className="deals">
          <h1>Add New Deals</h1>
          <Box sx={{ width: 450, maxWidth: "100%" }}>
            <div className="deals-inputs">
              <TextField
                label="Brief Description"
                type="description"
                fullWidth
                name="briefdescription"
                placeholder="Enter your Brief Description"
                variant="standard"
                value={formValues.briefdescription}
                onChange={handleChange}
              />
            </div>
            <div className="deals-inputs">
              <TextField
                label="Actual Amount"
                type="amount"
                fullWidth
                name="actualamount"
                placeholder="Enter your Actual Amount"
                variant="standard"
                value={formValues.actualamount}
                onChange={handleChange}
              />
            </div>
            <div className="deals-inputs">
              <TextField
                label="Discount Amount"
                type="amount"
                fullWidth
                name="discountamount"
                placeholder="Enter your Discount Amount"
                variant="standard"
                value={formValues.discountamount}
                onChange={handleChange}
              />
            </div>
            <div className="deals-inputs">
              <TextField
                label="Phone Number"
                fullWidth
                name="phonenumber"
                placeholder="Enter your Phone Number"
                variant="standard"
                value={formValues.phonenumber}
                onChange={handleChange}
              />
            </div>
            <div className="deals-inputs">
            <FormControl
              variant="standard"
              sx={{ m: 1, width: 650, maxWidth: "90%" }}
              onChange={handleChange}
            >
              <InputLabel id="demo-simple-select-standard-label">
                --Interset-
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={Interset}
                onChange={(e) => setInterset(e.target.value)}
                label="Interset"
              >
                <MenuItem value="">
                  <em>Interset</em>
                </MenuItem>
                <MenuItem value="HUNZA">Hunza</MenuItem>
                <MenuItem value="SAWAT">Sawat</MenuItem>
                <MenuItem value="NARAN">Naran</MenuItem>
                <MenuItem value="KASHMIR">Kashmir</MenuItem>
                <MenuItem value="SKARDU">Skardu</MenuItem>
                <MenuItem value="KALAM">Kalam</MenuItem>
                <MenuItem value="ORMARA">Ormara</MenuItem>
                <MenuItem value="SHUGRAN">Shugran</MenuItem>
                <MenuItem value="KHANPUR">Khanpur</MenuItem>
              </Select>
            </FormControl>
            </div>
          </Box>
          <button
            className="deals-input-btn"
            type="submit"
            onClick={async () => {
              let validation = validate(formValues);
              if (validation) await create(formValues);
            }}
          >
           Create
          </button>
          {open && (
            <Snackbar
              open={open}
              setOpen={setOpen}
              type={type}
              message={snakbarMessage}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;