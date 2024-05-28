import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { Form, NumberField, TextField } from '@/components/Form';

const mockAction = vi.fn();

describe('<Form />', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    cleanup();
  });

  it('renders correctly', () => {
    render(
      <Form action={mockAction} label="test-form">
        <TextField
          id="test-text-field"
          label="Text field"
          name="test-text-field"
        />
        <NumberField
          id="test-number-field"
          label="Number field"
          name="test-number-field"
        />
      </Form>,
    );

    expect(screen.getByRole('button', { name: 'Clear' })).toBeDefined();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeDefined();
    expect(screen.getByRole('form')).toBeDefined();
  });
});
