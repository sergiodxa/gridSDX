gridSDX
=======

Responsive grid framework made in Stylus.

Author: Sergio Daniel Xalambrí

Author URL: http://xalambri.com.ar/

Version: 1.3

Documentation
======
For use this grid framework you need NodeJS and Stylus installed, once you have installed them you can use:

@import gridSDX.styl

In your main.styl for compile together or you can use:

stylus -c gridSDX.styl

In terminal for compile in a separate file.


Inside gridSDX.styl you can configure the framework changing to true or false some variables.

Once you are ready for use this framework you only need to use the clases they have in your HTML.

The system is divided in 20 columns of 5% each, you have classes only for desktop (greater than 1000px), only for tablet (between 1000px and 640px) and only for mobile (less than 640px). If you need to add a greater margin you have the classes prefix and suffix.

The prefix class added a left margin and the suffix class added a right margin, you can use prefix and suffix between 5% and 95% of margin.