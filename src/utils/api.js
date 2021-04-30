export const requestProducts = async () => {
  try {
    const resp = await fetch('http://smartboxtest.getsandbox.com/products.json');
    return await resp.json();
  }
  catch (e) {
    console.log(e);
    throw e;
  }
}