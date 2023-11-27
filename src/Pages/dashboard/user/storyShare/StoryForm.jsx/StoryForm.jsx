import React from 'react';
import usePackage from '../../../../../hooks/usePackage';
import useCart from '../../../../../hooks/useCart';

const StoryForm = () => {
    const [packages] =usePackage();
    const [cart,] = useCart()
    return (
        <div>
            
        </div>
    );
};

export default StoryForm;