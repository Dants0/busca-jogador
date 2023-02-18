import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)

export default function getYearsOld(born_date){
    return dayjs(born_date).fromNow(true)
}