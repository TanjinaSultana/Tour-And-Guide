import React from 'react';
import useStory from '../../../../../hooks/useStory';
import SingleStory from './SingleStory';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SectionTitle from '../../../../../components/sectionTitle/SectionTitle';

const Story = () => {
    const [story] = useStory()
    const storyItem = story.slice(0,4)

    return (
        <div>
            <SectionTitle
            heading={"Story Section"}>

            </SectionTitle>

        <div  className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8' style={{  gridGap: "20px" }}>
            {
                storyItem.map(item => <SingleStory
                    key={item._id}
                    items={item}
                ></SingleStory>)
            }
        </div>
        <div style={{marginTop:"40px",display:"flex",justifyContent:"center"}}>

        <Link to={'/allStory'}>
       
          <Button variant="contained" endIcon={<ArrowForwardIcon />} style={{ background: 'linear-gradient(to right, #202122, #6a2f41)'}}>
        All Stories
      </Button>
       </Link>
        </div>
        </div>
    );
};

export default Story;