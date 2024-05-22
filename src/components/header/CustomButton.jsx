import { useState } from "react";
import { Box,Button, Typography, styled} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//components
import { LoginDailog } from "../login/LoginDailog";
const Wrapper=styled(Box)`
display:flex;
margin:0 3% 0 auto;
& > button, & > p, & > div{
    margin-right:40px;
    font-size:16px;
    align-item:center;
}
`

const Container=styled(Box)`
display:flex;
`

const LoginButton=styled(Button)`
color:#2874f0;
background:#fff;
text-transform:none;
padding:5px 40px;
box-shadow:none;
font-weight:600;
height:32px;
border-radius:2px;

`

export const CustomButtons=()=>{

    const [open,setOpen]=useState(false);//initial valuse is false.

    const openDailog=()=>{
        setOpen(true);
    }
    return(
        <Wrapper>
           <LoginButton variant='contained' onClick={()=>openDailog()}>Login</LoginButton>

           <Typography style={{margin:3, width:135}}>Become a Seller</Typography>
           <Typography style={{margin:3,marginRight:40}}>More</Typography>
           
           <Container>
            <ShoppingCartIcon/>
            <Typography style={{marginLeft:10}}>Cart</Typography>
           </Container>
           <LoginDailog open={open} setOpen={setOpen}/>
        </Wrapper>
    )
}