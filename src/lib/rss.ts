import Parser from 'rss-parser';

const parser = new Parser({
  customFields: {
    item: [
      ['content:encoded', 'contentEncoded'],
      ['media:thumbnail', 'thumbnail'],
    ],
  },
});

export interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  content: string;
  thumbnail?: string;
  isoDate?: string;
  guid?: string;
}

const RSS_URL = 'https://jaimegh-com.blogspot.com/feeds/posts/default?alt=rss';

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const feed = await parser.parseURL(RSS_URL);

    return feed.items.map((item) => ({
      title: item.title || '',
      link: item.link || '',
      pubDate: item.pubDate || '',
      contentSnippet: item.contentSnippet || '',
      content: (item as any).contentEncoded || item.content || '',
      thumbnail: (item as any).thumbnail?.url || '',
      isoDate: item.isoDate,
      guid: item.guid,
    }));
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts();
  return posts.find(post => createSlug(post.title) === slug) || null;
}

export function createSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}
