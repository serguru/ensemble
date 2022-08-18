import { Subject, Subscription } from 'rxjs';
import { Directive, OnDestroy } from '@angular/core';

@Directive()
export abstract class AutoUnsubscribeComponentBase implements OnDestroy {

    unsubscribe$ = new Subject();

    public ngOnDestroy(): void {
        this.unsubscribe$.next(undefined);
        this.unsubscribe$.complete();
    }
}
