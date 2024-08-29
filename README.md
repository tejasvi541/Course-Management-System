# **LMS - Learning Management System**

Welcome to the LMS (Learning Management System) project! This project aims to provide a robust, scalable, and customizable solution for managing courses, facilitating learning, and empowering both students and teachers. Built with a modern tech stack and a comprehensive set of features, LMS offers a seamless experience for online education.

---

## **Key Features**

- **📝 Browse & Filter Courses:** Easily explore and discover courses tailored to your interests.
- **💳 Purchase Courses using Stripe:** Complete transactions with secure payment processing via Stripe.
- **✅ Mark Chapters as Completed or Uncompleted:** Track your progress within each course.
- **📊 Progress Calculation:** Monitor your progress with detailed statistics for each course.
- **📚 Student Dashboard:** Access a personalized dashboard to manage your courses and track your learning journey.
- **👩‍🏫 Teacher Mode:** Empower educators with tools to create, manage, and monitor courses.
- **➕ Create New Courses:** Effortlessly create new courses with customizable settings.
- **📑 Create New Chapters:** Structure course content by adding and organizing chapters efficiently.
- **🔀 Drag n’ Drop Reordering:** Rearrange chapter positions with intuitive drag and drop functionality.
- **🎥 Multimedia Support:** Upload thumbnails, attachments, and videos seamlessly with UploadThing.
- **🛠️ Video Processing:** Enhance video content with Mux for optimized playback.
- **📺 HLS Video Player:** Enjoy high-quality video streaming with Mux's HLS video player.
- **🖋️ Rich Text Editor:** Create engaging chapter descriptions with a user-friendly rich text editor.
- **🔒 Authentication:** Secure access powered by Clerk authentication.
- **🗄️ ORM with Prisma:** Efficient and type-safe database access.
- **📂 Database Management:** Utilize MySQL database with Aiven for robust data management.

---

## **Tech Stack**

- **Next.js 13:** React framework for building server-side rendered web applications.
- **React:** JavaScript library for building user interfaces.
- **Stripe:** Payment processing platform for secure transactions.
- **Mux:** Video streaming and processing for high-quality multimedia content.
- **Prisma:** Modern database toolkit for TypeScript and Node.js.
- **Tailwind CSS:** Utility-first CSS framework for building custom designs.
- **MySQL:** Relational database management system.

---

## **Third-party Libraries**

- **Clerk:** Secure user authentication library.
- **UploadThing:** Library for seamless multimedia uploads.
- **Lucide-react & React-icons:** Icon libraries for visual enhancements.
- **React-hook-form:** Efficient form handling library.
- **React-hot-toast:** Notification library for displaying alerts.
- **React-quill:** Rich text editor component for formatted text content.
- **Recharts:** Charting library for interactive data visualization.
- **Hello-pangea/dnd:** Drag and drop library for intuitive user interactions.
- **Zod:** TypeScript-first schema validation library.
- **Zustand:** State management library for application state.
- **React-confetti:** Animation library for confetti effects.
- **Axios:** HTTP client for API requests.

---

## **Environment Variables**

Ensure to set up the following environment variables in your `.env` file:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=
DATABASE_URL=
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
MUX_TOKEN_ID=
MUX_TOKEN_SECRET=
STRIPE_API_KEY=
NEXT_PUBLIC_APP_URL=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_TEACHER_ID=
```

---

## **Getting Started**

To get started with the LMS project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tejasvi541/Course-Management-System
   ```
2. **Install dependencies:**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Set up environment variables:** Configure the `.env` file based on the provided template.

4. **Set up Prisma to sync with your database:**

   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server:**

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

6. **Access the application:** Open your browser and navigate to the specified URL to explore the LMS.

---

## **Contribution**

We welcome contributions to the LMS project! Whether you're fixing bugs, adding new features, or improving documentation, your input is invaluable in enhancing the platform. Here's how you can contribute:

- **Fork the repository** on GitHub.
- **Create a new branch** for your feature or bug fix.
- **Commit your changes** with descriptive messages.
- **Submit a Pull Request** to the main branch.

---
