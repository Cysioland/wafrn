import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewPostComponent } from './view-post/view-post.component';
import { PostResolver } from '../resolvers/post.resolver';
import { SharedWafrnModule } from '../sharedWafrn/shared-wafrn.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

const routes: Routes = [
  {
    path: ':id',
    resolve: { posts: PostResolver },
    data: { revalidate: 3600 },
    component: ViewPostComponent
  }
];

@NgModule({
  declarations: [
    ViewPostComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedWafrnModule,
  ]
})
export class SinglePostModule { }
