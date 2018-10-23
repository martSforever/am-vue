const tables = [];

const AutoTableController = {
    add(autoTable) {
        if (tables.filter(table => table.tableId === autoTable.tableId).length > 0) {
            console.error(`id:${autoTable.tableId} has been used...`);
        }
        tables.push(autoTable);
    },
    remove(autoTable) {
        tables.splice(tables.indexOf(autoTable), 1);
    },
    getChildren(parent) {
        return tables.filter(table => table.parentId = parent.tableId);
    },
    getParents(child) {
        return tables.filter(table => table.tableId = child.parentId);
    },
};

export default AutoTableController;
