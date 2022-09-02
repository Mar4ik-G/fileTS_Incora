class User  {
    constructor(){
        this.subscriptions = [];
    }

    subscribe(streamingService) {
        if (this.subscriptions.includes(streamingService)) {
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
        return this.countOfVeiws += 1;
    }

    getRecommendationTrending() {
        return this.streamingService.getMostViewedShowsOfYear();
    }

    getRecommendationByGenre(genre) {
        return this.streamingService.getMostViewedShowsOfGenre(genre);
    }
}

class StreamingService {
    constructor(){
        this.name = null;
        this.shows = [];
        this.countOfVeiws = 0;
        this.viewsByShowNames = new Map(this.name,this.countOfVeiws).get();


        getMostViewedShowsOfYear(year) {
            let arr = this.viewsByShowNames.filter(e => {
               return  e === year
            })

            arr.sort( (a,b) => {
                return b.countOfVeiws - a.countOfVeiws;
            })

            return arr.slice(0,10);
        }

        getMostViewedShowsOfGenre(genre) {

            let arr = this.shows.map(e => {
                return e === e.genre
            })
            arr.sort(function (a,b) {
                return b.countOfVeiws - a.countOfVeiws;
            })
            return arr.slice(0,10);
        }



        addShow(show) {
            this.viewsByShowNames.set('show1Name', 3);

            this.shows.push(show)
            unique(this.shows)
        }
    }
}

    function unique(arr) {
        let result = [];

        for (let str of arr) {
            if (!result.includes(str)) {
                result.push(str);
            }
        }
        return result;
}


    let genreTypes = {  comedy: 'COMEDY',
    drama : 'DRAMA',
    action : 'ACTION',
    fantasy:'FANTASY',
    thriller : 'THRILLER',
};

    abstract class Show {
    constructor(name,genre) {
        this.name = null;
        this.genre = genreTypes.action
        this.duration = null
        this.releaseDate = null; // 
    }

   abstract getDuration(){
        return duration
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