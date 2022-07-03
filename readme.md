# JQ

Extremely small DOM manipulation jQuert-like library.

## API

### class `JQ(selector: string)`

```javascript
const jq1 = new ('#id');
const jq2 = new ('.className');
const jq3 = new ('tagName');
```

### `$(selector: string): JQ`

Shorthand to call `new JQ()`.

### `forEach(fn: (element: HTMLElement) => void): this`

```javascript
$('.target').forEach(el => console.log(el));
```

### `text(text: string) => this`

```javascript
$('.target').text('text');
```

### `html(html: string) => this`

```javascript
$('.target').html('<div>html</div>');
```

### `attr(name: string, value: string) => this`

```javascript
$('.target').attr('aria-label', 'foo');
```

### `data(name: string, value: string) => this`

```javascript
$('.target').data('key', 'value');
```

### `css(object: CSSStyleDeclaration)`

```javascript
$('.target').css({
  border: 'solid 1px #000'
});
```

### `addClass(className: string) => this`

```javascript
$('.target').addClass('foo');
```

### `removeClass(className: string) => this`

```javascript
$('.target').removeClass('foo');
```

### `toggleClass(className: string) => this`

```javascript
$('.target').toggleClass('foo');
```

### `append(nodes: (string | Node)[]) => this`

```javascript
$('.target').append(node);
```

### `prepend(nodes: (string | Node)[]) => this`

```javascript
$('.target').prepend(node);
```

### `before(nodes: (string | Node)[]) => this`

```javascript
$('.target').before(node);
```

### `after(nodes: (string | Node)[]) => this`

```javascript
$('.target').after(node);
```

### `animate(keyframes: Keyframe[] | PropertyIndexedKeyframes | null, options?: number | KeyframeAnimationOptions | undefined) => this`

```javascript
$('.target').animate([
  { transform: 'translateY(0px)' },
  { transform: 'translateY(-300px)' }
], {
  duration: 1000,
  iterations: Infinity
});
```

### `on(type: string, listener: EventListenerOrEventListenerObject, options: AddEventListenerOptions)`

```javascript
$('button').on('click', () => console.log('clicked'));
```

### `off(type: string, listener: EventListenerOrEventListenerObject)`

```javascript
$('button').off('click');
```

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
