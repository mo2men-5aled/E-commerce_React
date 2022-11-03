const Text = (props) => {
  return (
    <div className="container" style={{ textAlign: "center", padding: "30px" }}>
      <h1>{props.message}</h1>
    </div>
  );
};

export default Text;
