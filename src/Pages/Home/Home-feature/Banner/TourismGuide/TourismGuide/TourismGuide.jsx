/* eslint-disable react/prop-types */
import React from 'react';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from '@mui/material';

import OurPackage from '../OurPackage/OurPackage';

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
        <Tab label="Overview" >
            item 1
        </Tab>
        <Tab label="Our Packages" />
        <Tab label="Meet Our Tour Guides" />
      </Tabs>
      <TabPanel value={value} index={0}>
          Content for Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
       <OurPackage></OurPackage>
        </TabPanel>
        <TabPanel value={value} index={2}>
          Content for Item Three
        </TabPanel>
    </Box>
        </div>
    );
};

export default TourismGuide;