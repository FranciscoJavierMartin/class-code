export function formatDate(data: Date | string): string {
  const date = new Date(data);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}
