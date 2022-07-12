

import { Box, Typography, styled } from '@mui/material';

 

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '50%',
    height: '50%'
});

const Register = () => {

    return (
        <Header>
            <Typography variant="h4">FantsyApp</Typography>
            <Box style={{display: 'flex'}}>

                <Typography variant='h5'>
                    Hi This is a React App which I made While Learning CURD Applications
                    on  a MERN Stack Project
                    For FrontEnd I have used ReactJs
                    for backEnd I have used NodeJs
                    and MongoDB as Database
                </Typography>
            </Box>
        </Header>
    )
}

export default Register;