class User  {

    subscriptions:Array<string>;

    constructor(){
        this.subscriptions = [];
    }

    subscribe(streamingService:string) {
        if ( this.subscriptions.indexOf(streamingService) !== -1) {
            return null;
        }else{
            const newSubscription:any = new Subscription(streamingService);
            this.subscriptions.push(newSubscription);
            return newSubscription;
        }
    }
}

class Subscription {
    streamingService:string

    constructor(streamingService:string){
        this.streamingService = streamingService;
    }

    watch(showName:string) {
        return StreamingService.countOfViews += 1;
    }

    getRecommendationTrending() {
        return this.streamingService.getMostViewedShowsOfYear();
    }


    getRecommendationByGenre(genre) {
        return this.streamingService.getMostViewedShowsOfGenre() ;
    }
}

class StreamingService {

    name:string;
    shows:string[] = [];
    countOfViews:number;
    viewsByShowNames:any

    constructor(){
        this.name = null;
        this.shows = [];
        this.countOfViews = 0;
        this.viewsByShowNames = new Map<string,number>(this.name,this.countOfViews);
    }

    addShow(show) {
        this.shows.push(show)
        function unique(arr) {

            let result:any = [];

            for (let str of arr) {
                if (!result.includes(str)) {
                    result.push(str);
                }
            }
            return result;
        }
        unique(this.shows)
    }

    getMostViewedShowsOfYear(year:string,countOfVeiws:number) {
        this.shows.sort(function (a,b) {
            return b.countOfViews - a.countOfViews;
        })
        for (let i = 0; i <= 10; i++) {
            if (this.shows[i].year === year){
                return  this.shows[i]
            }

        };

    }

    getMostViewedShowsOfGenre(genre:GanreTypes) {
        this.shows.sort(function (a,b) {
            return b.countOfViews - a.countOfViews;
        })
        for (let i = 0; i <= 10; i++) {
            if (this.shows[i].genre === genre){
                return  this.shows[i]
            }

        };
    }
}

enum GanreTypes {
    comedy = 'COMEDY',
    drama = 'DRAMA',
    action = 'ACTION',
    fantasy='FANTASY',
    thriller = 'THRILLER',
}

//abstract
abstract class Show {

    name:string;
    genre:GanreTypes;
    releaseDate:string;

    constructor() {
        this.name = null;
        this.genre = GanreTypes.action;
        this.releaseDate = null;
    }

//    abstract getDuration(): повертає тривалість шоу.



}


class Movie extends Show{

}


class Episode extends Show{

}

class Series extends Show{
    episodes:Array<string>;
    constructor() {
        super();
        this.episodes = [];
    }


}
