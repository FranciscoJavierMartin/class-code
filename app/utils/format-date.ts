export function formatDate(data: Date | string): string {
  const date = new Date(data);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}

export function seconds2Hours(seconds: number): string {
  return (seconds / 3600).toPrecision(2);
}

export function seconds2Minutes(seconds: number): string {
  return (seconds / 60).toPrecision(2);
}

export function formatTime(duration: number): string {
  return duration >= 7200
    ? `${seconds2Hours(duration)} hours`
    : duration >= 3600
      ? `${seconds2Hours(duration)} hour`
      : `${seconds2Minutes(duration)} minutes`;
}
