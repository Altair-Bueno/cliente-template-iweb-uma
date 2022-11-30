export async function post({ request }) {
  const formData = await request.formData();
  console.log(formData);
  return {
    body: JSON.stringify({ redirect: formData.get("url") }),
  };
}
