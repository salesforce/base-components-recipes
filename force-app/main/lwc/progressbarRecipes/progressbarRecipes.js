import { LightningElement, track } from 'lwc';

export default class ProgressBarRecipes extends LightningElement {   
    @track progress = 0;
    @track isProgressing = false;

    get computedLabel() {
        return this.isProgressing ? 'Stop' : 'Start';
    }

    toggleProgress() {
        if (this.isProgressing) {
            // stop
            this.isProgressing = false;
            clearInterval(this._interval);
        } else {
            // start
            this.isProgressing = true;
            // eslint-disable-next-line lwc/no-set-interval
            // eslint-disable-next-line @lwc/lwc/no-async-operation
            this._interval = setInterval(() => {
                this.progress = this.progress === 100 ? 0 : this.progress + 1;
            }, 200);
        }
    }

    disconnectedCallback() {
        // it's needed for the case the component gets disconnected
        // and the progress is being increased
        // this code doesn't show in the example
        clearInterval(this._interval);
    }   
}
