import { add, format, formatDistanceToNow } from 'date-fns';
import { enUS } from 'date-fns/locale';

export function formatDateTime(rawDate: string): string {
    const date = new Date(rawDate);

    return format(date, 'yyyy-MM-dd HH:mm', { locale: enUS });
}

export function formatRelativeDate(rawDate: string): string {
    const date = new Date(rawDate);

    return formatDistanceToNow(date, { locale: enUS, addSuffix: true });
}
