# Fonte da ideia
Professor Ph.D. Fábio Henrique Monteiro de Oliveira

# Sobre o trabalho
Projeto para ser apresentado ao professor Ph.D. Fábio H. M. Oliveira como parte dos requisitos para aprovação na disciplina Programação para Internet II.

# Sobre o projeto 
Projeto guiado pelo professor Ph.D. Fábio H. M. de Oliveira de um protótipo de rede social. 

# Comandos

git clone https://github.com/Prof-Fabio-Henrique/...git

cd projeto-final-2022-2-g3-kd

cd experiencein

git branch

git branch api

git branch 

*api

main

pip3 install django==2.2 

pip3 install djangorestframework

> pythonanywhere

pip3 install django==2.2 django-rest-framework django-cors-headers

source experiencein-virtualenv/bin/activate

experiencein-virtualenv\Scripts\activate.bat

/home/kalitadeise2/.virtualenvs/experiencein-virtualenv

mkvirtualenv experiencein-virtualenv --python=/usr/bin/python3.10

mkvirtualenv experiencein-virtualenv --python=/usr/bin/python3.7

mkvirtualenv --python=/usr/bin/python3.7 experiencein-virtualenv

mkvirtualenv virtualenvs --python=/usr/bin/python3.10

/home/kalitadeise2/experiencein-backend 

python manage.py collectstatic

yarn start

git status -sb

git add .

git status -sb

git commit -m "initial comment"

git push

python -V

# Comandos para Ativar o Ambiente Virtual
venv\Scripts\activate.bat

source venv/bin/activate

# Instalações 

distlib==0.3.4

Django==2.2

django-cors-headers==3.13.0

django-rest-framework==0.1.0

djangorestframework==3.13.1

filelock==3.7.1

importlib-metadata==4.11.4

platformdirs==2.5.2

pytz==2022.1

six==1.16.0

sqlparse==0.4.2

typing-extensions==4.2.0

virtualenv==20.14.1

zipp==3.8.0

Python==3.7.9

# Configurações

INSTALLED_APPS = [

    'rest_framework',

    'rest_framework.authtoken',

    'corsheaders',

]

## Criando perfis no banco

python manage.py shell 

>>> from perfis.models import Perfil

>>> perfil = Perfil(nome='Oswaldo', email='oswaldo@oswaldo.com', telefone='n/a', nome_empresa='IFB')

>>> perfil.save()

>>> perfil_encontrado = Perfil.objects.get(id=1)

>>> perfil_encontrado.nome = 'Oswaldo Alterado'

>>> perfil_encontrado.save()

>>> perfil_encontrado = Perfil.objects.get(id=1)

>>> perfil_encontrado.nome

>>> perfil = Perfil.objects.create(nome='Steve', email='steve@minecraft.com', telefone='n/a', nome_empresa='IFB')

>>>

## Buscando perfis

python manage.py shell

>>> from perfis.models import Perfil

>>> p = Perfil.objects.get(id=1) #Perfil 1 deve existir

>>> p.nome

>>> p = Perfil.objects.get(nome='Steve') #Steve deve existir

>>> p.id

## Filtrando perfis

python manage.py shell

>>> from perfis.models import Perfil

>>> perfis = Perfil.objects.filter(email__contains='s')

>>> perfis = Perfil.objects.filter(email__contains='s')

>>> perfis = Perfil.objects.filter(email__icontains='s')

>>> perfis = Perfil.objects.filter(email__startswith='s')


## Selecionando perfis de uma lista

python manage.py shell

>>> from perfis.models import Perfil

>>> perfil1 = Perfil(nome='Fábio Henrique', email='teste1@ifb.edu.br', telefone='n/a', nome_empresa='IFB')

>>> perfil1.save()

>>> perfil2 = Perfil(nome='Tiago Henrique', email='teste2@ifb.edu.br', telefone='n/a', nome_empresa='IFB')

>>> perfil2.save()


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

Contato


# Botões

Convidar

Aceitar

Logout

Login

## `Links`

[virtualenv](https://pypi.python.org/pypi/virtualenv)

[venv](https://www.python.org/dev/peps/pep-0405)

[Estrutura REST do Django](https://www.django-rest-framework.org/)

[Sintaxe Markdown](https://eadeje.tse.jus.br/pluginfile.php/140952/mod_resource/content/3/Como%20Formatar%20Seu%20Texto%20no%20Trello.pdf)

