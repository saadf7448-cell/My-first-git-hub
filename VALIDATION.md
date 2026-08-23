# Validation status

This project includes automated/static validation plus GitHub CI.

## Completed locally

- TypeScript/TSX syntax parsing
- Local import resolution audit
- Required project-structure audit
- SQL migration ordering/structure review
- Secret-pattern audit
- Responsive layout pass for storefront, customer account and admin

## CI

`.github/workflows/ci.yml` runs on GitHub and performs:

1. `npm install --no-audit --no-fund`
2. `npm run typecheck`
3. `npm run lint`
4. `npm run build`

The local execution environment used to assemble the repository could not reliably reach the npm registry, so a dependency-backed production build is intentionally delegated to GitHub CI rather than falsely reported as locally passing.

## Database

The migrations are designed for a **new dedicated Supabase project**. They have not been applied to an existing restaurant/DineFlow database to avoid destructive schema conflicts.
