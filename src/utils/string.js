export function cleanString(input, separate = "") {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, separate); // Replace spaces with underscores
}

export function sortArray(data) {
  const result = data.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return result;
}
