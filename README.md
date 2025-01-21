<div align="center">

<div>
<!-- <img src="https://i.ibb.co/T03wBRs/Macbook-Air-localhost-2.png" alt="home"> -->
<img src="https://i.ibb.co/kMQ7jDk/Macbook-Air-localhost-1.png" alt="product">
</div>

  <div>
    <img src="https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white" alt="node.js" />
    <img src="https://img.shields.io/badge/Express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB" alt="express" />
    <img src="https://img.shields.io/badge/Postgres-%23316192.svg?logo=postgresql&logoColor=white" alt="postgres" />
    <img src="https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white" alt="prisma" />
    <img src="https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/DaisyUI-5A0EF8?logo=daisyui&logoColor=fff" alt="daisyui" />
  </div>

  <h3 align="center">Clothing ECommerce</h3>
</div>

[View Demo](https://clone-amazoncom.netlify.app/)

## <a name="tech-stack">⚙️ Tech Stack</a>

- React.js
- Node.js
- Express.js
- PostgreSQL
- Prisma
- Tailwind CSS
- DaisyUI
- Zod
- Vite

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [pnpm](https://pnpm.io/)
- [PostgreSQL](https://www.postgresql.org/)

**Cloning the Repository**

```bash
git clone https://github.com/arshalabbas/clothing-store.git
cd clothing-store
```

**Installation**

Install the project dependencies using npm:

```bash
pnpm install
```

```bash
cd frontend
pnpm install
cd ..
```

```bash
cd backend
pnpm install
cd ..
```

**Configuration**

Rename both `example.env` files in `fronthend` and `backend` directories to `.env`
and provide your values.

##### Prisma Migration

```bash
cd backend
npx prisma migrate dev --name init
```

**Running the Project**

Make sure you're at the root of the project.

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) for the frontend application.

Open [http://localhost:3000/admin](http://localhost:3000/admin) for admin dashboard.
