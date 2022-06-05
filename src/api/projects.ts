import slugify from "slugify";
export enum ProjectType {
  OpenSource = "github",
  Company = "company",
}

export interface ProjectFile {
  Content: any;
  frontmatter: ProjectFileMetadata;
}

export interface ProjectFileMetadata {
  name: string;
  type: ProjectType;
  description: string;
  category: string;
  start_date: string;
  end_date: string;
  technologies: Array<string>;
  externalUrl: string;
  position: number;
  images: Array<string>;
  cover: string;
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

export async function mapProject(source: ProjectFile): Promise<Project> {
  const frontMatter = source.frontmatter;

  const projectSlug = slugify(frontMatter.name.toLowerCase());

  const content = await source.compiledContent();
  return {
    type: frontMatter.type,
    name: frontMatter.name,
    description: frontMatter.description,
    category: frontMatter.category,
    startDate: frontMatter.start_date ? new Date(frontMatter.start_date) : null,
    endDate: frontMatter.end_date ? new Date(frontMatter.end_date) : null,
    technologies: frontMatter.technologies ? frontMatter.technologies : [],
    url: frontMatter.externalUrl,
    detailsUrl: `/work/project/${projectSlug}`,
    images: frontMatter.images ? frontMatter.images : [],
    coverImage: frontMatter.cover,
    position: frontMatter.position,
    content: content,
    slug: projectSlug,
  };
}
