import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css',
  shadow: true
})
export class MyApp {
  @Prop() first: string;
  @Prop() last: string;

  render() {
    if (this.first && this.last) {
      return (
        <div>
          <span>Hello</span>, my name is {this.first} {this.last}
        </div>
      );
    }
  }
}
