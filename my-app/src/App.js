import { useState} from "react";
import { Routes,Route} from "react-router-dom";

import { Home} from "./Pages/Home";
import { BuildForm} from "./Pages/BuildForm";

import "./App.css";

function App() {
  	const [file, setFile] = useState();
	function handleChange(e) {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
	}

  return (
    <div className="App bg-gray-100 text-teal-700">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/build" element={<BuildForm />}></Route>

        <Route path="*" element={<Home />}></Route>
        
      </Routes>
		
    </div>
  );
}

export default App;
