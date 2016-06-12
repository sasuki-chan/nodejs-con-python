#!/usr/bin/env python

import numpy
import cv2
import sys

for v in sys.argv[1:]:		                # Ciclo para llamar los argumentos pasados por nodejs al script de python
  path = sys.argv[1]                      # El primer argumento que le recibe de nodejs es la ruta del archivo donde nodejs guardo la imagen
  print('La variable path es:  ',path)    # Aqui te muestra en la consola donde esta ubicada la imagen
  imagen= cv2.imread(path)                # Leemos la imagen basada en el path que recibio por parte de nodejs
  cv2.imshow("Ventana de imagen", imagen) # Mostramos la imagen en una ventana aparte
  cv2.waitKey(5000)                       # Tiempo programado en milisegundos para cerrar la imagen automaticamente
