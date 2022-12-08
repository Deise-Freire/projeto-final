# projeto-final-2022-2-g3-kd
projeto-final-2022-2-g3-kd created by GitHub Classroom

# Comandos

git clone https://github.com/Prof-Fabio-Henrique/projeto-final-2022-2-g3-kd.git

cd projeto-final-2022-2-g3-kd

cd experiencein

git branch

git branch api

git branch 

*api

main

pip3 install django==2.2 

pip3 install djangorestframework

yarn start

git status -sb

git add .

git status -sb

git commit -m "initial comment"

git push

# Comandos para Ativar o Ambiente Virtual
venv\Scripts\activate.bat

source venv/bin/activate

# Instalações 

INSTALLED_APPS = [

    'rest_framework',

    'rest_framework.authtoken',

    'corsheaders',

]

# Páginas

## 1. perfis/

POST -> nome, empresa, telefone, email, contatos, senha | Cria perfil novo

GET -> id, noem e e-mail, pode_convidar | Recupera a lista de pefis (todos que constam no banco)

## 2. pefis/id

GET -> id, nome e email, pode_convidar | Recupera usuário com id informado

## 3. convites/

GET -> id, convidado, solicitante | Retorna todos os convites recebidos pelo usuário logado

## 4. convites/aceitar/id

POST -> aceita convite com id informado 

## 5. convites/convidar/id

POST -> envia convites para o perfil com id informado

## 6. login/

POST -> username, password | Retorna token de autenticação

4. Adicionar rest_framework ao "settings.py"

## Arquivos importantes

serializer.py na pasta perfil coleta os dados e converte os dados que chegam em formato binário para os tipos de 

variáveis presentes no python e salvar no banco

views.py retorna a parte visual da aplicação

## Classes importantes

classe ContatoSerializer

classe PerfilSerializer

classe PerfilSimplificadoSerializer

## Métodos importantes

create

token

## Campos 

email 

password 

pode_convidar


# Botões

Convidar

# Parte 1 (back-end API)

https://docs.google.com/document/d/1q2Q0z3VX69jPx4CuvBceaq2V84TvHyFD8K6-QFWCKIs/edit

# Parte 2 (front-end)

https://docs.google.com/document/d/173g-H_pYKYBQHZjItRzAdN4BZE7zrhwS_FFYib7Uazk/edit#heading=h.gb9358fehx93
