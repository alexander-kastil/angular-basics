import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Observable, filter, take, tap } from 'rxjs';
import { DemoItem } from '../../demo-base/demo-item.model';
import { DemoService } from '../../demo-base/demo.service';

export const demosResolver: ResolveFn<DemoItem[]> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    service: DemoService = inject(DemoService)
): Observable<DemoItem[]> => service.getDemos()
    .pipe(
        tap((demos: DemoItem[]) => console.log('preloading demos', demos)),
        filter<DemoItem[]>((demos: DemoItem[]) => !!demos),
        take(1)
    );