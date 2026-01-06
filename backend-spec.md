# Backend Specification for EcoLearn India

**Version:** 1.0
**Date:** January 2026
**Frontend Stack:** React 19, TypeScript, Vite
**Recommended Backend Stack:** Node.js (v22+), Express.js, MongoDB (Mongoose), Cloudinary (Images)

---

## 1. Environment Configuration

The backend must be configured with the following environment variables (`.env`):

```bash
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/ecolearn
JWT_SECRET=your_super_secret_jwt_key_here
CLIENT_URL=http://localhost:5173  # Allow CORS for frontend
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```

**CORS Policy:**
Enable CORS to allow requests (including credentials/cookies if used) from `CLIENT_URL`.

---

## 2. Database Schemas (MongoDB/Mongoose)

### 2.1 User Schema (`users`)
```typescript
{
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Must be hashed (bcrypt)
  role: { type: String, enum: ['student', 'teacher', 'admin'], default: 'student' },
  schoolId: { type: mongoose.Schema.Types.ObjectId, ref: 'School' },
  grade: { type: Number },
  ecoPoints: { type: Number, default: 0 },
  streak: { type: Number, default: 0 },
  avatar: { type: String, default: 'default-avatar-url' },
  createdAt: { type: Date, default: Date.now }
}
```

### 2.2 Challenge Submission Schema (`submissions`)
```typescript
{
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  challengeId: { type: String, required: true }, // ID from frontend constant
  challengeTitle: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true }, // Cloudinary URL
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  points: { type: Number, required: true },
  submittedAt: { type: Date, default: Date.now },
  teacherComment: { type: String }
}
```

### 2.3 Learning Progress Schema (`progress`)
```typescript
{
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  moduleId: { type: String, required: true },
  completedLessons: [{ type: String }], // Array of Lesson IDs
  isCompleted: { type: Boolean, default: false },
  quizScore: { type: Number },
  lastAccessed: { type: Date, default: Date.now }
}
```

---

## 3. API Endpoints

### 3.1 Authentication (`/api/auth`)

#### POST `/register`
- **Purpose:** Create a new student account.
- **Body:** `{ name, email, password, schoolId (optional) }`
- **Logic:**
  1. Check if email exists.
  2. Hash password.
  3. Create User.
  4. Generate JWT.
- **Response:** `{ token, user: { id, name, email, role, ... } }`

#### POST `/login`
- **Purpose:** Authenticate existing user.
- **Body:** `{ email, password }`
- **Logic:**
  1. Find user by email.
  2. Compare password.
  3. Generate JWT.
- **Response:** `{ token, user: { id, name, email, role, ... } }`

#### GET `/me`
- **Purpose:** Get current user profile (for session persistence).
- **Headers:** `Authorization: Bearer <token>`
- **Response:** `{ user: { ... } }`

### 3.2 Challenges (`/api/challenges`)

#### POST `/submit`
- **Purpose:** Submit a photo proof for a challenge.
- **Headers:** `Authorization: Bearer <token>`, `Content-Type: multipart/form-data`
- **Body:**
  - `file`: The image file (Upload to Cloudinary, get URL).
  - `challengeId`: String.
  - `description`: String.
  - `points`: Number.
- **Logic:**
  1. Middleware uploads file to Cloudinary.
  2. Create `Submission` document with `imageUrl`.
  3. Return success.

#### GET `/my-submissions`
- **Purpose:** Get history for the logged-in user.
- **Headers:** `Authorization: Bearer <token>`
- **Response:** `[ { id, challengeTitle, status, imageUrl, ... }, ... ]`

### 3.3 Learning (`/api/learning`)

#### POST `/progress`
- **Purpose:** Mark a lesson as complete.
- **Body:** `{ moduleId, lessonId }`
- **Logic:**
  1. Find or create `Progress` doc for user+module.
  2. Add `lessonId` to `completedLessons` (if not exists).
  3. Update `ecoPoints` (+10 pts) in `User` model.

#### POST `/quiz`
- **Purpose:** Submit quiz results.
- **Body:** `{ moduleId, score }`
- **Logic:**
  1. Update `Progress` doc (`quizScore`, `isCompleted = true`).
  2. If score >= 70%, award bonus points to `User`.

### 3.4 Leaderboard (`/api/leaderboard`)

#### GET `/`
- **Query Params:** `?filter=national` OR `?filter=school&schoolId=...`
- **Logic:**
  1. Find Users.
  2. Sort by `ecoPoints` descending.
  3. Limit to top 50.
  4. Include current user's rank if not in top 50.

---

## 4. Frontend Integration Notes

1. **Service Layer:**
   - Update `src/services/auth.service.ts` to use `axios` instead of `delay()`.
   - Update `src/store/user.store.ts` to handle the real API response structure.

2. **File Uploads:**
   - Ensure the frontend sends `FormData` for challenge submissions.
   - Example:
     ```javascript
     const formData = new FormData();
     formData.append('file', file);
     formData.append('description', description);
     await axios.post('/api/challenges/submit', formData);
     ```

3. **Error Handling:**
   - Backend should return standard error codes (400 for validation, 401 for auth, 500 for server).
   - Frontend `useUIStore.addToast` can display `error.response.data.message`.
