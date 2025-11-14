import { add, format, formatDistanceToNow as formatDistanceToNowFNS } from 'date-fns';
import { enUS } from 'date-fns/locale';

export function formatDateTime(rawDate: string): string {
    const date = new Date(rawDate);

    return format(date, 'yyyy-MM-dd HH:mm', { locale: enUS });
}

export function formatDistanceToNow(rawDate: string): string {
    const date = new Date(rawDate);

    return formatDistanceToNowFNS(date, { locale: enUS, addSuffix: true });
}
