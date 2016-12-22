import { CollectionObject } from './collection-object.model';

export interface Word extends CollectionObject {
  owner: string;
  word: string;
  date: Date;
}
