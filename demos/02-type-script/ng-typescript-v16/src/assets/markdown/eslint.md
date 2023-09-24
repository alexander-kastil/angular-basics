- Show [ES Lint Documentations - Rules](https://eslint.org/docs/rules)
- Show [Angular ES Lint Repo](https://github.com/angular-eslint/angular-eslint)
- Add Linting to project:

```bash
ng add @angular-eslint/schematics
```

- Point out `"no-await-in-loop":"warn"` in `.eslintrc.json` and explain code in eslint.component.ts:

```typescript
async function foo(things) {
    const results = [];
    for (const thing of things) {
    // Bad: each loop iteration is delayed until the entire asynchronous operation completes
    results.push(await bar(thing));
    }
    return results;
}
```

- Run Linter

```bash
ng lint
```