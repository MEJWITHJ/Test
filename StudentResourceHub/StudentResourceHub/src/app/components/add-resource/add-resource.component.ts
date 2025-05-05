import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ResourceService } from '../../services/resource.service';
import { Resource } from '../../models/resource.model';

@Component({
  selector: 'app-add-resource',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.css'],
})
export class AddResourceComponent {
  newResource: Resource = {
    id: 0,
    title: '',
    description: '',
    category: 'Programming',
    url: '',
    author: '',
    publicationDate: new Date(),
    isFeatured: false
  };
  
  constructor(
    private resourceService: ResourceService,
    private router: Router
  ) {}
  
  onSubmit(): void {
    this.resourceService.addResource(this.newResource);
    this.router.navigate(['/']);
  }
  
  cancel(): void {
    this.router.navigate(['/']);
  }
}

