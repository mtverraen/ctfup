import yaml from 'yaml';
import fs from 'fs-extra';
import {ResourceConstraints} from './challenge';

interface Config {
    registry: string;
    categories: string[];
    resources?: ResourceConstraints;
}

let config: Config = {
    registry: '',
    categories: [],
};

async function parseConfig(confPath: string) {
    config = yaml.parse(await fs.readFile(confPath, 'utf-8'));
}

function getConfig() {
    return config;
}

export { getConfig, parseConfig };
