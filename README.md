# REACTPROJECT

npm i -D @testing-library/react
npm i -D jest
npm install --save-dev babel-jest @babel/core @babel/preset-env
.parcelrc---> 
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}