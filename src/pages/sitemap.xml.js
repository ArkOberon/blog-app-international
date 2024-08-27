import { getAllPosts } from './api/posts/getAllPosts';

const URL = 'https://hermenautas.com';

// Generate the XML sitemap with the blog data
function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
      <!-- Add the static URLs manually -->
      <url>
        <loc>${URL}</loc>
      </url>
      <url>
        <loc>${URL}/en</loc>
      </url>
      <url>
        <loc>${URL}/documentales</loc>
      </url>
      <url>
        <loc>${URL}/economia</loc>
      </url>
      <url>
        <loc>${URL}/salud</loc>
      </url>
      <url>
        <loc>${URL}/industria</loc>
      </url>
      <url>
        <loc>${URL}/actualidad</loc>
      </url>
      <url>
        <loc>${URL}/religion-es</loc>
      </url>
      <url>
        <loc>${URL}/ciencia</loc>
      </url>
      <url>
        <loc>${URL}/tecnologia</loc>
      </url>
      <url>
        <loc>${URL}/en/documentaries</loc>
      </url>
      <url>
        <loc>${URL}/en/economy</loc>
      </url>
      <url>
        <loc>${URL}/en/health</loc>
      </url>
      <url>
        <loc>${URL}/en/industry</loc>
      </url>
      <url>
        <loc>${URL}/en/news</loc>
      </url>
      <url>
        <loc>${URL}/en/religion-en</loc>
      </url>
      <url>
        <loc>${URL}/en/science</loc>
      </url>
      <url>
        <loc>${URL}/en/technology</loc>
      </url>
      ${posts.data.categories.nodes
        .map((locale) =>
          locale.children.nodes.map((categories) =>
            categories.posts.nodes.map((post) => {
              return `
                
                <url>
                  <loc>${`${URL}${locale.name === 'es' ? '/' : '/en'}/${categories.slug}/${post.slug}`}</loc>
                </url>
              `;
            })
          )
        )
        .join('')}      
    </urlset>
  `;
}

export async function getServerSideProps({ res }) {
  const posts = await getAllPosts();

  // Generate the XML sitemap with the blog data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // Send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {}
