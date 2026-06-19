import "./App.css";
import RecursiveFile from "./components/RecursiveFile";
import { fileTree } from "./data/FileTree";

function App() {
  return (
    <div className="mt-4">
      <RecursiveFile fileTree={fileTree} />
    </div>
  );
}

export default App;
