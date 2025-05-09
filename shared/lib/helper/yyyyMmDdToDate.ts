export default function yyyyMmDdToDate(dateStr: string): Date {
  const [year, month, day] = dateStr.split('-').map(v => {
    if(v.includes('T')) v = v.slice(0, 2)
    return Number(v) as number
  });
  return new Date(year, month - 1, day); // JS는 month가 0부터 시작함
}
