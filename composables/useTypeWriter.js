export const useTypeWriter = (text = "", speed = 100, pause = 2000) => {
  const displayed = ref("");
  let index = 0;
  let intervalId;

  const startTyping = () => {
    intervalId = setInterval(() => {
      if (index < text.length) {
        displayed.value += text[index];
        index++;
      } else {
        clearInterval(intervalId);

        setTimeout(() => {
          // reset and loop again
          displayed.value = "";
          index = 0;
          startTyping();
        }, pause);
      }
    }, speed);
  };

  onMounted(() => {
    startTyping();
  });

  onUnmounted(() => {
    clearInterval(intervalId);
  });

  return { displayed };
};
