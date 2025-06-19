import { defineConfig } from 'drizzle-kit';


export default defineConfig({
  schema: './configs/schema.js',          
  dialect:'postgresql',                
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_kJOPx3AKSY6n@ep-red-star-a8zdiqq0-pooler.eastus2.azure.neon.tech/ai-short-video-generator?sslmode=require', 
  },                    
});
