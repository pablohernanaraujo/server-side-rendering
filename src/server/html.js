export default function html (options) {
  const {
    app = 'main',
    title = 'SSR',
    markup,
    initialState
  } = options;

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>${title}</title>

      </head>

      <body>
        <div id="root">${markup}</div>

        <script>
          window.initialState = ${JSON.stringify(initialState)};
        </script>
        ${process.env.NODE_ENV === 'development' ? '' : '<script src="/app/vendor.bundle.js"></script>'}
        <script src="/app/${app}.bundle.js"></script>
      </body>
    </html>
  `;
}
