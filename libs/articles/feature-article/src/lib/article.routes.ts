import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { ArticleEffects, articleFeature } from '@realworld/articles/data-access';
import { ArticleGuardService } from './article-guard.service';
import { ArticleComponent } from './article.component';

export const ARTICLE_ROUTES: Routes = [
  {
    path: ':slug',
    component: ArticleComponent,
    providers: [provideState(articleFeature), provideEffects(ArticleEffects)],
    canActivate: [ArticleGuardService],
  },
];
