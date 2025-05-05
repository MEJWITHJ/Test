// src/app/components/category/category.component.ts
import { Component, OnInit } from '@angular/core';// src/app/components/add-resource/add-resource.component.ts
import { CommonModule } from '@angular/common';
import { ResourceService } from '../../services/resource.service';
import { Resource } from '../../models/resource.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ResourceListComponent } from '../resource-list/resource-list.component';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterModule, ResourceListComponent],
  templateUrl: 'category.component.html',
  styleUrl: 'category.component.css'
})
export class CategoryComponent implements OnInit {
  categoryName: string = '';
  resources: Resource[] = [];
  
  constructor(
    private route: ActivatedRoute,
    private resourceService: ResourceService
  ) {}
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryName = params['category'];
      this.categoryName = this.categoryName.charAt(0).toUpperCase() + this.categoryName.slice(1);
      this.resources = this.resourceService.getResourcesByCategory(this.categoryName);
    });
  }
}