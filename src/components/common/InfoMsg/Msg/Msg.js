import { useEffect } from 'react';
import './Msg.css';


function Msg({onRemove, item}) {

  useEffect(() => {
    setTimeout(() => {
      onRemove(item.key);
    }, 5000)
  }, [item]);

  function handleClick() {
    onRemove(item.key);
  }

  return (
    <li className={item.type ? `msg msg_type_${item.type}` : 'msg'} onClick={handleClick} item={item}>
      {item.text}
    </li>
  );
}

export default Msg;
