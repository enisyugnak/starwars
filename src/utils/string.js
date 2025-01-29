export function cleanString(input, separate = "") {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "") // Remove all non-alphanumeric characters except spaces
    .replace(/\s+/g, separate); // Replace spaces with underscores
}

export function sortArray(data) {
  const result = data.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return result;
}
