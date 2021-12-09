import slugify from 'slugify';

export enum ProjectType {
  OpenSource = "github",
  Company = "company",
}

export interface SourceProject {
  name: string;
  start_date: string;
  description: string;
  end_date: string;
  technologies: Array<string>;
  externalUrl: string;
  cover: string;
  images: Array<string>;
  position: Number;
  type: ProjectType;
  category: string;
  astro: any;
}

export interface Project {
  name: string;
  startDate: Date;
  endDate: Date;
  description: string;
  technologies: Array<string>;
  url: string;
  detailsUrl: string;
  coverImage: string;
  images: Array<string>;
  position: Number;
  type: ProjectType;
  category: string;
  slug: string;
  content: string;
}

export function mapProject(source: SourceProject): Project {
  const projectSlug = slugify(source.name.toLowerCase());

  return {
      type: source.type,
      name: source.name,
      description: source.description,
      category: source.category,
      startDate: source.start_date ? new Date(source.start_date) : null,
      endDate: source.end_date ? new Date(source.end_date) : null,
      technologies: source.technologies ? source.technologies : [],
      url: source.externalUrl,
      detailsUrl: `/work/project/${projectSlug}`,
      images: source.images ? source.images : [],
      coverImage: source.cover,
      position: source.position,
      content: source.astro.source,   
      slug: projectSlug,
    }
}