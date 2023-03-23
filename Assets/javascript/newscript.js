//function to collects user input and displays in search history
/*html for search btn

<div class="city-search">
                    <form id ="search-form" class="form">
                        <h2>Search for a City:</h2>
                        <div class = "search-form mb-3">
                            <input type="text" class="city-input form-control" placeholder="Salem"
                                aria-label="Salem" aria-describedby="button-addon2">
                            <button class="btn search-btn btn-outline-secondary w-100" type="button" id="searchbtn">Search</button>
                            
                        </div>
                    </form>
                </div> */



//add event listener for search history

/*html for search history

<div class="city-list">
                    <ul class="list-group" id="searchedCity">
                        <li class="list-group-item border-0">
                            <button class="btn history-btn w-100" type="button">
                            </button>
                        </li>
                    </ul>
                </div> */



// event listener for search btn
document.getElementById("searchbtn").addEventListener('click',getResult);


//get result function