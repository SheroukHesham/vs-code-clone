import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeAllFiles,
  closeOpenedFile,
} from "../../app/features/fileTree/fileTreeSlice";
import type { RootState } from "../../app/store";

interface IProps {
  setShowContextMenu: (val: boolean) => void;
  position: {
    x: number;
    y: number;
  };
}

const ContextMenu = ({ position: { x, y }, setShowContextMenu }: IProps) => {
  const dispatch = useDispatch();
  const { openedFiles, tabToRemoveID } = useSelector(
    (state: RootState) => state.fileTree,
  );
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // ** mouse click event outside current ref (context menu)
      // ** e.target returns the element clicked on
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowContextMenu(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
  }, [setShowContextMenu]);

  const onCloseAll = () => {
    dispatch(closeAllFiles());
    setShowContextMenu(false);
  };
  const onClose = () => {
    const filtered = openedFiles.filter((file) => file.id != tabToRemoveID);
    dispatch(closeOpenedFile(filtered));
    setShowContextMenu(false);
  };

  return (
    <div ref={menuRef}>
      <ul
        className="bg-[#011627] text-[#657589] w-32 flex flex-col items-center shadow-[#010f1c] shadow rounded-md"
        style={{ position: "absolute", left: x, top: y }}
      >
        <li
          className="cursor-pointer  flex items-center px-5 w-full py-1 rounded-md hover:text-white"
          onClick={onClose}
        >
          Close
        </li>

        <li
          className="cursor-pointer  flex items-center px-5 w-full py-1 rounded-md hover:text-white"
          onClick={onCloseAll}
        >
          Close all
        </li>
      </ul>
    </div>
  );
};

export default ContextMenu;
