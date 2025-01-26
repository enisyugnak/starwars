/**
 *
 * Fetch url
 * @param {*} url
 * @returns result json
 */
export const fetcUrl = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error fetching data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Error fetching data");
  }
};
/**
 *
 * Fetch all urls and merge them in a single json
 * @param {*} Array of Url's
 * @returns json merged
 */
export const fetchAll = async (urls) => {
  // Server  Data fetched in 0.211 seconds.
  if (urls.length) {
    try {
      const fetchPromises = urls.map((url) =>
        fetch(url).then((res) => res.json()),
      );
      const data = await Promise.all(fetchPromises);
      const mergedData = [].concat(...data);
      // todo: merge result in one array...
      return mergedData;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw new Error("Error fetching data");
    }
  }
};

/**
 *
 * Fetch all urls from api if there is next url
 * @param {url} Single url
 * @returns json
 */
export const fetchPaginatedData = async (url) => {
  //const startTime = checkTime();
  let results = [];
  let nextUrl = url;

  while (nextUrl) {
    try {
      const response = await fetch(nextUrl);
      if (!response.ok) throw new Error("Error fetching data");
      const data = await response.json();
      results = results.concat(data.results);
      nextUrl = data.next;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw new Error("Error fetching data");
    }
  }
  //checkTime(startTime);
  return results;
};

function checkTime(endtime) {
  const startTime = Date.now();
  if (endtime) {
    const timeTaken = (startTime - endtime) / 1000;
    console.log(`Data fetched in ${timeTaken} seconds.`);
    return timeTaken;
  }
  return Date.now();
}
