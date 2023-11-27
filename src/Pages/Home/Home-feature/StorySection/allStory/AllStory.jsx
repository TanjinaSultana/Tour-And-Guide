import React from 'react';
import useStory from '../../../../../hooks/useStory';
import AllStories from './AllStories';

const AllStory = () => {
    const [story] = useStory()
    return (
        <div>
             <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "20px" }}>
            {
                story.map(item => <AllStories
                    key={item._id}
                    items={item}
                ></AllStories>)
            }
        </div>
        </div>
    );
};

export default AllStory;