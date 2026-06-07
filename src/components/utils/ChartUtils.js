export const generateYAxis = (
  values,
  step = 10,
  suffix = ""
) => {
  const maxValue = Math.max(...values);

  const roundedMax =
    Math.ceil(maxValue / step) * step;

  const labels = [];

  for (let i = roundedMax; i >= 0; i -= step) {
    labels.push(`${i}${suffix}`);
  }

  return labels;
};

export const generateLinePoints = (
  data,
  chartHeight = 120,
  startX = 50,
  gap = 75
) => {
  const maxValue = Math.max(
    ...data.map((item) => item.value)
  );

  return data
    .map((item, index) => {
      const x = startX + index * gap;

      const y =
        chartHeight -
        (item.value / maxValue) * (chartHeight - 20);

      return `${x},${y}`;
    })
    .join(" ");
};