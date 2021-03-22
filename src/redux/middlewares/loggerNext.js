export const loggerNext = () => (currentNext) => (currentAction) => {
  const resultNext = currentNext(currentAction);

  if (process.env.NODE_ENV !== "production" && !currentAction.type.includes("@@") && !global.window) {
    const dateTimeFormat = new Intl.DateTimeFormat("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const isRequest = currentAction.type.includes("REQUEST");

    const destiny = isRequest ? "--->" : "<---";

    const emoji = isRequest ? "🔵" : "🔴";

    console.log(
      `%s\x1b[0m %s \x1b[33m%s\x1b[0m %s \x1b[34m%s\x1b[0m  ${
        isRequest ? "\x1b[32m%s\x1b[0m" : "\x1b[31m%s\x1b[0m"
      }  \x1b[36m%s\x1b[0m %s`,
      `${emoji}`,
      "[",
      `${dateTimeFormat.format(Date.now())}`,
      ":",
      "DISPATCH ACTION",
      `${destiny}`,
      `${currentAction.type}`,
      "]\n"
    );
  }

  return resultNext;
};
