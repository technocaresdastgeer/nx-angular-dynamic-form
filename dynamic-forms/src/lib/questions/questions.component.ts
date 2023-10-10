import { Component, Input, OnInit } from '@angular/core';
import { QuestionBase } from '../models/questions-base';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from '../models/question-control.service';

@Component({
  selector: 'lib-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {

  @Input() questions: QuestionBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

}
