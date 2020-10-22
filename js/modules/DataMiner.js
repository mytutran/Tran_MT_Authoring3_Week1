 
    //start with a Fetch all
    async function fetchData(datasource) {
        let resource = await fetch(datasource).then(response => {
            // bang operator - mean "does not equal" (or a falsy value)
            if (response.status !== 200) {
                throw new Error (`Darn it, it broke! Error ${response.status}`);
            }

            return response;
        })

        //if we success, then we return back our resource after we parse it into plain JS
        let dataset = await resource.json();

        return dataset;
        
        //     .then(res => res.json()) // parse the JSON (translate) back to plain JS
        //     .then(data => {
        //         // this is our data (DataSet.json)
        //         // converted to a plain Javascript object
        //         handleDataSet(data);
        //     })
        // .catch((error) => console.log(error));
    }
 
    export { fetchData };