import Yup from 'yup';
import { getDefaultValues, getOneValidationSchema, getOneField } from './utils';
import { InputField } from '../fields';
import {
  TagsSelectField,
  SelectField,
  CompaniesSelectField,
} from '../fields/SelectField';
import PhoneField from '../fields/PhoneField';
import { MarkDownField } from '../fields/MarkDownField';

const fields = {
  prefix: {
    key: 'Prefix',
    label: 'Prefix',
    domainValues: [{ id: 'Mr', value: 'Mr' }, { id: 'Mrs', value: 'Mrs' }],
    required: true,
    component: SelectField,
    validate: Yup.string(),
  },
  firstName: {
    key: 'FirstName',
    label: 'First Name',
    required: true,
    component: InputField,
    validate: Yup.string(),
  },
  lastName: {
    key: 'LastName',
    label: 'Last Name',
    required: true,
    component: InputField,
    validate: Yup.string(),
  },
  types: {
    key: 'Types',
    label: 'Types',
    domainValues: [
      { id: 'Client', value: 'Client' },
      { id: 'Partner', value: 'Partner' },
      { id: 'Tenant', value: 'Tenant' },
    ],
    required: true,
    component: SelectField,
    validate: Yup.string(),
  },
  email: {
    key: 'Email',
    label: 'Email',
    required: true,
    component: InputField,
    validate: Yup.string(),
  },
  jobType: {
    key: 'JobType',
    label: 'Job Type',
    domainValues: [
      { id: 'Designer', value: 'Designer' },
      { id: 'Developer', value: 'Developer' },
      { id: 'Manager', value: 'Manager' },
      { id: 'Sales', value: 'Sales' },
      { id: 'Business Manager', value: 'Business Manager' },
    ],
    required: true,
    component: SelectField,
    validate: Yup.string(),
  },
  company: {
    key: 'Company',
    label: 'Company',
    required: true,
    component: CompaniesSelectField,
    validate: Yup.string(),
  },
  phones: {
    key: 'Phones',
    label: 'Phones',
    required: true,
    component: PhoneField,
    validate: Yup.number(),
  },
  tags: {
    key: 'Tags',
    label: 'Tags',
    component: TagsSelectField,
  },
  roles: {
    key: 'Roles',
    label: 'Roles',
    component: SelectField,
    domainValues: [
      { id: 'Admin', value: 'Admin' },
      { id: 'Edit', value: 'Edit' },
      { id: 'Access', value: 'Accessr' },
    ],
  },
  notes: {
    key: 'Notes',
    label: 'Notes',
    component: MarkDownField,
  },
};

export const defaultValues = getDefaultValues(fields);
export const getField = getOneField(fields);
export const getValidationSchema = () =>
  Yup.object().shape(getOneValidationSchema(fields));
