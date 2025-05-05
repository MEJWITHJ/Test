// src/app/components/resource-details/resource-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ResourceService } from '../../services/resource.service';
import { Resource } from '../../models/resource.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resource-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: 'resource-details.component.html',
  styleUrl: 'resource-details.component.css'
})
export class ResourceDetailsComponent implements OnInit {
  resource: Resource | undefined;
  isValidUrl = true;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private resourceService: ResourceService
  ) {}
  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.resource = this.resourceService.getResourceById(id);
    
    // Simple URL validation
    if (this.resource) {
      this.isValidUrl = this.resource.url.startsWith('http');
    }
  }
  
  goBack(): void {
    this.router.navigate(['/']);
  }
}

