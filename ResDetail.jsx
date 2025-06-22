import { useParams } from 'react-router-dom';

const ResDetails = () => {
  const { restaurantName, id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Restaurant Details</h2>
      <p><strong>Name:</strong> {restaurantName.replace(/-/g, ' ')}</p>
      <p><strong>ID:</strong> {id}</p>
      {/* Here you can fetch details using the ID if needed */}
    </div>
  );
};

export default ResDetails;
