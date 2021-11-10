import { PostUpdateComponent } from './post-update/post-update.component';
import { CreateComponent } from './create/create.component';
import { ContactComponent } from './contact/contact.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'atualizar/:id',
    component: PostUpdateComponent
  },
  {
    path:'feed',
    component: FeedComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'criar',
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
