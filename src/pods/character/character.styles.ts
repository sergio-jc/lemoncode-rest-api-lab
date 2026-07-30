import { css } from '@emotion/css';
import { theme } from '#core/theme';

export const root = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const detail = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: ${theme.breakpoints.values.sm}px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const image = css`
  width: 100%;
  max-width: 20rem;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 0.5rem;
  align-self: center;

  @media (min-width: ${theme.breakpoints.values.sm}px) {
    align-self: flex-start;
  }
`;

export const info = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
`;

export const chips = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
