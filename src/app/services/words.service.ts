import { Injectable } from '@angular/core';
import { WORDS } from '../data/data-base';
import { WordType, Type } from '../data/model';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  private words: WordType[] = [];
  private nouns: WordType[] = [];
  private verbs: WordType[] = [];

  constructor() {
    this.words = WORDS;
   }

   getWords(): WordType[]{
    return this.words;
   }
   getNouns(): WordType[]{
    return this.nouns;
   }
   getVerbs(): WordType[]{
    return this.verbs;
   }
   addNouns(value: WordType){
    this.nouns.push(value);
   }
   addVerb(value: WordType){
    this.verbs.push(value);
   }
   check(): void{
    this.nouns.map(word => (word.correct = word.type === Type.NOUN));
    this.verbs.map(word => (word.correct = word.type === Type.VERB));
   }

  
}
