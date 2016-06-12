#!/usr/bin/env python

import numpy
import cv2
import sys

for v in sys.argv[1:]:
  print v
  
imagen= cv2.imread("image/python.jpeg")
cv2.imshow("Ventana de imagen", imagen)
cv2.waitKey(0)