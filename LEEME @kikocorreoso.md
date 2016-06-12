# Conectar nodejs con python para analizar imagen con opencv

@kikocorreoso muchas gracias por tu ayuda por fin lo hemos resuelto asi que como lo prometi aqui esta el codigo por si
alguien mas necesita hacer esto o parecido.

Para ejecutar el codigo solo tienes que situar una terminal en la carpeta donde este el codigo y poner el siguiente comando:
          node server.js       o sino pone       nodejs server.js  
          NOTA: te funcionara una de las dos asi que no hay de que preocuparse.
          
Y poner el navegador localhost:8080 para tomar la foto y enviarsela al servidor
          
          
En el lado del navegador no tenes que preocuparte por nada.

En el lado del servidor (NODE.JS) para que corra tu codigo tienes que tener instalado las siguientes dependencias:

Las pueden instalar poniendo en su terminal asi de simple:  npm install nombre_de_la_dependecia
ejemplo: npm install formidable          Asi de simple

1- express (en su version 3.4) para instalarla tienes que poner en la terminal:     npm install express@3.4 
NOTA: porque de lo contrario te instalara la version 4 que no es compatible con la version del codigo.
      
2- formidable

3- python-shell


En el lado del script del python tienes que tener instalado el modulo opencv:

1- opencv

De la siguiente manera poner esto en tu terminal: pip install opencv

NOTA MUY IMPORTANTE: Para instalar el modulo de opencv para python, tienes que tener primero instalado el opencv en tu pc.
Explicar como instalar opencv en tu sistema operativo es algo complejo como para ponerlo en un archivo leeme
asi que te toca buscarlo, no te preocupes veras que es bastante facil, hay bastante ayuda para eso.

Nota: uso ubuntu 12.04 

      con nodejs 0.10.37
      
      python 2.7
      
En esto lo he probado pero no importa que sistema operativo uses, solo tienes que tener instaladas las
dependencias y los lenguajes de programacion tanto como python como nodejs y listo ya tenes el codigo corriendo.
