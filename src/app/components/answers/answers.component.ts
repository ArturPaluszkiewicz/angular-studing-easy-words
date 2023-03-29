import { Component, Input } from '@angular/core';
import { WordType } from 'src/app/data/model';
import { WordsService } from 'src/app/services/words.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent {

  @Input() title: string | undefined;
  @Input() words: WordType[] | undefined;

  constructor(private wordService: WordsService){}
}
