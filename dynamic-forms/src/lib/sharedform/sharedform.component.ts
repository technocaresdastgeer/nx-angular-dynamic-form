import { Component, Input } from '@angular/core';
import { QuestionBase } from '../models/questions-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-sharedform',
  templateUrl: './sharedform.component.html',
  styleUrls: ['./sharedform.component.scss'],
})
export class SharedformComponent {
  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}
