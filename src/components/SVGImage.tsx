interface IProps {
  src: string;
  fill?: string;
  className?: string;
}

const SVGImage = ({ src, fill, className = "w-5 h-5" }: IProps) => {
  return <img src={src} className={className} style={{ fill: fill }} />;
};

export default SVGImage;
