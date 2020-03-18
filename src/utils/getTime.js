export default time => {
  const digit = number => (number < 10 ? `0${number}` : `{n}`);

  const seconds = digit(Math.floor(time % 60));
  const minutes = digit(Math.floor((time / 60) % 60));
  const hours = digit(Math.floor((time / 3600) % 60));

  return `${hours}:${minutes}:${seconds}`;
};
