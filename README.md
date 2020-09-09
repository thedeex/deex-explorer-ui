

Start development server, explorer will listen in http://localhost:9000:

```
npm start
```

Build bundle and move to www:

```
npm run start:build
cp -rf dist/* /var/www/deex-explorer/public_html/
```
