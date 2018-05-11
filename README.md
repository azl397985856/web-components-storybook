# Intro
Storybook designed  for web components  inspired by react-storybook.

You can either write web components or react components storybook here.

It's just a playground! o(^▽^)o

## Get Started

`clone repository`

```bash

git clone https://github.com/azl397985856/web-components-storybook.git

git remote rm origin

```

`install dependencies`

```bash

npm i

```

`dev`

```
npm run start

```


## Write Stories
All the stories should be written inside the stories folder which located at the root folder.

You can follow the structions of the example folder.

More details about writting a story, please move to the api section

## API

the core api is `storiesOf`.

storiesOf is a funtion which take componentName in and
return this(an Object). 

> This action will add menu to the left.

```js

// String => Object
storiesOf('componentName')

```

the returned Object(this) has methods below,
and all of them return this, just like soriesOf itself.

- add(suiteName, function)

an example of the `function`

```js

props => (
      <duiba-calendar
        startTime={props.startTime}
      />
)

```

duiba-calendar can be either a react component or web component

> This action will add subMenu to the left appended to the menu which you defined above.

Your component need props from upstream at most cases, 
and if you do, you should put the props into the model with namespace.

> namespace is a place where we put your components in.
it consist of two parts , `${componentName}/${suiteName}`

something like this:

```js
import moment from "moment";

export default {
  namespace: "codelab",
  state: {
    "/example/basic": {
      showHeader: false,
      startTime: moment(1512132974336),
      endTime: moment(1514724974336),
      currentTime: moment(1512432000000)
    }
  },
};


```

- desc(desc)

> This action will add description to the right panel

- api(api)

> This action will add api to the right panel, playground will be added too.

api is an Object, basicly filled with `type` and `api`,

type should be one the types listed below:

- Number

- Object('nothing to display, to be implemented')

- Boolean

- Date

- String(if the api iteself contains options, will render Select instead)

`api` should have props of `name`(required) , 'desc', 'type', 'defaultValue'

an example of the api

```js

 {
  signin: { type: Function },
  showHeader: {
    type: Boolean,
    api: {
      name: "showHeader",
      desc: "是否显示日历头部",
      type: "Boolean",
      defaultValue: ""
    }
  },
  startTime: {
    type: Date,
    api: {
      name: "startTime",
      desc: "日历的开始时间",
      type: "TimeStamp",
      defaultValue: ""
    }
  },
  endTime: {
    type: Date,
    api: {
      name: "endTime",
      desc: "日历的结束时间",
      type: "TimeStamp",
      defaultValue: ""
    }
  },
  currentTime: {
    type: Date,
    api: {
      name: "currentTime",
      desc: "当前时间",
      type: "TimeStamp",
      defaultValue: ""
    }
  },
  calendarType: {
    type: String,
    options: ["native", "normal"],
    api: {
      name: "calendarType",
      desc: "枚举值（native | normal）",
      type: "String",
      defaultValue: ""
    }
  },

  monthResignedMap: {
    type: Object,
    api: {
      name: "monthResignedMap",
      desc: "签到的映射表；形如{1: true, 11: true}",
      type: "Object",
      defaultValue: ""
    }
  },
  monthSignedMap: {
    type: Object,
    api: {
      name: "monthSignedMap",
      desc: "补签的映射表；形如{1: true, 11: true}",
      type: "Object",
      defaultValue: ""
    }
  },
  count: {
    type: Number,
    title: "",
    api: {
      name: "count",
      desc: "折叠起来的时候显示的日期个数",
      type: "Number",
      defaultValue: ""
    }
  },
  todayIndex: {
    type: Number,
    title: "",
    api: {
      name: "todayIndex",
      desc: "折叠的时候今天显示在第几个",
      type: "Number",
      defaultValue: ""
    }
  }
}

```

## Deploy

```bash

npm run build

```

## Style Guide

the recommanded way to write your stories

```
  --- stories
     ---- example
       ----- api.js       // api of the component
       ----- index.js     // main
       ----- index.less   // style

```
 
## Licence
MIT

## Contribution

You'r welcome~
