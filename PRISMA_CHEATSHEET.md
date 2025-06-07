# Prisma Cheatsheet 🚀

## Database Management Commands

```bash
# Initialize Prisma in your project
npx prisma init

# Push schema changes to database (development)
npx prisma db push

# Create a migration (production)
npx prisma migrate dev --name description_of_changes

# Apply migrations (production)
npx prisma migrate deploy

# Reset database (careful - deletes all data!)
npx prisma db reset

# Pull database schema into prisma schema
npx prisma db pull

# Generate Prisma Client after schema changes
npx prisma generate

# Open Prisma Studio (database GUI)
npx prisma studio
```

## Common Schema Examples

```prisma
// Basic model with relations
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  posts     Post[]
  createdAt DateTime @default(now())
}

model Post {
  id        String   @id @default(cuid())
  title     String
  author    User     @relation(fields: [authorId], references: [id])
  authorId  String
}

// Enums
enum Role {
  USER
  ADMIN
}

// Many-to-Many relation
model Tag {
  id    String @id @default(cuid())
  name  String
  posts Post[]
}

model Post {
  id   String @id @default(cuid())
  tags Tag[]
}
```

## Query Examples (TypeScript)

```typescript
// Create
const newConfirmation = await prisma.confirmation.create({
  data: {
    name: "John Doe",
    email: "john@example.com",
    withTour: true
  }
});

// Read (find many)
const allConfirmations = await prisma.confirmation.findMany({
  where: {
    withTour: true
  },
  orderBy: {
    createdAt: 'desc'
  }
});

// Read (find unique)
const singleConfirmation = await prisma.confirmation.findUnique({
  where: {
    id: "some-id"
  }
});

// Update
const updatedConfirmation = await prisma.confirmation.update({
  where: {
    id: "some-id"
  },
  data: {
    withTour: false
  }
});

// Delete
const deletedConfirmation = await prisma.confirmation.delete({
  where: {
    id: "some-id"
  }
});

// Count
const totalConfirmations = await prisma.confirmation.count();

// Advanced queries
const confirmationsWithFilters = await prisma.confirmation.findMany({
  where: {
    AND: [
      { withTour: true },
      { email: { contains: "@gmail.com" } }
    ]
  },
  select: {
    name: true,
    email: true
  },
  take: 10,
  skip: 0
});
```

## Error Handling

```typescript
try {
  // Your Prisma query here
} catch (e) {
  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    // The .code property can be accessed in a type-safe manner
    if (e.code === 'P2002') {
      console.log('Unique constraint violation')
    }
  }
}
```

## Useful Tips

1. Always generate Prisma Client after schema changes:
   ```bash
   npx prisma generate
   ```

2. Use transactions for multiple operations:
   ```typescript
   const [user, profile] = await prisma.$transaction([
     prisma.user.create({ data: { ... } }),
     prisma.profile.create({ data: { ... } })
   ]);
   ```

3. Debug queries by viewing the SQL:
   ```typescript
   const prisma = new PrismaClient({
     log: ['query', 'info', 'warn', 'error'],
   });
   ```

4. Use Prisma Studio for data visualization:
   ```bash
   npx prisma studio
   ```

## Current Project Schema (palmovi-wedding)

```prisma
model Confirmation {
  id        String   @id @default(cuid())
  name      String
  email     String
  note      String?
  withTour  Boolean  @default(false)
  createdAt DateTime @default(now())
}
``` 