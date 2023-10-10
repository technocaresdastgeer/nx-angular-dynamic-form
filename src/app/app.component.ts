import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { DynamicFormsModule } from 'dynamic-forms/src/lib/dynamic-forms.module';
import { QuestionBase } from 'dynamic-forms/src/lib/models/questions-base';
import { Observable } from 'rxjs';
import { QuestionService } from 'dynamic-forms/src/lib/models/question.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, CommonModule, RouterModule, DynamicFormsModule],
  providers:  [QuestionService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  questions$: Observable<QuestionBase<any>[]>;

  constructor( service: QuestionService){
    this.questions$ = service.getQuestions();

    this.questions$
      .subscribe((arg: any) =>  console.log(arg));
    
    

  }
}
