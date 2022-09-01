class User  {
    constructor(){
        this.subscriptions = [];
    }

    subscribe(streamingService) {
        if (this.subscriptions.includes(streamingService) === streamingService ) {
            return newSubscription;
        }else{
            const newSubscription = new Subscription(streamingService);
            this.subscriptions.push(newSubscription);
            return newSubscription;
        }
    }
}

class Subscription {
    constructor(streamingService){
        this.streamingService = streamingService;
    }

    watch(showName) {
        return StreamingService.countOfVeiws += 1;
    }

    getRecommendationTrending() {
        return this.streamingService.getMostViewedShowsOfYear();
    }

    getRecommendationByGenre(genre) {
        return this.streamingService.getMostViewedShowsOfGenre() ;
    }
}

class StreamingService {
    constructor(){
        this.name = null;
        this.shows = [];
        this.countOfVeiws = 0;
        this.viewsByShowNames = new Map(this.name,this.countOfVeiws);
    }

    addShow(show) {
    this.shows.push(show)
        function unique(arr) {
            let result = [];

            for (let str of arr) {
                if (!result.includes(str)) {
                    result.push(str);
                }
            }

            return result;
        }
        unique(this.shows)
    }

    getMostViewedShowsOfYear(year) {
        this.shows.sort(function (a,b) {
            return b.countOfVeiws - a.countOfVeiws;
        })
        for (let i = 0; i <= 10; i++) {
            if (this.shows[i].year === year){
                return  this.shows[i]
            }

        };

    }

    getMostViewedShowsOfGenre(genre) {
        this.shows.sort(function (a,b) {
            return b.countOfVeiws - a.countOfVeiws;
        })
        for (let i = 0; i <= 10; i++) {
            if (this.shows[i].genre === genre){
                return  this.shows[i]
            }

        };
    }
}
//abstract
 class Show {

    constructor() {
        this.name = null;
        this.genre = {
            comedy: 'COMEDY',
            drama : 'DRAMA',
            action : 'ACTION',
            fantasy:'FANTASY',
            thriller : 'THRILLER',
        };
        this.releaseDate = null;
    }

     getDuration(){
        return this.name.duration
     }


}


class Movie extends Show{

}


class Episode extends Show{

}

class Series extends Show{
    constructor() {
        super();
        this.episodes = [];
    }

}