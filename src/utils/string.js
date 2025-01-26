export function cleanString(input, separate = "") {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "") // Remove all non-alphanumeric characters except spaces
    .replace(/\s+/g, separate); // Replace spaces with underscores
}
