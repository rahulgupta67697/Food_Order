import { Link } from 'react-router-dom';

function Rescard(props) {
  let destination = '';
  const name = props.name.toLowerCase(); // fix: define `name`

  if (name.includes("kfc")) {
    destination = `/kfc/${props.id}`;
  } else if (name.includes("mc") || name.includes("mcdonald")) {
    destination = `/mcdo/${props.id}`;
  } else {
    destination = `/about/${props.id}`;
  }

  return (
    <Link to={destination}>
      <div className="card">
        <img className='img-1' src={props.photo} alt={props.name} />
        <div className="text-1">
          <h5><span className="text-head">Restaurant :</span> {props.name}</h5>
          <h5><span className="text-head">Rating :</span> {props.rating}</h5>
          <h5><span className="text-head">Cuisines :</span> {props.cuisines.join(", ")}</h5>
          <h5><span className="text-head">Location :</span> {props.location}</h5>
        </div>
      </div>
    </Link>
  );
}

export default Rescard;
