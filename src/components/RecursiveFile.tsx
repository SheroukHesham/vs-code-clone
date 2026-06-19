import { ChevronDown, ChevronRight } from "lucide-react";
import FileSVG from "./SVG/FileSVG";
import type { IFile } from "../interfaces";

import { useState } from "react";

interface IProps {
  fileTree: IFile;
}

const FileComponent = ({ fileTree: { name, isFolder, children } }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => {
    if (isFolder) setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex mt-2 flex-col ml-3">
      <div
        className="flex items-center space-x-1 cursor-pointer"
        onClick={toggle}
      >
        {isFolder ? (
          <div className="flex items-center">
            {isOpen ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
            <FileSVG fileName={name} isFolder={isFolder} isOpen={isOpen} />
          </div>
        ) : (
          <FileSVG fileName={name} />
        )}
        <span>{name}</span>
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
