import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() public characterList: Character[] = []

  @Output()indexCharacter : EventEmitter<string>= new EventEmitter;

  onDeleteCharacter(id? : string){
    if(!id){return}
    console.log({id});

    this.indexCharacter.emit(id);
  }
}
