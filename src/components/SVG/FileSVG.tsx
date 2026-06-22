import { File } from "lucide-react";
import { svgStyle } from "../../styles";
import SVGImage from "../SVGImage";
import { extensionIconPaths } from "../../constants";

interface IProps {
  fileName: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

const FileSVG = ({ fileName, isFolder, isOpen }: IProps) => {
  const extension = fileName.split(".").pop();

  // ** extension exists as a key in extensionIconPath
  if (
    extension &&
    Object.prototype.hasOwnProperty.call(extensionIconPaths, extension)
  ) {
    const iconPath = isFolder
      ? isOpen
        ? `${extensionIconPaths[extension]}-open.svg`
        : `${extensionIconPaths[extension]}.svg`
      : `${extensionIconPaths[extension]}.svg`;

    return <SVGImage src={iconPath} />;
  }

  return isFolder ? (
    isOpen ? (
      <SVGImage src="/icons/folder-open.svg" />
    ) : (
      <SVGImage src="/icons/folder.svg" />
    )
  ) : (
    <File {...svgStyle} />
  );
};

export default FileSVG;
