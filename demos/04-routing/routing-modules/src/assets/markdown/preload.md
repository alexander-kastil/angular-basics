- Examine app-routing.module.ts

```json
{
    path: 'skills/:id',
    component: SkillsEditComponent,
    resolve: { skillData: SkillResolverService },
}
```

- Examine `skill-resolver.service.ts` and its use in `skills-edit.component.ts`:

```typescript
readParamUsingResolverObs() {
    this.route.data.subscribe((data) => {
      this.skill = data['skillData'];
    });
  }
```