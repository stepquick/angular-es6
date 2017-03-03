export class BlogService {
  	constructor() {
        this.posts = [
            {title: "Hey there", date: "2016-09-20T13:28:06.419Z", body: "Lorem ipsum dolor sit amet, te hinc accumsan sea, albucius philosophia et has, eu his iriure fastidii. Tritani ornatus ei eos, mel erat discere ea, dicam repudiandae ut nec. Cu eum mutat adversarium, ex eum fastidii theophrastus. Ancillae periculis omittantur per te, per in suas phaedrum, audiam copiosae ea mei. In nemore mollis his, mei ex sonet nominavi necessitatibus."},
            {title: "They.", date: "2016-10-15T13:28:06.419Z", body: "Scripta eruditi ne sed. Sit docendi denique definitionem cu, ne docendi salutandi intellegat vel. Ea mei noster cotidieque, ius adhuc ipsum graeci id."},
            {title: "If that.", date: "2016-12-08T13:28:06.419Z", body: "Eu etiam nullam quidam vim, nec nihil mentitum accommodare in. Eu scripta reformidans eos. Nam id epicurei iudicabit deseruisse, facilisi ocurreret te has. Vis accusata platonem ei. Ne vix voluptua constituam comprehensam, et illum dicant iudicabit has."},
            {title: "Please think.", date: "2016-01-21T13:28:06.419Z", body: "Ne conceptam sadipscing complectitur vis, docendi constituto persequeris at vel. Omnes accumsan vix ut. Hendrerit contentiones eum in, qui ea nobis noster officiis, nibh habemus democritum nec ex. No sed suas fastidii legendos, at mea legimus molestie noluisse."}
        ];
  	}
    all() {
        return this.posts;
    }
    get(id) {
        return this.posts[id];
    }
}
