## 注意

css-loader 版本大于 7 时, 使用 css modules 则引用时默认没有 default

```jsx
import * as styled from "xxx"; // 大于7的版本
import styled from "xxx"; // 小于7的版本
```
