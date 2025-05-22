import { Box, Typography, Container, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { historicalData } from '../data/historicalData';
import { colors } from '../config/colors';

const MotionPaper = motion(Paper);

const TimelinePage = () => {
  return (
    <Container maxWidth="lg">
      <Typography 
        variant="h1" 
        component="div"
        sx={{ 
          mb: 4, 
          color: colors.primary,
          textAlign: 'center',
          fontSize: { xs: '2rem', md: '2.5rem' }
        }}
      >
        Timeline degli Eventi
      </Typography>

      <Box sx={{ position: 'relative', pb: 4 }}>
        {/* Timeline line */}
        <Box
          sx={{
            position: 'absolute',
            left: { xs: '20px', md: '50%' },
            transform: { xs: 'none', md: 'translateX(-50%)' },
            width: '2px',
            height: '100%',
            backgroundColor: colors.secondary,
          }}
        />

        {historicalData.flatMap(section => 
          section.events.map((event, index) => (
            <Box
              key={event.id}
              sx={{
                display: 'flex',
                justifyContent: { xs: 'flex-start', md: index % 2 === 0 ? 'flex-end' : 'flex-start' },
                mb: 4,
                position: 'relative',
                pl: { xs: 5, md: 0 },
              }}
            >
              {/* Timeline dot */}
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: '16px', md: '50%' },
                  transform: { xs: 'none', md: 'translateX(-50%)' },
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: colors.accent1,
                  border: `2px solid ${colors.background}`,
                  zIndex: 1,
                }}
              />

              <MotionPaper
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                sx={{
                  p: 3,
                  width: { xs: '100%', md: '45%' },
                  backgroundColor: colors.paper,
                  border: `2px solid ${colors.secondary}50`,
                  borderRadius: 3.5,
                  ml: { xs: 0, md: index % 2 === 0 ? 0 : 4 },
                  mr: { xs: 0, md: index % 2 === 0 ? 4 : 0 },
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: `0 6px 20px ${colors.primary}15`,
                    borderColor: `${colors.secondary}40`,
                  },
                }}
              >
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
              </MotionPaper>
            </Box>
          ))
        )}
      </Box>
    </Container>
  );
};

export default TimelinePage;
