import * as React from 'react';
import { FormikProps } from 'formik';
import PipelineResourceSection from '../common/PipelineResourceSection';
import PipelineParameterSection from '../common/PipelineParameterSection';
import TriggerBindingSection from './TriggerBindingSection';
import { AddTriggerFormValues } from './types';

import './AddTriggerForm.scss';

type AddTriggerFormProps = FormikProps<AddTriggerFormValues>;

const AddTriggerForm: React.FC<AddTriggerFormProps> = (props) => {
  const { values } = props;

  return (
    <>
      <TriggerBindingSection />
      <PipelineParameterSection parameters={values.parameters} />
      <PipelineResourceSection />
    </>
  );
};

export default AddTriggerForm;
