import { Card, CardMedia } from "@mui/material";

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import React from "react";
import usePackage from "../../../../../../hooks/usePackage";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
// const cardData = [
//     {
//       id: 1,
     
//       image: 'https://i.ibb.co/FWHG5t6/mountain.webp',
     
//     },
//     {
//       id: 2,
    
//       image: 'https://i.ibb.co/QYcCkZP/mount.jpg',
     
//     },
//     {
//       id: 3,
    
//       image: 'https://via.placeholder.com/300',
     
//     },
//     {
//       id: 4,
     
//       image: 'https://via.placeholder.com/300',
      
//     },
//     {
//       id: 5,
     
//       image: 'https://via.placeholder.com/300',
     
//     },
//     {
//       id: 6,
    
//       image: 'https://via.placeholder.com/300',
      
//     },
//     // Add more cards as needed
//   ];

const Gallery = ({items}) => {
  
      
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = packageImage.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };
    return (
        <div>
           {/* <Card sx={{ maxWidth: 345 }} style={{height:"345px" ,borderBottomRightRadius:"70px",borderTopLeftRadius:"70px"}}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
    
    </Card> */}
       <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {packageImage.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
        </div>
   
    );
};
// style={{ display: index === value ? 'block' : 'none' }}

export default Gallery;