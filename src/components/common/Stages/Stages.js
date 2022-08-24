import './Stages.css';

function Stages(props) {
  const { children, className, minWidth } = props;
  const columnMinWidth = minWidth || '100px';
  let columns = [];

  children.forEach(item => {
    const { width } = item.props;
    let columnWidth = width || '1fr';
    columns.push(`minmax(${columnMinWidth}, ${columnWidth})`);
  });

  return (
    <ul className={className} style={{ gridTemplateColumns: columns.join(' ') }}>{children}</ul>
  );
}

export default Stages;
