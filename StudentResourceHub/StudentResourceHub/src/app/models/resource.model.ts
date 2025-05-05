// src/app/models/resource.model.ts
export interface Resource {
    id: number;
    title: string;
    description: string;
    category: 'Programming' | 'Design' | 'Math';
    url: string;
    author: string;
    publicationDate: Date;
    isFeatured: boolean;
  }
  
  // Sample data
  export const SAMPLE_RESOURCES: Resource[] = [
    {
      id: 1,
      title: 'Introduction to JavaScript',
      description: 'A beginner-friendly guide to JavaScript programming',
      category: 'Programming',
      url: 'https://example.com/js-intro',
      author: 'John Smith',
      publicationDate: new Date('2023-05-15'),
      isFeatured: true
    },
    {
      id: 2,
      title: 'CSS Grid Layout Tutorial',
      description: 'Learn how to create modern web layouts with CSS Grid',
      category: 'Design',
      url: 'https://example.com/css-grid',
      author: 'Emma Johnson',
      publicationDate: new Date('2023-06-22'),
      isFeatured: true
    },
    {
      id: 3,
      title: 'Calculus Fundamentals',
      description: 'Essential calculus concepts for beginners',
      category: 'Math',
      url: 'https://example.com/calculus',
      author: 'Michael Brown',
      publicationDate: new Date('2023-04-10'),
      isFeatured: false
    },
    {
      id: 4,
      title: 'Angular 19 For Beginners',
      description: 'A comprehensive guide to getting started with Angular 19',
      category: 'Programming',
      url: 'https://example.com/angular-beginners',
      author: 'Sarah Davis',
      publicationDate: new Date('2024-02-15'),
      isFeatured: true
    },
    {
      id: 5,
      title: 'UI/UX Design Principles',
      description: 'Essential principles for creating user-friendly interfaces',
      category: 'Design',
      url: 'https://example.com/ui-principles',
      author: 'David Wilson',
      publicationDate: new Date('2023-09-30'),
      isFeatured: false
    },
    {
      id: 6,
      title: 'Discrete Mathematics',
      description: 'Introduction to discrete mathematics concepts for computer science',
      category: 'Math',
      url: 'https://example.com/discrete-math',
      author: 'Lisa Robinson',
      publicationDate: new Date('2023-08-17'),
      isFeatured: false
    }
  ];