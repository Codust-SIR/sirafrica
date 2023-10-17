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
  Divider,
  Alert,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import React, { useState } from "react";

const DonateCard = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(() => theme.breakpoints.down("sm"));

  const [donationType, setDonationType] = useState("One-time");
  const [amount, setAmount] = React.useState(0);
  const [sectionNumber, setSectionNumber] = useState(0);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [creditCardNumber, setCreditCardNumber] = useState<number | string>();
  const [creditCardHolderName, serCreditCardHolderName] = useState<string>("");
  const [creditCardMM, setCreditCardMM] = useState<number>();
  const [creditCardYYYY, setCreditCardYYYY] = useState<number>();
  const [creditCardCVV, setCreditCardCVV] = useState<number>();
  const [onAddingCreditCardError, setOnAddingCreditCardError] =
    useState<string>("");
  const handleOnFullNameChange = (value: string) => {
    setFullName(value);
  };
  const handleOnEmailChange = (value: string) => {
    setEmail(value);
  };
  const handleIsAnonymous = () => {
    setIsAnonymous((p) => !p);
  };

  const handleOnCreditCardNumberChange = (value: number) => {
    if (String(value).length <= 19) {
      setCreditCardNumber(value);
    }
  };
  const handleOnCreditCardHolderNameChange = (value: string) => {
    serCreditCardHolderName(value);
  };

  const handleOnCreditCardMMChange = (value: number) => {
    setCreditCardMM(value);
  };
  const handleOnCreditCardYYYYChange = (value: number) => {
    setCreditCardYYYY(value);
  };
  const handleOnCreditCardCVVChange = (value: number) => {
    setCreditCardCVV(value);
  };

  function handleSubmitDonation() {
    alert("Hello World");
  }

  return (
    <Box
      boxShadow={2}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      borderRadius={2}
      m={isMobileView ? 0 : 3}
      mt={isMobileView ? 1 : 3}
      border={`1px solid ${theme.palette.action.hover}`}
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
        editInfo={() => {
          setSectionNumber(0);
        }}
        email={email}
        fullName={fullName}
        handleOnEmailChange={handleOnEmailChange}
        handleOnFullNameChange={handleOnFullNameChange}
        handleIsAnonymous={handleIsAnonymous}
        isAnonymous={isAnonymous}
        onDonationType={(type) => {
          setDonationType(type);
        }}
        donationType={donationType}
        creditCardNumber={creditCardNumber}
        creditCardHolderName={creditCardHolderName}
        creditCardMM={creditCardMM}
        creditCardYYYY={creditCardYYYY}
        creditCardCVV={creditCardCVV}
        onAddingCreditCardError={onAddingCreditCardError}
        handleOnCreditCardNumberChange={handleOnCreditCardNumberChange}
        handleOnCreditCardHolderNameChange={handleOnCreditCardHolderNameChange}
        handleOnCreditCardMMChange={handleOnCreditCardMMChange}
        handleOnCreditCardYYYYChange={handleOnCreditCardYYYYChange}
        handleOnCreditCardCVVChange={handleOnCreditCardCVVChange}
        handleSubmitDonation={handleSubmitDonation}
      />
      {errorMessage && (
        <Alert sx={{ m: 2 }} severity="error">
          {errorMessage}
        </Alert>
      )}
      {sectionNumber < 2 && (
        <Button
          sx={{ width: "100%", textTransform: "none" }}
          variant="contained"
          color="success"
          onClick={() => {
            if (sectionNumber === 0 && amount < 1) {
              setErrorMessage("Amount can't be $0");
              setTimeout(() => {
                setErrorMessage("");
              }, 3000);
              return;
            } else if (sectionNumber === 1 && (!fullName || isAnonymous)) {
              if (!isAnonymous) {
                setErrorMessage("Full name can't be empty");
                setTimeout(() => {
                  setErrorMessage("");
                }, 3000);
                return;
              }
            }

            setSectionNumber((p) => p + 1);
          }}
        >
          Next
        </Button>
      )}
    </Box>
  );
};

export default DonateCard;

const Tabs: React.FC<{
  onDonationType: (value: string) => void;
}> = ({ onDonationType }) => {
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
        onClick={() => {
          setValue(0);
          onDonationType("One-time");
        }}
        sx={{
          textTransform: "none",
        }}
      >
        One-time
      </Button>
      <Button
        variant={value === 1 ? "contained" : "outlined"}
        color={value === 1 ? "success" : "inherit"}
        onClick={() => {
          setValue(1);
          onDonationType("Monthly");
        }}
        sx={{
          textTransform: "none",
        }}
      >
        Monthly
      </Button>
      <Button
        variant={value === 2 ? "contained" : "outlined"}
        color={value === 2 ? "success" : "inherit"}
        onClick={() => {
          setValue(2);
          onDonationType("Annually");
        }}
        sx={{
          textTransform: "none",
        }}
      >
        Annually
      </Button>
    </Box>
  );
};

