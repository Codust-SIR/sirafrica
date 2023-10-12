import {
  Box,
  Typography,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import React from "react";

const DonateCard = () => {
  const [amount, setAmount] = React.useState(0);
  return (
    <Box boxShadow={1} height={"auto"} borderRadius={2}>
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
        <Typography variant="h5">Chose amount</Typography>
      </Box>
      <Tabs />
      <AmountToSelect
        amount={amount}
        onChangeHandler={(newAmount: number) => {
          setAmount(newAmount);
        }}
      />
      <Button
        sx={{ width: "100%", textTransform: "none" }}
        variant="contained"
        color="success"
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
        <Button color="success" variant="outlined">
          $ 10
        </Button>
        <Button color="success" variant="outlined">
          $ 50
        </Button>
        <Button color="success" variant="outlined">
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
          size="small"
        />
      </FormControl>
    </Box>
  );
};
