# devops Sample

### kong
Neste foi configurado o kong para uso local, para iniciar antes é necessário uma etapa de configuração.

- Inicie o cassandar

```bash
$ make cassandra-initialize
```

- Ao iniciaro cassandra não interrompa e execute em seguinda

```bash
$ make kong-initialize
```

- Se tudo ocorrer bem, para esses serviços executados anterior e apenas execute o comando:

```bash
$ make start
```

NOTE: é possível ocorrer erros ao executar o kong com o banco de dados cassandra, sugiro tentar novamente ou remove a pasta "./data" e refazer o processo desde o primero passo.

### api-1 e api-2

Neste projeto tem exemplo de duas api's, cada uma configurada para ser exposta via kong, entre em cada e execute:

```bash
$ make start
```

### ansible-playbooks
Nele tem os comandos exemplos para o uso do ansbile com o host localhost

Para executar, basta entrar no diretório "./ansible-playbooks" e executar:
```bash
$ make kong
```
Ou
```bash
$ make tasks
```

### nginx-dns-map
Este projeto faz configuração do "/etc/hosts" e usa tem pro finalizade fazer proxy de dns em produção para o localhost.
Use o mesmo para fazer o exemplo "hello.com".

https://github.com/icastro085/nginx-dns-map
