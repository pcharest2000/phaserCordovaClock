export default class MyTime {
    private lastTime: Date;
    private currentTime: Date;
    private lastHour: number;
    private lastMinute: number;
    private currentHour: number;
    private currentMinute: number;

    public currentHourTenth: number;
    public currentHourDigit: number;
    public currentMinuteTenth: number;
    public currentMinuteDigit: number;
    public lastHourTenth: number;
    public lastHourDigit: number;
    public lastMinuteTenth: number;
    public lastMinuteDigit: number;
    constructor() {
        this.lastTime = new Date();
        this.currentTime = this.lastTime;
        this.currentHour = this.currentTime.getHours();
        this.lastHour = this.currentHour;
        this.currentMinute = this.currentTime.getMinutes();
        this.lastMinute = this.currentMinute;

        this.currentMinuteDigit = Math.floor((this.currentMinute / 1) % 10);
        this.currentMinuteTenth = Math.floor((this.currentMinute / 10) % 10);
        this.currentHourDigit = Math.floor((this.currentHour / 1) % 10);
        this.currentHourTenth = Math.floor((this.currentHour / 10) % 10);

        this.lastMinuteDigit = Math.floor((this.currentMinute / 1) % 10);
        this.lastMinuteTenth = Math.floor((this.currentMinute / 10) % 10);
        this.lastHourDigit = Math.floor((this.currentHour / 1) % 10);
        this.lastHourTenth = Math.floor((this.currentHour / 10) % 10);

    }
    public timeChanged(): boolean {
        var newTime = new Date();
        if (this.currentMinute != newTime.getMinutes()) {
            this.currentMinute = newTime.getMinutes();
            this.currentHour = newTime.getHours();

            this.lastMinuteDigit = this.currentMinuteDigit;
            this.lastMinuteTenth = this.currentMinuteTenth;
            this.lastHourDigit = this.currentHourDigit;
            this.lastHourTenth = this.currentHourTenth;

            this.currentMinuteDigit = Math.floor((this.currentMinute / 1) % 10);
            this.currentMinuteTenth = Math.floor((this.currentMinute / 10) % 10);
            this.currentHourDigit = Math.floor((this.currentHour / 1) % 10);
            this.currentHourTenth = Math.floor((this.currentHour / 10) % 10);
            return true;
        }
        return false;
    }
}
