import {Component, inject} from '@angular/core';
import {QualificationComponent} from "./qualification/qualification";
import {QualificationService} from "../services/qualification.service";

@Component({
    selector: 'sh-qualification-page',
    templateUrl: './qualification-page.html',
    imports: [
        QualificationComponent
    ],
    styleUrl: './qualification-page.scss'
})
export class QualificationPageComponent {
    private readonly qualificationService = inject(QualificationService);
    qualifications = this.qualificationService.getAll();
}
