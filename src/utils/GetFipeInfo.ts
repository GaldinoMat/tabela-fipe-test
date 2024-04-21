export default async function getFipeInfo(
  brand?: string,
  model?: string,
  year?: string
) {
  let url = `https://parallelum.com.br/fipe/api/v1/carros/marcas`;

  if (brand) url = url.concat(`/${brand}/modelos`);

  if (model) url = url.concat(`/${model}/anos`);

  if (year) url = url.concat(`/${year}`);

  return await fetch(url)
    .then((resp) => resp.json())
    .catch((error) => console.error(error));
}
