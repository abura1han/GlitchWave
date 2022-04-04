## GlitchWave open-source react project

### [Table of contents](table-fo-contents)
- [What is GlitchWave?](#what-is-glitchwave)
- [Features](#features)
- [Work with GlitchWave](#work-with-glitchwave)

![GlitchWave demo screenshot](https://github.com/abura1han/GlitchWave/blob/main/Screenshot.png)
![](https://github.com/abura1han/GlitchWave/blob/main/Lighthouse-performance-score.png)

## What is GlitchWave?
GlitchWave is an open-source frontend project. It makes our life easy to work on the admin panel. No more work from scratch. Work with premaid admin panel. Easy to customize, add, remove features.

## Features
- Build with popular and latest technologys (`ReactJs, React-router-dom, TailwindCss3`).
- All device responsive.
- Minimal beautifyl UI. UX ready.
- Optimized for performence.

## Work with GlitchWave
### Site configaration `./src/configs.json` <br/>
`proxy` your backend server url. <br />
`defaultProductImage` will show if any product image not provided.
```json
{
    "sitename": "GlitchWave",
    "description": "B2B eCommerce administration",
    "proxy": "https://abura1han.github.io",
    "defaultProductImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOQJFJUWQbEuCOddUPTRU9xBJarkenHXq9dw&usqp=CAU", 
    "userName": "Abu Raihan",
    "userAvatar": "https://avatars.githubusercontent.com/u/74248037?v=4"
}
```

### Work with GlitchWave page `./src/pages/PageWrapper.tsx`
```js
/**
 * Create a new component and wrap that with PageWrapper
 * It will autometacally import header, sidenav to your page
 */
const MyNewPage: React.FC = () => {
  return (
    <PageWrapper>
      <div>
        <h2>Hello world!</h2>
        <button>Click me</button>
      </div>
    </PageWrapper>
    )
}
```

### Work with GlitchWave page content `./src/components/contents/ContentBox.tsx`
ContentBox component takes react childs and show them in a GlitchWave styled content section 
### Props
- `name`: The name of the content section
- `showSearch`: Show search box to the right top of the content section. Boolean. Default false.
- `children`: React children
```js

import ContentBox from "../components/contents/ContentBox.tsx"
import Button from "../components/Button.tsx"

const MyNewPage: React.FC = () => {
  return (
    <PageWrapper>
      <ContentBox>
        <h2>Hello world!</h2>
        <Button>Click me</Button>
      </ContentBox>
    </PageWrapper>
    )
}
```

### Add page link to sidenav.
GlitchWave provide a context to work with sidenav links `./src/context/PageContext.tsx`
```js
import {PageListContext} from "../context/PageContext.tsx";
imort React, {useContext, useState} from "react";

const MyComponent: React.FC = () => {
  const {pageList, setPageList} = useContext(PageListContext);
  
  // Read all pages
  console.log(pageList);
  
  // Add new page
  useEffect(() => {
    setPageList((prevPages) => [...prevPages, {label: "My brand new page", slug: "/my-brand-new-page", icon: "page"}])
  }, [setPageList])
  
  return (
    <ul>
      {pageList.map(({label, slug, icon}, i) => <li key={i}>{label}</li>)}
    </ul>
  )
}
```

### Sort post by tag
GlitchWave provide a component to work with Tagged posts/contents. `./src/components/SortBYTag.tsx`. <br />
Props
  - `tags` // Array ["Tag1", "Tag2"]
  - `defaultActiveIndex` // Number 1/2
```js
import SortByTag from "../components/SortByTag.tsx";

const MyComponent: React.FC = () => {
  return (
    <div>
      <SortByTag tags={["All posts", "Trending posts", "New posts"]} />
      
      {/* Custom default active button */}
      <SortByTag tags={["All posts", "Trending posts", "New posts"]} defaultActiveIndex={2} />
    </div>
  )
}
```

### Button
GlitchWave provide a component to work with GlitchWave styled Button. `./src/components/Button.tsx`. <br />
Props
  - `className`: Optional
  - `children`: React child
```js
import Button from "../components/Button.tsx";

const MyComponent: React.FC = () => {
  return (
    <div>
      <Button className="bg-gray-600 text-white">
        <span>Click me</span>
      </Button>
    </div>
  )
}
```