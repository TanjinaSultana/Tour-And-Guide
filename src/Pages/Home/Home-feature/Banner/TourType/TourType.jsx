import Carousel from "react-material-ui-carousel";
import usePackage from "../../../../../hooks/usePackage";
import { Link } from "react-router-dom";
import SectionTitle from "../../../../../components/sectionTitle/SectionTitle";





const TourType = () => {
    const [packages] =usePackage();
 
    return (
        <div>
<SectionTitle
heading={"Tour Type"}
>

</SectionTitle>
          
<Carousel itemsToShow={4} className="w-full">
      {packages.map((item) => (
        <div key={item._id} style={{display:"flex" ,justifyContent:'center',alignItems:"center"}}>
            <Link to={`/packages/${item.type}`}>
        <div  className="p-4">
          <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure>
              <img src={item.image} alt={item.type} style={{width:"400px", height:"200px",borderRadius:"10px"}}/>
            </figure>
            <div className="card-body">
              <h2 className="card-title" style={{display:"flex" ,justifyContent:'center',alignItems:"center"}}>{item.type}</h2>
            </div>
          </div>
        </div>
            </Link>
        </div>
      ))}
    </Carousel>
           
        </div>
    );
};

export default TourType;