export interface Order{
    // private Integer id;
    id?:number,
    // private String reference;
    reference?:string,
    // private String client;
    client?:string,
    // private String model;
    model?:string,
    // private String sn;
    sn?:string,
    // private LocalDateTime registrationTime;
    registrationTime?:Date,
    // private String description;
    description?:string,
    // private String result;
    result?:string,
    // private Boolean replaceAdvance;
    replaceAdvance?:boolean,
    // private UserDto userDto;
    // private List<RecordDto> recordDtos;
    // private StateDto stateDto;
    // private InstructionDto instructionDto;
}