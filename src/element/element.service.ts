import { Injectable, Inject, Body } from '@nestjs/common';
import { Repository } from 'typeorm';
import { creatElement } from './dto/element.creat.dtop';
import { Element } from './element.entity';

@Injectable()
export class ElementService {
    constructor(
        @Inject('ELEMENT_REPOSITORY')
        private elementRepository: Repository<Element>,
    ) { }

    async getAll() {
        return this.elementRepository.find();
    }

    async getById(id:number){
        return this.elementRepository.findOneBy({id})
    }

    async creat(data: creatElement):Promise<any>{
        let element=new Element()
        element.name=data.name;
        element.weight=data.weight;
        element.symbol=data.symbol;
        return await this.elementRepository.save(element);
    }
    
    async update(id:number, data:Element){
        await this.elementRepository.update({id},data);
        return this.getById(id);
    }

    async delete(id:number){
        return await this.elementRepository.delete({id});
    }

    

}