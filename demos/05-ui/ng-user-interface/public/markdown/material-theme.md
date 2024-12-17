- Examine the `src/theme` folder which includes `mat-theme.scss` which defines the base colors of the material theme.

  ```scss
  $primary: mat.define-palette(mat.$blue-palette, 600);
  $accent: mat.define-palette(mat.$grey-palette, 400);
  $warn: mat.define-palette(mat.$red-palette);

  $theme: mat.define-light-theme(
    (
      color: (
        primary: $primary,
        accent: $accent,
        warn: $warn,
      ),
      typography: mat.define-typography-config(),
      density: 0,
    )
  );
  ```
- `mat-overrides.scss` overrides the default material theme by setting colors, margins, ...

- `angular.json` contains stylePreprocessorOptions which allows us to import these files in our styles.scss or component.scss without having to specify the full path.

  ```
  "stylePreprocessorOptions": {
    "includePaths": ["src/theme"]
  },
  ```
