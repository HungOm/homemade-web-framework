import { User } from "../models/User";
import { View } from "./Views";
export class UserForm extends View{






    eventsMap(): { [key: string]: () => void } {
        return {
            "click:.set-age": this.onSetAgeClick,
            "click:.set-name": this.onSetNameClick,
            "click:.save-model": this.onSaveClick,
            "mouseover:h1": this.onHeaderHover
        };
    }
  

    onSetAgeClick = ():void=> {
        this.model.setRandomAge();
    }

    onSetNameClick = (): void=> {
        const input = this.parent.querySelector('input');
        if (input) {
            const name = input.value;
            this.model.set({name})
        } else {
            console.error('Input element not found or invalid.');
        }
    }
    

    onSaveClick(): void {
        console.log("onSaveClick");
    }

    onHeaderHover(): void {
        console.log("onHeaderHover");
    }
 




    onButtonClick(): void {
        console.log("Hi there");
    }

    template(): string {
        return `
        <div>
            <h1>User Form</h1>
            <div>User name: ${this.model.get("name")}</div>
            <div>User age: ${this.model.get("age")}</div>
            <input />
            <button class="set-name">Change Name </button>
            <button class="set-age">Set Random Age</button>
        </div>
        `;
    }

 

}