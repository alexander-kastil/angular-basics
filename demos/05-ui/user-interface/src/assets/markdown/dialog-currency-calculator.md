- Examine `material-dialog.component.ts` which opens another component in a dialog and passes data to it. The data can be edited and saved back to the parent component.

- It takes a certain  amount in one currency and converts it to another currency using the `CalculatorComponent` in a dialog. In order for the currency conversion to work you will need to get an API key from [Fixer.io](https://fixer.io/) and persist it in the `environment.ts` file.

    ```typescript
    export const environment = {
        ...
        title: 'User Interface',
        markdownPath: '/assets/markdown/',
        ...
        fixerApi: '<YOUR_FIXER_API_KEY>',
    }
    ```