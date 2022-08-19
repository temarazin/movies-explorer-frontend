import './Stages.css';

function Stages(props) {
  const { children, className } = props;
  let columns = [];

  children.forEach(item => {
    const { width } = item.props;
    let columnValue = width || '1fr';
    columns.push(`minmax(100px, ${columnValue})`);
  });

  return (
    <ul className={className} style={{ gridTemplateColumns: columns.join(' ') }}>{children}</ul>
  );
}

export default Stages;
