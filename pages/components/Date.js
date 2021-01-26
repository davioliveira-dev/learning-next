import { format, parseISO } from "date-fns";

export default function Date({ dateString }) {
  return (
    <time dateTime={dateString}>
      {dateString}
    </time>
  )
}