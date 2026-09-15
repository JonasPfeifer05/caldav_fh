<script setup lang="ts">
	import type { CalendarEvent as CalendarEventType } from "~/types/calendar";

	defineProps<{
		event: CalendarEventType;
		style: Record<string, string>;
	}>();

	const emit = defineEmits<{
		click: [event: CalendarEventType];
	}>();
</script>

<template>
	<button
		type="button"
		class="hover:cursor-pointer absolute inset-x-0 z-20 box-border overflow-hidden rounded border border-black/20 py-2 text-center text-[12px] leading-tight text-black transition-[filter] hover:brightness-90 sm:rounded-md sm:text-sm"
		:style="{
		...style,
		backgroundColor: event.color ?? '#6366f1',
	}"
		@click.stop="emit('click', event)"
	>
		<div class="truncate px-1 font-semibold sm:px-2">
			{{ event.title }}
		</div>

		<div v-if="event.room" class="truncate px-1 opacity-95 sm:px-2">
			{{ event.room }}
		</div>

		<div v-if="event.teacher" class="truncate px-1 opacity-95 sm:px-2">
			{{ event.teacher }}
		</div>
	</button>
</template>
