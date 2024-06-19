import { parse } from 'date-fns'

const parseTime = (time) => parse(time, 'HH:mm:ss', new Date());

export default parseTime;