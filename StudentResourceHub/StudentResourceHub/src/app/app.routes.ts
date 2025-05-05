// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CategoryComponent } from './components/category/category.component';
import { ResourceDetailsComponent } from './components/resource-details/resource-details.component';
import { AddResourceComponent } from './components/add-resource/add-resource.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { 
    path: 'categories', 
    children: [
      { path: 'programming', component: CategoryComponent },
      { path: 'design', component: CategoryComponent },
      { path: 'math', component: CategoryComponent }
    ] 
  },
  { path: 'resource/:id', component: ResourceDetailsComponent },
  { path: 'add-resource', component: AddResourceComponent },
  { path: '**', redirectTo: '' }
];

