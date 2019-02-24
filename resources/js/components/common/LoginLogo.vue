<!-- ログイン画面：ロゴ表示用コンポーネント -->
<template>
<h1 class="login-logo app-logo" :class="classes" :style="styleObject">
    <slot></slot>
</h1>
</template>
<script>
import vColors from 'vuetify/es5/util/colors'
export default {
	name: 'r-login-logo',
	props: {
		color: {
		  type: String,
		  default: 'primary'
		},
		textColor: {
		  type: String,
		  default: 'white'
		},
		textAlign: {
		  type: String,
		  default: 'center'
		},
		icon: {
		  type: String,
		  default: 'local_florist'
		},
		iconOpacity: {
		  type: String,
		  default: '0.6'
		},
		iconReverse: {
		  type: Boolean,
		  default: false
		},
		iconTop: {
		  type: String,
		  default: '-25px'
		},
		iconRight: {
		  type: String,
		  default: '0'
		},
		iconLeft: {
		  type: String,
		},
	},
	computed: {
		classes() {
			let arr = this.textColor.split(' ');
			let textColor = arr[0] + '--text';
			if (arr[1]) {
				textColor += ' ' + 'text--' +arr[1];
			}
			return [
				this.color,
				textColor,
			]
		},
		styleObject() {
			let iconLeft, iconRight;
			if (this.iconReverse || this.iconLeft) {
				iconLeft = this.iconLeft ? this.iconLeft : '0';
				iconRight = 'auto';
			} else {
				iconLeft = 'auto';
				iconRight = this.iconRight;
			}
			return {
				'text-align': this.textAlign,
				'--content': '"'+this.icon+'"',
				'--opacity': this.iconOpacity,
				'--top': this.iconTop,
				'--right': iconRight,
				'--left': iconLeft,
			}
		}
	}
}
</script>
<style lang="scss">
.login-logo {
	--content: "local_florist";
	--opacity: 0.6;
	--top: -25px;
	--right: 0;
	--left: auto;
    &:before {
        content: var(--content);
        opacity: var(--opacity);
        top: var(--top);
        right: var(--right);
        left: var(--left);
    }
}
</style>