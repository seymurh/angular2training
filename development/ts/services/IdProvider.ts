/**
 * Created by seymour.h on 05/12/2016.
 */
import {provide} from '@angular/core';

const IdService=()=>`${Math.random()}`;
const IdDefinition={useFactory:IdService};
export const IdProvider= provide('Id',IdDefinition);