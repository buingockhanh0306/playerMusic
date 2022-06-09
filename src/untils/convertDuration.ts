export function convertDuration(time: string | undefined):number{
    if(time) {
        const timeArr = time.split(':');
        const minutes = Number(timeArr[0])*60;
        const second = Number(timeArr[1]);
        return minutes + second;
    }
    else return 0
}