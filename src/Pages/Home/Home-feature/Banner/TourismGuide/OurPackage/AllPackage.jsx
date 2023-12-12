import React from 'react';
import usePackage from '../../../../../../hooks/usePackage';
import AllPackages from './AllPackages';

const AllPackage = () => {
    const [pacakges] =usePackage();
    return (
        <div style={{marginTop:"200px"}}>
              <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8'  key={pacakges._id}>

{
   pacakges.map(item => <AllPackages
       key={item._id}
       items={item}
   ></AllPackages>)
}
</div>
        </div>
    );
};

export default AllPackage;