import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {

  newName: string = '';
  errorMessage: string;
  names: any[] = [];
  tituloref: FirebaseObjectObservable<any>;
  personas: FirebaseListObservable<any>;
  business: FirebaseListObservable<any>;
  newPerson: any = {};
  newBusiness: any = {};

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService, af: AngularFire) {
        this.personas= af.database.list('/users');
        this.business= af.database.list('/business');
        //this.resetPerson();

  }

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getNames();
  }

  /**
   * Handle the nameListService observable
   */
  getNames() {
    this.nameListService.get()
      .subscribe(
        names => this.names = names,
        error => this.errorMessage = <any>error
      );
  }
    
  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    // TODO: implement nameListService.post
    this.names.push(this.newName);
    this.newName = '';
    return false;
  }
  
  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addPerson(): boolean {
    // TODO: ad person to firebase
      console.log(this.newPerson);
    this.personas.push(this.newPerson);
    this.newPerson = {};
    return false;
  }
  
  addBusiness(): boolean {
    // TODO: add business to firebase
      console.log(this.newBusiness);
    this.business.push(this.newBusiness);
    this.newBusiness = {};
    return false;
  }
}
