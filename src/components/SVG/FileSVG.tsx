import { File } from "lucide-react";
import { svgStyle } from "../../styles";
import SVGImage from "../SVGImage";

interface IProps {
  fileName: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

const FileSVG = ({ fileName, isFolder, isOpen }: IProps) => {
  const extension = fileName.split(".").pop();

  // ** Files
  if (extension === "js") return <SVGImage src="/icons/javascript.svg" />;
  if (extension === "html") return <SVGImage src="/icons/html.svg" />;
  if (extension === "tsx") return <SVGImage src="/icons/react_ts.svg" />;
  if (extension === "ts") return <SVGImage src="/icons/react.svg" />;
  if (extension === "css") return <SVGImage src="/icons/css.svg" />;

  // ** Folders
  if (isFolder && extension === "node_modules")
    return isOpen ? (
      <SVGImage src="/icons/folder-node-open.svg" />
    ) : (
      <SVGImage src="/icons/folder-node.svg" />
    );
  if (isFolder && extension === "components")
    return isOpen ? (
      <SVGImage src="/icons/folder-components-open.svg" />
    ) : (
      <SVGImage src="/icons/folder-components.svg" />
    );
  if (isFolder && extension === "src")
    return isOpen ? (
      <SVGImage src="/icons/folder-src-open.svg" />
    ) : (
      <SVGImage src="/icons/folder-src.svg" />
    );
  if (isFolder)
    return isOpen ? (
      <SVGImage src="/icons/folder-open.svg" />
    ) : (
      <SVGImage src="/icons/folder.svg" />
    );

  return <File {...svgStyle} />;
};

export default FileSVG;
