import { Box, Typography, Card, CardContent, Container, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { historicalData } from '../data/historicalData';
import { colors } from '../config/colors';

const MotionCard = motion(Card);

const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
      <Typography 
        variant="h1" 
        sx={{ 
          mb: 4, 
          color: colors.primary,
          textAlign: 'center',
          fontSize: { xs: '2rem', md: '2.5rem' }
        }}
      >
        Studio della Storia Romana
      </Typography>

      {historicalData.map((section) => (
        <Box key={section.id} sx={{ mb: 6 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              mb: 3,
              color: colors.primary,
              fontSize: { xs: '1.75rem', md: '2rem' }
            }}
          >
            {section.title} ({section.startYear} - {section.endYear})
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
            {section.events.map((event) => (
              <Box key={event.id}>
                <MotionCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  sx={{
                    height: '100%',
                    backgroundColor: `${colors.background}`,
                    border: `1px solid ${colors.secondary}40`,
                    '&:hover': {
                      boxShadow: `0 4px 20px ${colors.secondary}30`,
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Typography 
                        variant="h3" 
                        sx={{ 
                          color: colors.primary,
                          fontSize: { xs: '1.25rem', md: '1.5rem' }
                        }}
                      >
                        {event.title}
                      </Typography>
                      <Chip 
                        label={event.year}
                        size="small"
                        sx={{ 
                          backgroundColor: colors.accent2,
                          color: 'white',
                          fontWeight: 'bold'
                        }}
                      />
                    </Box>

                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: colors.primary,
                        mb: 2
                      }}
                    >
                      {event.description}
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Chip 
                        label={event.category}
                        size="small"
                        sx={{ 
                          backgroundColor: `${colors.secondary}30`,
                          color: colors.primary
                        }}
                      />
                      <Box sx={{ display: 'flex', gap: 0.5 }}>
                        {[...Array(event.importance)].map((_, i) => (
                          <Box
                            key={i}
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              backgroundColor: colors.accent1,
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  </CardContent>
                </MotionCard>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Container>
  );
};

export default HomePage;
