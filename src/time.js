import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import 'dayjs/locale/es.js';

dayjs.extend(utc);
dayjs.locale('es');

export function horaActual() {
    return dayjs().format('HH:mm:ss');
}

export function fechaCompleta() {
    return dayjs().format('dddd D [de] MMMM [de] YYYY, HH:mm:ss');
}