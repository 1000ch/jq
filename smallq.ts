export class SmallQ {
  elements: HTMLElement[] = [];
  events: WeakMap<HTMLElement, EventListenerOrEventListenerObject[]> = new WeakMap();

  constructor(selector: string) {
    document.querySelectorAll<HTMLElement>(selector).forEach(element => {
      this.elements.push(element);
    });
  }

  get length(): number {
    return this.elements.length;
  }

  forEach(fn: (element: HTMLElement) => void): this {
    for (const element of this.elements) {
      fn(element)
    }

    return this;
  }

  text(text: string) {
    return this.forEach(el => {
      el.textContent = text;
    });
  }

  html(html: string) {
    return this.forEach(el => {
      el.innerHTML = html;
    });
  }

  attr(name: string, value: string) {
    return this.forEach(el => {
      el.setAttribute(name, value);
    });
  }

  data(name: string, value: string) {
    return this.forEach(el => {
      el.dataset[name] = value;
    });
  }

  css(object: CSSStyleDeclaration) {
    return this.forEach(el => {
      Object.assign(el.style, object);
    });
  }

  addClass(className: string) {
    return this.forEach(el => el.classList.add(className));
  }

  removeClass(className: string) {
    return this.forEach(el => el.classList.remove(className));
  }

  toggleClass(className: string) {
    return this.forEach(el => el.classList.toggle(className));
  }

  append(...nodes: (string | Node)[]) {
    return this.forEach(el => {
      el.append(...nodes);
    });
  }

  prepend(...nodes: (string | Node)[]) {
    return this.forEach(el => {
      el.prepend(...nodes);
    });
  }

  before(...nodes: (string | Node)[]) {
    return this.forEach(el => {
      el.before(...nodes);
    });
  }

  after(...nodes: (string | Node)[]) {
    return this.forEach(el => {
      el.after(...nodes);
    });
  }

  animate(keyframes: Keyframe[] | PropertyIndexedKeyframes | null, options?: number | KeyframeAnimationOptions | undefined) {
    return this.forEach(el => {
      el.animate(keyframes, options);
    });
  }

  on(type: string, listener: EventListenerOrEventListenerObject, options: AddEventListenerOptions) {
    return this.forEach(el => {
      el.addEventListener(type, listener, options);

      const listeners = this.events.get(el) ?? [];
      listeners.push(listener);
      this.events.set(el, listeners);
    });
  }

  off(type: string, listener?: EventListenerOrEventListenerObject) {
    return this.forEach(el => {
      const listeners = this.events.get(el) ?? [];

      if (listener) {
        el.removeEventListener(type, listener);

        const newListeners = listeners.filter(fn => fn !== listener);
        if (newListeners.length) {
          this.events.set(el, newListeners);
        } else {
          this.events.delete(el);
        }
      } else {
        listeners.forEach(listener => {
          el.removeEventListener(type, listener);
        });

        this.events.delete(el);
      }
    });
  }
}

export const $ = (selector: string) => new SmallQ(selector);
