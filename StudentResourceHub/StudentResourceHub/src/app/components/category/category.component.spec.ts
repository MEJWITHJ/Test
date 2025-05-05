import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryComponent } from './category/category.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-category-component', 
  imports: [CommonModule, RouterModule, ResourceListComponent],
  template: 'category-component',
  

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
