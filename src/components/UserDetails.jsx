import "./UserDetails.css";

function UserDetails({ user }) {
  if (!user)
    return <div className="details-container placeholder">Select a user to see details...</div>;

  return (
    <div className="details-container">
      <h2>User Details</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Full Name:</strong> {user.fullName}</p>
      <p><strong>Type:</strong> {user.type}</p>
    </div>
  );
}

export default UserDetails;
