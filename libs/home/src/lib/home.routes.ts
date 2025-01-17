import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { ArticleListEffects, articleListFeature } from '@realworld/articles/data-access';
import { HomeComponent } from './home.component';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    providers: [provideState(articleListFeature), provideEffects(ArticleListEffects)],
  },
];
