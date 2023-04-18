function formatNumberWithCommas(num) {
  return num.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

export default formatNumberWithCommas;
