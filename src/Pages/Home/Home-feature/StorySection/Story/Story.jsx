import React from 'react';
import useStory from '../../../../../hooks/useStory';
import SingleStory from './SingleStory';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Story = () => {
    const [story] = useStory()
    const storyItem = story.slice(0,4)

    return (
        <div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "20px" }}>
            {
                storyItem.map(item => <SingleStory
                    key={item._id}
                    items={item}
                ></SingleStory>)
            }
        </div>
        <Link to={'/allStory'}>
       
          <Button variant="contained" endIcon={<ArrowForwardIcon />} style={{ background: 'linear-gradient(to right, #202122, #6a2f41)'}}>
        All Packages
      </Button>
       </Link>
        </div>
    );
};

export default Story;