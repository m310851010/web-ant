import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'w-input',
  styleUrl: 'w-input.less',
  shadow: true,
})
export class WInput {

  render() {
    return (
      <Host>
        154
        <slot></slot>
      </Host>
    );
  }

}
