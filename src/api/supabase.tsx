import { createClient } from '@supabase/supabase-js';


// Create a single supabase client for interacting with your database

export class Supabase {
    
    supabaseKey = process.env.SUPABASE_KEY;
    supabaseUrl = process.env.SUPABASE_URL!;
    public supabase = createClient(
        this.supabaseUrl,
        this.supabaseKey!
        );
        
    async signUp(arg0: { email: string; password: string; }) {
        return await this.supabase.auth.signUp({email: arg0.email, password: arg0.password});
    }
    
    async signInWithPassword(arg0: { email: string; password: string; }): Promise<any> {
        return await this.supabase.auth.signIn({
            email: arg0.email,
            password: arg0.password,
        });
    }    
    
    async getPlayers() {
        const { data, error } = await this.supabase.from('players').select(`
        *,
        groups (
            name,
            organizations(*)

        )
    `);
        return data;
    }

    async addPlayer() {
        const { data, error } = await this.supabase
            .from('players')
            .insert([
                { name: 'Test Player 1',  },
            ]);
    }

    async saveMatchData(key: string, matchData: string | null) {
        
        const { data, error } = await this.supabase
        .from('matches_json')
        .insert([
            { key, data: matchData },
        ]);

    }
}