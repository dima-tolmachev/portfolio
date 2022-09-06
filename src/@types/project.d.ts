import { carousel } from './carousel';
import { link } from './link';

export interface projectObject {
  title: string;
  brief: string;
  purpose?: string | undefined;
  description: string[];
  links?: link[];
  stack: carousel[];
  source: string | undefined;
  preview: string | undefined;
  images: string[];
  type: number;
  id: number;
}
