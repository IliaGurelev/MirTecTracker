import { parse } from 'date-fns'

const parseTime = (time) => parse(time, 'HH:mm', new Date());

export default parseTime;