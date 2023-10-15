import {
  Box,
  Typography,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import React, { useState } from "react";

const DonateCard = () => {
  const [amount, setAmount] = React.useState(0);
  const [sectionNumber, setSectionNumber] = useState(0);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const handleOnFullNameChange = (value: string) => {
    setFullName(value);
  };
  const handleOnEmailChange = (value: string) => {
    setEmail(value);
  };
  const handleIsAnonymous = () => {
    setIsAnonymous((p) => !p);
  };
  return (
    <Box
      boxShadow={1}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      borderRadius={2}
      m={3}
    >
      <Section
        value={sectionNumber}
        amount={amount}
        back={() =>
          setSectionNumber((p) => {
            if (p < 1) return 0;
            return p - 1;
          })
        }
        onAmountChangeHandler={(newAmount: number) => {
          setAmount(newAmount);
        }}
        email={email}
        fullName={fullName}
        handleOnEmailChange={handleOnEmailChange}
        handleOnFullNameChange={handleOnFullNameChange}
        handleIsAnonymous={handleIsAnonymous}
        isAnonymous={isAnonymous}
      />
      <Button
        sx={{ width: "100%", textTransform: "none" }}
        variant="contained"
        color="success"
        onClick={() => setSectionNumber((p) => p + 1)}
      >
        Next
      </Button>
    </Box>
  );
};

export default DonateCard;

const Tabs: React.FC = ({}) => {
  const [value, setValue] = React.useState(0);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        p: 3,
      }}
    >
      <Button
        variant={value === 0 ? "contained" : "outlined"}
        color={value === 0 ? "success" : "inherit"}
        onClick={() => setValue(0)}
        sx={{
          textTransform: "none",
        }}
      >
        One-time
      </Button>
      <Button
        variant={value === 1 ? "contained" : "outlined"}
        color={value === 1 ? "success" : "inherit"}
        onClick={() => setValue(1)}
        sx={{
          textTransform: "none",
        }}
      >
        Monthly
      </Button>
      <Button
        variant={value === 2 ? "contained" : "outlined"}
        color={value === 2 ? "success" : "inherit"}
        onClick={() => setValue(2)}
        sx={{
          textTransform: "none",
        }}
      >
        Anually
      </Button>
    </Box>
  );
};

const Section: React.FC<{
  value: number;
  amount: number;
  fullName: string;
  email: string;
  onAmountChangeHandler: (value: number) => void;
  handleOnFullNameChange: (value: string) => void;
  handleOnEmailChange: (value: string) => void;
  isAnonymous: boolean;
  handleIsAnonymous: () => void;
  back: () => void;
}> = ({
  value,
  amount,
  onAmountChangeHandler,
  back,
  handleIsAnonymous,
  isAnonymous,
  email,
  fullName,
  handleOnEmailChange,
  handleOnFullNameChange,
}) => {
  switch (value) {
    case 0:
      return (
        <Box>
          {" "}
          <Box
            sx={{
              width: "100%",
              bgcolor: (theme) => theme.palette.success.main,
              p: 2,
              borderRadius: 2,
              borderBottomLeftRadius: 0,
              borderBottomRighttRadius: 0,
            }}
          >
            <Typography variant="h5" sx={{ color: "white" }}>
              Chose amount
            </Typography>
          </Box>
          <Tabs />
          <AmountToSelect
            amount={amount}
            onChangeHandler={onAmountChangeHandler}
          />
        </Box>
      );
    case 1:
      return (
        <Box>
          <Box
            sx={{
              width: "100%",
              bgcolor: (theme) => theme.palette.success.main,
              p: 2,
              borderRadius: 2,
              borderBottomLeftRadius: 0,
              borderBottomRighttRadius: 0,
              display: "flex",
              gap: 2,
            }}
          >
            <IconButton sx={{ color: "white" }} onClick={back}>
              <ArrowBackRoundedIcon sx={{ color: "white" }} />
            </IconButton>
            <Typography variant="h5" sx={{ color: "white" }}>
              Your Informations
            </Typography>
          </Box>
          <DonarInfo
            handleIsAnonymous={handleIsAnonymous}
            isAnonymous={isAnonymous}
            email={email}
            fullName={fullName}
            handleOnEmailChange={handleOnEmailChange}
            handleOnFullNameChange={handleOnFullNameChange}
          />
        </Box>
      );

    default:
      return <Box></Box>;

      break;
  }
};

const AmountToSelect: React.FC<{
  amount: number;
  onChangeHandler: (newAmount: number) => void;
}> = ({ amount, onChangeHandler }) => {
  return (
    <Box
      sx={{
        // display: "flex",
        // alignItems: "center",
        gap: 2,
        p: 3,
        pt: 0,
      }}
    >
      {/* Top */}
      <Box
        display={"flex"}
        gap={1}
        width={"100%"}
        justifyContent={"space-around"}
      >
        <Button
          color={amount == 10 ? "success" : "inherit"}
          onClick={() => {
            onChangeHandler(10);
          }}
          variant="outlined"
        >
          $ 10
        </Button>
        <Button
          onClick={() => {
            onChangeHandler(50);
          }}
          color={amount == 50 ? "success" : "inherit"}
          variant="outlined"
        >
          $ 50
        </Button>
        <Button
          onClick={() => {
            onChangeHandler(100);
          }}
          color={amount == 100 ? "success" : "inherit"}
          variant="outlined"
        >
          $ 100
        </Button>
      </Box>
      <FormControl size="small" fullWidth sx={{ mt: 2 }}>
        <InputLabel
          color="success"
          size="small"
          htmlFor="outlined-adornment-amount"
        >
          Amount
        </InputLabel>
        <OutlinedInput
          color="success"
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          label="Amount"
          type="number"
          value={amount}
          onChange={(e) => {
            onChangeHandler(Number(e.target.value));
          }}
          size="small"
        />
      </FormControl>
    </Box>
  );
};

const DonarInfo: React.FC<{
  isAnonymous: boolean;
  fullName: string;
  email: string;
  handleIsAnonymous: () => void;
  handleOnFullNameChange: (value: string) => void;
  handleOnEmailChange: (value: string) => void;
}> = ({
  handleIsAnonymous,
  isAnonymous,
  email,
  fullName,
  handleOnEmailChange,
  handleOnFullNameChange,
}) => {
  return (
    <Box sx={{ gap: 2, p: 3 }}>
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}

        // autoComplete="off"
      >
        <TextField
          id="outlined-required"
          color="success"
          label="Full Names"
          fullWidth
          size="small"
          disabled={isAnonymous}
          type="text"
          value={fullName}
          onChange={(e) => handleOnFullNameChange(e.target.value)}
        />
        <br />
        <TextField
          onChange={(e) => {
            handleOnEmailChange(e.target.value);
          }}
          value={email}
          id="outlined-required"
          label="Email"
          color="success"
          type="email"
          fullWidth
          size="small"
          disabled={isAnonymous}
        />
        <br />
        <FormControlLabel
          value="start"
          control={
            <Checkbox
              checked={isAnonymous}
              onChange={handleIsAnonymous}
              inputProps={{ "aria-label": "controlled" }}
              color="success"
            />
          }
          label="Donate as Anonymous"
          labelPlacement="start"
        />
        <br />
        <Typography variant="caption">
          By donating as Anonymous, you don&apos;t need to provide <br />
          your informations
        </Typography>
      </Box>
    </Box>
  );
};
