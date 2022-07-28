function addColumn() {
    let rowResutls = [];
    let counter=0;
    document.querySelectorAll("#table tr").forEach((row, i) => {
        if (row.className == "row-custom input-custom" && counter<1) {
            counter++;
            rowResutls.push(row);
            $("#table").append(rowResutls[0].outerHTML);
            rowResutls = [];
        }
    });
}



