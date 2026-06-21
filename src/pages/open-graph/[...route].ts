import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFile } from 'node:fs/promises';
import { BlogPostCollection } from '~/content/types';
import site from '~/content/site';

const fontRegular = await readFile('./node_modules/@fontsource/inter/files/inter-latin-400-normal.woff');
const fontBold = await readFile('./node_modules/@fontsource/inter/files/inter-latin-700-normal.woff');

const collectionEntries = await getCollection(BlogPostCollection);

type PageData = { title: string; excerpt: string; isDefault?: boolean };

const blogPages: Record<string, PageData> = Object.fromEntries(
  collectionEntries.map(({ data }) => [data.permalink, { title: data.title, excerpt: data.excerpt }]),
);

const pages: Record<string, PageData> = {
  ...blogPages,
  default: { title: site.title, excerpt: site.description, isDefault: true },
};

export function getStaticPaths() {
  return Object.keys(pages).map((route) => ({ params: { route: `${route}.png` } }));
}

function clamp(text: string, max: number): string {
  return text.length > max ? text.slice(0, max - 1) + '…' : text;
}

async function renderOG(title: string, excerpt: string): Promise<Uint8Array> {
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          width: '1200px',
          height: '630px',
          backgroundColor: '#0f172a',
          padding: '80px 100px 80px 124px',
          position: 'relative',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '28px',
        },
        children: [
          // blue left border
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                top: '0',
                left: '0',
                width: '24px',
                height: '100%',
                backgroundColor: '#60a5fa',
              },
            },
          },
          // title
          {
            type: 'div',
            props: {
              style: {
                color: '#ffffff',
                fontSize: '52px',
                fontWeight: 700,
                lineHeight: 1.2,
                display: 'flex',
              },
              children: clamp(title, 90),
            },
          },
          // excerpt
          {
            type: 'div',
            props: {
              style: {
                color: '#94a3b8',
                fontSize: '28px',
                fontWeight: 400,
                lineHeight: 1.5,
                display: 'flex',
              },
              children: clamp(excerpt, 200),
            },
          },
          // brunopaz.dev bottom right
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                bottom: '48px',
                right: '60px',
                color: '#475569',
                fontSize: '22px',
                fontWeight: 400,
              },
              children: 'brunopaz.dev',
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Inter', data: fontRegular, weight: 400, style: 'normal' },
        { name: 'Inter', data: fontBold, weight: 700, style: 'normal' },
      ],
    },
  );

  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
  return resvg.render().asPng();
}

export async function GET({ params }: APIContext) {
  const slug = (params.route as string).replace(/\.png$/, '');
  const page = pages[slug];
  if (!page) return new Response('Not found', { status: 404 });

  const png = await renderOG(page.title, page.excerpt);
  return new Response(png as unknown as BodyInit, {
    headers: { 'Content-Type': 'image/png' },
  });
}
