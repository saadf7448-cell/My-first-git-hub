import fs from "node:fs";
const required=["package.json",".env.example","README.md","src/app/page.tsx","src/app/shop/page.tsx","src/app/checkout/page.tsx","src/app/admin/page.tsx","src/lib/supabase/server.ts","supabase/migrations/001_ecommerce.sql","supabase/migrations/002_fix_create_order.sql","supabase/seed/seed.sql"];
const missing=required.filter(x=>!fs.existsSync(x));
const env=fs.readFileSync(".env.example","utf8");
const badSecrets=/SUPABASE_SERVICE_ROLE_KEY=\S+/.test(env);
if(missing.length||badSecrets){console.error({missing,badSecrets});process.exit(1)}
console.log(`Structure OK: ${required.length} critical files present; no service-role secret committed.`);
