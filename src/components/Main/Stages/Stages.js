import './Stages.css';

function Stages(props) {
  const { children, className } = props;
  let columns = [];

  children.forEach(item => {
    const { width } = item.props;
    columns.push(width || '1fr');
  });

  return (
    <ul className={className} style={{ gridTemplateColumns: columns.join(' ') }}>{children}</ul>
  );
}

export default Stages;
