package com.insidion.axon.openadmin

import org.springframework.stereotype.Component
import java.lang.management.ManagementFactory

@Component
class NodeIdProvider {
    private val nodeId by lazy { ManagementFactory.getRuntimeMXBean().name }
    fun getNodeId() = nodeId
}
