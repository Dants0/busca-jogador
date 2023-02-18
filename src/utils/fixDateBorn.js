import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)

export default function fixDateBorn(born_date){
    return console.log(dayjs(born_date).format('DD-MM-YYYY'))
}