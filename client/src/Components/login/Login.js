import { useState } from 'react';
import { Button, Dialog, Typography, TextField } from "@material-ui/core";
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles, Box } from '@material-ui/core';
import { authenticateSignup, authenticateLogin } from '../service/api';


const useStyle = makeStyles({
    component:{
        height: '70vh',
        width: '90vh',
        maxWidth: 'unset'
    },
    image:{
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height: '70vh',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center 85%',
        width: '40%',
        background: '#2874f0',
        padding: '45px 35px',
        '&> *':{
            color: '#ffffff',
            fontWeight: 600
        }
    },
    login:{
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '&>*':{
            marginTop: 20
        }
    },
    text:{
        color: '#878787',
        fontSize: 12
    },
    loginbtn:{
        textTransform: 'none',
        background: '#FB641B',
        color: '#ffffff',
        height: 48,
        borderRadius: 2
    },
    requestOtp:{
        textTransform: 'none',
        background: '#ffffff',
        color: '#2874f0',
        height: 48,
        borderRadius: 2,
        boxShadow: '0 4px 2px 0 rgb(0 0 0 /20%)'
    },
    createtext:{
        textAlign: 'center',
        marginTop: 'auto',
        fontSize: 14,
        color: '#2874f0',
        fontWeight: 600,
        cursor : 'pointer'
    },
    invalid:{
        fontSize: 10,
        color: '#ff6161',
        marginTop: 10,
        fontWeight: 600,
        lineHeight: 0
    }
})

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}

const signupInitial ={
    username: '',
    email: '',
    password: ''
}

const loginInitial ={
    email: '',
    password: ''
}

const Login = ({ open, setOpen, setLoginAccount })=>{
    const classes = useStyle();
    const [ account, setAccount ] = useState(accountInitialValues.login);
    const [ signup, setSignup ] = useState(signupInitial);
    const [ login, setLogin ] = useState(loginInitial);
    const [ error, setError ] = useState(false);


    const toggleAccount = ()=>{
        setAccount(accountInitialValues.signup)
    }

    const handleClose = () => {
        setOpen(false);
        setAccount(accountInitialValues.login)
      };


      const signupUser = async()=>{
            let response = await authenticateSignup(signup);
            if(!response) return;
            console.log(response.data.token)
            window.localStorage.setItem("token", response.data.token)
            window.localStorage.getItem("token")
            handleClose();
            setLoginAccount(signup.username);
      }

      const loginUser = async ()=>{
          let response =await authenticateLogin(login);
          console.log(response);
          if(!response) {
              setError(true);
              return;
          };
          window.localStorage.setItem("_id", response.data.User._id.toString())
          window.localStorage.getItem("_id")
          handleClose();
          setLoginAccount(login.username);
      }
      
      const onInputChange = (e)=>{
          setSignup({ ...signup, [e.target.name]: e.target.value });
        
      }

      const onValueChange = (e)=>{
        setLogin({ ...login, [e.target.name]: e.target.value});
        
    }



    return(
        <>
            <Dialog 
                open={open}
                onClose={handleClose}
            >
                <DialogContent className={classes.component}>
                    <Box style={{ display: 'flex' }}>
                        <Box className={classes.image}>
                            <Typography variant={'h5'}>{ account.heading}</Typography>
                            <Typography style={{ marginTop: 15 }}>{ account.subHeading}</Typography>
                        </Box>
                        {
                            account.view === 'login'?
                            <Box className={classes.login}>
                                <TextField onChange={(e)=> onValueChange(e)} name='email' label='Enter Email' />
                                <TextField onChange={(e)=> onValueChange(e)} name='password' label='Enter Password' />
                                {
                                    error && <Typography className= {classes.invalid}>Invalid Username and Password</Typography>
                                }
                                <Typography className={classes.text} >By continuing, you agree to XYZ's Terms of Use and Privacy Policy.</Typography>
                                <Button onClick={()=> loginUser()} variant='contained' className={classes.loginbtn}>Login</Button>
                                <Typography className={classes.text} style={{ textAlign: 'center' }}>OR</Typography>
                                <Button variant='contained' className={classes.requestOtp}>Request OTP</Button>
                                <Typography onClick={()=> toggleAccount()} className={classes.createtext}> Create an account</Typography>
                            </Box>:
                            <Box className={classes.login}>
                                <TextField onChange={(e)=> onInputChange(e)} name='username' label='Enter user Name' />
                                <TextField onChange={(e)=> onInputChange(e)} name='email' label='Enter Email' />
                                <TextField onChange={(e)=> onInputChange(e)} name='password' label='Enter Password' />
                                <Button variant='contained' onClick={()=> signupUser()} className={classes.loginbtn}>Sign up</Button>
                                
                            </Box>

                        }
                        
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Login;