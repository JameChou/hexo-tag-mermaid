## hexo-tag-mermaid
Version: 1.0.0

实际使用效果请访问:[Hexo流程图等插件安装教程](http://jcchow.com/2016/07/11/mermaid-sequence/)

## 安装
<div class="tip">
  目前此tag插件暂时还没有被Hexo官方收录。所以暂时手动去安装插件。
</div>

#### 添加依赖至package.json
`git clone https://github.com/JameChou/hexo-tag-mermaid.git your_blog/node_modules`在**package.json** 中手动添加依赖:
```json
"dependencies": {
  ...
  "hexo-tag-mermaid": "^1.0.0"
}
```

#### 添加mermaid依赖至主题模板里
进入`themes/your_theme_folder/layout/partial`目录，添加**mermaid**相关文件。以我使用的主题**apollo**为例。
head.jade 添加如下代码
```javascript
link(rel="stylesheet", href=url_for("https://cdn.bootcss.com/mermaid/6.0.0/mermaid.min.css"))
```

scripts.jade 添加如下代码
```javascript
script(src="//cdn.bootcss.com/mermaid/6.0.0/mermaid.min.js")
```

## 在你的博客中使用吧!
```
{% mermaid %}
  graph TB
           subgraph one
           a1-->a2
           end
           subgraph two
           b1-->b2
           end
           subgraph three
           c1-->c2
           end
           c1-->a2
{% endmermaid %}
```

<div class="tip">
  语法请访问:[mermaid syntax](http://knsv.github.io/mermaid/#flowcharts-basic-syntax)
</div>

<!-- more -->

## 例子

#### flowchart
```
{% mermaid %}
graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[Car]
{% endmermaid %}
```

#### Sequence diagram
```
{% mermaid %}
sequenceDiagram
    loop every day
        Alice->>John: Hello John, how are you?
        John-->>Alice: Great!
    end
{% endmermaid %}
```

#### Gantt diagram
```
{% mermaid %}
gantt
    dateFormat  YYYY-MM-DD
    title Adding GANTT diagram functionality to mermaid

    section A section
    Completed task            :done,    des1, 2014-01-06,2014-01-08
    Active task               :active,  des2, 2014-01-09, 3d
    Future task               :         des3, after des2, 5d
    Future task2               :         des4, after des3, 5d

    section Critical tasks
    Completed task in the critical line :crit, done, 2014-01-06,24h
    Implement parser and jison          :crit, done, after des1, 2d
    Create tests for parser             :crit, active, 3d
    Future task in critical line        :crit, 5d
    Create tests for renderer           :2d
    Add to mermaid                      :1d

    section Documentation
    Describe gantt syntax               :active, a1, after des1, 3d
    Add gantt diagram to demo page      :after a1  , 20h
    Add another diagram to demo page    :doc1, after a1  , 48h

    section Last section
    Describe gantt syntax               :after doc1, 3d
    Add gantt diagram to demo page      : 20h
    Add another diagram to demo page    : 48h
{% endmermaid %}
```
