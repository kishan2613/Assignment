import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Box,
  Paper,
  Typography,
} from "@mui/material";

const Signup = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [agency, setAgency] = useState("yes");

  const formHandler = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  // Common style for all TextFields
  const textFieldStyles = {
    "& .MuiInputLabel-root": {
      color: "#6C25FF", // label color
    },
    "& .MuiOutlinedInput-root": {
      height: "50px", // reduce height
      fontSize: "14px",
      "& input": {
        padding: "4px 6px", // reduce input padding
      },
    },
  };

  return (
    <Box
      className="flex justify-center items-start bg-[#F7F8F9] min-h-screen "
      component="div"
    >
      <Paper
        elevation={3}
        className="w-screen md:w-96  p-6 flex flex-col"
        component="div"
      >
        <form
          className="flex flex-col flex-grow justify-between"
          onSubmit={formHandler}
          noValidate
          autoComplete="off"
        >
          <Box className="flex flex-col">
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Create your <br /> PopX account
            </Typography>

            <TextField
              required
              label="Full Name"
              variant="outlined"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              margin="normal"
              fullWidth
              sx={textFieldStyles}
            />

            <TextField
              required
              label="Phone number"
              variant="outlined"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              margin="normal"
              fullWidth
              sx={textFieldStyles}
            />

            <TextField
              required
              label="Email address"
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              fullWidth
              sx={textFieldStyles}
            />

            <TextField
              required
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              fullWidth
              sx={textFieldStyles}
            />

            <TextField
              label="Company name"
              variant="outlined"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              margin="normal"
              fullWidth
              sx={textFieldStyles}
            />

            <FormControl component="fieldset" margin="normal">
              <FormLabel
                component="legend"
                sx={{ color: "#6C25FF", fontWeight: "bold" }}
              >
                Are you an Agency?<span style={{ color: "#d32f2f" }}>*</span>
              </FormLabel>
              <RadioGroup
                row
                aria-label="agency"
                name="agency"
                value={agency}
                onChange={(e) => setAgency(e.target.value)}
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio sx={{ color: "#6C25FF" }} />}
                  label="Yes"
                />
                <FormControlLabel
                  value="no"
                  control={<Radio sx={{ color: "#6C25FF" }} />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
          </Box>

          <Box
            mt={4}
            sx={{
              position: "sticky",
              bottom: 0,
              backgroundColor: "#fff",
              py: 0,
            }}
          >
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              sx={{
                backgroundColor: "#6C25FF",
                "&:hover": { backgroundColor: "#5a1fd1" },
              }}
            >
              Create Account
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Signup;
