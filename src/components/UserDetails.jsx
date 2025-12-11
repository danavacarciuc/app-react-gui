import "./UserDetails.css";

function UserDetails({ user }) {
  if (!user)
    return <div className="details-container placeholder">Select a user to see details...</div>;

  return (
    user ? (
      <div>
        <h2>User Details</h2>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Full Name:</strong> {user.fullName}</p>
        <p><strong>Type:</strong> {user.type}</p>
      </div>
    ) : (
      <div style={{ fontSize: "22px", opacity: 0.7 }}>
        Select a user to see details…
      </div>
    )
  );
  
}

export default UserDetails;
