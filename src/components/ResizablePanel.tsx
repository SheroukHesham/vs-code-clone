import type { ReactNode } from "react";
import {
  Group,
  Panel,
  Separator,
  useDefaultLayout,
} from "react-resizable-panels";

interface IProps {
  leftPanel: ReactNode;
  rightPanel: ReactNode;
  showLeftPanel: boolean;
}

// **TODO: style the scrollbar

const ResizablePanel = ({
  showLeftPanel = true,
  leftPanel,
  rightPanel,
}: IProps) => {
  const { defaultLayout, onLayoutChanged } = useDefaultLayout({
    id: "unique-layout-id",
    // This set of ids must match the Panels rendered during mount,
    // or the default layout will not be restored
    panelIds: showLeftPanel ? ["left", "right"] : ["right"],
    storage: localStorage,
  });

  return (
    <Group defaultLayout={defaultLayout} onLayoutChanged={onLayoutChanged}>
      {showLeftPanel && (
        <>
          <Panel
            id="left"
            className="border-r border-[#89a4bb]"
            style={{ overflow: "hidden" }}
          >
            {leftPanel}
          </Panel>
          <Separator />
        </>
      )}
      <Panel id="right" minSize="30%">
        {rightPanel}
      </Panel>
    </Group>
  );
};

export default ResizablePanel;
