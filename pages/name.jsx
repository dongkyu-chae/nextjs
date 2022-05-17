import React, { useState } from "react";
import Link from "next/link";

const App = ({ user }) => {
  const [username, setUsername] = useState("");
  return (
    <div>
      <label>
        username
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <p>github search from name : {username}</p>

      <Link href={`/users/${username}`}>
        <a> go to the name link! </a>
      </Link>

      <div>
        <Link href="/">Move to main!</Link>
      </div>
    </div>
  );
};

export default App;
