import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function MenuItem({item}) {
    
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);

    const goToMenuItemDetails = () => {
        if (user.id) {
            history.push(`/menuItem/${item.id}`);
        }
        else  {
            return;
        }
        }
  
    return (
      <div onClick={goToMenuItemDetails} key={item.id}>
      <h3>{item.item}</h3>
      <img
          src={item.image_url} 
          alt={item.item}
          height="300"
          />
      <p>{item.description}</p>
      <p>${item.price}</p>
  </div>
    )
  }

    
export default MenuItem;