gridSDX
=======

Responsive grid framework made in Stylus.

Author: Sergio Daniel Xalambrí

Author URL: http://xalambri.com.ar/

Version: 1.4.0

Documentation
======

Englis
=====
For use this grid framework you need NodeJS and Stylus installed, once you have installed them you can use:

@import gridSDX.styl

In your main.styl for compile together or you can use:

stylus -c gridSDX.styl

In terminal for compile in a separate file.


Inside gridSDX.styl you can configure the framework changing to true or false some variables.

Once you are ready for use this framework you only need to use the clases they have in your HTML.

The system is divided in 20 columns of 5% each, you have classes only for desktop (greater than 1000px), only for tablet (between 1000px and 640px) and only for mobile (less than 640px). If you need to add a greater margin you have the classes prefix and suffix.

The prefix class added a left margin and the suffix class added a right margin, you can use prefix and suffix between 5% and 95% of margin.

Español
=====
Para usar este framework de grillas necesitas NodeJS y Stylus instalados, cuando los tengas instalado entonces puedes usar:

@import gridSDX.styl

En su main.styl para compilarlos juntos o puede usar:

stylus -c gridSDX.styl

En la terminal para compilar en un archivo separado.


Dentro de gridSDX.styl puedes configurar el framework cambiando a true o false algunas variables.

Cuando estes listo para usar este framework solo necesitas usas las clases que éste posee en su HTML.

El sistema esta dividido en 20 columnas de 5% cada una, puedes usar clases solo para escritorio (mayor a 1000px), solo para tablets (entre 1000px y 640px) y solo para móviles (menor que 640px). Si necesitas agregar un margen mayor tienes las clases prefix y suffix.

La clase prefix agrega un margen a la izquierda y la clase suffix lo agrega a la derecha, puedes colocar prefix y suffix entre 5% y 95% de margen.