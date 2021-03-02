import express from "express";
import BaseController from "../utils/BaseController";
import { housesService } from '../services/HousesService'

export class HousesController extends BaseController {
    constructor() {
        super('api/houses')
        this.router
            .get('', this.getAll)
            .get('/:id', this.getOne)
            .post('', this.create)
            .delete('/:id', this.delete)
            .put('/:id', this.edit)
    }

    async getAll(req, res, next) {
        try {
            return res.send(await housesService.find(req.query))
        } catch (error) {
            next(error)
        }
    }
    async getOne(req, res, next) {
        try {
            return res.send(await housesService.findById(req.params.id))
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            let house = await housesService.create(req.body)
            res.status(201).send(house)
        } catch (error) {
            next(error)
        }
    }
    async delete(req, res, next) {
        try {
            res.send(await housesService.delete(req.params.id))
        } catch (error) {
            next(error)
        }
    }
    async edit(req, res, next) {
        try {
            res.send(await housesService.edit(req.params.id, req.body))
        } catch (error) {
            next(error)
        }
    }
}