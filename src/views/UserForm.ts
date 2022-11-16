export class UserForm{

    constructor( public parent: Element) {}



    eventsMap(): { [key: string]: () => void } {
        return {
            "click:.set-age": this.onSetAgeClick,
            "click:.set-name": this.onSetNameClick,
            "click:.save-model": this.onSaveClick,
            "mouseover:h1": this.onHeaderHover
        };
    }

    onSetAgeClick(): void {
        console.log("onSetAgeClick");
    }

    onSetNameClick(): void {
        console.log("onSetNameClick");
    }

    onSaveClick(): void {
        console.log("onSaveClick");
    }

    onHeaderHover(): void {
        console.log("onHeaderHover");
    }
 

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();
        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(":");
            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventKey]);
            });
        }
    }



    onButtonClick(): void {
        console.log("Hi there");
    }

    template(): string {
        return `
        <div>
            <h1>User Form</h1>
            <input />
        </div>
        `;
    }

    render(): void {
        const templateElement = document.createElement("template");
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content);
        this.parent.append(templateElement.content);
    }

}