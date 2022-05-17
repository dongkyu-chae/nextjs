import { useState } from "react";
import { useRouter } from "next/router";

import Link from "next/link";

const App = () => {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <div>
      <button type="button" onClick={() => router.push("/tomato")}>
        go to tomato
      </button>
      <button type="button" onClick={() => router.push("/name")}>
        go to name
      </button>
    </div>
  );
};

export default App;
