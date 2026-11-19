import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function readingTime(body = ''): number {
  return Math.max(1, Math.round(body.trim().split(/\s+/).length / 220));
}

export function moodLabel(mood: number): string {
  if (mood <= 2) return 'Inconsolable';
  if (mood <= 4) return 'Suffering';
  if (mood <= 6) return 'Cautiously sceptical';
  if (mood <= 8) return 'Daring to dream';
  return 'Fergie-time delirium';
}
