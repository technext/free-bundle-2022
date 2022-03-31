const gulp = require("gulp");
const { SiteChecker } = require("broken-link-checker");

gulp.task("check-links", function(done) {

    const siteChecker = new SiteChecker(
        {  
            filterLevel: 0,
            acceptedSchemes: ["http", "https"],
            excludedKeywords: ["linkedin", "facebook", "twitter", "reddit", "youtube", "ycombinator", "namecheap"],
            excludeLinksToSamePage: true
        },
        {
            "error": (error) => {
                console.error(error);
            },
            "link": (result, customData) => {
                if(result.broken) {
                    console.log({
                        broken : result.broken,
                        brokenReason : result.brokenReason,
                        page : result.base.original,
                        link : result.url.resolved,
                        linkText : result.html.text,
                        tag : result.html.tag
                    });
                }
                else{
                    process.stdout.write(`.`);
                }
            },
            "end": () => {
                done();
            }
        }
    );

    siteChecker.enqueue("http://127.0.0.1:3000");
});