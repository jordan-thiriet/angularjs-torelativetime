angularjs-toRelativeTime
===================

This is an angularjs filter for date. It gives NSDate the ability to report times like "A moment ago", "30 seconds ago", "5 minutes ago", "Yesterday", "Last month", "2 years ago", and so on.

This functionality has variously been referred to as a "time ago", "time since", "relative date", or "fuzzy date" feature.

toRelativeTime currently supports the following languages:

- en_EN (English)
- es_ES (Spanish)
- pt_PT (Portuguese)
- fr_FR (French)
- it_IT (Italian)
- de_DE (German)

toRelativeTime currently supports the following date format:

- YYYY-mm-dd hh:ii:ss
- YYYY-mm-dd
- dd/mm/YYYY hh:ii:ss
- dd/mm/YYYY

If you know a language not listed here, please consider submitting a translation. Localization codes by language.

Use
====

Add the files to your project

```javascript
    <script src='lib/toRelativeTime.min.js'></script>
```

Add RelativeTime to your angular app config

```javascript
    var myapp = angular.module('myapp', ["toRelativeTime"]);
```

In your html view

```html
    {{ date | toRelativeTime:iso_code}}
```