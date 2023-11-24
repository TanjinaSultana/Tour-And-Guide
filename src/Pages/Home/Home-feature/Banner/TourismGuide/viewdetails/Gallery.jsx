import { Card, CardMedia } from "@mui/material";


// const cardData = [
//     {
//       id: 1,
     
//       image: 'https://i.ibb.co/FWHG5t6/mountain.webp',
     
//     },
//     {
//       id: 2,
    
//       image: 'https://i.ibb.co/QYcCkZP/mount.jpg',
     
//     },
//     {
//       id: 3,
    
//       image: 'https://via.placeholder.com/300',
     
//     },
//     {
//       id: 4,
     
//       image: 'https://via.placeholder.com/300',
      
//     },
//     {
//       id: 5,
     
//       image: 'https://via.placeholder.com/300',
     
//     },
//     {
//       id: 6,
    
//       image: 'https://via.placeholder.com/300',
      
//     },
//     // Add more cards as needed
//   ];
  
const Gallery = () => {
  
      
      
    return (
        <div>
           <Card sx={{ maxWidth: 345 }} style={{height:"345px" ,borderBottomRightRadius:"70px",borderTopLeftRadius:"70px"}}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
    
    </Card>
        </div>
   
    );
};
// style={{ display: index === value ? 'block' : 'none' }}

export default Gallery;