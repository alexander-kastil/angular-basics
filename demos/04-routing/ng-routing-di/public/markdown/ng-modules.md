- Models have been used in Angular to declare and provide assets prior to Angular 14. 

- Starting from Angular 14, the use of models is no longer necessary but can be used to bundle related artifacts together and act as a barrel and thus reduce the number of imports in a component. For example `FormattingModule` groups a set of directives together and can be imported as a single module. This can be achieved by importing Standalone Components and Directives in the module and then exporting them.

    ```typescript
    const components = [
        ColumnDirective,
        RowDirective,
        BorderDirective,
        GapDirective,
        BoxedDirective,
        CenteredDirective,
        FontBoldDirective,
        FullWidthDirective,
    ];

    @NgModule({
        declarations: [],
        imports: [components],
        exports: [components]
    })
    export class FormattingModule { }
    ```