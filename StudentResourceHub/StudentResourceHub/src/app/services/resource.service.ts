// src/app/services/resource.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Resource, SAMPLE_RESOURCES } from '../models/resource.model';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private resources: Resource[] = SAMPLE_RESOURCES;
  private resourcesSubject = new BehaviorSubject<Resource[]>(this.resources);
  
  constructor() { }
  
  getResources(): Observable<Resource[]> {
    return this.resourcesSubject.asObservable();
  }
  
  getResourceById(id: number): Resource | undefined {
    return this.resources.find(resource => resource.id === id);
  }
  
  getResourcesByCategory(category: string): Resource[] {
    return this.resources.filter(resource => resource.category === category);
  }
  
  getFeaturedResources(): Resource[] {
    return this.resources.filter(resource => resource.isFeatured);
  }
  
  addResource(resource: Resource): void {
    // Generate a new ID
    const maxId = Math.max(...this.resources.map(r => r.id), 0);
    const newResource = { ...resource, id: maxId + 1 };
    this.resources.push(newResource);
    this.resourcesSubject.next([...this.resources]);
  }
}