-- Neon schema + seed for the portfolio (Postgres)
create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null default '',
  tech text[] not null default '{}',
  images text[] not null default '{}',
  link text not null default '',
  important text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  visible boolean not null default true,
  video text,
  github text
);

create table if not exists site_content (
  key text primary key,
  value text not null default '',
  updated_at timestamptz not null default now()
);

create table if not exists timeline (
  id uuid primary key default gen_random_uuid(),
  type text not null default 'work',
  title text not null,
  place text not null default '',
  link text not null default '',
  period text not null default '',
  description text not null default '',
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists certificates (
  id uuid primary key default gen_random_uuid(),
  image_url text not null,
  title text not null default '',
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists tech_logos (
  id uuid primary key default gen_random_uuid(),
  image_url text not null,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

insert into projects (title, description, tech, images, link, important, sort_order) values
(
  'Photographer portfolio',
  'Web project featuring a real estate photographer''s portfolio. Showcases captivating property visuals, offers easy navigation, and provides contact details for collaborations.',
  array['JS','HTML','CSS','React','TypeScript','Next','Tailwind'],
  array['/assets/photo_portfolio_1.webp','/assets/photo_portfolio_2.webp','/assets/photo_portfolio_3.webp','/assets/photo_portfolio_4.webp'],
  'https://photo.glafira.se/',
  null,
  1
),
(
  'Drone Delight',
  'Drone Delight is a modern food delivery app where users can create an account, log in, browse a wide selection of meals, add products to their cart, save favorites, and securely complete payments.',
  array['JS','HTML','CSS','React','Node.js','Tailwind','react-router-dom','MongoDB'],
  array['/assets/drone-delight_1.webp','/assets/drone-delight_3.webp','/assets/drone-delight_4.webp','/assets/drone-delight_6.webp'],
  'https://drone-delight.netlify.app/',
  null,
  2
),
(
  'SKILLUP',
  'SKILLUP is a web app for interactive learning where users can enroll in courses, track progress, complete lessons, and earn digital certificates through a diverse course library and personal dashboards.',
  array['Entity Framework','ASP.NET Identity','MongoDB','C#','Tailwind','React','TypeScript'],
  array['/assets/skillup_1.webp','/assets/skillup_2.webp','/assets/skillup_3.webp','/assets/skillup_4.webp'],
  'https://skillup-sysm8.netlify.app/',
  null,
  3
),
(
  'WashOverflow',
  'A car wash booking system that enables users to schedule car wash appointments. The system provides authentication, booking management, and an administrative interface to oversee operations.',
  array['Razor Pages','Entity Framework','ASP.NET Identity','Azure SQL','C#','Bootstrap','Azure App Service'],
  array['/assets/washoverflow_1.webp','/assets/washoverflow_2.webp','/assets/washoverflow_3.webp'],
  'https://washoverflow.azurewebsites.net/',
  null,
  4
),
(
  'Sweet Shop',
  'A responsive website for a candy store. Users can explore the product catalog, add products to the cart, and place orders. After placing an order, users receive a confirmation with the order number.',
  array['JS','HTML','CSS','React','TypeScript','SASS','Bootstrap','react-router-dom','react-query','Vite'],
  array['/assets/sweet_1.webp','/assets/sweet_2.webp','/assets/sweet_3.webp','/assets/sweet_4.webp'],
  'https://sweet-shop-glafver.netlify.app/',
  null,
  5
),
(
  'Videomaker',
  'Videomaker app allows users to create video slideshows using uploaded photos. Users can customize slide order, duration, transitions, and add soundtracks. They can save, share, edit settings, or create new videos.',
  array['JS','HTML','CSS','React','Node.js','Express.js','ffmpeg','ImageMagick','Bootstrap','Firebase','SASS','Docker','react-router-dom'],
  array['/assets/videomaker_1.webp','/assets/videomaker_2.webp','/assets/videomaker_3.webp'],
  'https://videomaker.netlify.app/',
  null,
  6
),
(
  'Tasty Malmö',
  'Multi-tier access app for discovering restaurants in Malmö on a map and in a list. Users can explore the map, access detailed pages, see their location, find distances to restaurants, get route directions, and submit suggestions to admins.',
  array['JS','HTML','CSS','React','Bootstrap','ReactQuery','Firebase','SASS','GoogleMapsAPI'],
  array['/assets/tasty_1.webp','/assets/tasty_2.webp','/assets/tasty_3.webp'],
  'https://tasty-malmo.netlify.app/',
  null,
  7
),
(
  'Almi - Uppstartslån',
  'A web page for Almi''s newest product, Uppstartslån. This one-page website serves as a guide to introduce customers to the features and benefits of Uppstartslån.',
  array['JS','HTML','CSS'],
  array['/assets/almi_1.webp','/assets/almi_2.webp','/assets/almi_3.webp'],
  'https://almi.netlify.app/',
  null,
  8
),
(
  'Re-Yacht',
  'A classic battleship game in real time for two players.',
  array['JS','HTML','CSS','React','Socket.io','Node.js','Bootstrap','SASS','react-router-dom'],
  array['/assets/reyacht_1.webp','/assets/reyacht_2.webp','/assets/reyacht_3.webp','/assets/reyacht_4.webp'],
  'https://re-yacht.netlify.app/',
  'If you want to try the game alone, open two tabs and log in as two players.',
  9
),
(
  'Kill the virus',
  'A two-player game where players compete to see who can kill the malicious virus faster.',
  array['JS','HTML','CSS','React','Socket.io','Node.js'],
  array['/assets/virus_1.webp','/assets/virus_2.webp','/assets/virus_3.webp','/assets/virus_4.webp'],
  'https://kill-the-virus-ksa4rs3q2a-lm.a.run.app',
  'If you want to try the game alone, open two tabs and log in as two players.',
  10
),
(
  'API Forge',
  'API Forge is a self-hosted tool that turns data models into a fully working REST API in seconds. Define a model with typed fields and instantly get a complete CRUD API with pagination, sorting, filtering, a daily access key and smart seed data.',
  array['C#','.NET','ASP.NET Core','Entity Framework','PostgreSQL','React','TypeScript','Tailwind','Docker','Cloud Run'],
  array[]::text[],
  'https://apiforge-364590748641.europe-west1.run.app',
  'Demo account: demo@apiforge.dev / demo1234 (read-only)',
  11
);

insert into site_content (key, value) values
  ('hero.name', 'Glafira'),
  ('hero.role', 'Fullstack Developer'),
  ('hero.subtitle', 'with a passion for solving problems and high attention to visual details. My goal in work is to produce clean, understandable, and well-optimized code.'),
  ('projects.title', 'Have a look at my projects'),
  ('projects.subtitle', 'Here are some of my completed projects. While some may be simple, they represent my ongoing effort to grow professionally and continuously learn new skills.'),
  ('technologies.title', 'Technologies & Techniques I Use'),
  ('about.p1', 'Hi, my name is Glafira Veretennikova. Currently based in Malmö, Sweden, I relocated here six years ago from St. Petersburg, Russia. I am fluent in both Swedish and English.'),
  ('about.p2', 'I am a Fullstack Developer and my expertise includes C#, .NET, Blazor, React.js, TypeScript, and Node.js. I have experience working with Redux, Express.js, Socket.io, Tailwind, and Material UI, and writing tests with xUnit and Jest.'),
  ('about.p3', 'Easy-going by nature, I know how to listen and find the right approach to people and work. Skilled at collaborating in teams, I can both lead projects and work independently when needed.'),
  ('about.p4', 'Before transitioning into development, I spent over 15 years in administration and management. That experience sharpened my organizational skills, problem-solving, and customer focus — qualities I now bring to every project I build.'),
  ('about.p5', 'I am passionate about interior design and interior photography, working professionally as a freelance photographer. I also enjoy traveling and exploring different cultures to understand how people live, think and create their spaces.'),
  ('contact.title', 'Interested in working with me?'),
  ('contact.email', 'glafira.se@gmail.com'),
  ('social.linkedin', 'https://www.linkedin.com/in/glafver/'),
  ('social.facebook', 'https://www.facebook.com/glafver'),
  ('social.github', 'https://github.com/glafver'),
  ('social.instagram', 'https://www.instagram.com/glafver/'),
  ('cv.url', '/assets/Glafira_Veretennikova_fullstack_CV.pdf')
on conflict (key) do nothing;
