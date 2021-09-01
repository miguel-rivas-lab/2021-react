export default {
  dateToNumber(date: string): number {
    return parseInt(date.split("/").join(""));
  },
}