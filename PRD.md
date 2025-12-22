# EcoLearn India - Gamified Environmental Education Platform
## Complete Product Requirements Document (PRD)

**Smart India Hackathon 2025**  
**Problem Statement ID:** 25009  
**Document Version:** 1.0  
**Last Updated:** December 2024

---

## 📋 Table of Contents

1. [Project Information](#project-information)
2. [Learning Objectives](#learning-objectives)
3. [Technology Stack](#technology-stack)
4. [MVP Scope](#mvp-scope)
5. [Target Users / Personas](#target-users--personas)
6. [Branding, Theming & Visual Identity](#branding-theming--visual-identity)
7. [UI/UX Design System](#uiux-design-system)
8. [Component Design System](#component-design-system)
9. [Wireframe Structure](#wireframe-structure)
10. [12-Day Development Roadmap](#12-day-development-roadmap)
11. [Appendix](#appendix)

---

## Project Information

### Project Title

**EcoLearn India** - Gamified Environmental Education Platform for Schools

### Project Description

**Short Description:**
EcoLearn India is an interactive web platform that transforms environmental education for school students (grades 6-12) through gamification, real-world eco-challenges, and competitive learning experiences.

**Long Description:**

**Problem Statement:**
Despite the rising urgency of climate change and environmental degradation, environmental education in Indian schools remains largely theoretical. Students are taught textbook-based content with minimal emphasis on real-world application, local ecological issues, or personal responsibility. Traditional teaching methods fail to instill sustainable habits or inspire youth participation in environmental efforts.

**Our Solution:**
EcoLearn India addresses this gap by creating an engaging, gamified web platform that makes environmental education interactive, practical, and fun. Students learn through interactive modules, participate in real-world eco-challenges (tree planting, waste segregation, energy audits), earn eco-points and badges, and compete with classmates and other schools across India.

**Key Differentiators:**
- **Localized Content:** Environmental case studies relevant to Indian states and regions
- **Real-World Action:** Challenges require actual environmental activities with photo verification
- **School Competition:** Foster healthy competition through leaderboards and inter-school challenges
- **Aligned with NEP 2020:** Supports experiential learning and environmental awareness integration

**Expected Impact:**
By engaging 100,000+ students in Year 1, EcoLearn India will foster long-term behavioral change, create environmentally conscious citizens, and inspire community-level environmental action. This directly supports India's SDG goals, NEP 2020's experiential learning mandate, and addresses the urgent need for climate-literate youth.

**Target Market:**
CBSE, ICSE, and State Board schools across India, with special focus on eco-clubs, environmental science teachers, and sustainability coordinators.

---

## Learning Objectives

**Primary Learning Outcomes:**

- **Full-Stack Web Development:** Build production-ready MERN applications with modern best practices
- **Gamification Systems:** Design and implement reward systems, leaderboards, and achievement mechanics
- **User Authentication & Authorization:** Implement secure multi-role systems (students, teachers, admins)
- **Responsive Design:** Create mobile-first, accessible interfaces using React 19 + TypeScript + TailwindCSS
- **Database Modeling:** Design scalable MongoDB schemas for users, challenges, achievements, and analytics

**Secondary Learning Outcomes:**

- **Image Upload & Verification:** Implement photo upload systems for challenge verification
- **Real-Time Features:** Build live leaderboards and competition updates
- **Analytics Dashboards:** Create data visualization for eco-impact tracking
- **API Design:** Develop RESTful APIs with Express.js for seamless frontend-backend communication

---

## Technology Stack

**Frontend:**
- **Build Tool:** Vite 6.x
- **Framework:** React 19 with TypeScript 5
- **Routing:** React Router v7
- **State Management:** Zustand 5.x (global state) + React Query (server state)
- **Styling:** TailwindCSS v4 + DaisyUI v5.5
- **Icons:** Google Material Symbols (Rounded variant)
- **Form Handling:** React Hook Form + Zod validation
- **Additional Libraries:** Recharts, date-fns, clsx, axios

**Backend:**
- **Runtime:** Node.js v22 LTS
- **Language:** TypeScript 5
- **Framework:** Express.js v5
- **Database:** MongoDB with Mongoose v9
- **Authentication:** JWT + bcrypt
- **File Upload:** Multer
- **Validation:** Zod
- **Additional:** express-validator, helmet, cors, dotenv

---

## MVP Scope - 12 Days

### Phase 1: Core Platform Foundation (Days 1-5)

**Priority: P0 (Must Have)**

1. **User Authentication & Onboarding**
   - Student registration with school affiliation
   - Teacher/Admin login system
   - Profile management
   - School verification

2. **Interactive Learning Hub**
   - 5-10 environmental learning modules
   - Rich content: text, images, embedded videos
   - Interactive quizzes with instant feedback
   - Progress tracking per module

3. **Basic Gamification System**
   - Eco-points earning system
   - 10-15 achievement badges
   - Personal dashboard

### Phase 2: Eco-Challenges & Competition (Days 6-9)

**Priority: P1 (Should Have)**

4. **Real-World Eco-Challenge System**
   - Challenge library (10-15 challenges)
   - Photo upload for verification
   - Teacher/Admin approval workflow
   - Challenge completion tracking

5. **School Leaderboards & Competition**
   - Individual student leaderboard
   - School-wide leaderboard
   - Inter-school competition view
   - Weekly/Monthly challenge competitions

### Phase 3: Enhanced Features & Polish (Days 10-12)

**Priority: P2 (Nice to Have)**

6. **Analytics & Impact Tracking**
   - Student progress dashboard
   - Teacher dashboard
   - School admin dashboard

7. **Social & Community Features**
   - Activity feed
   - Eco-tips and daily facts
   - Shareable achievement certificates

---

## Target Users / Personas

### Primary Persona: Riya - The Engaged Student

**Demographics:**
- Age: 14 years (Grade 9)
- Location: Jaipur, Rajasthan
- School: CBSE-affiliated
- Tech Savviness: High

**Goals & Motivations:**
- Make real environmental difference
- Compete with friends
- Earn recognition
- Interactive visual learning

**Pain Points:**
- Boring textbook chapters
- Doesn't know how to take action
- Lacks motivation for eco-habits

**User Needs:**
- Engaging gamified experiences
- Clear actionable challenges
- Social recognition
- Local environmental issues understanding

### Secondary Persona: Mr. Sharma - Eco-Club Coordinator

**Demographics:**
- Age: 38 years
- Role: Environmental Science Teacher
- Location: Pune, Maharashtra
- Tech Savviness: Medium

**Goals:**
- Inspire students about environment
- Track student engagement
- Organize school initiatives
- Measurable impact metrics

---

## Branding, Theming & Visual Identity

### Brand Identity

**Brand Name:** EcoLearn India  
**Tagline:** *"Learn. Act. Lead the Green Revolution."*

**Brand Personality:**
- **Tone:** Educational yet energetic
- **Voice:** Encouraging, action-oriented
- **Mood:** Vibrant + Professional + Natural

**Brand Values:**
- Action-Oriented Learning
- Youth Empowerment
- Inclusivity
- Measurable Impact
- Joyful Sustainability

---

### Color System (OKLCH) - Vibrant Eco-Energy

#### Primary - Emerald Green
```css
--color-primary: oklch(60% 0.20 165);
--color-primary-content: oklch(98% 0.01 165);
```
**Usage:** Main CTAs, eco-points, progress bars  
**Meaning:** Growth, sustainability, youth energy  
**Contrast:** 4.8:1 ✓ WCAG AA

#### Secondary - Ocean Teal
```css
--color-secondary: oklch(58% 0.15 195);
--color-secondary-content: oklch(98% 0.01 195);
```
**Usage:** Secondary CTAs, water conservation  
**Meaning:** Water, freshness, innovation  
**Contrast:** 4.5:1 ✓ WCAG AA

#### Accent - Coral Orange
```css
--color-accent: oklch(70% 0.18 45);
--color-accent-content: oklch(20% 0.05 45);
```
**Usage:** Achievements, gamification highlights  
**Meaning:** Achievement, energy, celebration  
**Contrast:** 5.2:1 ✓ WCAG AA

#### Base Colors
```css
--color-base-100: oklch(98% 0.01 165);  /* Background */
--color-base-200: oklch(95% 0.02 165);  /* Cards */
--color-base-300: oklch(90% 0.03 165);  /* Borders */
--color-base-content: oklch(25% 0.015 165); /* Text */
```

#### Semantic Colors
```css
--color-info: oklch(65% 0.15 240);      /* Sky Blue */
--color-success: oklch(58% 0.18 150);   /* Forest Green */
--color-warning: oklch(75% 0.17 85);    /* Amber */
--color-error: oklch(62% 0.20 30);      /* Sunset Red */
```

---

### Typography

**Google Fonts:**
```html
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&family=Poppins:wght@400;500;600;700;800;900&display=swap">
```

**Primary Font (Body):** Nunito  
**Secondary Font (Headings):** Poppins

**Typography Scale:**
- H1: 48px / 56px - Poppins Bold
- H2: 36px / 44px - Poppins Bold
- H3: 28px / 36px - Poppins SemiBold
- Body: 16px / 24px - Nunito Regular

---

### Icons - Google Material Symbols (Rounded)

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200">
```

**Key Icons:**
- Navigation: home, menu, close, arrow_back
- Learning: school, quiz, book, science
- Environment: eco, recycling, water_drop, forest
- Gamification: star, emoji_events, grade
- Status: check_circle, error, warning, info

---

## UI/UX Design System

### Design Principles

1. **Accessibility-First:** WCAG 2.1 AA compliance mandatory
2. **Mobile-First:** Design for 375px, scale to 1920px
3. **Consistency:** Reusable components everywhere
4. **Performance:** Lazy loading, code splitting
5. **Joyful Gamification:** Celebrate achievements
6. **Educational Clarity:** Simple, jargon-free language

---

### DaisyUI 5 Theme Configuration

```javascript
// tailwind.config.js
export default {
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        "ecolearn-light": {
          "primary": "oklch(60% 0.20 165)",
          "secondary": "oklch(58% 0.15 195)",
          "accent": "oklch(70% 0.18 45)",
          "base-100": "oklch(98% 0.01 165)",
          // ... full theme config
        },
      },
    ],
  },
};
```

---

### Responsive Breakpoints

- **Mobile:** <768px - Single column, bottom nav
- **Tablet:** 768px-1279px - 2 columns, collapsible sidebar
- **Desktop:** ≥1280px - 3-4 columns, persistent sidebar

---

### Accessibility Requirements

**WCAG 2.1 AA Checklist:**

- [x] Color contrast ≥ 4.5:1
- [x] Keyboard navigation
- [x] Screen reader support
- [x] Focus indicators (2px ring)
- [x] Alt text for images
- [x] ARIA labels
- [x] Skip navigation links
- [x] Form label associations

---

## Component Design System

### Atomic Design Structure

```
src/components/
├── atoms/          # Button, Input, Badge, Icon
├── molecules/      # ModuleCard, ChallengeCard, FormField
├── organisms/      # Navbar, Footer, Leaderboard
├── templates/      # MainLayout, DashboardLayout
└── pages/          # Home, Dashboard, Modules
```

---

### Example: Button Component

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: string;
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading,
  icon,
  children,
  ...props
}) => (
  <button
    className={`btn btn-${variant} btn-${size}`}
    disabled={loading}
    {...props}
  >
    {loading && <span className="loading loading-spinner" />}
    {icon && <Icon name={icon} />}
    {children}
  </button>
);
```

---

### Complete Component Inventory

#### Atom Components (Basic UI Building Blocks)

**Input & Form Elements:**
1. Button
2. Input (text, email, password, number)
3. Textarea
4. Select (Dropdown)
5. Checkbox
6. Radio
7. Toggle (Switch)
8. FileUpload
9. DatePicker
10. SearchInput

**Display Elements:**
11. Badge
12. Avatar
13. Icon
14. Tooltip
15. Label
16. Divider
17. Skeleton (Loading placeholder)
18. Spinner (Loading indicator)

**Feedback Elements:**
19. ProgressBar
20. ProgressRing (Circular progress)
21. Alert (Inline notification)
22. Toast (Popup notification)

**Typography:**
23. Heading (H1-H6)
24. Text (Paragraph)
25. Link
26. Code (Inline code)

**Media:**
27. Image
28. Video

---

#### Molecule Components (Combinations of Atoms)

**Form Components:**
1. FormField (Label + Input + Error)
2. FormGroup (Multiple FormFields)
3. PasswordInput (Input + Show/Hide toggle)
4. SearchBar (Input + Search Icon + Button)
5. FilterDropdown (Select + Icon + Label)
6. DateRangePicker (Two DatePickers)

**Card Components:**
7. Card (Base card container)
8. ModuleCard (Module preview with progress)
9. ChallengeCard (Challenge preview with points/difficulty)
10. BadgeCard (Achievement badge display)
11. StatCard (Dashboard stat with icon/value)
12. InfoCard (Information panel with icon)
13. LessonCard (Lesson item in module)
14. QuizCard (Quiz preview)

**List Components:**
15. ListItem (Basic list entry)
16. LeaderboardRow (Rank + Avatar + Name + Points)
17. ActivityItem (Timeline activity entry)
18. NotificationItem (Notification list entry)
19. CommentItem (Comment/feedback entry)

**Interactive Components:**
20. Modal (Dialog overlay)
21. Dropdown (Button + Menu)
22. Accordion (Expandable content)
23. Tabs (Tab navigation)
24. Pagination (Page number controls)
25. Breadcrumb (Navigation trail)

**Media Components:**
26. ImageUploader (FileUpload + Preview + Actions)
27. VideoPlayer (Video + Controls)
28. ImageGallery (Multiple images + Lightbox)

**Data Display:**
29. Table (Basic data table)
30. EmptyState (No data placeholder)
31. ErrorState (Error message display)

**Quiz Components:**
32. QuizQuestion (Question + Options + Submit)
33. QuizOption (Single MCQ option)
34. QuizResult (Score + Feedback)

---

#### Organism Components (Complex UI Sections)

**Navigation:**
1. Navbar (Header with logo, nav links, user menu)
2. MobileNav (Mobile drawer navigation)
3. Sidebar (Dashboard side navigation)
4. Footer (Site footer with links/social)
5. TabBar (Mobile bottom tab navigation)

**Module/Learning:**
6. ModuleGrid (Grid of ModuleCards with filters)
7. ModuleHero (Module detail header)
8. LessonList (Accordion list of lessons)
9. LessonViewer (Full lesson content display)
10. QuizContainer (Full quiz interface with timer)
11. QuizReview (Review answers after submission)

**Challenge:**
12. ChallengeGrid (Grid of ChallengeCards with filters)
13. ChallengeDetail (Full challenge details modal)
14. ChallengeSubmission (Photo upload + form)
15. SubmissionReview (Teacher approval interface)
16. ChallengeGallery (Submitted photos grid)

**Leaderboard:**
17. Leaderboard (Full rankings table)
18. LeaderboardPodium (Top 3 visual display)
19. LeaderboardFilters (School/State/National tabs)
20. RankCard (Current user rank highlight)

**Dashboard:**
21. StatsGrid (4-column stats cards)
22. ContinueLearning (Module resumption section)
23. ActiveChallenges (Challenge cards section)
24. RecentAchievements (Badge carousel)
25. ActivityFeed (Timeline of recent actions)
26. ProgressSummary (Overall progress visualization)

**Profile:**
27. ProfileHeader (Avatar + Name + Bio)
28. ProfileEdit (Edit profile form)
29. AchievementGrid (Badge showcase grid)
30. AchievementDetail (Badge detail modal)
31. ActivityTimeline (User activity history)

**Teacher/Admin:**
32. TeacherDashboard (Class overview stats)
33. ApprovalQueue (Pending submissions list)
34. ClassRoster (Student list with stats)
35. ModuleEditor (Create/edit module form)
36. ChallengeEditor (Create/edit challenge form)
37. SchoolManagement (School CRUD interface)

**Common Sections:**
38. Hero (Landing page hero section)
39. FeatureSection (3-column features)
40. StatsSection (Impact statistics)
41. CTASection (Call-to-action banner)
42. TestimonialSection (Student testimonials)
43. FAQSection (Accordion FAQ list)

---

#### Layout Components (Page Templates)

1. **MainLayout**
   - Purpose: Public pages (landing, features, about)
   - Structure: Navbar + Content + Footer
   - Container: Full width or centered container

2. **AuthLayout**
   - Purpose: Authentication pages (login, signup, reset password)
   - Structure: Centered card + Background image/gradient
   - Container: Centered form (max-w-md)

3. **DashboardLayout**
   - Purpose: Student dashboard and main app pages
   - Structure: Navbar + Sidebar + Content + Footer
   - Container: Sidebar (240px) + Main content area
   - Responsive: Sidebar collapses on mobile

4. **LearningLayout**
   - Purpose: Module learning, lesson viewing, quiz taking
   - Structure: Navbar + Full-width content (no sidebar)
   - Container: Wide content area for immersive learning
   - Responsive: Full screen on all devices

5. **ProfileLayout**
   - Purpose: User profile and settings pages
   - Structure: Navbar + Profile header + Tabbed content + Footer
   - Container: Centered content (max-w-4xl)

6. **TeacherLayout**
   - Purpose: Teacher dashboard and admin tools
   - Structure: Navbar + Teacher sidebar + Content + Footer
   - Container: Sidebar with teacher-specific nav + Content

7. **AdminLayout**
   - Purpose: Admin panel for content management
   - Structure: Navbar + Admin sidebar + Content
   - Container: Full-width admin interface
   - Features: Condensed nav for more content space

8. **ErrorLayout**
   - Purpose: Error pages (404, 500, 403)
   - Structure: Centered error message + Illustration + Action button
   - Container: Centered content (max-w-lg)

9. **BlankLayout**
   - Purpose: Print views, embeds, standalone components
   - Structure: Content only (no nav/footer)
   - Container: Full width, minimal styling

10. **OnboardingLayout**
    - Purpose: Multi-step onboarding flow
    - Structure: Progress stepper + Content + Navigation buttons
    - Container: Centered content (max-w-2xl)

---

#### Page Components (Route-Level Pages)

**Public Pages:**
1. **HomePage** (`/`)
   - Hero, Features, Stats, How It Works, CTA

2. **FeaturesPage** (`/features`)
   - Detailed feature showcase with screenshots

3. **AboutPage** (`/about`)
   - Mission, team, impact story

4. **ContactPage** (`/contact`)
   - Contact form, support information

5. **PrivacyPage** (`/privacy`)
   - Privacy policy content

6. **TermsPage** (`/terms`)
   - Terms of service content

**Authentication Pages:**
7. **LoginPage** (`/login`)
   - Login form, forgot password link

8. **SignUpPage** (`/signup`)
   - Registration form with school selection

9. **ForgotPasswordPage** (`/forgot-password`)
   - Email input for password reset

10. **ResetPasswordPage** (`/reset-password/:token`)
    - New password form

11. **VerifyEmailPage** (`/verify-email/:token`)
    - Email verification confirmation

**Student Dashboard Pages:**
12. **DashboardPage** (`/dashboard`)
    - Stats, continue learning, active challenges, achievements

13. **ModulesPage** (`/modules`)
    - Browse all modules with search/filters

14. **ModuleDetailPage** (`/modules/:id`)
    - Module overview, lessons list, quiz

15. **LessonViewPage** (`/modules/:moduleId/lessons/:lessonId`)
    - Full lesson content with video/text

16. **QuizPage** (`/modules/:moduleId/quiz`)
    - Interactive quiz interface

17. **QuizResultsPage** (`/modules/:moduleId/quiz/results`)
    - Score, correct answers, eco-points earned

18. **ChallengesPage** (`/challenges`)
    - Browse challenges with filters

19. **ChallengeDetailPage** (`/challenges/:id`)
    - Challenge details, requirements, submit button

20. **ChallengeSubmitPage** (`/challenges/:id/submit`)
    - Photo upload and submission form

21. **MySubmissionsPage** (`/challenges/submissions`)
    - List of submitted challenges with status

22. **LeaderboardPage** (`/leaderboard`)
    - Rankings with filters (school/state/national)

23. **AchievementsPage** (`/achievements`)
    - All earned and locked badges

24. **ProfilePage** (`/profile`)
    - User profile with stats and activity

25. **EditProfilePage** (`/profile/edit`)
    - Edit profile form

26. **SettingsPage** (`/settings`)
    - Account settings, preferences, notifications

27. **NotificationsPage** (`/notifications`)
    - List of all notifications

28. **HelpPage** (`/help`)
    - FAQ, guides, support

**Teacher Pages:**
29. **TeacherDashboardPage** (`/teacher/dashboard`)
    - Class overview, pending approvals

30. **ClassManagementPage** (`/teacher/classes`)
    - Manage students, view class stats

31. **ApprovalQueuePage** (`/teacher/approvals`)
    - Review and approve challenge submissions

32. **StudentDetailPage** (`/teacher/students/:id`)
    - Individual student progress and details

33. **ClassReportsPage** (`/teacher/reports`)
    - Class performance reports and analytics

**Admin Pages:**
34. **AdminDashboardPage** (`/admin/dashboard`)
    - System-wide stats and metrics

35. **SchoolManagementPage** (`/admin/schools`)
    - CRUD for schools

36. **UserManagementPage** (`/admin/users`)
    - Manage students, teachers, admins

37. **ModuleManagementPage** (`/admin/modules`)
    - Create/edit learning modules

38. **LessonEditorPage** (`/admin/modules/:moduleId/lessons`)
    - Add/edit lessons in modules

39. **QuizEditorPage** (`/admin/modules/:moduleId/quiz`)
    - Create/edit quiz questions

40. **ChallengeManagementPage** (`/admin/challenges`)
    - Create/edit eco-challenges

41. **BadgeManagementPage** (`/admin/badges`)
    - Create/edit achievement badges

42. **ContentLibraryPage** (`/admin/content`)
    - Manage images, videos, assets

43. **AnalyticsPage** (`/admin/analytics`)
    - Platform-wide analytics and insights

**Error Pages:**
44. **NotFoundPage** (`*` - 404)
    - 404 error with navigation options

45. **UnauthorizedPage** (`/403`)
    - Access denied message

46. **ServerErrorPage** (`/500`)
    - Server error message

47. **MaintenancePage** (`/maintenance`)
    - Maintenance mode page

**Onboarding Pages:**
48. **WelcomePage** (`/onboarding/welcome`)
    - Welcome screen for new users

49. **SchoolSelectionPage** (`/onboarding/school`)
    - Select and verify school

50. **ProfileSetupPage** (`/onboarding/profile`)
    - Complete profile information

51. **PreferencesPage** (`/onboarding/preferences`)
    - Set learning preferences

52. **TourPage** (`/onboarding/tour`)
    - Platform tour and tutorial

---

### Component Count Summary

- **Atoms:** 28 components
- **Molecules:** 34 components
- **Organisms:** 43 components
- **Layouts:** 10 templates
- **Pages:** 52 pages

**Total: 167 components** for complete EcoLearn India platform

**MVP (12 Days) Focuses On:**
- ~15 Atoms (Button, Input, Badge, Icon, etc.)
- ~10 Molecules (ModuleCard, ChallengeCard, FormField, etc.)
- ~12 Organisms (Navbar, Footer, ModuleGrid, Leaderboard, etc.)
- ~4 Layouts (Main, Auth, Dashboard, Learning)
- ~15 Pages (Home, Login, Dashboard, Modules, Challenges, Leaderboard, Profile, etc.)

**Total MVP: ~56 components** (33% of full platform)

---

## Wireframe Structure (Key Pages)

### 1. Landing Page (`/`)

**Blocks:**
1. **Hero:** Logo, tagline, "Start Journey" CTA
2. **Problem:** Environmental education gap stats
3. **Features:** 3-column grid (Learn, Challenge, Compete)
4. **How It Works:** 4-step process
5. **Impact Stats:** Students, trees, schools
6. **CTA:** "Get Started Free" button
7. **Footer:** Links, social, newsletter

---

### 2. Student Dashboard (`/dashboard`)

**Blocks:**
1. **Welcome Header:** "Welcome back, [Name]!"
2. **Stats Cards:** Eco-points, Modules, Challenges, Streak
3. **Continue Learning:** Last active module card
4. **Active Challenges:** 2-column challenge grid
5. **Recent Achievements:** Badge carousel

---

### 3. Module Detail Page (`/modules/:id`)

**Blocks:**
1. **Hero Header:** Module title, icon, description, "Start" button
2. **Learning Objectives:** Checklist of outcomes
3. **Lessons List:** Accordion with 8 lessons
4. **Quiz Section:** Final quiz card
5. **Related Modules:** Horizontal scroll

---

### 4. Challenges Page (`/challenges`)

**Blocks:**
1. **Header:** Title + filters (All/Active/Completed)
2. **Featured Challenge:** Large card with image
3. **Challenges Grid:** 3-column challenge cards
4. **Sidebar:** "How Challenges Work" info

---

### 5. Leaderboard Page (`/leaderboard`)

**Blocks:**
1. **Header:** Filters (My School/State/National)
2. **Current Rank Card:** Highlighted user rank
3. **Top 3 Podium:** Visual podium display
4. **Rankings Table:** 20-50 students with pagination

---

### 6. Profile Page (`/profile`)

**Blocks:**
1. **Profile Header:** Avatar, name, school, "Edit" button
2. **Stats Overview:** 4-column stats grid
3. **Achievements:** Badge grid (6 displayed)
4. **Activity Timeline:** Recent actions (5-10 items)

---

## 12-Day Development Roadmap

### Days 1-2: Foundation & Auth
- Project setup (MERN + TypeScript)
- Database schemas
- Authentication system
- Core atom components

### Days 3-5: Learning System
- Module backend + frontend
- Lessons display
- Quiz system
- Progress tracking

### Days 6-8: Challenges & Gamification
- Challenge backend with photo upload
- Challenge frontend
- Badge system
- Leaderboard

### Days 9-11: Dashboard & Polish
- Student dashboard
- Teacher dashboard
- Leaderboard page
- Profile page

### Day 12: Testing & Deployment
- End-to-end testing
- Bug fixes
- Performance optimization
- Production deployment

---

## Appendix

### A. Sample Module: Climate Change

**Lessons:**
1. What is Climate Change? (5 min)
2. Causes of Global Warming (8 min)
3. Effects on India (10 min)
4. Individual Actions (7 min)
5. Case Study: Delhi Air (10 min)

**Quiz:** 5 MCQs about climate change concepts

---

### B. Sample Challenges

1. **Tree Planting** (100 points, Medium)
2. **Waste Audit** (50 points, Easy)
3. **Energy Saving Week** (150 points, Hard)

---

### C. Achievement Badges

1. Eco Beginner (10 pts) - First module
2. Quiz Master (20 pts) - 100% quiz score
3. Week Warrior (30 pts) - 7-day streak
4. Tree Planter (50 pts) - Plant tree challenge
5. Climate Champion (100 pts) - All climate modules

---

### D. API Endpoints

**Auth:**
- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/me

**Modules:**
- GET /api/modules
- GET /api/modules/:id
- POST /api/modules (admin)

**Challenges:**
- GET /api/challenges
- POST /api/challenges/:id/submit
- PUT /api/challenges/submissions/:id/approve

**Leaderboard:**
- GET /api/leaderboard/school/:id
- GET /api/leaderboard/state/:state
- GET /api/leaderboard/national

---

### E. Database Schemas

**User:**
```typescript
{
  name: string,
  email: string,
  password: string,
  role: 'student' | 'teacher' | 'admin',
  schoolId: ObjectId,
  grade: number,
  ecoPoints: number,
  streak: number
}
```

**Module:**
```typescript
{
  title: string,
  description: string,
  icon: string,
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced',
  lessons: [{
    title: string,
    content: string,
    videoUrl: string
  }],
  quiz: ObjectId
}
```

---

## Conclusion

EcoLearn India transforms environmental education through gamification, real-world action, and competition. This 12-day MVP will demonstrate the platform's potential to engage 100,000+ students in Year 1, fostering behavioral change and creating environmentally conscious citizens.

**Key Success Metrics:**
- Functional authentication, modules, quizzes, challenges
- Working leaderboard and dashboard
- Photo upload and teacher approval
- Responsive design (mobile/tablet/desktop)
- WCAG 2.1 AA compliant
- Deployed and demo-ready

**Let's build a greener future, one eco-point at a time! 🌱**

---

**Document Version:** 1.0  
**Last Updated:** December 2024  
**Smart India Hackathon 2025 - PS ID 25009**
