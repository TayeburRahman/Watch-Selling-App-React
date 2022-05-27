import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import {
  Box, Container,
  Divider,
  Grid,
  Typography
} from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import logo from '../../image/logo.png';
import visaCard from '../../image/visaCard.png';
const itemData = [
    {
        img: 'https://i.ibb.co/bXsRY2m/smart-watch-821557-480-png.webp',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://i.ibb.co/sFRpHb3/x7-smartwatch-1618286530-4f4a8cc6-progressive.jpg',
        title: 'Burger',
    },
    {
        img: 'https://i.ibb.co/L5YNXjs/images-1.jpg',
        title: 'Camera',
    },
    {
        img: 'https://i.ibb.co/9V8zSxV/pexels-cottonbro-5137789-min.jpg',
        title: 'Coffee',
        cols: 2,
    },
];
 

 

 

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const footerBg = {
    background: `url(https://www.designbolts.com/wp-content/uploads/2012/12/Worn-Dots-White-Seamless-Pattern.jpg)`,
    backgroundColor: `rgb(2 12 15 / 90%)`,
    backgroundBlendMode: `darken, luminosity`,
    backgroundPossition: `center`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `100%`,
};

const Footer = () => {
    return (
        <Box
            sx={{
                pb: 5,
                fontFamily: "'Skranji' , cursive",
            }}
            style={footerBg}
        >
            <Container>
                <Grid container>
                    <Grid md={3} sm={6} xs={12} sx={{ my: 5 }}>
                    <img  id='imageFooter'className='ms-3 me-5 mb-3' src={logo} width={85} alt="BigCo Inc. logo"/>

                        <Grid container sx={{ color: '#9bb8cc', width: '90%' }}>
                            <Typography variant="caption">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Delectus nisi dignissimos amet
                                cum ea ab placeat. Cupiditate quod est corporis
                                voluptatum quia. Et obcaecati Tempore, expedita
                                cumque! Provident.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12} sx={{ my: 5 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                mb: 5,
                                color: 'red',
                                fontFamily: "'Skranji' , cursive",
                            }}
                        >
                            Address & Contact
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                my: 2,
                                pr: 14,
                                fontSize: 13,
                                color: '#b2c3cb',
                            }}
                        >
                            1234 Somewhere Rd.Estronpark, TN 00018 United
                            States.
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: { md: 18, sm: 16 },
                                color: 'white',
                            }}
                            gutterBottom
                        >
                            <EmailIcon sx={{ mr: 1 }} />
                            watch@example.com
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: { md: 18, sm: 16 },
                                my: 2,
                                color: 'white',
                            }}
                            gutterBottom
                        >
                            <LocalPhoneIcon sx={{ mr: 1 }} />
                            +01000000000
                        </Typography>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12} sx={{ my: 5 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                mb: 5,
                                color: 'red',
                                fontFamily: "'Skranji' , cursive",
                            }}
                        >
                            Quartz Watch
                        </Typography>
                        <Typography
                            gutterBottom
                            sx={{ fontSize: 13, color: '#9bb8cc' }}
                        >
                           Seiko Prospex
                        </Typography>
                        <Typography
                            gutterBottom
                            sx={{ fontSize: 13, color: '#9bb8cc' }}
                        >
                            Tissot T-Race
                        </Typography>
                        <Typography
                            gutterBottom
                            sx={{ fontSize: 13, color: '#9bb8cc' }}
                        >
                            Movado Edge
                        </Typography>
                        <Typography
                            gutterBottom
                            sx={{ fontSize: 13, color: '#9bb8cc' }}
                        >
                            Victorinox 
                        </Typography>
                        <Typography
                            gutterBottom
                            sx={{ fontSize: 13, color: '#9bb8cc' }}
                        >
                            G-Shock
                        </Typography>
                    </Grid>

                    <Grid item md={3} sm={6} xs={12} sx={{ my: 5 }}>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                mb: 5,
                                color: 'white',
                                fontFamily: "'Monoton',cursive",
                            }}
                        >
                            Instagram
                        </Typography>
 

                        <ImageList
                            sx={{
                                width: '100%',
                                height: '200px',
                                borderRadius: 2,
                            }}
                            variant="quilted"
                            cols={4}
                            rowHeight={98}
                        >
                            {itemData.map((item) => (
                                <ImageListItem
                                    key={item.img}
                                    cols={item.cols || 1}
                                    rows={item.rows || 1}
                                >
                                    <img
                                        {...srcset(
                                            item.img,
                                            121,
                                            item.rows,
                                            item.cols
                                        )}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Grid>
                </Grid>
                <Divider />
                <Grid
                    container
                    sx={{
                        mt: 1,
                    }}
                >
                    <Grid
                        item
                        md={12}
                        sm={12}
                        xs={12}
                        sx={{
                            alignItems: { md: 'center', sm: 'center' },
                            display: { md: 'flex', sm: 'flex' },
                            justifyContent: {
                                md: 'space-between',
                                sm: 'space-between',
                            },
                        }}
                    >
                        <Typography variant="body2" sx={{ color: 'white' }}>
                            © Copyright 2022 Smart Watch - All Right Reserved.
                        </Typography>
                        <Box
                            component="img"
                            src={visaCard}
                            alt="visa"
                            sx={{ height: 45, width: 85 }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
