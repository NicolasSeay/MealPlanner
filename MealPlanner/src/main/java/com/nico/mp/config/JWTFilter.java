package com.nico.mp.config;

import com.nico.mp.constants.Constants;
import com.nico.mp.util.JWTUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Slf4j
public class JWTFilter extends OncePerRequestFilter {

    private final JWTUtil jwtUtil;

    public JWTFilter(JWTUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @Override
    public boolean shouldNotFilter(HttpServletRequest request) {
        String path = request.getRequestURI();
        // don't check for JWT on login, since you don't have one yet
        return path.contains("/login");
    }

    @Override
    public void doFilterInternal(HttpServletRequest servletRequest, HttpServletResponse servletResponse, FilterChain filterChain) {
        try {
            jwtUtil.validateToken(servletRequest.getHeader(Constants.AUTHORIZATION_HEADER));
            filterChain.doFilter(servletRequest, servletResponse);
        } catch (Exception e) {
            log.error("Unable to validate JWT", e);
            servletResponse.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        }
    }

}