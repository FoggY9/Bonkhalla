"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (client, interaction) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (interaction.isChatInputCommand()) {
        const { commandName, options } = interaction;
        const slashcmd = client.slashcmd.get(commandName);
        if (slashcmd) {
            try {
                slashcmd.run(client, interaction, options);
            }
            catch (error) {
                console.error(error);
                interaction.reply({ content: "Error occourred, cant run this command.", ephemeral: true });
            }
        }
    }
    else if (interaction.isButton()) {
        const { customId } = interaction;
        const button = client.buttons.get(customId);
        if (button) {
            try {
                // check if the interactor joined a vc & the joined channel is recorded as a temp vc
                if (interaction.member.voice && client.jointocreatemap.get(`tempvc_${(_a = interaction.member.voice.channel) === null || _a === void 0 ? void 0 : _a.id}`)) {
                    button.run(client, interaction);
                }
                else {
                    return interaction.reply({ content: 'you are not in a temp vc', ephemeral: true });
                }
            }
            catch (error) {
                console.error(error);
                interaction.reply({ content: "Error occourred, cant run this command.", ephemeral: true });
            }
        }
    }
    else if (interaction.isUserSelectMenu()) {
        const { customId } = interaction;
        const menu = client.menus.get(customId);
        const interactorId = interaction.user.id;
        const targetId = interaction.users.entries().next().value[0];
        if (menu) {
            try {
                menu.run(client, interaction, interactorId, targetId);
            }
            catch (error) {
                console.error(error);
                interaction.reply({ content: "Error occourred, cant run this command.", ephemeral: true });
            }
        }
    }
    else {
        console.log("NOT HANDLED INTERACTION :" + interaction);
    }
});
