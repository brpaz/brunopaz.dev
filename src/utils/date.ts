import { format } from 'date-fns'

export function formatShortDate(date: Date) {
    return format(date, 'MMM yyyy');
}

export function formatPostDate(date : Date) {
    return format(date, 'dd MMMM yyyy');
}