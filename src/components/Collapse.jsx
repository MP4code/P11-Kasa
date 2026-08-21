//import arrow from "../assets/icons/arrow-collapse.png";

const Collapse = (props) => {
const { name, title, content, content2 } = props;
  //const [open, setOpen] = useState(false);

  if ( name === "Housing"){

    return (
    <div>
      <p>{content}</p>
      <p>{content2}</p>
    </div>
  );
  }
  else if ( name === "About"){
    return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  ); }
  
};

export default Collapse;