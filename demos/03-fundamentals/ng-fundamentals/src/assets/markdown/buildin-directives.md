- Buildin Directives typically encapsulate reusable functionality. They are attributes that you can attach to most tags.

- Make sure you also examine the routerLink directive in `navbar.component.html`

```html
<div *ngFor="let mi of menuItems | async" routerLink="{{ '/' + mi.url }}" ...>
  {{ mi.label }}
</div>
```
