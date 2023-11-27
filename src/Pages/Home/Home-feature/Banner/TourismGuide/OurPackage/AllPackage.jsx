import React from 'react';
import usePackage from '../../../../../../hooks/usePackage';
import AllPackages from './AllPackages';

const AllPackage = () => {
    const [pacakges] =usePackage();
    return (
        <div style={{marginTop:"200px"}}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "20px" }}  key={pacakges._id}>

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