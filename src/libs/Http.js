class Http {
  static instance = new Http();
  get = async (url) => {
    try {
      let req = await fetch(url);
      let json = await req.json();
      return json;
    } catch (error) {
      console.log('====================================');
      console.log(`Error [GET] ${url} `, error);
      console.log('====================================');
      throw Error(error);
    }
  };
  post = async (url, body) => {
    try {
      let req = await fetch(url, {
        method: 'POST',
        body,
      });
      let json = await req.json();
      return json;
    } catch (error) {
      console.log('====================================');
      console.log(`Error [POST] ${url} ${body}`, error);
      console.log('====================================');
      throw Error(error);
    }
  };
}
export default Http;
