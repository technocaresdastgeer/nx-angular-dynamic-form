import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions/questions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionControlService } from './models/question-control.service';
import { SharedformComponent } from './sharedform/sharedform.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [QuestionsComponent, SharedformComponent],
  exports: [QuestionsComponent],
  providers: [QuestionControlService],
})
export class DynamicFormsModule {}
