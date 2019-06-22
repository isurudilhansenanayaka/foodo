import { Injectable } from '@angular/core';
import { UserProfiles } from './user-profiles.model';

@Injectable({
  providedIn: 'root'
})
export class UserProfilesService {
  formData=UserProfiles;

  constructor() { }
}
