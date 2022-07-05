## Requirements

```
Node version v18.4.0
Npm version 8.12.1
```

## Project Setup

```sh
npm install
```
#### Create env file and add your key
```sh
touch .env
```

```
VITE_CMC_PRO_API_KEY=
```
#### Start browser ignoring web security. For example
Use the command line
```sh
chromium-browser --disable-web-security --user-data-dir="[some directory here]"
```
or install the extension
```
https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf/related
```

```sh
npm run dev
```
Go to 
```
http://localhost:3000
```
