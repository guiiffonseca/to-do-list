export default function formatDate(date: string) {
  const getDate = date.split('-');

  const year = getDate[0];
  const month = getDate[1];
  const day = getDate[2];

  const formattedDate = `${day}/${month}/${year.slice(2)}`;

  return formattedDate;
}
