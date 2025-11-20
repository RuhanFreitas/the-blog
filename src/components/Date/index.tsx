import { formatDateTime } from '@/src/utils/format-datetime';
import { formatDistanceToNow } from 'date-fns';

type DateProps = {
    dateTime: string;
};

export function Date({ dateTime }: DateProps) {
    return (
        <time
            className="text-slate-600 text-sm/tight"
            dateTime={dateTime}
            title={formatDistanceToNow(dateTime)}
        >
            {formatDateTime(dateTime)}
        </time>
    );
}
