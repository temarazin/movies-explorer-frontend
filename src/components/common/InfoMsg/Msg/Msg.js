import { useEffect } from 'react';

import './Msg.css';

function Msg({onRemove, item}) {
  function handleClick(e) {
    onRemove(item.key);
  }

  return (
    <li className={item.type ? `msg msg_type_${item.type}` : 'msg'} onClick={handleClick} item={item}>
      {item.text}
    </li>
  );
}

export default Msg;
