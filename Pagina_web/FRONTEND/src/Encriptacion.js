import bcrypt from  'bcrypt'

export class EncritacionService{

    static saltRound = 10;

    static async encrypt(datos){
        const salt = await bcrypt.genSalt(EncritacionService.saltRound);
        return bcrypt.hash(encritado, salt);
    }
    static async check(datos, hashed_dat){
        //
    }
}