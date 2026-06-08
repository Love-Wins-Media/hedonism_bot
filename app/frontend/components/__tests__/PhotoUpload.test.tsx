import React from 'react';
import {render, screen} from '@testing-library/react';
import {describe, it, expect, vi, beforeAll} from 'vitest';
import '@testing-library/jest-dom/vitest';
import {PhotoUpload} from '../PhotoUpload';

describe('PhotoUpload Component', () => {
    beforeAll(() => {
        // Mock URL.createObjectURL
        global.URL.createObjectURL = vi.fn().mockReturnValue('mocked-url');
    });

    it('renders with props', () => {
        const rawPhoto = new File([''], 'test.jpg', {type: 'image/jpeg'});
        render(
            <PhotoUpload
                title="Test Photo"
                rawPhoto={rawPhoto}
                processedPhotos={[]}
                progress={50}
                onRemove={vi.fn()}
            />
        );
        expect(screen.getByText('Test Photo')).toBeInTheDocument();
        expect(screen.getByRole('img')).toHaveAttribute('src', 'mocked-url');
    });
});
