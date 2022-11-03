const Item = (props) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href={props.route}>
        {props.txt}
      </a>
    </li>
  );
};

export default Item;
