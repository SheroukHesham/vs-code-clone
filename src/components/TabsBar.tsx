import { useDispatch, useSelector } from "react-redux";
import FileSVG from "./SVG/FileSVG";
import type { RootState } from "../app/store";
import {
  closeOpenedFile,
  setClickedFile,
  setTabToRemoveId,
} from "../app/features/fileTree/fileTreeSlice";
import type { IFile } from "../interfaces";
import { X } from "lucide-react";
import ContextMenu from "./ui/ContextMenu";
import { useState } from "react";

const TabsBar = () => {
  const { openedFiles, clickedFile } = useSelector(
    (state: RootState) => state.fileTree,
  );
  const dispatch = useDispatch();
  const activeTabID = clickedFile.activeTabID;
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [showContextMenu, setShowContextMenu] = useState(false);

  const onRemove = ({ id }: { id: string }) => {
    const filtered = openedFiles.filter((file) => file.id != id);
    dispatch(closeOpenedFile(filtered));
    if (filtered.length && clickedFile.activeTabID === id) {
      const { name, content, id } = filtered[filtered.length - 1];
      dispatch(
        setClickedFile({ name: name, content: content, activeTabID: id }),
      );
    }
    if (!filtered.length) {
      dispatch(setClickedFile({ name: "", content: "", activeTabID: "" }));
    }
  };

  const onClickFile = (file: IFile) => {
    // if (activeTabID === file.id) return;
    const { name, content } = file;
    dispatch(
      setClickedFile({ name: name, content: content, activeTabID: file.id }),
    );
  };

  const onRightClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setMenuPosition({ x: e.clientX, y: e.clientY });
    setShowContextMenu(true);
  };

  // ** Renders
  const renderBar = openedFiles.map((file) => (
    <div
      key={file.id}
      className={`mr-0 flex items-center min-w-36 p-2 border-r border-r-[#262A39] cursor-pointer ${file.id === activeTabID ? `bg-[#0B2941]` : ``}`}
      onContextMenu={() => dispatch(setTabToRemoveId(file.id))}
    >
      <div
        className="flex space-x-2 items-center"
        onClick={() => onClickFile(file)}
      >
        <FileSVG fileName={file.name} />
        <h3>{file.name}</h3>
      </div>

      <X
        className="ml-3 rounded-md p-1 hover:bg-[#0E293F]"
        onClick={(e) => {
          e.stopPropagation();
          onRemove({ id: file.id });
        }}
      />
    </div>
  ));
  return (
    <div className="w-fit">
      <div
        className="flex bg-[#01111D] space-x-4 border-b w-fit border-[#262A39] overflow-auto scroll-auto"
        onContextMenu={(e) => {
          onRightClick(e);
        }}
      >
        {renderBar}
      </div>
      {showContextMenu && (
        <ContextMenu
          position={menuPosition}
          setShowContextMenu={setShowContextMenu}
        />
      )}
    </div>
  );
};

export default TabsBar;
