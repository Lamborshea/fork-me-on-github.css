# fork-me-on-github.css

Design 'GitHub Ribbons ' by CSS

![ Fork me on GitHub](http://qiniu.xienanbo.com/fork-me-on-github-black.jpg)

## Usage

1. add `<link rel="stylesheet" href="path of forkMeOnGitHub.css">` in your `HTML` file head.
1. add `<span>` tag with Id name is `forkMeOnGitHub`.
1. add `<a>` tag in `<span>` tag with href which is you GitHub Link and content is `Fork me on GitHub`.

Just like the this:

```HTML
<head>
    <link rel="stylesheet" href="path/to/fork-me-on-github.css">
</head>
<body>
    <!-- default theme -->
    <span class="fork-me-on-github">
        <a href="https://github.com/lamborshea/lamborshea">Fork me on GitHub</a>
    </span>

    <!-- red theme -->
    <span class="fork-me-on-github-red">
        <a href="https://github.com/lamborshea/lamborshea">Fork me on GitHub</a>
    </span>

    <!-- blue theme -->
    <span class="fork-me-on-github-blue">
        <a href="https://github.com/lamborshea/lamborshea">Fork me on GitHub</a>
    </span>

    <!-- yellow theme -->
    <span class="fork-me-on-github-yellow">
        <a href="https://github.com/lamborshea/lamborshea">Fork me on GitHub</a>
    </span>

    <!-- white theme -->
    <span class="fork-me-on-github-white">
        <a href="https://github.com/lamborshea/lamborshea">Fork me on GitHub</a>
    </span>
</body>
```

default theme
![default theme](http://qiniu.xienanbo.com/fork-me-on-github-black.jpg)

red theme
![default theme](http://qiniu.xienanbo.com/fork-me-on-github-red.jpg)

blue theme
![default theme](http://qiniu.xienanbo.com/fork-me-on-github-blue.jpg)

yellow theme
![default theme](http://qiniu.xienanbo.com/fork-me-on-github-yellow.jpg)

white theme
![default theme](http://qiniu.xienanbo.com/fork-me-on-github-white.jpg)

## Feature

- Designed by CSS entirely.
- Responsive: when screen width is lower than 768px, the `Fork me on GitHub` ribbon won't display.

## ToDoList

- [ ] add position options class "left/right".
- [x] add theme "red green yellow gray'.
