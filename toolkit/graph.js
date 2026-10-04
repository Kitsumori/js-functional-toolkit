export default function buildGraph(array) {
    const graph = {};
    for (const [from, to] of array) {
        if (from in graph) {
            graph[from].push(to)
        } else {
            graph[from] = [to]
        }
    }
    return graph;
}