import { Component, Output, EventEmitter } from '@angular/core';
import {  } from "uuid";

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter : EventEmitter<Character> = new EventEmitter;

  public character : Character = {
    name : '',
    power : 0
  }
  saveCharacter(){
    console.log(this.character);
    if (this.character.name.length === 0) {
      return;
    }

    this.onNewCharacter.emit(this.character)
    this.character = {name: '', power : 0}
  }
} 
