import { useHistory } from 'react-router-dom';

function MenuItem({item}) {
    
    const history = useHistory();

    const goToMenuItemDetails = () => {
      history.push(`/menuItem/${item.id}`);
    }
  
    return (
      <div onClick={goToMenuItemDetails} key={item.id}>
      <h3>{item.item}</h3>
      <img
          src={item.image_url} 
          alt={item.item}
          height="300"
          />
      <p>{item.price}</p>
  </div>
    )
  }

    
export default MenuItem;