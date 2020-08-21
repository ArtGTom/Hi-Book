import express, { Request } from 'express';
import { getUserByToken } from '../../utils/JWTAuthentication';
import { Profile } from '../../models/profile.model';

export async function readProfile(request: Request) {
    const promise = new Promise(async (resolve, reject) => {
        var user: Profile | null = null;

        await getUserByToken(request)
            .then((result) => {
                user = result as Profile;
            })
            .catch(err => {
                console.log(err); return err
            });

        return user;
    });

    return promise;
}