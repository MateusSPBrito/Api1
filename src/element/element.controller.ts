import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { creatElement } from './dto/element.creat.dtop';
import { Element } from './element.entity';
import { ElementService } from './element.service';

@Controller("/elements")
export class ElementController {
    constructor(private readonly elementService: ElementService) { }

    @Get()
    async getAll(): Promise<Element[]> {
        return await this.elementService.getAll();
    }

    @Get(":id")
    async getById(@Param('id') id: number): Promise<Element> {
        return await this.elementService.getById(id);
    }

    @Post()
    async creat(@Body() data: creatElement): Promise<any> {
        return this.elementService.creat(data)
    }

    @Put(":id")
    async update(@Param('id') id: number, @Body() data: Element): Promise<Element> {
        return this.elementService.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        this.elementService.delete(id);
    }

    //correto
}