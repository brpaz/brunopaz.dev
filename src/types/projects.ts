export enum ProjectType {
  OpenSource = "github",
  Company = "company",
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

export interface ProjectFile {
  compiledContent: any;
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
  featured: boolean;
}


