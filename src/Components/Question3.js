import React, { useState,useEffect } from "react";
import "../Style/Question3.css"
import axios from "axios";

export default function Question3() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //link for api request
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
        //Call function getData to start api request process 
        GetData();

        // Use Axios to make an HTTP GET request
        async function GetData() {

            try {

                //receive result from api request
                const result = await axios.get(apiUrl);

                //if status return 200 and data length greater then zero then set data from result to state and set loading to false
                if(result.status === 200 && result.data.length) {
                    setData(result.data);
                    setLoading(false);
                } 
            } catch (error) {
                console.log(error);
            }
            
        }

    }, []);

    // Function to update a data item
    const updateDataItem = (id, newData) => {

        //link for api request
        const updateUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
        //Set loading to true
        setLoading(true);
        //Call function putData to start api request process 
        PutData();

        // Use Axios to make an HTTP GET request
        async function PutData() {

            try {
                //Send new value to the location of link and wait for response
                const result = await axios.get(updateUrl,{title: newData});

                //if status return 200 then set loading to false
                if(result.status === 200) {
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
            
        }
    };

    return (
        <div className="question-three">
            <h1>Sample Axios Request in React</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>
                            {item.title}{' '}
                            <button onClick={() => updateDataItem(item.id, { title: 'New Title' })}>
                                Update
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};