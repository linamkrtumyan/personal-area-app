let baseURL = "http://localhost:8080";

export default async function request(
  url,
  method = "GET",
  body = null,
  headers = {}
) {
  if (body) {
    body = JSON.stringify(body);
    headers["Content-Type"] = "application/json";
  }

  const response = await fetch(baseURL + url, {
    method,
    body,
    headers,
  });

  const data = await response.json();

  return data;
}
