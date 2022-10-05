export interface TokenOverviewData {
    key: string,
    processorName: string,
    processorHasUnclaimed: boolean,
    currentIndex: number,
    behind: number,
    segment: number,
    mergeableSegment: number,
    owner: string,
    allOwners: string[],
    allNodes: string[],
    tokenType: string,
    replaying: boolean,
    positionRate1m: string | undefined,
    positionRate5m: string | undefined,
    resettable: boolean,
    batchSize: number,
    anyNodeRunning: boolean,
    anyNodeStopped: boolean,
    threadsAvailable: boolean,
    dlqAvailable: boolean,
    dlqSize: number | undefined
}
