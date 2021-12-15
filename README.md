# bcassol.com

This is the code for my personal site at https://bcassol.com

Uses SvelteKit and TypeScript.

# Todo

- Portfolio: improve descriptions
- Improve debugging for Frontend and Backend
- Schema.org https://rodneylab.com/getting-started-with-sveltekit/#schemaOrg

# Let's overengineer for learning purposes?

- Compile time checked routes. This https://www.npmjs.com/package/url-routes-generator plus iterating over each route during startup and fail if one of these routes does not match.
- SASS
- PostgreSQL + Prisma.io
- AWS Lambda https://github.com/thenikso/adapter-serverless (estimate cost of keeping 1 lambda always on for responsiveness)
- Tests
- CI/CD
- Tailwind CSS

## Maybe

- GraphQL
- Docker
- TailwindUI
- Oauth social login
- Comments (depends on social login)
- Twitter optiomized header:

```html
<meta name="twitter:card" content="summary_large_image" />
<meta property="twitter:image" content="https://...com/feature.webp" />
<meta property="twitter:title" content="Title for Twitter" />
<script type="application/ld+json">
	{"headline":"The Web Is Fucked","description":"Large description for title for Twitter","@type":"WebSite","image":"https://...com/feature.webp","url":"https://...com","@context":"https://schema.org"}.
</script>
```

# Ideas for blog posts

- Reducing code complexity
  - Reference 1: https://www.rockandnull.com/guard-clauses-vs-nested-conditionals/
