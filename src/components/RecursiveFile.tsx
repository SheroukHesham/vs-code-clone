import { ChevronDown, ChevronRight } from "lucide-react";
import FileSVG from "./SVG/FileSVG";
import type { IFile } from "../interfaces";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addOpenedFile,
  setClickedFile,
} from "../app/features/fileTree/fileTreeSlice";
import type { RootState } from "../app/store";

interface IProps {
  fileTree: IFile;
}

const FileComponent = ({ fileTree }: IProps) => {
  const { openedFiles } = useSelector((state: RootState) => state.fileTree);
  const dispatch = useDispatch();

  const { name, isFolder, children, content, id } = fileTree;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    if (isFolder) setIsOpen((prev) => !prev);
  };

  const onClickFile = () => {
    if (openedFiles.includes(fileTree)) return;
    dispatch(addOpenedFile(fileTree));
    dispatch(setClickedFile({ name: name, content: content, activeTabID: id }));
  };

  return (
    <div className=" flex w-fit mt-2 flex-col ml-3">
      <div
        className="flex items-center space-x-1 cursor-pointer"
        onClick={toggle}
      >
        {isFolder ? (
          <div className="flex items-center ">
            {isOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
            <div className="flex items-center space-x-1">
              <FileSVG fileName={name} isFolder={isFolder} isOpen={isOpen} />
              <div className="hover:text-white">{name}</div>
            </div>
          </div>
        ) : (
          <div className="flex items-center space-x-1" onClick={onClickFile}>
            <FileSVG fileName={name} />
            <div className="hover:text-white">{name}</div>
          </div>
        )}
      </div>

      {isOpen &&
        children &&
        children?.map((file, idx) => (
          <FileComponent fileTree={file} key={idx} />
        ))}
    </div>
  );
};

export default FileComponent;
