export class Application {
    name: string;
    background: string;
    link?: string;

    constructor(name, background, link) {
        this.name = name;
        this.background = background;
        this.link = link;
    }
}
