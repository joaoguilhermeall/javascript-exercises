function dateISO(date) {
    if (date !== undefined) {
        return date.toISOString();
    }
}

export {dateISO};

