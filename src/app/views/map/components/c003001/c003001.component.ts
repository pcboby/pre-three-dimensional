import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-c003001',
  templateUrl: './c003001.component.html',
  styleUrls: ['./c003001.component.css']
})
export class C003001Component implements OnInit {
  validateForm: FormGroup;

  submitForm(): void {
    // for (const i in this.validateForm.controls) {
    //   this.validateForm.controls[ i ].markAsDirty();
    //   this.validateForm.controls[ i ].updateValueAndValidity();
    // }
  }

  get isHorizontal(): boolean {
    return this.validateForm.controls.formLayout && this.validateForm.controls.formLayout.value === 'horizontal';
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      formLayout: [ 'vertical' ],
      fieldA    : [ null, [ Validators.required ] ],
      filedB    : [ null, [ Validators.required ] ]
    });
  }

}
