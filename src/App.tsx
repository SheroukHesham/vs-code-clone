import "./App.css";
import RecursiveFile from "./components/RecursiveFile";
import Editor from "./components/Editor";
import { fileTree } from "./data/fileTree";
import ResizablePanel from "./components/ResizablePanel";

function App() {
  return (
    <div className="flex">
      {/* Sidebar
      <div className="border-r min-w-64 h-screen">
        <RecursiveFile fileTree={fileTree} />
      </div> */}

      {/* <div>
        <div className="flex items-center ">
          <Editor />
        </div> */}
      <ResizablePanel
        showLeftPanel={true}
        leftPanel={
          <div className=" min-w-64 h-screen ">
            <RecursiveFile fileTree={fileTree} />
          </div>
        }
        rightPanel={
          <div>
            <div className="flex items-center ">
              <Editor />
            </div>
          </div>
        }
      />
    </div>
    // </div>
  );
}

export default App;
