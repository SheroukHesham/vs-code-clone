import type { IFile } from "../interfaces";

export const fileTree: IFile = {
  name: "VS Code Clone",
  isFolder: true,
  children: [
    {
      name: "node_modules",
      isFolder: true,
      children: [
        {
          name: ".vite",
          isFolder: true,
          children: [
            {
              name: "react.js",
              isFolder: false,
            },
          ],
        },
      ],
    },

    {
      name: "src",
      isFolder: true,
      children: [
        {
          name: "components",
          isFolder: true,
          children: [
            {
              name: "Button.tsx",
              isFolder: false,
            },
          ],
        },
        {
          name: "App.tsx",
          isFolder: false,
        },
        {
          name: "App.css",
          isFolder: false,
        },
      ],
    },
  ],
};
