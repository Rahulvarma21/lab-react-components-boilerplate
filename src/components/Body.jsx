import "../App.css";
function image(props) {
  console.log();
  return (
    <div>
      {props.imageData.map((item) => (
        <img className="column" key={item.img} src={item.img} alt="" />
      ))}
      ;
    </div>
  );
}
export default image;