export interface IBlogPost {
  id: number;
  title: string;
  slug: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  category: string;
  coverImage: string;
}

export const Blog: IBlogPost[] = [
  {
    id: 1,
    title: 'Getting Started with Angular',
    slug: 'getting-started-with-angular',
    author: 'Jane Doe',
    date: '2025-09-01',
    excerpt:
      'A beginner-friendly guide to setting up and running your first Angular project.',
    content: `Angular is a powerful framework for building modern web apps.
    In this post, we’ll cover installation, project structure, and how to serve your app locally.`,
    tags: ['Angular', 'Frontend', 'JavaScript'],
    category: 'Programming',
    coverImage: 'assets/blog/angular1.jpg',
  },
  {
    id: 2,
    title: '10 Tips for Writing Clean Code',
    slug: '10-tips-clean-code',
    author: 'John Smith',
    date: '2025-08-20',
    excerpt:
      'Learn how to keep your codebase maintainable and easy to read with these proven tips.',
    content: `Clean code is essential for collaboration and long-term maintenance.
    We'll cover naming conventions, modular design, and avoiding code smells.`,
    tags: ['Best Practices', 'Clean Code'],
    category: 'Software Development',
    coverImage: 'assets/blog/cleancode.jpg',
  },
  {
    id: 3,
    title: 'Why TypeScript is Essential for Angular',
    slug: 'typescript-essential-angular',
    author: 'Emily Carter',
    date: '2025-08-10',
    excerpt:
      'TypeScript provides type safety and better tooling for Angular developers.',
    content: `TypeScript helps catch errors early and improves developer experience.
    Learn why Angular is built with TypeScript and how it benefits large projects.`,
    tags: ['TypeScript', 'Angular'],
    category: 'Programming',
    coverImage: 'assets/blog/typescript.jpg',
  },
  {
    id: 4,
    title: 'Exploring RxJS Observables',
    slug: 'rxjs-observables-explained',
    author: 'Michael Brown',
    date: '2025-07-30',
    excerpt: 'Understand reactive programming concepts with RxJS in Angular.',
    content: `RxJS is at the core of Angular's async operations.
    This post explains observables, operators, and practical use cases.`,
    tags: ['RxJS', 'Angular', 'Reactive'],
    category: 'Programming',
    coverImage: 'assets/blog/rxjs.jpg',
  },
  {
    id: 5,
    title: 'Deploying Angular Apps to Netlify',
    slug: 'deploy-angular-to-netlify',
    author: 'Sophia Lee',
    date: '2025-07-15',
    excerpt:
      'Step-by-step guide to deploying your Angular app on Netlify for free.',
    content: `Deployment doesn’t have to be complicated.
    Learn how to build and deploy Angular apps to Netlify in just a few steps.`,
    tags: ['Deployment', 'Angular', 'Netlify'],
    category: 'DevOps',
    coverImage: 'assets/blog/deploy.jpg',
  },
];
