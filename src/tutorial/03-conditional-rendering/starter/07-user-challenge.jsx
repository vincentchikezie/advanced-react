import { useState } from "react";
const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    // normally connect to db or api
    setUser({ name: "john", age: 24 });
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome {user.name}</h1>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h4> please login</h4>
          <button className="btn" onClick={login}>
            login
          </button>
        </div>
      )}
    </div>
  );
};
export default UserChallenge;
