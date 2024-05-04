class GraphNode {
    constructor(data){
        this.data = data;
        this.edges = [];
    }

    connect(node){
        this.edges.push(node);

        node.edges.push(this);
    }
}