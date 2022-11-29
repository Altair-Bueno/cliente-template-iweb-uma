# Cargar los secretos en fly
cat .env | flyctl secrets import
# Desplegar
flyctl deploy
# Generar el spec openapi
curl https://cliente-iweb-uma.fly.dev/openapi.json > ../openapi.json
