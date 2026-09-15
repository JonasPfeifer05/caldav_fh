export function useNow() {
	const now = ref(new Date());
	let timer: NodeJS.Timeout | null = null;

	onMounted(() => {
		const delayMs = (60 - new Date().getSeconds()) * 1000;

		timer = setTimeout(() => {
			now.value = new Date();
			timer = setInterval(() => {
				now.value = new Date();
			}, 60000);
		}, delayMs);
	});

	onUnmounted(() => {
		if (timer) {
			clearTimeout(timer);
			clearInterval(timer);
		}
	});

	return now;
}
