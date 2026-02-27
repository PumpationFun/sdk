use anchor_lang::prelude::*;

declare_id!("Pump111111111111111111111111111111111111");

#[program]
pub mod pumpation {

    use super::*;

    pub fn create_project(
        ctx: Context<CreateProject>,
        title: String,
        creator: String
    ) -> Result<()> {

        let project = &mut ctx.accounts.project;

        project.title = title;
        project.creator = creator;

        Ok(())
    }
}

#[account]
pub struct Project {

    pub title: String,
    pub creator: String,
}

#[derive(Accounts)]
pub struct CreateProject<'info> {

    #[account(init, payer = user, space = 300)]
    pub project: Account<'info, Project>,

    #[account(mut)]
    pub user: Signer<'info>,

    pub system_program: Program<'info, System>,
}
