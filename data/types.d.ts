interface RegionTileState {
    x:number
    y:number
    terrain: import('./enum').TerrainType
    visible: boolean
}

interface StructureState {
    tileX: number
    tileY: number
    hp: number
    owner: import('./enum').FactionType
    type: import('./enum').StructureType
}

interface UnitState {
    id: string
    faction: import('./enum').FactionType
    type: import('./enum').UnitType
    x:number
    y:number
    hp: number
    armor: number
}

interface RegionState {
    tiles: Array<Array<RegionTileState>>
    id: string
    exitRegionIds: Array<string>
    players: Array<UnitState>
    structures: Array<StructureState>
    npcs: Array<UnitState>
}

interface RState {
    region: RegionState
    myId: string
}