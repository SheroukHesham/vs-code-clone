import type { IFile } from "../interfaces";

import { v4 as uuid } from "uuid";

export const fileTree: IFile = {
  id: uuid(),
  name: "VS Code Clone",
  isFolder: true,
  children: [
    {
      id: uuid(),
      name: "node_modules",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: ".vite",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "react.js",
              isFolder: false,
              content: " file content",
            },
          ],
        },
      ],
    },

    {
      id: uuid(),
      name: "src",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "components",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "Button.tsx",
              isFolder: false,
              content: "const Button = () =>{ }",
            },
          ],
        },
        {
          id: uuid(),
          name: "App.tsx",
          isFolder: false,
          content: "const App = () => { return }",
        },
        {
          id: uuid(),
          name: "App.css",
          isFolder: false,
          content: " Css File",
        },
      ],
    },
  ],
};
