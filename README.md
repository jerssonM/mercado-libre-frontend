# Mercado Libre - Prueba tecnica

> Desarrollado por Jersson Morales | [Linkedin](https://www.linkedin.com/in/jersson-stiven-morales-alza-022115183/)

[Url del proyecto](https://mercado-libre-frontend.vercel.app/)

#### Tecnologias usadas

- React.js
- Next.js (SSR y SEO) 
- Sass (Pre - procesador css)
- Jest & React-testing-libray (Pruebas unitarias)

#### Librerias adicionales

- currency.js (Formateo de decimales)
- react-responsive-carousel (Componente de carousel) 
- husky - lint-stagged (Validaciones de pruebas unitarias y linters previo a los commits)

#### Estructura  del proyecto

    frontend/
    |-- src/
    |   |-- __mocks__/  # Información de prueba para los componentes
    |   |-- __test__/   # Pruebas unitarias
    |   |-- components/ # Componentes generales
    |   |-- config/     # Archivos de configuración y constantes
    |   |-- pages/      # Paginas
    |   |-- utils/      # Utilidades generales
    |-----

#### Scripts

-  **yarn dev** : Ejecuta el proyecto en modo desarollo.
-  **yarn build** : Compila el proyecto para enviarlo a producción
-  **yarn start** : Ejecuta el proyeto compilado.
-  **yarn lint** : Corre el linter en el proyecto.
-  **yarn test** : Ejecuta las pruebas unitarias.
-  **yarn test-with-coverage** : Ejecuta las pruebas unitarias y genera un reporte del cubrimiento
    de las pruebas.


#### Coverage
![coverage](./coverage.png)

#### Capturas de pantalla

##### Desktop
<img width="1185" alt="CleanShot 2021-02-28 at 21 05 11@2x" src="https://user-images.githubusercontent.com/45905864/109443546-d5c95280-7a08-11eb-9820-030623fb7c1c.png">

##### Mobile
<img width="348" alt="CleanShot 2021-02-28 at 21 07 05@2x" src="https://user-images.githubusercontent.com/45905864/109443597-f0033080-7a08-11eb-844d-98ec74733e68.png">
