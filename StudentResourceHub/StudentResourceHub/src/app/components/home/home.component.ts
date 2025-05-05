// src/app/components/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../../services/resource.service';
import { Resource } from '../../models/resource.model';
import { CommonModule } from '@angular/common';
import { ResourceListComponent } from '../resource-list/resource-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ResourceListComponent],
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.css'
})
export class HomeComponent implements OnInit {
  featuredResources: Resource[] = [];
  
  constructor(private resourceService: ResourceService) {}
  
  ngOnInit(): void {
    this.featuredResources = this.resourceService.getFeaturedResources();
  }
}
