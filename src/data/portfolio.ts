// Edit your content here. Empty optional links are hidden automatically.
export const profile = {
  name: 'José Cortés',
  role: 'PHP / Laravel Developer',
  email: 'josecortesdev@gmail.com',
  github: 'https://github.com/josecortesdev',
  linkedin: 'https://www.linkedin.com/in/josecortesdev/',
  resume: 'jose-cortes-cv.pdf',
  availability: 'Available for remote contracts',
  intro: 'I have 4+ years of professional experience building web applications. I designed, built, tested, and deployed Nexosend, an SMS platform with its own API.',
  currentWork: 'I automate Excel reports and charts from database records and add features to internal applications, including file organization and printable records.',
  previousWork: 'I developed business software for golf courses and clinics, working across CRM and business intelligence tools. For example, I built a QR code system that golfers use to enter designated areas and a CRM dashboard that lets staff track campaign performance.',
  firstWork: 'I started my professional programming career at Adalid, a company that develops a CMS for digital publications.',
};

export const nexosend = {
  url: 'https://nexosend.com',
  apiDocs: 'https://nexosend.com/api-docs',
  demo: 'https://github.com/josecortesdev/nexosend-showcase#product-demo',
  name: 'Nexosend',
  label: 'Product case study',
  title: 'An SMS platform for scheduling campaigns and reviewing each recipient’s sending status.',
  description: 'Send a message to one contact or schedule a campaign through the web app or REST API. The dashboard shows which messages are queued, sent, failed, or cancelled.',
  context: 'A scheduled campaign can have several recipients and a different outcome for each. Users can choose a sending time, cancel an eligible scheduled message, and check individual results in their history.',
  contribution: 'I built the Laravel backend and Vue 3 interface. For bulk sends, I create one SMS record and one queue job per recipient, so each outcome is recorded separately. A worker retries eligible processing errors and records provider rejections as failures.',
  features: [
    { title: 'Laravel queues', text: 'Each recipient gets a separate queue job and message record, so each sending outcome can be tracked individually.' },
    { title: 'API integrations', text: 'Developers can send SMS through a documented REST API using revocable Laravel Sanctum tokens.' },
    { title: 'Automated checks', text: 'On every pull request, GitHub Actions runs PHPUnit tests against MySQL and builds the Vue frontend.' },
  ],
};

export const projects = [
  {
    name: 'Laravel development environments with Docker', year: '2024', kind: 'Developer tooling',
    summary: 'Three reusable setups for developing Laravel applications locally, from a basic web stack to queue workers and external integrations.',
    tags: ['Docker Compose', 'Laravel Horizon', 'Redis', 'Amazon S3', 'Elasticsearch'],
    details: 'In the queue example, you can dispatch an email job, follow it in Horizon, and inspect the captured email in MailHog. I included an automated test for the job.',
    takeaway: 'A separate setup demonstrates file storage with Amazon S3 and search with Elasticsearch.',
    code: 'https://github.com/josecortesdev/laravel-horizon-dockerized',
    codeLabel: 'Horizon setup & test',
    links: [
      { label: 'S3 & Elasticsearch setup', url: 'https://github.com/josecortesdev/laravel-external-services' },
      { label: 'Watch the S3 demo', url: 'https://github.com/user-attachments/assets/7f1d8d58-5160-47c4-8bab-1d8f96c49570' },
    ],
  },
  {
    name: 'SOLID in a Laravel REST API', year: '2023', kind: 'Video walkthrough',
    summary: 'In this YouTube walkthrough, I explain the SOLID principles using examples from my Laravel API.',
    videoId: 'wHVcoTbeTVE',
    videoLabel: 'Watch walkthrough · In Spanish',
    tags: ['Laravel', 'PHPUnit', 'MySQL'],
    details: 'Implemented authentication, roles, authorization, and many-to-many relationships. Tests cover HTTP endpoints and database behavior, with mocking to isolate external API calls.',
    takeaway: 'The focus: making backend behavior explicit and testable.',
    code: 'https://github.com/josecortesdev/portfolioApi',
  },
  {
    name: 'Mykelt — Online store with Stripe', year: '2021', kind: 'Client project',
    videoFile: 'https://josecortesdev.github.io/portafolio/assets/videos/tecnico2.mp4',
    videoLabel: 'Shopping cart and Stripe payments with Laravel Cashier',
    summary: 'I built a custom storefront where customers could add products to a cart and pay online. The client could also publish articles through a built-in CMS.',
    tags: ['Laravel', 'Angular', 'Stripe'],
    details: 'I connected the Angular cart to a Laravel REST API and integrated Stripe payments with Laravel Cashier. Customers could sign in with Google through Laravel Socialite.',
    takeaway: 'The CMS gave the client a rich-text editor to write and format articles, upload images, and manage the blog.',
    code: 'https://github.com/josecortesdev/BackMykelt',
    codeLabel: 'Backend · Laravel',
    links: [
      { label: 'Frontend · Angular', url: 'https://github.com/josecortesdev/FrontMykelt' },
    ],
  },
  {
    name: 'Fintool — Java, Spring Boot & Angular', year: '2021', kind: 'Learning project',
    videoId: 'fZJD0PXh4qo',
    videoLabel: 'Watch the Fintool demo',
    summary: 'An early full-stack project: I built a REST API for accounts and financial products and an interface that displayed data from external market APIs.',
    tags: ['Java', 'Spring Boot', 'Angular', 'JPA'],
    details: 'Created an Angular interface consuming financial-data APIs and a Spring Boot REST backend for account and financial-product management, using relational persistence with JPA.',
    takeaway: 'The focus: integrating external data and building across the frontend and backend.',
    code: '',
  },
];
