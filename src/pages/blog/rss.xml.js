import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
  const posts = await getCollection('blogPosts', ({ data }) => {
    return data.published && data.publishDate;
  });
  return rss({
    title: 'Bruno Paz Engineering Blog',
    description: 'Tidbits about coding, engineering and computers in general',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
      }),
      link: `/blog/${post.slug}/`,
    })),
  });
}
