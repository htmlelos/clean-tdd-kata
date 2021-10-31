import exp from 'constants';
import { Request, Response } from 'express';
import { send } from 'process';
import supertest from 'supertest';
import server from '../server'

const request = supertest(server);

beforeAll(done => {
    done()
})

describe('POST in api/signup', () => {
    it('user signup', async () => {
        const response = await request.post('/api/signup').send({
            username: 'username',
            email: 'username@mail.com',
            password: 'pass2021$',
            passwordConfirmation: 'pass2021$'
        })

        expect(response.status).toBe(200);
    })

    it('name parameter is missing', async () => {
        const response = await request.post('/api/signup').send({
            email: 'user@mail.com',
            password: 'pass2021$',
            passwordConfirmation: 'pass2021$'
        })

        expect(response.status).toBe(400)                
        expect(response.body.errors).toEqual(
            expect.arrayContaining([
                expect.objectContaining({msg: 'name parameter must be defined'})
            ])
        )
    })

    it('email parameter is missing', async () => {
        const response = await request.post('/api/signup').send({
            username: 'username',
            password: 'pass2021$',
            passwordConfirmation: 'pass2021$'
        })

        expect(response.status).toBe(400)
        expect(response.body.errors).toEqual(
            expect.arrayContaining([
                expect.objectContaining({msg: 'email parameter must be defined'})
            ])
        )
    })

    it('password parameter is missing', async () => {
        const response = await request.post('/api/signup').send({
            username: 'username',
            email: 'user@mail.com',
            passwordConfirmation: 'pass2021%'
        })

        expect(response.status).toBe(400)
        expect(response.body.errors).toEqual(
            expect.arrayContaining([
                expect.objectContaining({msg: 'password parameter must be defined'})
            ])
        )
    })
    
    it('password confirmation parameter is missing', async () => {
        const response = await request.post('/api/signup').send({
            username: 'username',
            email: 'user@mail.com',
            password: 'pass2021%'
        })

        expect(response.status).toBe(400)
        expect(response.body.errors).toEqual(
            expect.arrayContaining([
                expect.objectContaining({msg: 'password confirmation parameter must be defined'})
            ])
        )
    })

    it('throw error if the password and the passwordConfirmation aren\'t the same', async () => {
        const response = await request.post('/api/signup').send({
            username: 'username',
            email: 'user@mail.com',
            password: 'pass2021$',
            passwordConfirmation: 'pass2021%'
        })

        expect(response.status).toBe(400)
        expect(response.body.errors).toEqual(
            expect.arrayContaining([
                expect.objectContaining({msg: 'password and passwordConfirmation does not match'})
            ])
        )
    })

    it('throw error if the email isn\'t a valid email address', async () => {
        const response = await request.post('/api/signup').send({
            username: 'username',
            email: 'usermail.com',
            password: 'pass2021$',
            passwordConfirmation: 'pass2021$'
        })

        expect(response.status).toBe(400)
        expect(response.body.errors).toEqual(
            expect.arrayContaining([
                expect.objectContaining({msg: 'email isn\'t a valid e-mail address'})
            ])
        )
    })

    it('throw error if exists a user with the provided email', async () => {
        const response = await request.post('/api/signup').send({
            username: 'username',
            email: 'username@mail.com',
            password: 'pass2021$',
            passwordConfirmation: 'pass2021$'
        })

        // expect(response.status).toBe(403)
        expect(response.body.errors).toEqual(
            expect.arrayContaining([
                expect.objectContaining({msg:'already exist a user with the email provided'})
            ])
        )
    })
})

afterAll(done => {
    // Cerrar todas las conexiones
    // mongoose.connection.close();
    done();
})