const helpers = {
  dateToNumber(date: string): number {
    return parseInt(date.split("/").join(""));
  },
}

export default helpers;