const Section: React.FC<{
  donationType: string;
  value: number;
  amount: number;
  fullName: string;
  email: string;
  isAnonymous: boolean;
  creditCardNumber: number | undefined | string;
  creditCardHolderName: string;
  creditCardMM: number | undefined;
  creditCardYYYY: number | undefined;
  creditCardCVV: number | undefined;
  onAddingCreditCardError: string;
  onDonationType: (value: string) => void;
  onAmountChangeHandler: (value: number) => void;
  handleOnFullNameChange: (value: string) => void;
  handleOnEmailChange: (value: string) => void;
  editInfo: () => void;
  handleIsAnonymous: () => void;
  back: () => void;
  handleOnCreditCardNumberChange: (value: number) => void;
  handleOnCreditCardHolderNameChange: (value: string) => void;
  handleOnCreditCardMMChange: (value: number) => void;
  handleOnCreditCardYYYYChange: (value: number) => void;
  handleOnCreditCardCVVChange: (value: number) => void;
  handleSubmitDonation: () => void;
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
  donationType,
  onDonationType,
  editInfo,
  handleOnCreditCardMMChange,
  handleOnCreditCardNumberChange,
  handleOnCreditCardYYYYChange,
  creditCardYYYY,
  handleOnCreditCardHolderNameChange,
  handleOnCreditCardCVVChange,
  creditCardMM,
  creditCardCVV,
  creditCardHolderName,
  creditCardNumber,
  onAddingCreditCardError,
  handleSubmitDonation,
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
              borderBottomRightRadius: 0,
            }}
          >
            <Typography variant="h5" sx={{ color: "white" }}>
              Chose amount
            </Typography>
          </Box>
          <Tabs onDonationType={onDonationType} />
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
              borderBottomRightRadius: 0,
              display: "flex",
              gap: 2,
            }}
          >
            <IconButton sx={{ color: "white" }} onClick={back}>
              <ArrowBackRoundedIcon sx={{ color: "white" }} />
            </IconButton>
            <Typography variant="h5" sx={{ color: "white" }}>
              Your Information
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
    case 2:
      return (
        <Box>
          <Box
            sx={{
              width: "100%",
              bgcolor: (theme) => theme.palette.success.main,
              p: 2,
              borderRadius: 2,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              display: "flex",
              gap: 2,
            }}
          >
            <IconButton sx={{ color: "white" }} onClick={back}>
              <ArrowBackRoundedIcon sx={{ color: "white" }} />
            </IconButton>
            <Typography variant="h5" sx={{ color: "white" }}>
              Summary of donation
            </Typography>
          </Box>
          <PaymentMethod
            isAnonymous={isAnonymous}
            email={email}
            fullName={fullName}
            amount={amount}
            donationType={donationType}
            editInfo={editInfo}
            creditCardNumber={creditCardNumber}
            creditCardHolderName={creditCardHolderName}
            creditCardMM={creditCardMM}
            creditCardYYYY={creditCardYYYY}
            creditCardCVV={creditCardCVV}
            onAddingCreditCardError={onAddingCreditCardError}
            handleOnCreditCardNumberChange={handleOnCreditCardNumberChange}
            handleOnCreditCardHolderNameChange={
              handleOnCreditCardHolderNameChange
            }
            handleOnCreditCardMMChange={handleOnCreditCardMMChange}
            handleOnCreditCardYYYYChange={handleOnCreditCardYYYYChange}
            handleOnCreditCardCVVChange={handleOnCreditCardCVVChange}
            handleSubmitDonation={handleSubmitDonation}
          />
        </Box>
      );

    default:
      return <Box></Box>;
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
          "& .MuiTextField-root": { m: 1, width: "100%" },
        }}

        // autoComplete="off"
      >
        <TextField
          id="full-name"
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
          id="email"
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
          your information
        </Typography>
      </Box>
    </Box>
  );
};

