<script>
	export let src;
	export let alt;
</script>

<span
	style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; opacity: 1; border: 0px none; margin: 0px; padding: 0px; position: relative; max-width: 100%;"
>
	<span
		style="box-sizing: border-box; display: block; width: initial; height: initial; background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; opacity: 1; border: 0px none; margin: 0px; padding: 0px; max-width: 100%;"
	>
		<img
			style="display: block; max-width: 100%; width: initial; height: initial; background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; opacity: 1; border: 0px none; margin: 0px; padding: 0px;"
			alt=""
			aria-hidden="true"
			src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27144%27%20height=%27144%27/%3e"
		/>
	</span>
	<img
		class="borderCircle"
		{alt}
		{src}
		style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: medium none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
	/>
</span>

<style>
	img {
		max-width: 100%;
		display: block;
	}
	.borderCircle {
		border-radius: 9999px;
	}
</style>
