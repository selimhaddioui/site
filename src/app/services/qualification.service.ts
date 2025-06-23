import {Injectable} from '@angular/core';
import {Qualification} from '../models/qualification.model';
import {QUALIFICATIONS} from '../data/qualifications';

@Injectable({providedIn: 'root'})
export class QualificationService {
  private Qualifications: Qualification[] = QUALIFICATIONS;

  getAll(): Qualification[] {
    return this.Qualifications;
  }

  getById(id: number): Qualification | undefined {
    return this.Qualifications.find(Qualification => Qualification.id === id);
  }

  getByIds(ids: number[]): Qualification[] {
    return this.Qualifications.filter(Qualification => ids.includes(Qualification.id));
  }
}
