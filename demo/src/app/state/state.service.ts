import { Injectable } from '@angular/core';

export interface StateModel {
  title: string;
  isLoading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class StateService {
  model: StateModel = {
    title: 'Demo',
    isLoading: false
  }
  constructor() { }
}
