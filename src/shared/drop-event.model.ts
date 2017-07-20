export class DropEvent {
    nativeEvent: any;
    dragData: any;
    dropData: any;

    constructor(event: any, data: any, dropData: any) {
        this.nativeEvent = event;
        this.dragData = data;
        this.dropData = dropData;
    }
}
