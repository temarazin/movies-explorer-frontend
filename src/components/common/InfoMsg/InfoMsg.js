import './InfoMsg.css';

function InfoMsg({ children }) {

  return (
    <ul className="info-msg">
      {children}
    </ul>
  );

}

export default InfoMsg;
