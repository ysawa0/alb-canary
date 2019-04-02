exports.handler = (event, context, callback) => {
  const min = 1;
  const max = 6;
  const val = Math.floor(Math.random() * (max - min + 1)) + min;
  const alb_dns_name = process.env.alb_dns_name;
  const url = `http://${alb_dns_name}?id=${val}`;

  const headers = event.headers
  headers.Location = url
  console.log(event)
  const resp = {
    statusCode: 302,
    headers: headers
  };
  return callback(null, resp);
}