import Vue from 'vue';
import './style.scss';

new Vue({
    el: "#app",
    components: {
        'movie-list': {
            template : `<div id="movie-list">
                            <div v-for="movie in movies" class="movie">{{movie.title}}</div>
                        </div>`,
            data: function () {
                return {
                    movies: [
                    {
                        title: "Pulp Fiction"
                    },
                    {
                        title: "Home Alone"
                    },
                    {
                        title: "Bla bla bla"
                    }
                ]
                };
            }
        },
        'movie-filter': {
            template : `<div id="movie-filter">
                            <h2>Filter results</h2>
                        </div>`
        }
    }
});