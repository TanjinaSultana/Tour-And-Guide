
import OurPackages from './OurPackages';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import usePackage from '../../../../../../hooks/usePackage';
import { Link } from 'react-router-dom';

const OurPackage = () => {
    const [pacakges] =usePackage();
   const pacakgeItem = pacakges.slice(0,3)
    //const [pacakge,setPacakge] = useState([])
    // useEffect(
    //     ()=>{
    //         fetch('tour.json')
    //         .then(res=>res.json())
    //         .then(data =>{
    //             setPacakge(data);
    //         })
    //     },[])
    return (
        <div>
         
          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 mt-10'  key={pacakges._id}>

             {
                pacakgeItem.map(item => <OurPackages
                    key={item._id}
                    items={item}
                ></OurPackages>)
            }
          </div>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"30px",}}>
       <Link to={'/allPackage'}>
       
          <Button variant="contained" endIcon={<ArrowForwardIcon />} style={{ background: 'linear-gradient(to right, #202122, #6a2f41)'}}>
        All Packages
      </Button>
       </Link>
          </div>
          
        </div>
    );
};

export default OurPackage;