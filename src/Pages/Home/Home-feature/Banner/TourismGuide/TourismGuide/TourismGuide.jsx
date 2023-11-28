/* eslint-disable react/prop-types */
import React from 'react';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from '@mui/material';

import OurPackage from '../OurPackage/OurPackage';
import TourGuides from '../TourGuide/TourGuides';
import Overview from '../overview/Overview';

const TourismGuide = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tabpanel-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };

  return (
    <div>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Overview" />
          <Tab label="Our Packages" />
          <Tab label="Meet Our Tour Guides" />
        </Tabs>
        <TabPanel value={value} index={0}>
        
          <Typography><Overview></Overview></Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
        {/* <OurPackage></OurPackage> */}
        <Typography><OurPackage></OurPackage></Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
        
        <Typography><TourGuides></TourGuides></Typography>
         
        </TabPanel>
      </Box>
    </div>
  );
};

export default TourismGuide;
