import { Instruction } from "./instruction";
import { State } from "./state";

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
    // private StateDto state;
    state?:State,
    // private InstructionDto instruction;
    instruction?:Instruction
    
}