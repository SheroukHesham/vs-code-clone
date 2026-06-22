import SVGImage from "./SVGImage";

const WelcomeTab = () => {
  return (
    <div className="flex  items-center justify-center h-screen">
      <SVGImage src="/public/icons/vscode.svg" className="w-64 h-64" />
    </div>
  );
};

export default WelcomeTab;
