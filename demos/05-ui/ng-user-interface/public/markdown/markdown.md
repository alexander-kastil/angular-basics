- Embedding markdown in web apps is a common requirement. Angular provides a way to do this using `ngx-markdown`.

- Install ngx-markdown and prismjs

    ```bash
    npm i -S ngx-markdown prismjs
    ```

- Examine `markdown-third-party.component.ts` and `markdown-renderer.component.ts` 

- Examine `angular.json` and the custom styles and scripts it uses:

    ```json
    "styles": [
        "src/styles.scss",
        "node_modules/prismjs/themes/prism-okaidia.min.css",
        "node_modules/prismjs/plugins/line-highlight/prism-line-highlight.min.css"
    ],
    "stylePreprocessorOptions": {
        "includePaths": ["src/theme"]
    },
    "scripts": [
        "node_modules/marked/marked.min.js",
        "node_modules/prismjs/prism.js",
        "node_modules/prismjs/components/prism-csharp.min.js",
        "node_modules/prismjs/components/prism-typescript.min.js",
        "node_modules/prismjs/components/prism-css.min.js",
        "node_modules/prismjs/plugins/line-highlight/prism-line-highlight.min.js"
    ]
    ```

- Markdown also allows class highlighting using annotations like `typescript`

    ```typescript
    export interface Skill {
        id: number;
        name: string;
        hours: number;
        completed: boolean;
    }
    ```

- For more customizations, examine `theme/markdown.scss`