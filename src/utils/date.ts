import { format } from 'date-fns'

/**
 * Format a date to a short date string
 * @todo Replace with Intl.DateTimeFormat
 */
export function formatShortDate(date: Date) {
    return format(date, 'MMM yyyy');
}

