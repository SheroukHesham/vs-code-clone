import { useSelector } from "react-redux";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import type { RootState } from "../app/store";
import TabsBar from "./TabsBar";
import WelcomeTab from "./WelcomeTab";

const Editor = () => {
  const { clickedFile, openedFiles } = useSelector(
    (state: RootState) => state.fileTree,
  );

  return (
    <div className="w-full">
      <TabsBar />

      {openedFiles.length ? (
        clickedFile.content && (
          <SyntaxHighlighter
            language="javascript"
            style={nightOwl}
            customStyle={{
              overflowX: "auto",
            }}
            showLineNumbers
          >
            {clickedFile.content}
          </SyntaxHighlighter>
        )
      ) : (
        <div className="w-full">
          <WelcomeTab />
        </div>
      )}
    </div>
  );
};

export default Editor;
