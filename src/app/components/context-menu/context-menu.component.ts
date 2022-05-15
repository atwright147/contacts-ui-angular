import { Component, OnInit } from '@angular/core';

import { Content, ContextMenuService } from '../../services/context-menu/context-menu.service';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent implements OnInit {
  menu$ = this.contextMenuService.menu$;
  show = false;
  target: HTMLElement | null = null;
  content: Content[] = [];
  top: string;
  left: string;

  constructor(
    private readonly contextMenuService: ContextMenuService,
  ) { }

  ngOnInit(): void {
    this.contextMenuService.menu$.subscribe((data) => {
      this.show = data.show;
      this.target = data.target;
      this.content = data.content;
      this.left = data.target?.getClientRects()[0].left + 'px';
      this.top = data.target?.getClientRects()[0].bottom + 'px';
    });
  }
}


/*
<script lang="ts">
	import { type ContextMenu, menu } from '$lib/stores/context-menu.store';
	import { clickOutside } from '$lib/directives/click-outside';

	$: pos = { bottom: 0, left: 0 };
	menu.subscribe((data) => {
		if (data.show) {
			const clientRects = data.target.getClientRects();
			const { bottom, left } = clientRects[0];

			pos.bottom = bottom;
			pos.left = left;
		}
	});

	const handleClickOutside = (): void => {
		const data: ContextMenu = {
			show: false,
			target: null,
			content: [],
		}

		menu.set(data);
	}
</script>

<style>
	a {
		display: flex;
		color: var(--color-main-accent);
		cursor: pointer;
	}

	.container {
		position: relative;
		width: 0;
		height: 0;
	}

	.menu {
		position: absolute;
		width: auto;
		height: auto;
		background-color: white;
		margin: 0;
		padding: 0;
	}

	.menu-item {
		list-style-type: none;
		padding: 1rem;
	}

	.menu-item + .menu-item {
		padding: .5rem inherit;
	}

	.btn-link {
		appearance: none;
		background: none;
		border: 0;
		padding: 0;
		text-align: left;
		width: 100%;
	}

	.btn-link:hover {
		background-color: var(--color-main-accent);
	}
</style>

{#if $menu.show}
	<div class="container">
		<ul
			class="menu"
			style="top: {pos.bottom}px; left: {pos.left}px;"
			use:clickOutside
			on:clickoutside={handleClickOutside}
		>
			{#each $menu.content as item}
				<li class="menu-item">
					{#if item.action}
						<button class="btn-link" type="button" on:click={item.action}>{item.title}</button>
					{:else if item.link}
						<a href={item.link}>{item.title}</a>
					{:else}
						{item.title}
					{/if}
				</li>
			{/each}
		</ul>
	</div>
{/if}
*/
