const tables = [];

const AutoTableController = {
    add(autoTable) {
        if (tables.filter(table => table.option.tableId === autoTable.option.tableId).length > 0) {
            console.error(`id:${autoTable.option.tableId} has been used...`);
        }
        tables.push(autoTable);
    },
    remove(autoTable) {
        tables.splice(tables.indexOf(autoTable), 1);
    },
    getChildren(parentOption) {
        return tables.filter(table => table.option.parentId = parentOption.tableId);
    },
    getParents(childOption) {
        return tables.filter(table => table.option.tableId = childOption.parentId);
    },
};

export default AutoTableController;
