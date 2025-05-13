import { Box, Typography, Container, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { historicalData } from '../data/historicalData';
import { colors } from '../config/colors';

const TimelinePage = () => {
  return (
    <Container maxWidth="lg">
      <Typography 
        variant="h1" 
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
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Box
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
                    backgroundColor: event.importance === 1 ? colors.accent1 : colors.secondary,
                    border: `2px solid ${colors.background}`,
                    zIndex: 1,
                  }}
                />

                <Paper
                  sx={{
                    p: 3,
                    width: { xs: '100%', md: '45%' },
                    backgroundColor: colors.background,
                    border: `1px solid ${colors.secondary}40`,
                    ml: { xs: 0, md: index % 2 === 0 ? 0 : 4 },
                    mr: { xs: 0, md: index % 2 === 0 ? 4 : 0 },
                    '&:hover': {
                      boxShadow: `0 4px 20px ${colors.secondary}30`,
                    },
                  }}
                >
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: colors.primary,
                      mb: 1,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    {event.title}
                    <Typography 
                      component="span"
                      sx={{ 
                        color: colors.accent2,
                        fontWeight: 'bold'
                      }}
                    >
                      {event.year}
                    </Typography>
                  </Typography>
                  
                  <Typography 
                    variant="body1"
                    sx={{
                      color: colors.primary,
                      mb: 1
                    }}
                  >
                    {event.description}
                  </Typography>

                  <Typography 
                    variant="caption"
                    sx={{
                      color: colors.secondary,
                      fontStyle: 'italic'
                    }}
                  >
                    {event.category}
                  </Typography>
                </Paper>
              </Box>
            </motion.div>
          ))
        )}
      </Box>
    </Container>
  );
};

export default TimelinePage;
