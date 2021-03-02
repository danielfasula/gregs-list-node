import express from "express";
import BaseController from "../utils/BaseController";
import { jobsService } from '../services/JobsService'

export class JobsController extends BaseController {
    constructor() {
        super('api/jobs')
        this.router
            .get('', this.getAll)
            .get('/:id', this.getOne)
            .post('', this.create)
            .delete('/:id', this.delete)
            .put('/:id', this.edit)
    }

    async getAll(req, res, next) {
        try {
            return res.send(await jobsService.find(req.query))
        } catch (error) {
            next(error)
        }
    }
    async getOne(req, res, next) {
        try {
            return res.send(await jobsService.findById(req.params.id))
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next) {
        try {
            let job = await jobsService.create(req.body)
            res.status(201).send(job)
        } catch (error) {
            next(error)
        }
    }
    async delete(req, res, next) {
        try {
            res.send(await jobsService.delete(req.params.id))
        } catch (error) {
            next(error)
        }
    }
    async edit(req, res, next) {
        try {
            res.send(await jobsService.edit(req.params.id, req.body))
        } catch (error) {
            next(error)
        }
    }
}