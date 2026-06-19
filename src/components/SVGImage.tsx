interface IProps {
  src: string;
  fill?: string;
}

const SVGImage = ({ src, fill }: IProps) => {
  return <img src={src} className="w-5 h-5 " style={{ fill: fill }} />;
};

export default SVGImage;
