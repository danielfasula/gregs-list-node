import express from "express";
import { carsService } from "../services/CarsService";
import BaseController from "../utils/BaseController";

export class CarsController extends BaseController {
    constructor() {
        super('api/cars')
        this.router
            .get('', this.getAll)
            .get('/:id', this.getOne)
            .post('', this.create)
            .delete('/:id', this.delete)
            .put('/:id', this.edit)
    }
    async getAll(req, res, next) {
        try {
            // return res.send({ data: await carsService.find(req.query), message: 'got the cars' });
            return res.send(await carsService.find(req.query));
        } catch (error) {
            next(error);
        }
    }
    async getOne(req, res, next) {
        try {
            return res.send(await carsService.findById(req.params.id));
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            let car = await carsService.create(req.body)
            res.status(201).send(car);
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            res.send(await carsService.delete(req.params.id))
        } catch (error) {
            next(error)
        }
    }

    async edit(req, res, next) {
        try {
            res.send(await carsService.edit(req.params.id, req.body))
        } catch (error) {
            next(error)
        }
    }
}