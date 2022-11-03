const Item = (props) => {
  return (
    <li class="nav-item">
      <a class="nav-link" href="/">
        {props.txt}
      </a>
    </li>
  );
};

export default Item;
