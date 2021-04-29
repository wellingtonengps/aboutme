CONFIGURACAO DE SETUP REACT-NEXT-STYLED-TYPE

yarn create next-app

yarn add typescript @types/react @types/node -D

yarn add gh-pages


"predeploy":"next build && next export",
"deploy": "gh-pages -b master -d out"
