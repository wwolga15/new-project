export enum HandToolsOption {
HandTools = 'Hand Tools', 
Hammer = 'Hammer',
HandSaw =  'Hand Saw', 
Wrench = 'Wrench', 
Screwdriver = 'Screwdriver', 
Pliers = 'Pliers' ,
Chisels =  'Chisels' ,
Measures = 'Measures'
};

export enum PowerToolsOption {
Grinder = 'Grinder', 
Sander = 'Sander',
Saw = 'Saw',
Drill = 'Drill' 
};

export enum  OtherOption { 
    ToolBelts = 'Tool Belts',
    StorageSolutions = 'Storage Solutions',
    Workbench =  'Workbench', 
    SafetyGear = 'Safety Gear', 
    Fasteners = 'Fasteners' 
};

export type CategoryOption = 
| HandToolsOption
| PowerToolsOption
| OtherOption;
