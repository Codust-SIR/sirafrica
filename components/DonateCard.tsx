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
} from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import React, { useState } from "react";

const DonateCard = () => {
  const [amount, setAmount] = React.useState(0);
  const [sectionNumber, setSectionNumber] = useState(0);
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
      />
      <Button
        sx={{ width: "100%", textTransform: "none", m: 1 }}
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
  onAmountChangeHandler: (value: number) => void;
  back: () => void;
}> = ({ value, amount, onAmountChangeHandler, back }) => {
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
        <Box sx={{ width: "100%" }}>
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
          <Box
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}

            // autoComplete="off"
          >
            <TextField
              id="outlined-required"
              color="success"
              label="Names"
              fullWidth
              size="small"
            />
            <br />
            <TextField
              id="outlined-required"
              label="Email"
              color="success"
              type="email"
              fullWidth
              size="small"
            />
          </Box>
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
