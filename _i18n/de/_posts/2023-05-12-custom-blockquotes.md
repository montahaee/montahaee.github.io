---
layout: post
title: Benutzerdefinierten Blockquotes
date: 2023-05-12 15:53:00-0400
description: Ein Beispiel für einen Blogbeitrag mit benutzerdefinierten Blockquotes
categories: Normal-Posts Blockzitate
giscus_comments: true
related_posts: true
---
Dieser Post zeigt, wie man auf Basis der [jekyll-gitbook](https://github.com/sighingnow/jekyll-gitbook) Implementierung benutzerdefinierte Stile für Blockzitate hinzufügen kann.

Wir haben uns entschieden, die gleichen benutzerdefinierten Blockzitate wie in [jekyll-gitbook](https://sighingnow.github.io/jekyll-gitbook/jekyll/2022-06-30-tips_warnings_dangers.html) zu unterstützen, die auch in vielen anderen Stilen von Websites zu finden sind. Die Stildefinitionen finden sich in der [_base.scss](https://github.com/alshedivat/al-folio/blob/master/_sass/_base.scss)-Datei, genauer gesagt:

```scss
/* Tipps, Warnungen und Gefahren */
.post .post-content blockquote {
  &.block-tip {
    border-color: var(--global-tip-block);
    background-color: var(--global-tip-block-bg);

    p {
      color: var(--global-tip-block-text);
    }

    h1, h2, h3, h4, h5, h6 {
      color: var(--global-tip-block-title);
    }
  }

  &.block-warning {
    border-color: var(--global-warning-block);
    background-color: var(--global-warning-block-bg);

    p {
      color: var(--global-warning-block-text);
    }

    h1, h2, h3, h4, h5, h6 {
      color: var(--global-warning-block-title);
    }
  }

  &.block-danger {
    border-color: var(--global-danger-block);
    background-color: var(--global-danger-block-bg);

    p {
      color: var(--global-danger-block-text);
    }

    h1, h2, h3, h4, h5, h6 {
      color: var(--global-danger-block-title);
    }
  }
}
```

Ein reguläres Blockzitat kann wie folgt verwendet werden:

```markdown
> Dies ist ein reguläres Blockzitat
> und es kann wie gewohnt verwendet werden
```

> Dies ist ein reguläres Blockzitat
> und es kann wie gewohnt verwendet werden

Diese benutzerdefinierten Styles können verwendet werden, indem die spezifische Klasse dem Blockzitat hinzugefügt wird, wie folgt:

```markdown
> ##### TIPP
>
> Ein Tipp kann verwendet werden, wenn Sie Ratschläge geben möchten
> im Zusammenhang mit bestimmten Inhalten.
{: .block-tip }
```

> ##### TIPP
>
> Ein Tipp kann verwendet werden, wenn Sie Ratschläge geben möchten
> im Zusammenhang mit bestimmten Inhalten.
{: .block-tip }

```markdown
> ##### WARNUNG
>
> Dies ist eine Warnung und sollte daher
> verwendet werden, wenn Sie den Benutzer warnen möchten
{: .block-warning }
```

> ##### WARNUNG
>
> Dies ist eine Warnung und sollte daher
> verwendet werden, wenn Sie den Benutzer warnen möchten
{: .block-warning }

```markdown
> ##### GEFAHR
>
> Dies ist eine Gefahrenzone und sollte daher
> vorsichtig verwendet werden
{: .block-danger }
```

> ##### GEFAHR
>
> Dies ist eine Gefahrenzone und sollte daher
> vorsichtig verwendet werden <br>
{: .block-danger }
