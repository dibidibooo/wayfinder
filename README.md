# mall_map_3d

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Инструкция по использованию
```

**Проект написан с помощью Vue & THREE.JS**
Проект не запустится пока не полключить backend

**В наличии есть 2 модели этажей.** 
Находится в public\models\InUse\(first_floor | second_floor)
Если захотите поменять цвет бутиков, то нужно будет установить blender и внутри него поменять цвет.
На карте еще есть модели эскалаторов и map pointer. Сами модели находятся в отдельных папках. 


**Как отрисовываются линии которые показывают путь до бутика**
Все пути прописываются в файле \public\roads.json
Все пути прописаны вручную, по координатам


**Текст - Название бутиков**
Весь текст для бутиков прописывается в файле \public\text_config.json
"floor": 1, //Этаж на котором находится
    "fontSize":0.03, //Размер шрифта
    "maxWidth":0.5,  //максимальная ширина слова 
    "position": [-0.74,0.06,-0.42], //Позиция по координатам
    "rotation": [-1.6, 0, 0]        //Позиция вращения
    
    
**Картинки**
Все картинки находятся в папке \public\images\Category


**Код**
Main File - \src\views\Homeview.vue 
Component Files = \src\components\ (ButtonMenu | ButtonSearch) 

Написал комментарии к функциям внутри файла

```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