const PaymentMethod: React.FC<{
  donationType: string;
  amount: number;
  fullName: string;
  email: string;
  isAnonymous: boolean;
  creditCardNumber: number | undefined | string;
  creditCardHolderName: string;
  creditCardMM: number | undefined;
  creditCardYYYY: number | undefined;
  creditCardCVV: number | undefined;
  onAddingCreditCardError: string;
  editInfo: () => void;
  handleOnCreditCardNumberChange: (value: number) => void;
  handleOnCreditCardHolderNameChange: (value: string) => void;
  handleOnCreditCardMMChange: (value: number) => void;
  handleOnCreditCardYYYYChange: (value: number) => void;
  handleOnCreditCardCVVChange: (value: number) => void;
  handleSubmitDonation: () => void;
}> = ({
  amount,
  donationType,
  email,
  fullName,
  isAnonymous,
  editInfo,
  handleOnCreditCardMMChange,
  handleOnCreditCardNumberChange,
  handleOnCreditCardYYYYChange,
  creditCardYYYY,
  handleOnCreditCardHolderNameChange,
  handleOnCreditCardCVVChange,
  creditCardMM,
  creditCardCVV,
  creditCardHolderName,
  creditCardNumber,
  onAddingCreditCardError,
  handleSubmitDonation,
}) => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ gap: 2, p: 3 }}>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "100%" },
          }}

          // autoComplete="off"
        >
          <Typography>{donationType}</Typography>
          {isAnonymous ? (
            <Typography>Donating as Anonymous</Typography>
          ) : (
            <Typography>{fullName}</Typography>
          )}
          <Typography>{email}</Typography>
          <Typography>${amount}</Typography>
        </Box>
        <br />
        <Button
          variant="contained"
          color="warning"
          size="small"
          sx={{
            textTransform: "none",
            width: "100%",
            // borderRadius: 0,
          }}
          startIcon={<ArrowBackRoundedIcon sx={{ color: "white" }} />}
          onClick={editInfo}
        >
          Edit donation information
        </Button>
      </Box>

      <Divider />
      <br />
      <Button
        variant="contained"
        color="info"
        size="small"
        sx={{
          textTransform: "none",
          width: "100%",
          borderRadius: 0,
        }}
        endIcon={<CreditCardRoundedIcon sx={{ color: "white" }} />}
        onClick={handleClickOpen}
      >
        Donate by card
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
          id="responsive-dialog-title"
        >
          Card info <CreditCardRoundedIcon />
        </DialogTitle>
        <DialogContent>
          <Box component={"form"} autoComplete="on">
            <FormControl color="success" fullWidth sx={{ mt: 1 }}>
              <InputLabel
                size="small"
                color="success"
                htmlFor="outlined-adornment-card-number"
              >
                Card number
              </InputLabel>
              <OutlinedInput
                size="small"
                color="success"
                id="outlined-adornment-card-number"
                label="Card number"
                name="Card number"
                autoComplete="cc-number" // Specify autocomplete type for card number
                type="number"
                value={creditCardNumber}
                onChange={(event) => {
                  handleOnCreditCardNumberChange(Number(event.target.value));
                }}
              />
            </FormControl>
            <FormControl color="success" fullWidth sx={{ mt: 1 }}>
              <InputLabel
                size="small"
                color="success"
                htmlFor="outlined-adornment-amount"
              >
                Cardholder&rsquo;s name
              </InputLabel>
              <OutlinedInput
                size="small"
                color="success"
                id="outlined-adornment-card-holder-name"
                label="Cardholder's name"
                name="Cardholder's name"
                autoComplete="cc-name"
                value={creditCardHolderName}
                onChange={(event) => {
                  handleOnCreditCardHolderNameChange(event.target.value);
                }}
              />
            </FormControl>
            <Typography m={1} color="text.secondary">
              Expiry date
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <FormControl
                color="success"
                size={"small"}
                sx={{ mt: 1, width: 60 }}
              >
                <InputLabel
                  size="small"
                  color="success"
                  htmlFor="outlined-adornment-amount"
                >
                  MM
                </InputLabel>
                <OutlinedInput
                  size="small"
                  color="success"
                  id="outlined-adornment-MM"
                  name="MM"
                  type="number"
                  label="MM"
                  value={creditCardMM}
                  onChange={(event) =>
                    handleOnCreditCardMMChange(Number(event.target.value))
                  }
                />
              </FormControl>
              <FormControl
                size={"small"}
                color="success"
                sx={{ mt: 1, width: 80 }}
              >
                <InputLabel
                  size="small"
                  color="success"
                  htmlFor="outlined-adornment-YYYY"
                >
                  YYYY
                </InputLabel>
                <OutlinedInput
                  size="small"
                  color="success"
                  id="outlined-adornment-YYYY"
                  label="YYYY"
                  name="YYYY"
                  type="number"
                  value={creditCardYYYY}
                  onChange={(event) => {
                    handleOnCreditCardYYYYChange(Number(event.target.value));
                  }}
                />
              </FormControl>
            </Box>
            <Typography m={1} color="text.secondary">
              Security code
            </Typography>
            <FormControl
              size={"small"}
              color="success"
              sx={{ mt: 1, width: 80 }}
            >
              <OutlinedInput
                size="small"
                color="success"
                id="outlined-adornment-security-code"
                name="YYYY"
                type="number"
                value={creditCardCVV}
                onChange={(event) => {
                  handleOnCreditCardCVVChange(Number(event.target.value));
                }}
              />
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            size="small"
            sx={{
              textTransform: "none",
              // width: "100%",
              // borderRadius: 0,
            }}
            variant="contained"
            color="error"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={handleSubmitDonation}
            autoFocus
            size="small"
            sx={{
              textTransform: "none",
              width: "60%",
              // borderRadius: 0,
            }}
            endIcon={<VolunteerActivismRoundedIcon />}
          >
            Submit Donation
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
