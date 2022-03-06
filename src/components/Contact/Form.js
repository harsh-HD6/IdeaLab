import React, { useState ,useContext} from "react";
import { DarkThemeContext } from "../../context/DarkThemeContext";
import { useTheme ,Grid ,Typography,Button,TextField,useMediaQuery,Dialog,DialogContent } from "@mui/material";
import { makeStyles ,withStyles} from "@mui/styles";
import { CircularProgress , Snackbar } from "@mui/material";
import airplane from "../../assets/send.svg";
import { Mail } from "@mui/icons-material";
import Colors from "../../colors/Colors";


const useStyles = makeStyles(theme => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em"
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "1em",
      paddingRight: "1em"
    }
  },
  message: {
    border: `3px  ${Colors.blue}`,
    marginTop: "4em",
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor:Colors.blue,
    "&:hover": {
      backgroundColor: '#396EB0'
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225
    }
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: Colors.blue
  },
}));
const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: Colors.blue,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: Colors.blue,
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: Colors.blue,
        },
        '&:hover fieldset': {
          borderColor: Colors.blue,
        },
        '&.Mui-focused fieldset': {
          borderColor:Colors.blue,
        },
      },
    },
  })(TextField);

export default function Form(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const { dt} = useContext(DarkThemeContext)
  const [darkTheme] = dt;

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({ open: false, color: "" });
  const [alertMessage, setAlertMesssage] = useState("");


  const onChange = event => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!valid) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );

        if (!valid) {
          setPhoneHelper("Invalid phone");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };

  const onConfirm = async (e) => {
    setLoading(true);

    let details = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    await fetch("https://vast-castle-89203.herokuapp.com/contact",{
        method:"POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      setLoading(false);
      setLoading(false);
      setOpen(false);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setAlert({ open: true, color: "#4BB543" });
      setAlertMesssage("Message sent successfully!");
    };
  const InputStyle = { 
    WebkitBoxShadow:darkTheme ? `0 0 0 1000px ${Colors.BDark} inset` : '0 0 0 1000px white inset' ,
    WebkitTextFillColor:Colors.blue
  };
  const TextFieldContents = (
      <>
        <Grid item style={{marginBottom:'0.8em'}}>
            <CssTextField 
                label='Name'
                id='name'
                name='naam'
                inputProps={{ style: InputStyle }}
                fullWidth
                value={name}
                onChange={(e)=>setName(e.target.value)}
                InputProps={{
                    style:{
                    color:Colors.blue,
                    
                },
                classes: {
                  notchedOutline: classes.notchedOutline
                }
                }}
            />
        </Grid>
        <Grid item style={{marginBottom:'0.8em'}}>
            <CssTextField 
                label='Email'
                inputProps={{ style: InputStyle }}
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                id='email'
                fullWidth
                value={email}
                onChange={onChange}
                InputProps={{
                    style:{
                    color:Colors.blue
                },
                classes: {
                    notchedOutline: classes.notchedOutline
                }
                }}
            />
        </Grid>
        <Grid item style={{marginBottom:'0.8em'}}>
            <CssTextField 
                label='Phone' 
                name='fon'
                inputProps={{ style: InputStyle }}
                error= {phoneHelper.length !== 0}
                helperText={phoneHelper}
                id='phone'
                fullWidth
                value={phone}
                onChange={onChange}
                InputProps={{
                    style:{
                    color:Colors.blue
                },
                classes: {
                  notchedOutline: classes.notchedOutline
                }
                }}
            />
        </Grid>
      </>
  )
  const buttonContents = (
    <React.Fragment>
      Send Message
      <img src={airplane} alt="paper airplane" style={{ marginLeft: "1em" }} />
    </React.Fragment>
  );

  return (
   <>
    <Grid 
         item 
         container 
         direction='column' 
         justifyContent='center' 
         alignItems='center' 
         lg={5}
         xl={4}
         style={{
             marginTop:matchesSM ? '1em'  : matchesMD ? '5em' : undefined,
             marginBottom: matchesMD ? '5em' : undefined
         }}
    >
       <Grid item>
           <Grid item container  direction='column'  className={classes.rowContainer}>
                <Grid item>
                    <Typography 
                        variant='h2'
                        align={matchesMD ? 'center' : undefined}
                        style={{lineHeight:1}}
                    >
                        Contact Me
                    </Typography>
                    <Typography
                      align={matchesMD ? "center" : undefined}
                      variant="body1"
                      style={{ fontSize:'1em', maxWidth:'20em',marginBottom:'1em'}}
                    >
                      DISCUSS A PROJECT OR JUST WANT TO SAY HI?
                      MY INBOX IS OPEN FOR ALL.
                  </Typography>
                </Grid>
                <Grid item container style={{marginBottom:'2em'}}>
                    <Grid item>      
                  <Mail
                    style={{ 
                        marginRight: "0.5em",
                         verticalAlign: "bottom",
                         color: darkTheme?Colors.white :Colors.Black 
                      }}
                    /> 
                    </Grid>
                    <Grid item>
                        <Typography
                            variant='body1'
                            style={{color:darkTheme?Colors.white :Colors.Black ,fontSize:'1rem'}}    
                        >
                        <a
                          href="mailto:ritikjain2727@gmail.com"
                          style={{ textDecoration: "none", color:darkTheme?Colors.white :Colors.Black }}
                        >
                          ritikjain2727@gmail.com
                        </a>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid 
                    item 
                    container
                    direction='column' 
                    style={{maxWidth:'20em'}}
                >
                    {TextFieldContents}
                </Grid>
                <Grid item style={{maxWidth: "20em" }} >
                <CssTextField
                    value={message}
                    multiline
                    fullWidth
                    rows={6}
                    id='message'
                    onChange={(e)=>setMessage(e.target.value)}
                    className={classes.message}
                    InputProps={{
                      style:{
                        color:Colors.blue
                    },
                    }}
                />
                </Grid>
                <Grid item container justifyContent='center' style={{marginTop:'2em'}}>
                    <Button 
                        disabled={
                            name.length === 0 ||
                            email.length === 0 ||
                            phone.length === 0 ||
                            message.length === 0 ||
                            phoneHelper.length !== 0 ||
                            emailHelper.length !== 0
                            }
                        variant='contained' 
                        className={classes.sendButton}
                        onClick={()=>setOpen(true)}
                    >
                        {buttonContents}
                    
                    </Button>
                </Grid>
           </Grid>
       </Grid>
    </Grid>
    {/* Dialog modal */}
    <Dialog
        style={{ zIndex: 1302 }}
        open={open}
        fullScreen={matchesSM}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            backgroundColor:darkTheme? '#171C28' :'#FFFFFF',
            paddingTop: matchesXS ? "1em" : "5em",
            paddingBottom: matchesXS ? "1em" : "5em",
            paddingLeft: matchesSM
                ? 0
                : matchesMD
                  ? "5em"
                  : "15em",
            paddingRight:  matchesSM
                ? 0
                : matchesMD
                  ? "5em"
                  : "15em"
          }
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Confirm Message
              </Typography>
            </Grid>
           {TextFieldContents}
      
          <Grid item style={{ maxWidth: matchesSM ? "100%" : "20em" }}>
            <CssTextField
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              className={classes.message}
              multiline
              style={{marginTop:'2em'}}
              fullWidth
              rows={5}
              id="message"
              InputProps={{
                disableUnderline: true ,
                style:{
                  color:Colors.blue
              },
              }}
            
            />
          </Grid>
          </Grid>
          <Grid
            item
            container
            direction={matchesSM ? "column" : "row"}
            style={{ marginTop: "2em" }}
            alignItems="center"
          >
            <Grid item>
              <Button
                style={{ fontWeight: 300 ,color:darkTheme?Colors.white :Colors.Black}}
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                disabled={
                  name.length === 0 ||
                  email.length === 0 ||
                  phone.length === 0 ||
                  message.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0
                  }
              variant='contained' 
              className={classes.sendButton}
              onClick={onConfirm}
               
              >
                {loading ? <CircularProgress size={30} /> : buttonContents}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    <Snackbar
        open={alert.open}
        ContentProps={{
        style: {
            backgroundColor: alert.color
        }
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        message={alertMessage}
        autoHideDuration={4000}
        onClose={() => setAlert(false)}
    />
</>
  );
}