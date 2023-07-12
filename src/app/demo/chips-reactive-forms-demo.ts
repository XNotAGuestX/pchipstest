import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'chips-reactive-forms-demo',
    templateUrl: './chips-reactive-forms-demo.html',
    styleUrls: ['./chips-reactive-forms-demo.scss']
})
export class ChipsReactiveFormsDemo implements OnInit {
    formGroup: FormGroup | undefined;

    ngOnInit() {
        this.formGroup = new FormGroup({
            values: new FormControl<string[] | null>(null)
        });
    }
}