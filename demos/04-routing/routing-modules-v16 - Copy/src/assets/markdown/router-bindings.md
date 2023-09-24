- With Angular 16 you can bind route parameters to component inputs. To enable this feature, set the `bindToComponentInputs` option to `true` when importing the `RouterModule` in `app-routing.module.ts`:

```typescript
@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
```

- Examine `customer-edit.component.ts` and its @Input() properties:

```typescript
export class CustomerEditComponent {
  @Input() id?: number;
  @Input() readonly?: boolean;
  store = inject(Store<CustomersState>) as Store<CustomersState>;
  customer = this.store.select(getCustomers).pipe(
    mergeMap(
      (customers) => customers.filter(c => c.id == this.id)
    ));
}
```

- You can try by navigating to the Customers top link and than select edit on a specific customer.
