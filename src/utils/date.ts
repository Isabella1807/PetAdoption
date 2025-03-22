
export const formatDate = (unix: number) => {
  const baseDate = new Date(unix);

  //months start at 0, so add 1
  const monthDate = baseDate.getMonth();
  const monthList = ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'];
  const actualMonth = monthList[monthDate]

  const dayDate = baseDate.getDate();
  const yearDate = baseDate.getFullYear();

  return `${dayDate}. ${actualMonth} ${yearDate}`;
}
