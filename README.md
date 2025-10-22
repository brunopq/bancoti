# Bancoti
Banco de dados de processos jurídicos

## Quickstart
Para executar a aplicação localmente, certifique-se de ter o Bun, Node e Docker instalados em sua máquina.

Primeiro, crie o arquivo .env

```bash
cp .env.example .env
```

Para subir a aplicação

```bash
docker compose up -d
bun install
bun dev
```

O servidor deve iniciar na porta 3030, acesse [http://localhost:3030/ui](http://localhost:3030/ui) para ver a documentação gerada pelo Swagger.

## Banco de dados

Caso seja necessário alterar o esquema do banco de dados, utilize o comando

```bash
bun db:generate
```

## Releases

Para gerar uma release automáticamente, crie uma tag no formato `v0.0.0` e suba ela para o github.

```
git commit -m "alterações"
git tag v1.20.4
git push origin tag v1.20.4
```