import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { provideComponentStore } from '@ngrx/component-store';
import { AppStore } from './app.store';
@Component({
  standalone: true,
  imports: [
    CommonModule
  ],
  selector: 'app-root',
  template: `
    app works
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    provideComponentStore(AppStore)
  ]
})
export class AppComponent {
  readonly #store = inject(AppStore);
}
